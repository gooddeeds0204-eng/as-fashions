/**
 * AS FASHIONS — Admin Panel Logic
 *
 * Data sources:
 *  - Products/Categories/Orders: read via the already-public APIs on
 *    window.ASF.products / .categories / .orders.admin — no other files touched.
 *  - Customers: read directly from the 'asf_users' localStorage key (same
 *    key js/auth.js uses) — read-only, auth.js itself is untouched.
 *  - Stock: stored as a 'stock' field on products via the EXISTING product
 *    override mechanism (window.ASF.products.admin.updateProduct), so it
 *    shows up everywhere product data is read, with zero changes elsewhere.
 *  - Coupons / Banners / Blocked customers / Settings / Staff: new,
 *    admin-only localStorage keys (prefixed asf_admin_*). These are fully
 *    editable here, but only *displayed* — actually enforcing them on the
 *    storefront (checkout discount, homepage banner swap, login blocking)
 *    needs a small follow-up edit to checkout.js / offers.js / auth.js,
 *    which this update intentionally does not touch.
 */
(function () {
  'use strict';

  var catApi, prodApi, ordersApi;
  var money = function (n) { return '\u20B9' + Number(n || 0).toLocaleString('en-IN'); };

  /* =========================================================
   * Admin-only localStorage stores
   * ========================================================= */
  function store(key, fallback) {
    return {
      read: function () {
        try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
        catch (e) { return fallback; }
      },
      write: function (val) {
        try { localStorage.setItem(key, JSON.stringify(val)); return true; }
        catch (e) { console.error('Admin store write failed:', key, e); return false; }
      }
    };
  }

  var couponsStore = store('asf_admin_coupons', []);
  var bannersStore = store('asf_admin_banners', []);
  var blockedStore = store('asf_admin_blocked_customers', []);
  var settingsStore = store('asf_admin_settings', { taxRate: 0, shippingFee: 79, freeShipAbove: 999, staff: [] });
  var themeStore = store('asf_admin_theme', 'light');

  function readUsers() {
    try { var raw = localStorage.getItem('asf_users'); return raw ? JSON.parse(raw) : []; }
    catch (e) { return []; }
  }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return 'hsl(' + (Math.abs(hash) % 360) + ', 45%, 55%)';
  }

  /* =========================================================
   * Theme
   * ========================================================= */
  function applyTheme(theme) {
    document.getElementById('adminShell').setAttribute('data-theme', theme);
    document.getElementById('themeToggleBtn').textContent = theme === 'dark' ? '\u2600' : '\u263D';
  }
  function initTheme() {
    applyTheme(themeStore.read());
    document.getElementById('themeToggleBtn').addEventListener('click', function () {
      var next = themeStore.read() === 'dark' ? 'light' : 'dark';
      themeStore.write(next);
      applyTheme(next);
    });
  }

  /* =========================================================
   * Sidebar / routing
   * ========================================================= */
  function switchView(view) {
    document.querySelectorAll('.admin-view').forEach(function (v) {
      v.classList.toggle('active', v.dataset.view === view);
    });
    document.querySelectorAll('.admin-nav a[data-view]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.view === view);
    });
    closeSidebar();
    renderView(view);
  }

  function openSidebar() {
    document.getElementById('adminSidebar').classList.add('open');
    document.getElementById('sidebarScrim').classList.add('open');
  }
  function closeSidebar() {
    document.getElementById('adminSidebar').classList.remove('open');
    document.getElementById('sidebarScrim').classList.remove('open');
  }

  function renderView(view) {
    if (view === 'dashboard') renderDashboard();
    else if (view === 'products') renderProducts();
    else if (view === 'categories') renderCategories();
    else if (view === 'images') renderImagesTable();
    else if (view === 'orders') renderOrders();
    else if (view === 'customers') renderCustomers();
    else if (view === 'discounts') { renderCoupons(); renderBanners(); }
    else if (view === 'analytics') renderAnalytics();
    else if (view === 'settings') renderSettings();
  }

  /* =========================================================
   * Small SVG chart helper (bar or line, no external library)
   * ========================================================= */
  function renderChart(containerId, labels, values, type) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var w = Math.max(480, labels.length * 46);
    var h = 200, padding = { top: 10, right: 10, bottom: 26, left: 10 };
    var max = Math.max.apply(null, values.concat([1]));
    var innerW = w - padding.left - padding.right;
    var innerH = h - padding.top - padding.bottom;
    var stepX = innerW / labels.length;

    var svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">';

    if (type === 'line') {
      var points = values.map(function (v, i) {
        var x = padding.left + stepX * i + stepX / 2;
        var y = padding.top + innerH - (v / max) * innerH;
        return x + ',' + y;
      });
      svg += '<polyline class="chart-line" points="' + points.join(' ') + '"></polyline>';
      values.forEach(function (v, i) {
        var x = padding.left + stepX * i + stepX / 2;
        var y = padding.top + innerH - (v / max) * innerH;
        svg += '<circle class="chart-dot" cx="' + x + '" cy="' + y + '" r="3"></circle>';
      });
    } else {
      var barW = Math.min(28, stepX * 0.55);
      values.forEach(function (v, i) {
        var x = padding.left + stepX * i + (stepX - barW) / 2;
        var barH = max > 0 ? (v / max) * innerH : 0;
        var y = padding.top + innerH - barH;
        svg += '<rect class="chart-bar" x="' + x + '" y="' + y + '" width="' + barW + '" height="' + barH + '" rx="3"></rect>';
      });
    }

    labels.forEach(function (l, i) {
      var x = padding.left + stepX * i + stepX / 2;
      svg += '<text class="chart-axis-label" x="' + x + '" y="' + (h - 8) + '" text-anchor="middle">' + l + '</text>';
    });

    svg += '</svg>';
    el.innerHTML = svg;
  }

  /* =========================================================
   * Dashboard
   * ========================================================= */
  function renderDashboard() {
    var orders = ordersApi.admin.getAllOrders();
    var products = prodApi.getAllProducts();

    var now = new Date();
    var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    var revenueToday = 0, revenueMonth = 0, pending = 0;
    orders.forEach(function (o) {
      var placed = new Date(o.placedAt);
      if (o.status !== 'Cancelled') {
        if (placed >= todayStart) revenueToday += o.total;
        if (placed >= monthStart) revenueMonth += o.total;
      }
      if (['Placed', 'Packed', 'Shipped', 'Out for Delivery'].indexOf(o.status) !== -1) pending++;
    });

    document.getElementById('statRevenueToday').textContent = money(revenueToday);
    document.getElementById('statRevenueMonth').textContent = money(revenueMonth);
    document.getElementById('statTotalOrders').textContent = orders.length;
    document.getElementById('statPendingOrders').textContent = pending;

    // Sales — last 14 days
    var days = [], dayRevenue = [];
    for (var i = 13; i >= 0; i--) {
      var d = new Date(now); d.setDate(now.getDate() - i); d.setHours(0, 0, 0, 0);
      var dEnd = new Date(d); dEnd.setDate(d.getDate() + 1);
      var total = orders.filter(function (o) {
        var p = new Date(o.placedAt);
        return p >= d && p < dEnd && o.status !== 'Cancelled';
      }).reduce(function (sum, o) { return sum + o.total; }, 0);
      days.push((d.getMonth() + 1) + '/' + d.getDate());
      dayRevenue.push(total);
    }
    renderChart('salesChart', days, dayRevenue, 'line');

    // Low stock (uses the `stock` field set via product overrides; defaults to 20 if never set)
    var lowStock = products.filter(function (p) { return (typeof p.stock === 'number' ? p.stock : 20) <= 5; });
    var lowStockEl = document.getElementById('lowStockList');
    lowStockEl.innerHTML = lowStock.length
      ? lowStock.slice(0, 8).map(function (p) {
          var s = typeof p.stock === 'number' ? p.stock : 20;
          return '<div class="low-stock-row"><span>' + p.brand + ' ' + p.name + '</span><span class="low-stock-pill">' + (s === 0 ? 'Out of stock' : s + ' left') + '</span></div>';
        }).join('')
      : '<p style="font-size:13px; color:var(--adm-text-soft);">All products are well stocked.</p>';

    // Recent orders
    var recentBody = document.getElementById('recentOrdersBody');
    var recent = orders.slice(0, 6);
    recentBody.innerHTML = recent.length
      ? recent.map(orderRowHtml).join('')
      : '<tr class="empty-row"><td colspan="6">No orders yet.</td></tr>';
  }

  function orderRowHtml(o) {
    var customerLabel = o.address ? o.address.name : (o.userId === 'guest' ? 'Guest' : o.userId);
    var itemCount = (o.items || []).reduce(function (s, l) { return s + (l.qty || 1); }, 0);
    var statusClass = 'status-' + o.status.replace(/\s+/g, '-');
    return '<tr><td><code>' + o.id + '</code></td><td>' + customerLabel + '</td><td>' + itemCount + ' item(s)</td><td>' + money(o.total) + '</td>' +
      '<td><span class="status-pill ' + statusClass + '">' + o.status + '</span></td><td>' + new Date(o.placedAt).toLocaleDateString() + '</td></tr>';
  }

  /* =========================================================
   * Products (CRUD + stock)
   * ========================================================= */
  var pendingImageDataUrl = null;

  function populateCategoryDropdown() {
    var select = document.getElementById('pf-categoryId');
    select.innerHTML = catApi.getAllLeafIds().map(function (id) {
      var label = catApi.getCategoryPath(id).replace(/^\//, '').replace(/\//g, ' \u203a ');
      return '<option value="' + id + '">' + label + '</option>';
    }).join('');
  }

  function resizeImageToDataUrl(file, maxDim, quality) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      var reader = new FileReader();
      reader.onload = function (e) {
        img.onload = function () {
          var w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = Math.round(h * (maxDim / w)); w = maxDim; }
          else if (h > maxDim) { w = Math.round(w * (maxDim / h)); h = maxDim; }
          var canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality || 0.72));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function resetProductForm() {
    document.getElementById('productForm').reset();
    document.getElementById('pf-id').value = '';
    document.getElementById('pf-imgPreview').style.backgroundImage = '';
    document.getElementById('pf-rating').value = '4.3';
    document.getElementById('pf-ratingCount').value = '0';
    document.getElementById('pf-stock').value = '20';
    pendingImageDataUrl = null;
  }

  function openProductModal(productId) {
    resetProductForm();
    populateCategoryDropdown();
    var modal = document.getElementById('productModal');
    var title = document.getElementById('modalTitle');
    if (productId) {
      var p = prodApi.getProductById(productId);
      if (!p) return;
      title.textContent = 'Edit Product';
      document.getElementById('pf-id').value = p.id;
      document.getElementById('pf-name').value = p.name;
      document.getElementById('pf-brand').value = p.brand;
      document.getElementById('pf-categoryId').value = p.categoryId;
      document.getElementById('pf-gender').value = p.gender || 'unisex';
      document.getElementById('pf-stock').value = typeof p.stock === 'number' ? p.stock : 20;
      document.getElementById('pf-mrp').value = p.mrp;
      document.getElementById('pf-price').value = p.price;
      document.getElementById('pf-colors').value = (p.colors || []).join(', ');
      document.getElementById('pf-sizes').value = (p.sizes || []).join(', ');
      document.getElementById('pf-rating').value = p.rating;
      document.getElementById('pf-ratingCount').value = p.ratingCount;
      document.getElementById('pf-isNew').checked = Boolean(p.isNew);
      document.getElementById('pf-isBestseller').checked = Boolean(p.isBestseller);
      if (p.image) document.getElementById('pf-imgPreview').style.backgroundImage = 'url(' + p.image + ')';
    } else {
      title.textContent = 'Add Product';
    }
    modal.classList.add('open');
  }
  function closeProductModal() { document.getElementById('productModal').classList.remove('open'); }

  function handleProductFormSubmit(e) {
    e.preventDefault();
    var id = document.getElementById('pf-id').value;
    var mrp = Number(document.getElementById('pf-mrp').value) || 0;
    var price = Number(document.getElementById('pf-price').value) || 0;
    var discountPct = mrp > price && mrp > 0 ? Math.round((1 - price / mrp) * 100) : 0;
    var colors = document.getElementById('pf-colors').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var sizes = document.getElementById('pf-sizes').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);

    var patch = {
      name: document.getElementById('pf-name').value.trim(),
      brand: document.getElementById('pf-brand').value.trim(),
      categoryId: document.getElementById('pf-categoryId').value,
      gender: document.getElementById('pf-gender').value,
      stock: Number(document.getElementById('pf-stock').value) || 0,
      mrp: mrp,
      price: price,
      discountPct: discountPct,
      colors: colors.length ? colors : ['Black'],
      sizes: sizes.length ? sizes : ['S', 'M', 'L'],
      rating: Number(document.getElementById('pf-rating').value) || 4.0,
      ratingCount: Number(document.getElementById('pf-ratingCount').value) || 0,
      isNew: document.getElementById('pf-isNew').checked,
      isBestseller: document.getElementById('pf-isBestseller').checked,
      tags: discountPct >= 30 ? ['sale'] : []
    };
    if (pendingImageDataUrl) { patch.image = pendingImageDataUrl; patch.images = [pendingImageDataUrl]; }

    var result;
    if (id) {
      result = prodApi.admin.updateProduct(id, patch);
    } else {
      var newId = prodApi.admin.getNextProductId();
      var full = Object.assign({ id: newId, image: pendingImageDataUrl || '', images: pendingImageDataUrl ? [pendingImageDataUrl] : [] }, patch);
      result = prodApi.admin.addProduct(full);
    }
    if (!result.saved) { alert('\u26A0 Save failed: ' + result.error); return; }
    closeProductModal();
    renderProducts();
  }

  function renderProducts() {
    var query = (document.getElementById('productSearch').value || '').toLowerCase();
    var gender = document.getElementById('productGenderFilter').value;
    var stockFilter = document.getElementById('productStockFilter').value;

    var all = prodApi.getAllProducts().filter(function (p) {
      var matchQuery = !query || p.name.toLowerCase().indexOf(query) !== -1 || p.brand.toLowerCase().indexOf(query) !== -1 || p.id.indexOf(query) !== -1;
      var matchGender = !gender || p.gender === gender;
      var stock = typeof p.stock === 'number' ? p.stock : 20;
      var matchStock = !stockFilter || (stockFilter === 'low' ? stock <= 5 && stock > 0 : stock === 0);
      return matchQuery && matchGender && matchStock;
    });

    var body = document.getElementById('productsTableBody');
    body.innerHTML = all.map(function (p) {
      var catEntry = catApi.getCategoryById(p.categoryId);
      var path = catEntry ? catApi.getCategoryPath(p.categoryId) : p.categoryId;
      var stock = typeof p.stock === 'number' ? p.stock : 20;
      var tags = [];
      if (p.discountPct >= 30) tags.push('<span class="status-pill status-Cancelled">SALE</span>');
      if (p.isNew) tags.push('<span class="status-pill status-Shipped">NEW</span>');
      return '<tr>' +
        '<td><span class="swatch-dot" style="background:' + colorFromString(p.id) + '"></span></td>' +
        '<td><code style="font-size:11px;">' + p.id + '</code></td>' +
        '<td>' + p.name + '</td><td>' + p.brand + '</td><td>' + path + '</td>' +
        '<td>' + money(p.price) + '</td>' +
        '<td>' + (stock === 0 ? '<span class="status-pill status-Cancelled">Out</span>' : stock <= 5 ? '<span class="status-pill status-Placed">' + stock + '</span>' : stock) + '</td>' +
        '<td>\u2605 ' + p.rating + '</td><td>' + tags.join(' ') + '</td>' +
        '<td class="action-cell"><button class="adm-btn adm-btn-sm edit-product-btn" data-id="' + p.id + '">Edit</button>' +
        '<button class="adm-btn adm-btn-sm adm-btn-danger delete-product-btn" data-id="' + p.id + '">Delete</button></td></tr>';
    }).join('') || '<tr class="empty-row"><td colspan="10">No products found.</td></tr>';

    body.querySelectorAll('.edit-product-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { openProductModal(btn.dataset.id); });
    });
    body.querySelectorAll('.delete-product-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (confirm('Delete this product?')) {
          var result = prodApi.admin.deleteProduct(btn.dataset.id);
          if (result && !result.saved) alert('\u26A0 Delete failed: ' + result.error);
          renderProducts();
        }
      });
    });
  }

  /* =========================================================
   * Categories (read-only)
   * ========================================================= */
  function renderCategories() {
    var query = (document.getElementById('categorySearch').value || '').toLowerCase();
    var body = document.getElementById('categoriesTableBody');
    var rows = [];
    Object.keys(catApi.CATEGORY_INDEX).forEach(function (id) {
      var entry = catApi.CATEGORY_INDEX[id];
      if (query && entry.name.toLowerCase().indexOf(query) === -1 && entry.id.indexOf(query) === -1) return;
      rows.push('<tr><td><code style="font-size:11px;">' + entry.id + '</code></td><td>' + entry.name + '</td><td>' + catApi.getCategoryPath(entry.id) + '</td><td>' + (entry.hasChildren ? 'Group' : 'Leaf') + '</td></tr>');
    });
    body.innerHTML = rows.join('') || '<tr class="empty-row"><td colspan="4">No matches.</td></tr>';
  }

  /* =========================================================
   * Image Manager (bulk rename + ZIP)
   * ========================================================= */
  var pickedFiles = {};

  function renderImagesTable() {
    var query = (document.getElementById('imgSearch').value || '').toLowerCase();
    var all = prodApi.getAllProducts().filter(function (p) {
      return !query || p.name.toLowerCase().indexOf(query) !== -1 || p.brand.toLowerCase().indexOf(query) !== -1 || p.id.indexOf(query) !== -1;
    });
    var body = document.getElementById('imagesTableBody');
    body.innerHTML = all.map(function (p) {
      var filename = p.id + '.jpg';
      var hasFile = Boolean(pickedFiles[p.id]);
      return '<tr data-pid="' + p.id + '">' +
        '<td><div class="img-upload-preview" id="preview-' + p.id + '" style="width:44px;height:56px;margin:0;background:' + colorFromString(p.id) + (hasFile ? ';background-image:url(' + URL.createObjectURL(pickedFiles[p.id]) + ')' : '') + '"></div></td>' +
        '<td><code style="font-size:11px;">' + p.id + '</code></td>' +
        '<td>' + p.brand + ' ' + p.name + '</td>' +
        '<td><code style="font-size:11px;">assets/products/' + filename + '</code></td>' +
        '<td><input type="file" accept="image/*" class="img-pick-input" data-pid="' + p.id + '"></td></tr>';
    }).join('') || '<tr class="empty-row"><td colspan="5">No products found.</td></tr>';

    body.querySelectorAll('.img-pick-input').forEach(function (input) {
      input.addEventListener('change', function (e) {
        var pid = e.target.dataset.pid, file = e.target.files[0];
        if (file) {
          pickedFiles[pid] = file;
          var preview = document.getElementById('preview-' + pid);
          if (preview) preview.style.backgroundImage = 'url(' + URL.createObjectURL(file) + ')';
          updateZipStatus();
        }
      });
    });
  }
  function updateZipStatus() {
    var count = Object.keys(pickedFiles).length;
    document.getElementById('zipStatus').textContent = count ? count + ' photo(s) selected' : '';
  }
  function extFromName(name) { var m = /\.[a-zA-Z0-9]+$/.exec(name || ''); return m ? m[0] : '.jpg'; }
  function downloadZip() {
    var ids = Object.keys(pickedFiles);
    if (!ids.length) { alert('Pick at least one photo first.'); return; }
    if (typeof JSZip === 'undefined') { alert('ZIP library failed to load — check your connection and try again.'); return; }
    var zip = new JSZip(), folder = zip.folder('assets-products');
    Promise.all(ids.map(function (pid) {
      var file = pickedFiles[pid], ext = extFromName(file.name);
      return file.arrayBuffer().then(function (buf) { folder.file(pid + ext, buf); });
    })).then(function () { return zip.generateAsync({ type: 'blob' }); })
      .then(function (blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = 'as-fashions-product-images.zip';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      });
  }

  /* =========================================================
   * Orders
   * ========================================================= */
  function renderOrders() {
    var query = (document.getElementById('orderSearch').value || '').toLowerCase();
    var statusFilter = document.getElementById('orderStatusFilter').value;
    var orders = ordersApi.admin.getAllOrders().filter(function (o) {
      var customerLabel = (o.address ? o.address.name : o.userId || '').toLowerCase();
      var matchQuery = !query || o.id.toLowerCase().indexOf(query) !== -1 || customerLabel.indexOf(query) !== -1;
      var matchStatus = !statusFilter || o.status === statusFilter;
      return matchQuery && matchStatus;
    });

    var body = document.getElementById('ordersTableBody');
    body.innerHTML = orders.map(function (o) {
      var customerLabel = o.address ? o.address.name : (o.userId === 'guest' ? 'Guest' : o.userId);
      var itemCount = (o.items || []).reduce(function (s, l) { return s + (l.qty || 1); }, 0);
      var statusClass = 'status-' + o.status.replace(/\s+/g, '-');
      var statusOptions = ordersApi.STATUS_STEPS.concat(['Cancelled']).map(function (s) {
        return '<option' + (s === o.status ? ' selected' : '') + '>' + s + '</option>';
      }).join('');
      return '<tr><td><code>' + o.id + '</code></td><td>' + customerLabel + '</td><td>' + itemCount + ' item(s)</td><td>' + money(o.total) + '</td>' +
        '<td>' + (o.paymentMethod || '\u2014') + '</td>' +
        '<td><select class="order-status-select" data-id="' + o.id + '" style="padding:4px 6px; border-radius:6px; border:1px solid var(--adm-border); background:var(--adm-surface-2); color:var(--adm-text); font-size:12px;">' + statusOptions + '</select></td>' +
        '<td>' + new Date(o.placedAt).toLocaleDateString() + '</td>' +
        '<td class="action-cell"><button class="adm-btn adm-btn-sm print-invoice-btn" data-id="' + o.id + '">Invoice</button></td></tr>';
    }).join('') || '<tr class="empty-row"><td colspan="8">No orders found.</td></tr>';

    body.querySelectorAll('.order-status-select').forEach(function (sel) {
      sel.addEventListener('change', function () {
        var result = ordersApi.admin.updateOrderStatus(sel.dataset.id, sel.value);
        if (!result.success) alert('\u26A0 ' + result.message);
        renderOrders();
      });
    });
    body.querySelectorAll('.print-invoice-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { printInvoice(btn.dataset.id); });
    });
  }

  function printInvoice(orderId) {
    var o = ordersApi.getOrderById(orderId);
    if (!o) return;
    var win = window.open('', '_blank');
    var rows = (o.items || []).map(function (l) {
      var name = l.product ? l.product.name : (l.productId || 'Item');
      var price = l.product ? l.product.price : 0;
      return '<tr><td>' + name + '</td><td>' + (l.size || '-') + '</td><td>' + (l.qty || 1) + '</td><td>' + money(price) + '</td></tr>';
    }).join('');
    win.document.write(
      '<html><head><title>Invoice ' + o.id + '</title><style>' +
      'body{font-family:Arial,sans-serif;padding:32px;color:#16181d;} h1{font-size:20px;} table{width:100%;border-collapse:collapse;margin-top:16px;} ' +
      'th,td{border-bottom:1px solid #ddd;padding:8px;text-align:left;font-size:13px;} .total-row{font-weight:700;}' +
      '</style></head><body>' +
      '<h1>AS FASHIONS — Invoice</h1>' +
      '<p><strong>Order:</strong> ' + o.id + ' &nbsp; <strong>Date:</strong> ' + new Date(o.placedAt).toLocaleDateString() + '</p>' +
      '<p><strong>Ship to:</strong> ' + (o.address ? o.address.name + ', ' + o.address.line1 + ', ' + o.address.city + ' - ' + o.address.pincode : '\u2014') + '</p>' +
      '<table><thead><tr><th>Item</th><th>Size</th><th>Qty</th><th>Price</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p style="margin-top:16px;">Subtotal: ' + money(o.subtotal) + '<br>Shipping: ' + money(o.shipping) + '<br>' +
      '<span class="total-row">Total: ' + money(o.total) + '</span></p>' +
      '<script>window.print();<\/script></body></html>'
    );
    win.document.close();
  }

  /* =========================================================
   * Customers (CRM)
   * ========================================================= */
  function renderCustomers() {
    var query = (document.getElementById('customerSearch').value || '').toLowerCase();
    var users = readUsers().filter(function (u) {
      return !query || (u.name || '').toLowerCase().indexOf(query) !== -1 || (u.email || '').toLowerCase().indexOf(query) !== -1;
    });
    var orders = ordersApi.admin.getAllOrders();
    var blocked = blockedStore.read();

    var body = document.getElementById('customersTableBody');
    body.innerHTML = users.map(function (u) {
      var userOrders = orders.filter(function (o) { return o.userId === u.id; });
      var spent = userOrders.filter(function (o) { return o.status !== 'Cancelled'; }).reduce(function (s, o) { return s + o.total; }, 0);
      var isBlocked = blocked.indexOf(u.id) !== -1;
      return '<tr><td>' + u.name + '</td><td>' + u.email + '</td><td>' + u.phone + '</td><td>' + userOrders.length + '</td><td>' + money(spent) + '</td>' +
        '<td>' + new Date(u.createdAt).toLocaleDateString() + '</td>' +
        '<td><span class="status-pill ' + (isBlocked ? 'status-Cancelled' : 'status-Delivered') + '">' + (isBlocked ? 'Blocked' : 'Active') + '</span></td>' +
        '<td><button class="adm-btn adm-btn-sm toggle-block-btn" data-id="' + u.id + '">' + (isBlocked ? 'Unblock' : 'Block') + '</button></td></tr>';
    }).join('') || '<tr class="empty-row"><td colspan="8">No customers registered yet.</td></tr>';

    body.querySelectorAll('.toggle-block-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.dataset.id;
        var list = blockedStore.read();
        var idx = list.indexOf(id);
        if (idx === -1) list.push(id); else list.splice(idx, 1);
        blockedStore.write(list);
        renderCustomers();
      });
    });
  }

  /* =========================================================
   * Discounts — Coupons
   * ========================================================= */
  function openCouponModal(couponId) {
    document.getElementById('couponForm').reset();
    document.getElementById('cf-id').value = '';
    document.getElementById('cf-active').checked = true;
    document.getElementById('couponModalTitle').textContent = 'Add Coupon';
    if (couponId) {
      var c = couponsStore.read().find(function (x) { return x.id === couponId; });
      if (c) {
        document.getElementById('couponModalTitle').textContent = 'Edit Coupon';
        document.getElementById('cf-id').value = c.id;
        document.getElementById('cf-code').value = c.code;
        document.getElementById('cf-type').value = c.type;
        document.getElementById('cf-value').value = c.value;
        document.getElementById('cf-minOrder').value = c.minOrder;
        document.getElementById('cf-active').checked = c.active;
      }
    }
    document.getElementById('couponModal').classList.add('open');
  }
  function closeCouponModal() { document.getElementById('couponModal').classList.remove('open'); }

  function handleCouponSubmit(e) {
    e.preventDefault();
    var id = document.getElementById('cf-id').value;
    var coupon = {
      id: id || 'coupon-' + Date.now(),
      code: document.getElementById('cf-code').value.trim().toUpperCase(),
      type: document.getElementById('cf-type').value,
      value: Number(document.getElementById('cf-value').value) || 0,
      minOrder: Number(document.getElementById('cf-minOrder').value) || 0,
      active: document.getElementById('cf-active').checked
    };
    var list = couponsStore.read();
    var idx = list.findIndex(function (c) { return c.id === coupon.id; });
    if (idx === -1) list.push(coupon); else list[idx] = coupon;
    couponsStore.write(list);
    closeCouponModal();
    renderCoupons();
  }

  function renderCoupons() {
    var list = couponsStore.read();
    var body = document.getElementById('couponsTableBody');
    body.innerHTML = list.map(function (c) {
      return '<tr><td><code>' + c.code + '</code></td><td>' + (c.type === 'percent' ? 'Percentage' : 'Flat') + '</td>' +
        '<td>' + (c.type === 'percent' ? c.value + '%' : money(c.value)) + '</td><td>' + money(c.minOrder) + '</td>' +
        '<td><span class="status-pill ' + (c.active ? 'status-Delivered' : 'status-Cancelled') + '">' + (c.active ? 'Active' : 'Inactive') + '</span></td>' +
        '<td class="action-cell"><button class="adm-btn adm-btn-sm edit-coupon-btn" data-id="' + c.id + '">Edit</button>' +
        '<button class="adm-btn adm-btn-sm adm-btn-danger delete-coupon-btn" data-id="' + c.id + '">Delete</button></td></tr>';
    }).join('') || '<tr class="empty-row"><td colspan="6">No coupons yet.</td></tr>';

    body.querySelectorAll('.edit-coupon-btn').forEach(function (b) { b.addEventListener('click', function () { openCouponModal(b.dataset.id); }); });
    body.querySelectorAll('.delete-coupon-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        if (confirm('Delete this coupon?')) {
          couponsStore.write(couponsStore.read().filter(function (c) { return c.id !== b.dataset.id; }));
          renderCoupons();
        }
      });
    });
  }

  /* =========================================================
   * Discounts — Homepage banners
   * ========================================================= */
  function openBannerModal(bannerId) {
    document.getElementById('bannerForm').reset();
    document.getElementById('bf-id').value = '';
    document.getElementById('bf-active').checked = true;
    document.getElementById('bannerModalTitle').textContent = 'Add Banner';
    if (bannerId) {
      var b = bannersStore.read().find(function (x) { return x.id === bannerId; });
      if (b) {
        document.getElementById('bannerModalTitle').textContent = 'Edit Banner';
        document.getElementById('bf-id').value = b.id;
        document.getElementById('bf-title').value = b.title;
        document.getElementById('bf-subtitle').value = b.subtitle || '';
        document.getElementById('bf-cta').value = b.cta || 'Shop Now';
        document.getElementById('bf-link').value = b.link || '';
        document.getElementById('bf-active').checked = b.active;
      }
    }
    document.getElementById('bannerModal').classList.add('open');
  }
  function closeBannerModal() { document.getElementById('bannerModal').classList.remove('open'); }

  function handleBannerSubmit(e) {
    e.preventDefault();
    var id = document.getElementById('bf-id').value;
    var banner = {
      id: id || 'banner-' + Date.now(),
      title: document.getElementById('bf-title').value.trim(),
      subtitle: document.getElementById('bf-subtitle').value.trim(),
      cta: document.getElementById('bf-cta').value.trim() || 'Shop Now',
      link: document.getElementById('bf-link').value.trim() || '#',
      active: document.getElementById('bf-active').checked
    };
    var list = bannersStore.read();
    var idx = list.findIndex(function (b) { return b.id === banner.id; });
    if (idx === -1) list.push(banner); else list[idx] = banner;
    bannersStore.write(list);
    closeBannerModal();
    renderBanners();
  }

  function renderBanners() {
    var list = bannersStore.read();
    var el = document.getElementById('bannersList');
    el.innerHTML = list.map(function (b) {
      return '<div class="banner-card"><div class="banner-swatch"></div><div class="banner-info">' +
        '<p class="b-title">' + b.title + (b.active ? '' : ' <span style="color:var(--adm-text-soft);font-weight:400;">(inactive)</span>') + '</p>' +
        '<p class="b-sub">' + (b.subtitle || '') + ' \u2014 ' + b.cta + ' \u2192 ' + b.link + '</p></div>' +
        '<button class="adm-btn adm-btn-sm edit-banner-btn" data-id="' + b.id + '">Edit</button>' +
        '<button class="adm-btn adm-btn-sm adm-btn-danger delete-banner-btn" data-id="' + b.id + '">Delete</button></div>';
    }).join('') || '<p style="font-size:13px; color:var(--adm-text-soft);">No banners yet — add one above.</p>';

    el.querySelectorAll('.edit-banner-btn').forEach(function (b) { b.addEventListener('click', function () { openBannerModal(b.dataset.id); }); });
    el.querySelectorAll('.delete-banner-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        if (confirm('Delete this banner?')) {
          bannersStore.write(bannersStore.read().filter(function (x) { return x.id !== b.dataset.id; }));
          renderBanners();
        }
      });
    });
  }

  /* =========================================================
   * Analytics
   * ========================================================= */
  function renderAnalytics() {
    var orders = ordersApi.admin.getAllOrders().filter(function (o) { return o.status !== 'Cancelled'; });

    // Revenue trend — last 8 weeks
    var weekLabels = [], weekRevenue = [];
    var now = new Date();
    for (var i = 7; i >= 0; i--) {
      var start = new Date(now); start.setDate(now.getDate() - i * 7 - 6);
      var end = new Date(now); end.setDate(now.getDate() - i * 7 + 1);
      var total = orders.filter(function (o) {
        var p = new Date(o.placedAt);
        return p >= start && p < end;
      }).reduce(function (s, o) { return s + o.total; }, 0);
      weekLabels.push('W' + (8 - i));
      weekRevenue.push(total);
    }
    renderChart('analyticsChart', weekLabels, weekRevenue, 'bar');

    // Best-selling products
    var productCount = {};
    orders.forEach(function (o) {
      (o.items || []).forEach(function (line) {
        var pid = line.product ? line.product.id : line.productId;
        if (!pid) return;
        productCount[pid] = (productCount[pid] || 0) + (line.qty || 1);
      });
    });
    var ranked = Object.keys(productCount).map(function (pid) {
      var p = prodApi.getProductById(pid);
      return { id: pid, name: p ? p.brand + ' ' + p.name : pid, qty: productCount[pid] };
    }).sort(function (a, b) { return b.qty - a.qty; }).slice(0, 8);

    document.getElementById('bestSellingList').innerHTML = ranked.length
      ? ranked.map(function (r, i) {
          return '<div class="low-stock-row"><span>' + (i + 1) + '. ' + r.name + '</span><span class="low-stock-pill" style="background:rgba(47,125,91,0.14); color:var(--adm-success);">' + r.qty + ' sold</span></div>';
        }).join('')
      : '<p style="font-size:13px; color:var(--adm-text-soft);">No sales yet.</p>';

    // Sales by top-level category
    var catTotals = {};
    orders.forEach(function (o) {
      (o.items || []).forEach(function (line) {
        var p = line.product || (line.productId ? prodApi.getProductById(line.productId) : null);
        if (!p) return;
        var entry = catApi.CATEGORY_INDEX[p.categoryId];
        var topId = entry && entry.ancestors && entry.ancestors.length ? entry.ancestors[0] : p.categoryId;
        var topEntry = catApi.getCategoryById(topId);
        var label = topEntry ? topEntry.name : topId;
        catTotals[label] = (catTotals[label] || 0) + (p.price * (line.qty || 1));
      });
    });
    var catLabels = Object.keys(catTotals);
    renderChart('categoryChart', catLabels, catLabels.map(function (l) { return catTotals[l]; }), 'bar');
  }

  function exportCsv() {
    var orders = ordersApi.admin.getAllOrders();
    var rows = [['Order ID', 'Customer', 'Items', 'Subtotal', 'Shipping', 'Total', 'Status', 'Payment', 'Date']];
    orders.forEach(function (o) {
      rows.push([
        o.id,
        o.address ? o.address.name : o.userId,
        (o.items || []).reduce(function (s, l) { return s + (l.qty || 1); }, 0),
        o.subtotal, o.shipping, o.total, o.status, o.paymentMethod || '', new Date(o.placedAt).toISOString()
      ]);
    });
    var csv = rows.map(function (r) { return r.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'as-fashions-orders-report.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  /* =========================================================
   * Settings — Tax/Shipping + Staff
   * ========================================================= */
  function renderSettings() {
    var s = settingsStore.read();
    document.getElementById('setTaxRate').value = s.taxRate;
    document.getElementById('setShippingFee').value = s.shippingFee;
    document.getElementById('setFreeShipAbove').value = s.freeShipAbove;
    renderStaffList();
  }

  function renderStaffList() {
    var s = settingsStore.read();
    var el = document.getElementById('staffList');
    el.innerHTML = (s.staff || []).map(function (member, i) {
      return '<div class="role-row"><span>' + member.name + '</span><span>' + member.email + '</span><span>' + member.role + '</span>' +
        '<button class="adm-btn adm-btn-sm adm-btn-danger remove-staff-btn" data-idx="' + i + '">Remove</button></div>';
    }).join('') || '<p style="font-size:13px; color:var(--adm-text-soft);">No staff members added yet.</p>';

    el.querySelectorAll('.remove-staff-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var s2 = settingsStore.read();
        s2.staff.splice(Number(btn.dataset.idx), 1);
        settingsStore.write(s2);
        renderStaffList();
      });
    });
  }

  function handleSaveSettings() {
    var s = settingsStore.read();
    s.taxRate = Number(document.getElementById('setTaxRate').value) || 0;
    s.shippingFee = Number(document.getElementById('setShippingFee').value) || 0;
    s.freeShipAbove = Number(document.getElementById('setFreeShipAbove').value) || 0;
    settingsStore.write(s);
    alert('Settings saved (reference only in this demo — wire into js/checkout.js to apply at checkout).');
  }

  function handleStaffSubmit(e) {
    e.preventDefault();
    var s = settingsStore.read();
    s.staff = s.staff || [];
    s.staff.push({
      name: document.getElementById('sf-name').value.trim(),
      email: document.getElementById('sf-email').value.trim(),
      role: document.getElementById('sf-role').value
    });
    settingsStore.write(s);
    document.getElementById('staffForm').reset();
    document.getElementById('staffModal').classList.remove('open');
    renderStaffList();
  }

  /* =========================================================
   * Global search
   * ========================================================= */
  function runGlobalSearch(query) {
    var box = document.getElementById('globalSearchResults');
    var q = (query || '').trim().toLowerCase();
    if (!q) { box.classList.remove('open'); box.innerHTML = ''; return; }

    var products = prodApi.searchProducts(q).slice(0, 5);
    var orders = ordersApi.admin.getAllOrders().filter(function (o) { return o.id.toLowerCase().indexOf(q) !== -1; }).slice(0, 5);
    var customers = readUsers().filter(function (u) {
      return (u.name || '').toLowerCase().indexOf(q) !== -1 || (u.email || '').toLowerCase().indexOf(q) !== -1;
    }).slice(0, 5);

    var html = '';
    if (products.length) {
      html += '<p class="admin-search-group-label">Products</p>';
      products.forEach(function (p) {
        html += '<div class="admin-search-row" data-goto="products" data-q="' + p.name.replace(/"/g, '') + '"><span>' + p.brand + ' ' + p.name + '</span><span class="meta">' + money(p.price) + '</span></div>';
      });
    }
    if (orders.length) {
      html += '<p class="admin-search-group-label">Orders</p>';
      orders.forEach(function (o) {
        html += '<div class="admin-search-row" data-goto="orders" data-q="' + o.id + '"><span>' + o.id + '</span><span class="meta">' + o.status + '</span></div>';
      });
    }
    if (customers.length) {
      html += '<p class="admin-search-group-label">Customers</p>';
      customers.forEach(function (u) {
        html += '<div class="admin-search-row" data-goto="customers" data-q="' + u.name.replace(/"/g, '') + '"><span>' + u.name + '</span><span class="meta">' + u.email + '</span></div>';
      });
    }
    if (!html) html = '<p style="padding:14px; font-size:13px; color:var(--adm-text-soft);">No results found.</p>';
    box.innerHTML = html;
    box.classList.add('open');

    box.querySelectorAll('.admin-search-row').forEach(function (row) {
      row.addEventListener('click', function () {
        var view = row.dataset.goto;
        switchView(view);
        box.classList.remove('open');
        document.getElementById('globalSearchInput').value = '';
        setTimeout(function () {
          var filterInputId = view === 'products' ? 'productSearch' : view === 'orders' ? 'orderSearch' : 'customerSearch';
          var input = document.getElementById(filterInputId);
          if (input) { input.value = row.dataset.q; input.dispatchEvent(new Event('input')); }
        }, 30);
      });
    });
  }

  /* =========================================================
   * Boot
   * ========================================================= */
  function bindEvents() {
    document.querySelectorAll('.admin-nav a[data-view]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); switchView(a.dataset.view); });
    });
    document.getElementById('sidebarToggleBtn').addEventListener('click', openSidebar);
    document.getElementById('sidebarCloseBtn').addEventListener('click', closeSidebar);
    document.getElementById('sidebarScrim').addEventListener('click', closeSidebar);

    document.getElementById('globalSearchInput').addEventListener('input', function (e) { runGlobalSearch(e.target.value); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.admin-search-wrap')) document.getElementById('globalSearchResults').classList.remove('open');
    });

    // Products
    document.getElementById('productSearch').addEventListener('input', renderProducts);
    document.getElementById('productGenderFilter').addEventListener('change', renderProducts);
    document.getElementById('productStockFilter').addEventListener('change', renderProducts);
    document.getElementById('addProductBtn').addEventListener('click', function () { openProductModal(null); });
    document.getElementById('modalCancelBtn').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', function (e) { if (e.target.id === 'productModal') closeProductModal(); });
    document.getElementById('productForm').addEventListener('submit', handleProductFormSubmit);
    document.getElementById('pf-imageFile').addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (!file) return;
      resizeImageToDataUrl(file, 640, 0.7).then(function (dataUrl) {
        pendingImageDataUrl = dataUrl;
        document.getElementById('pf-imgPreview').style.backgroundImage = 'url(' + dataUrl + ')';
      }).catch(function () { alert('Could not read that image — try a different file.'); });
    });
    document.getElementById('exportProductsBtn').addEventListener('click', function () {
      var text = prodApi.admin.exportProductsFileText();
      var blob = new Blob([text], { type: 'text/javascript' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a'); a.href = url; a.download = 'products.js';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    });
    document.getElementById('resetOverridesBtn').addEventListener('click', function () {
      if (confirm('Clear all local admin product changes in this browser?')) { prodApi.admin.clearOverrides(); renderProducts(); }
    });

    // Categories
    document.getElementById('categorySearch').addEventListener('input', renderCategories);

    // Image manager
    document.getElementById('imgSearch').addEventListener('input', renderImagesTable);
    document.getElementById('downloadZipBtn').addEventListener('click', downloadZip);

    // Orders
    document.getElementById('orderSearch').addEventListener('input', renderOrders);
    document.getElementById('orderStatusFilter').addEventListener('change', renderOrders);

    // Customers
    document.getElementById('customerSearch').addEventListener('input', renderCustomers);

    // Discounts
    document.getElementById('addCouponBtn').addEventListener('click', function () { openCouponModal(null); });
    document.getElementById('couponModalCancelBtn').addEventListener('click', closeCouponModal);
    document.getElementById('couponModal').addEventListener('click', function (e) { if (e.target.id === 'couponModal') closeCouponModal(); });
    document.getElementById('couponForm').addEventListener('submit', handleCouponSubmit);

    document.getElementById('addBannerBtn').addEventListener('click', function () { openBannerModal(null); });
    document.getElementById('bannerModalCancelBtn').addEventListener('click', closeBannerModal);
    document.getElementById('bannerModal').addEventListener('click', function (e) { if (e.target.id === 'bannerModal') closeBannerModal(); });
    document.getElementById('bannerForm').addEventListener('submit', handleBannerSubmit);

    // Analytics
    document.getElementById('exportCsvBtn').addEventListener('click', exportCsv);
    document.getElementById('printReportBtn').addEventListener('click', function () { window.print(); });

    // Settings
    document.getElementById('saveSettingsBtn').addEventListener('click', handleSaveSettings);
    document.getElementById('addStaffBtn').addEventListener('click', function () { document.getElementById('staffModal').classList.add('open'); });
    document.getElementById('staffModalCancelBtn').addEventListener('click', function () { document.getElementById('staffModal').classList.remove('open'); });
    document.getElementById('staffModal').addEventListener('click', function (e) { if (e.target.id === 'staffModal') document.getElementById('staffModal').classList.remove('open'); });
    document.getElementById('staffForm').addEventListener('submit', handleStaffSubmit);
  }

  function init() {
    catApi = window.ASF.categories;
    prodApi = window.ASF.products;
    ordersApi = window.ASF.orders;
    if (!catApi || !prodApi || !ordersApi) {
      document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif;">Admin panel failed to load — check that categories.js, products.js, and orders.js are loaded before admin.js.</p>';
      return;
    }
    initTheme();
    bindEvents();
    renderDashboard();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
