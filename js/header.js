/**
 * AS FASHIONS — Shared Header, Cart Drawer & Footer
 * Every page includes a <div id="siteHeader"></div> and
 * <div id="siteFooter"></div> placeholder — this script fills them in,
 * renders the mega-menu from categories.js, wires search/cart/wishlist,
 * and exposes window.__asfOpenCartDrawer() for other pages to call.
 */
(function () {
  'use strict';

  var HEADER_HTML =
    '<div class="utility-bar">Free shipping on orders above \u20B9999 &nbsp;\u00b7&nbsp; Easy 15-day returns</div>' +
    '<header class="site-header">' +
      '<div class="header-row">' +
        '<button id="mobileMenuToggle" class="mobile-toggle" aria-label="Menu">&#9776;</button>' +
        '<a href="index.html" class="logo">AS <span>FASHIONS</span></a>' +
        '<div class="search-wrap">' +
          '<input id="searchInput" type="text" placeholder="Search for products, brands and more" autocomplete="off">' +
          '<div id="searchResults" class="search-results"></div>' +
        '</div>' +
        '<div class="header-actions">' +
          '<a href="wishlist.html" class="icon-btn" aria-label="Wishlist">&#9825;<span id="wishCount" class="badge">0</span></a>' +
          '<button id="cartToggle" class="icon-btn" aria-label="Cart">&#128092;<span id="cartCount" class="badge">0</span></button>' +
        '</div>' +
      '</div>' +
      '<nav id="mainNav" class="main-nav"></nav>' +
    '</header>';

  var CART_DRAWER_HTML =
    '<div id="cartDrawer" class="cart-drawer">' +
      '<div class="drawer-head"><h3>Your Bag</h3><button id="cartClose" aria-label="Close cart">&times;</button></div>' +
      '<div id="cartDrawerBody" class="drawer-body"></div>' +
      '<div class="drawer-foot">' +
        '<div class="subtotal-row"><span>Subtotal</span><span id="cartSubtotal">\u20B90</span></div>' +
        '<a href="checkout.html" class="btn btn-primary" style="width:100%; text-align:center; display:block; margin-bottom:8px;">Checkout</a>' +
        '<a href="cart.html" style="display:block; text-align:center; font-size:12px; color:var(--ink-soft);">View full bag</a>' +
      '</div>' +
    '</div>' +
    '<div class="drawer-backdrop"></div>';

  var FOOTER_HTML =
    '<footer class="site-footer">' +
      '<div class="footer-grid">' +
        '<div><h4>Shop</h4><ul>' +
          '<li><a href="shop.html?cat=men">Men</a></li>' +
          '<li><a href="shop.html?cat=women">Women</a></li>' +
          '<li><a href="shop.html?cat=kids">Kids</a></li>' +
          '<li><a href="shop.html?cat=footwear">Footwear</a></li>' +
          '<li><a href="shop.html?cat=bags">Bags</a></li>' +
          '<li><a href="shop.html?cat=accessories">Accessories</a></li>' +
        '</ul></div>' +
        '<div><h4>Help</h4><ul>' +
          '<li>Track Order</li><li>Returns & Exchanges</li><li>Shipping Info</li><li>Contact Us</li>' +
        '</ul></div>' +
        '<div><h4>Company</h4><ul>' +
          '<li>About AS Fashions</li><li>Careers</li><li>Store Locator</li>' +
        '</ul></div>' +
        '<div><h4>Follow</h4><ul>' +
          '<li>Instagram</li><li>Facebook</li><li>Pinterest</li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-bottom">\u00A9 2026 AS Fashions. All rights reserved.</div>' +
    '</footer>';

  function renderMegaMenu() {
    var catApi = window.ASF.categories;
    var nav = document.getElementById('mainNav');
    if (!nav || !catApi) return;
    nav.innerHTML = '';
    var swatchColors = ['#D98E2E', '#6E1F2B', '#3F5B4B', '#274472', '#8A6D3B', '#B25A45', '#4C4A55', '#7A8C6E', '#A9445B', '#5C6E91'];

    catApi.CATEGORY_TREE.forEach(function (top, i) {
      var item = document.createElement('div');
      item.className = 'nav-item';

      var link = document.createElement('a');
      link.href = 'shop.html?cat=' + encodeURIComponent(top.id);
      link.className = 'nav-link';
      link.textContent = top.name;
      item.appendChild(link);

      if (top.children && top.children.length) {
        var panel = document.createElement('div');
        panel.className = 'mega-panel';
        top.children.forEach(function (section) {
          var col = document.createElement('div');
          col.className = 'mega-col';
          var heading = document.createElement('p');
          heading.className = 'mega-col-heading';
          heading.textContent = section.name;
          col.appendChild(heading);
          var list = document.createElement('ul');
          (section.children || []).slice(0, 9).forEach(function (leaf, idx) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = 'shop.html?cat=' + encodeURIComponent(leaf.id);
            var chip = document.createElement('span');
            chip.className = 'swatch-chip';
            chip.style.background = swatchColors[(idx + i) % swatchColors.length];
            a.appendChild(chip);
            a.appendChild(document.createTextNode(leaf.name));
            li.appendChild(a);
            list.appendChild(li);
          });
          col.appendChild(list);
          panel.appendChild(col);
        });
        item.appendChild(panel);
      }
      nav.appendChild(item);
    });
  }

  function updateBadges() {
    var cartApi = window.ASF.cart, wishApi = window.ASF.wishlist;
    var cartBadge = document.getElementById('cartCount');
    var wishBadge = document.getElementById('wishCount');
    if (cartBadge && cartApi) {
      var c = cartApi.getItemCount();
      cartBadge.textContent = Number.isFinite(c) ? c : 0;
    }
    if (wishBadge && wishApi) wishBadge.textContent = wishApi.getCount();
  }

  function renderCartDrawer() {
    var body = document.getElementById('cartDrawerBody');
    var totalEl = document.getElementById('cartSubtotal');
    if (!body) return;
    var cartApi = window.ASF.cart, ui = window.ASF.ui;
    var summary = cartApi.getSummary();
    body.innerHTML = '';
    if (!summary.lines.length) {
      body.innerHTML = '<p class="empty-state">Your bag is empty.</p>';
    } else {
      summary.lines.forEach(function (line) {
        if (!line.product) return;
        var row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML =
          '<div class="cart-row-media" style="background:' + ui.colorFromString(line.product.id) + '"></div>' +
          '<div class="cart-row-info">' +
            '<p class="cart-row-name">' + line.product.name + '</p>' +
            '<p class="cart-row-meta">' + (line.size || '') + (line.color ? ' \u00b7 ' + line.color : '') + ' \u00b7 Qty ' + line.qty + '</p>' +
            '<p class="cart-row-price">' + ui.money(line.lineTotal) + '</p>' +
          '</div>' +
          '<button class="cart-row-remove" data-id="' + line.product.id + '" data-size="' + (line.size || '') + '" data-color="' + (line.color || '') + '">Remove</button>';
        body.appendChild(row);
      });
    }
    if (totalEl) totalEl.textContent = window.ASF.ui.money(summary.subtotal);
  }

  function toggleDrawer(open) {
    var drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.toggle('open', open);
  }
  window.__asfOpenCartDrawer = function () { toggleDrawer(true); };

  function renderSearchResults(query) {
    var box = document.getElementById('searchResults');
    if (!box) return;
    var searchApi = window.ASF.search;
    var results = searchApi.suggest(query, 6);
    if (!query.trim()) { box.innerHTML = ''; box.classList.remove('open'); return; }
    var html = '';
    if (results.categories.length) {
      html += '<p class="search-group-label">Categories</p>';
      results.categories.forEach(function (c) {
        html += '<a class="search-row" href="shop.html?cat=' + encodeURIComponent(c.id) + '">' + c.name + '</a>';
      });
    }
    if (results.products.length) {
      html += '<p class="search-group-label">Products</p>';
      results.products.forEach(function (p) {
        html += '<a class="search-row" href="product.html?id=' + encodeURIComponent(p.id) + '">' + p.brand + ' ' + p.name + '</a>';
      });
    }
    if (!html) html = '<p class="empty-state">No results found</p>';
    box.innerHTML = html;
    box.classList.add('open');
  }

  function bindHeaderEvents() {
    document.body.addEventListener('click', function (e) {
      var removeBtn = e.target.closest('.cart-row-remove');
      if (removeBtn) {
        window.ASF.cart.removeItem(removeBtn.dataset.id, removeBtn.dataset.size, removeBtn.dataset.color);
        return;
      }
      if (e.target.closest('#cartToggle')) { toggleDrawer(true); return; }
      if (e.target.closest('#cartClose') || e.target.closest('.drawer-backdrop')) { toggleDrawer(false); return; }
      if (e.target.closest('#mobileMenuToggle')) {
        document.getElementById('mainNav').classList.toggle('open');
        return;
      }
    });

    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', window.ASF.search.debounce(function (e) {
        renderSearchResults(e.target.value);
      }, 180));
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          window.ASF.search.pushRecent(searchInput.value);
          window.location.href = 'shop.html?q=' + encodeURIComponent(searchInput.value);
        }
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.search-wrap')) {
          document.getElementById('searchResults').classList.remove('open');
        }
      });
    }

    window.addEventListener('asf:cart-updated', function () {
      updateBadges();
      renderCartDrawer();
    });
    window.addEventListener('asf:wishlist-updated', updateBadges);
  }

  function initHeaderAndFooter() {
    var headerHost = document.getElementById('siteHeader');
    var footerHost = document.getElementById('siteFooter');
    if (headerHost) headerHost.innerHTML = HEADER_HTML + CART_DRAWER_HTML;
    if (footerHost) footerHost.innerHTML = FOOTER_HTML;

    renderMegaMenu();
    updateBadges();
    renderCartDrawer();
    bindHeaderEvents();

    // Let the page know the shared chrome is ready (pages wait for this
    // before rendering their own body content that depends on cart/wishlist state).
    document.dispatchEvent(new CustomEvent('asf:chrome-ready'));
  }

  document.addEventListener('DOMContentLoaded', initHeaderAndFooter);
})();
