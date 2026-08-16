(function () {
  var catApi = window.ASF.categories;
  var prodApi = window.ASF.products;
  var money = function (n) { return '\u20B9' + Number(n).toLocaleString('en-IN'); };

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return 'hsl(' + (Math.abs(hash) % 360) + ', 45%, 55%)';
  }

  function renderStats() {
    var all = prodApi.getAllProducts();
    document.getElementById('statTotalProducts').textContent = all.length;
    document.getElementById('statTotalCategories').textContent = catApi.getAllLeafIds().length;
    document.getElementById('statOnSale').textContent = prodApi.getSaleProducts().length;
    document.getElementById('statNew').textContent = prodApi.getNewArrivals().length;
  }

  function renderProducts() {
    var query = document.getElementById('adminSearch').value.toLowerCase();
    var gender = document.getElementById('adminGenderFilter').value;
    var all = prodApi.getAllProducts().filter(function (p) {
      var matchQuery = !query || p.name.toLowerCase().indexOf(query) !== -1 || p.brand.toLowerCase().indexOf(query) !== -1;
      var matchGender = !gender || p.gender === gender;
      return matchQuery && matchGender;
    });

    var body = document.getElementById('productsTableBody');
    body.innerHTML = all.map(function (p) {
      var catEntry = catApi.getCategoryById(p.categoryId);
      var path = catEntry ? catApi.getCategoryPath(p.categoryId) : p.categoryId;
      var tags = [];
      if (p.discountPct >= 30) tags.push('<span class="pill pill-sale">SALE</span>');
      if (p.isNew) tags.push('<span class="pill pill-new">NEW</span>');
      return '<tr>' +
        '<td><span class="swatch-dot" style="background:' + colorFromString(p.id) + '"></span></td>' +
        '<td><code style="font-size:11px;">' + p.id + '</code></td>' +
        '<td>' + p.name + '</td>' +
        '<td>' + p.brand + '</td>' +
        '<td>' + path + '</td>' +
        '<td>' + money(p.price) + '</td>' +
        '<td>' + money(p.mrp) + '</td>' +
        '<td>&#9733; ' + p.rating + '</td>' +
        '<td>' + tags.join(' ') + '</td>' +
        '<td class="action-cell">' +
          '<button class="btn-sm edit-product-btn" data-id="' + p.id + '">Edit</button>' +
          '<button class="btn-sm btn-sm-danger delete-product-btn" data-id="' + p.id + '">Delete</button>' +
        '</td>' +
        '</tr>';
    }).join('') || '<tr><td colspan="10">No products found.</td></tr>';

    body.querySelectorAll('.edit-product-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { openProductModal(btn.dataset.id); });
    });
    body.querySelectorAll('.delete-product-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (confirm('Delete this product? This only affects your browser until you export & commit.')) {
          var result = prodApi.admin.deleteProduct(btn.dataset.id);
          if (result && !result.saved) alert('\u26A0 Delete failed: ' + result.error);
          renderProducts();
          renderStats();
        }
      });
    });
  }

  function renderCategories() {
    var body = document.getElementById('categoriesTableBody');
    var rows = [];
    Object.keys(catApi.CATEGORY_INDEX).forEach(function (id) {
      var entry = catApi.CATEGORY_INDEX[id];
      rows.push('<tr><td>' + entry.id + '</td><td>' + entry.name + '</td><td>' + catApi.getCategoryPath(entry.id) + '</td><td>' + (entry.hasChildren ? 'Group' : 'Leaf') + '</td></tr>');
    });
    body.innerHTML = rows.join('');
  }

  /* ---------- Product Add/Edit Modal ---------- */
  var pendingImageDataUrl = null; // set when user picks a new photo in the modal

  function populateCategoryDropdown() {
    var select = document.getElementById('pf-categoryId');
    var leafIds = catApi.getAllLeafIds();
    select.innerHTML = leafIds.map(function (id) {
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
          resolve(canvas.toDataURL('image/jpeg', quality || 0.82));
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

  function closeProductModal() {
    document.getElementById('productModal').classList.remove('open');
  }

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
    if (pendingImageDataUrl) {
      patch.image = pendingImageDataUrl;
      patch.images = [pendingImageDataUrl];
    }

    if (id) {
      var result = prodApi.admin.updateProduct(id, patch);
    } else {
      var newId = prodApi.admin.getNextProductId();
      var full = Object.assign({ id: newId, image: pendingImageDataUrl || '', images: pendingImageDataUrl ? [pendingImageDataUrl] : [] }, patch);
      var result = prodApi.admin.addProduct(full);
    }

    if (!result.saved) {
      alert('\u26A0 Save failed: ' + result.error);
      return; // keep the modal open so the person doesn't lose their edits
    }

    closeProductModal();
    renderProducts();
    renderStats();
  }

  function handleExportProducts() {
    var text = prodApi.admin.exportProductsFileText();
    var blob = new Blob([text], { type: 'text/javascript' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'products.js';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  function handleResetOverrides() {
    if (confirm('This clears all local admin changes (adds/edits/deletes) in this browser. Continue?')) {
      prodApi.admin.clearOverrides();
      renderProducts();
      renderStats();
    }
  }

  function switchView(view) {
    ['products', 'categories', 'orders', 'images'].forEach(function (v) {
      document.getElementById(v + 'View').style.display = v === view ? '' : 'none';
    });
    document.getElementById('viewTitle').textContent = view.charAt(0).toUpperCase() + view.slice(1);
    document.querySelectorAll('.admin-sidebar nav a[data-view]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.view === view);
    });
  }

  /* ---------- Image Manager ---------- */
  // In-memory map of productId -> File object the user picked. Nothing is
  // uploaded anywhere — it just gets zipped with the correct filename on demand.
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
        '<td><div class="img-preview" id="preview-' + p.id + '" style="width:44px;height:56px;border-radius:2px;background:' + colorFromString(p.id) + ';background-size:cover;background-position:center;' + (hasFile ? 'background-image:url(' + URL.createObjectURL(pickedFiles[p.id]) + ')' : '') + '"></div></td>' +
        '<td><code style="font-size:11px;">' + p.id + '</code></td>' +
        '<td>' + p.brand + ' ' + p.name + '</td>' +
        '<td><code style="font-size:11px;">assets/products/' + filename + '</code></td>' +
        '<td><input type="file" accept="image/*" class="img-pick-input" data-pid="' + p.id + '"></td>' +
        '</tr>';
    }).join('') || '<tr><td colspan="5">No products found.</td></tr>';

    body.querySelectorAll('.img-pick-input').forEach(function (input) {
      input.addEventListener('change', function (e) {
        var pid = e.target.dataset.pid;
        var file = e.target.files[0];
        if (file) {
          pickedFiles[pid] = file;
          var preview = document.getElementById('preview-' + pid);
          if (preview) {
            preview.style.backgroundImage = 'url(' + URL.createObjectURL(file) + ')';
          }
          updateZipStatus();
        }
      });
    });
  }

  function updateZipStatus() {
    var count = Object.keys(pickedFiles).length;
    document.getElementById('zipStatus').textContent = count ? count + ' photo(s) selected' : '';
  }

  function extFromName(name) {
    var m = /\.[a-zA-Z0-9]+$/.exec(name || '');
    return m ? m[0] : '.jpg';
  }

  function downloadZip() {
    var ids = Object.keys(pickedFiles);
    if (!ids.length) {
      alert('Pick at least one photo first.');
      return;
    }
    if (typeof JSZip === 'undefined') {
      alert('ZIP library failed to load (check your internet connection) — try again.');
      return;
    }
    var zip = new JSZip();
    var folder = zip.folder('assets-products');
    var promises = ids.map(function (pid) {
      var file = pickedFiles[pid];
      var ext = extFromName(file.name);
      return file.arrayBuffer().then(function (buf) {
        folder.file(pid + ext, buf);
      });
    });
    Promise.all(promises).then(function () {
      return zip.generateAsync({ type: 'blob' });
    }).then(function (blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'as-fashions-product-images.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    });
  }

  document.querySelectorAll('.admin-sidebar nav a[data-view]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      switchView(a.dataset.view);
    });
  });

  document.getElementById('adminSearch').addEventListener('input', renderProducts);
  document.getElementById('adminGenderFilter').addEventListener('change', renderProducts);
  document.getElementById('imgSearch').addEventListener('input', renderImagesTable);
  document.getElementById('downloadZipBtn').addEventListener('click', downloadZip);

  document.getElementById('addProductBtn').addEventListener('click', function () { openProductModal(null); });
  document.getElementById('modalCancelBtn').addEventListener('click', closeProductModal);
  document.getElementById('productModal').addEventListener('click', function (e) {
    if (e.target.id === 'productModal') closeProductModal();
  });
  document.getElementById('productForm').addEventListener('submit', handleProductFormSubmit);
  document.getElementById('pf-imageFile').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    resizeImageToDataUrl(file, 640, 0.7).then(function (dataUrl) {
      pendingImageDataUrl = dataUrl;
      document.getElementById('pf-imgPreview').style.backgroundImage = 'url(' + dataUrl + ')';
    }).catch(function (err) {
      console.error('Image resize failed', err);
      alert('Could not read that image — try a different file.');
    });
  });
  document.getElementById('exportProductsBtn').addEventListener('click', handleExportProducts);
  document.getElementById('resetOverridesBtn').addEventListener('click', handleResetOverrides);

  window.addEventListener('asf:products-updated', function () {
    renderProducts();
    renderStats();
    renderImagesTable();
  });

  renderStats();
  renderProducts();
  renderCategories();
  renderImagesTable();
})();
