/**
 * AS FASHIONS — Shared Header, Navigation & Chrome Engine
 */
(function () {
  'use strict';

  var HEADER_HTML =
    '<div class="utility-bar">' +
      '<span class="utility-promo">Get 10% OFF on your first order. Code: <strong>WELCOME10</strong></span>' +
      '<div class="utility-links">' +
        '<a href="orders.html">&#128230; Track Order</a>' +
        '<a href="help.html">Help &amp; Support</a>' +
      '</div>' +
    '</div>' +
    '<header class="site-header">' +
      '<div class="header-row">' +
        '<button id="mobileMenuToggle" class="mobile-toggle" aria-label="Toggle Menu">&#9776;</button>' +
        '<a href="index.html" class="logo-block">' +
          '<span class="logo">AS <span>FASHIONS</span></span>' +
          '<span class="logo-tagline">Curated Luxury &amp; Everyday Style</span>' +
        '</a>' +
        '<div class="search-wrap">' +
          '<input id="searchInput" type="text" placeholder="Search for apparel, brands, trends..." autocomplete="off">' +
          '<button type="button" id="searchSubmitBtn" class="search-submit-btn" aria-label="Search">&#128269;</button>' +
          '<div id="searchResults" class="search-results"></div>' +
        '</div>' +
        '<div class="header-actions">' +
          '<button id="notifBellBtn" class="icon-btn" aria-label="Notifications">&#128276;<span id="notifCount" class="badge" style="display:none;">0</span><span class="icon-label">Alerts</span></button>' +
          '<a href="#" id="headerProfileLink" class="icon-btn header-profile" aria-label="Profile">&#128100;<span class="icon-label" id="profileLabel">Account</span></a>' +
          '<a href="wishlist.html" class="icon-btn" aria-label="Wishlist">&#9825;<span id="wishCount" class="badge">0</span><span class="icon-label">Wishlist</span></a>' +
          '<button id="cartToggle" class="icon-btn" aria-label="Cart">&#128092;<span id="cartCount" class="badge">0</span><span class="icon-label">Bag</span></button>' +
        '</div>' +
      '</div>' +
      '<div id="notifDropdown" class="notif-dropdown"></div>' +
      '<nav id="mainNav" class="main-nav"></nav>' +
    '</header>';

  var CART_DRAWER_HTML =
    '<div id="cartDrawer" class="cart-drawer">' +
      '<div class="drawer-head"><h3>Your Shopping Bag</h3><button id="cartClose" aria-label="Close cart">&times;</button></div>' +
      '<div id="cartDrawerBody" class="drawer-body"></div>' +
      '<div class="drawer-foot">' +
        '<div class="subtotal-row"><span>Subtotal</span><span id="cartSubtotal">\u20B90</span></div>' +
        '<a href="checkout.html" class="btn btn-primary" style="width:100%; text-align:center; display:block; margin-bottom:8px;">Proceed to Checkout</a>' +
        '<a href="cart.html" style="display:block; text-align:center; font-size:12px; color:var(--ink-soft); font-weight:600;">View &amp; Edit Full Bag</a>' +
      '</div>' +
    '</div>' +
    '<div class="drawer-backdrop"></div>';

  var FOOTER_HTML =
    '<footer class="site-footer">' +
      '<div class="footer-grid">' +
        '<div><h4>Online Shopping</h4><ul>' +
          '<li><a href="category.html?cat=men">Men\'s Collection</a></li>' +
          '<li><a href="category.html?cat=women">Women\'s Collection</a></li>' +
          '<li><a href="category.html?cat=kids">Kids &amp; Teens</a></li>' +
          '<li><a href="category.html?cat=footwear">Footwear</a></li>' +
          '<li><a href="category.html?cat=bags">Bags &amp; Luggage</a></li>' +
          '<li><a href="category.html?cat=accessories">Accessories</a></li>' +
          '<li><a href="category.html?cat=sale">Special Sale</a></li>' +
        '</ul></div>' +
        '<div><h4>Customer Experience</h4><ul>' +
          '<li><a href="orders.html">Track Order</a></li>' +
          '<li><a href="returns.html">Returns &amp; Exchanges</a></li>' +
          '<li><a href="help.html">Help &amp; Support</a></li>' +
          '<li><a href="addresses.html">Saved Addresses</a></li>' +
        '</ul></div>' +
        '<div><h4>About AS Fashions</h4><ul>' +
          '<li><a href="index.html">Our Story</a></li>' +
          '<li><a href="help.html">Store Locator</a></li>' +
          '<li><a href="admin.html">Staff Portal</a></li>' +
        '</ul></div>' +
        '<div><h4>Stay Connected</h4>' +
          '<p style="font-size:12.5px; color:#9a9587; margin:0 0 12px;">Get curated updates on fresh drops &amp; private sales.</p>' +
          '<div class="newsletter-row">' +
            '<input type="email" placeholder="Enter your email address" id="newsletterEmail">' +
            '<button type="button" id="newsletterBtn" aria-label="Subscribe">&#10148;</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>\u00A9 2026 AS FASHIONS. All rights reserved.</span>' +
        '<div class="payment-icons"><span>VISA</span><span>MASTERCARD</span><span>UPI</span><span>COD</span></div>' +
      '</div>' +
    '</footer>';

  function bumpBadge(el) {
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
  }

  function initScrollShadow() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function renderMegaMenu() {
    var catApi = window.ASF.categories;
    var nav = document.getElementById('mainNav');
    if (!nav || !catApi) return;
    nav.innerHTML = '';
    var swatchColors = ['#D98E2E', '#6E1F2B', '#3F5B4B', '#274472', '#8A6D3B', '#B25A45', '#4C4A55'];

    catApi.CATEGORY_TREE.forEach(function (top, i) {
      var item = document.createElement('div');
      item.className = 'nav-item';

      var link = document.createElement('a');
      link.href = 'category.html?cat=' + encodeURIComponent(top.id);
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
            a.href = 'category.html?cat=' + encodeURIComponent(leaf.id);
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

    nav.querySelectorAll('.nav-link').forEach(function (lnk) {
      lnk.addEventListener('click', function (e) {
        if (window.innerWidth <= 860 && lnk.nextElementSibling) {
          e.preventDefault();
          var parent = lnk.closest('.nav-item');
          parent.classList.toggle('active');
        }
      });
    });
  }

  function updateBadges() {
    var cartApi = window.ASF.cart, wishApi = window.ASF.wishlist, notifApi = window.ASF.notifications, authApi = window.ASF.auth;
    var cartBadge = document.getElementById('cartCount');
    var wishBadge = document.getElementById('wishCount');
    var notifBadge = document.getElementById('notifCount');
    var profileLink = document.getElementById('headerProfileLink');
    var profileLabel = document.getElementById('profileLabel');
    if (cartBadge && cartApi) {
      var c = cartApi.getItemCount();
      if (cartBadge.textContent !== '' && cartBadge.textContent !== String(c)) bumpBadge(cartBadge);
      cartBadge.textContent = Number.isFinite(c) ? c : 0;
    }
    if (wishBadge && wishApi) {
      var w = wishApi.getCount();
      if (wishBadge.textContent !== '' && wishBadge.textContent !== String(w)) bumpBadge(wishBadge);
      wishBadge.textContent = w;
    }
    if (notifBadge && notifApi) {
      var unread = notifApi.getUnreadCount();
      notifBadge.textContent = unread;
      notifBadge.style.display = unread > 0 ? '' : 'none';
    }
    if (profileLink && authApi) {
      var user = authApi.getCurrentUser();
      if (user) {
        profileLink.href = 'profile.html';
        if (profileLabel) profileLabel.textContent = user.name.split(' ')[0];
      } else {
        profileLink.href = 'login.html';
        if (profileLabel) profileLabel.textContent = 'Account';
      }
    }
  }

  function renderNotifDropdown() {
    var el = document.getElementById('notifDropdown');
    if (!el || !window.ASF.notifications) return;
    var notifs = window.ASF.notifications.getAll();
    if (!notifs.length) {
      el.innerHTML = '<p class="empty-state" style="padding:20px;">No notifications yet.</p>';
      return;
    }
    el.innerHTML = notifs.slice(0, 10).map(function (n) {
      return '<div class="notif-row' + (n.read ? '' : ' unread') + '">' +
        '<p class="notif-title">' + n.title + '</p>' +
        (n.body ? '<p class="notif-body">' + n.body + '</p>' : '') +
      '</div>';
    }).join('');
  }

  function renderCartDrawer() {
    var body = document.getElementById('cartDrawerBody');
    var totalEl = document.getElementById('cartSubtotal');
    if (!body) return;
    var cartApi = window.ASF.cart, ui = window.ASF.ui;
    var summary = cartApi.getSummary();
    body.innerHTML = '';
    if (!summary.lines.length) {
      body.innerHTML = '<p class="empty-state">Your bag is currently empty.</p>';
    } else {
      summary.lines.forEach(function (line) {
        if (!line.product) return;
        var row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML =
          '<div class="cart-row-media" style="background:' + ui.colorFromString(line.product.id) + '">' +
            (line.product.image ? '<img src="' + line.product.image + '" alt="" style="width:100%;height:100%;object-fit:cover;">' : '') +
          '</div>' +
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
        html += '<a class="search-row" href="category.html?cat=' + encodeURIComponent(c.id) + '">' + c.name + '</a>';
      });
    }
    if (results.products.length) {
      html += '<p class="search-group-label">Products</p>';
      results.products.forEach(function (p) {
        html += '<a class="search-row" href="product.html?id=' + encodeURIComponent(p.id) + '">' + p.brand + ' ' + p.name + '</a>';
      });
    }
    if (!html) html = '<p class="empty-state" style="padding:14px;">No matching items found</p>';
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
      if (e.target.closest('#searchSubmitBtn')) {
        var val = document.getElementById('searchInput').value;
        if (val.trim()) {
          window.ASF.search.pushRecent(val);
          window.location.href = 'category.html?q=' + encodeURIComponent(val);
        }
        return;
      }
      if (e.target.closest('#newsletterBtn')) {
        var emailInput = document.getElementById('newsletterEmail');
        if (emailInput && emailInput.value.trim()) {
          alert('Subscribed successfully! Welcome to AS Fashions.');
          emailInput.value = '';
        }
        return;
      }
      var bellBtn = e.target.closest('#notifBellBtn');
      if (bellBtn) {
        var dd = document.getElementById('notifDropdown');
        var willOpen = !dd.classList.contains('open');
        dd.classList.toggle('open', willOpen);
        if (willOpen && window.ASF.notifications) {
          window.ASF.notifications.markAllRead();
          updateBadges();
        }
        return;
      }
      if (!e.target.closest('#notifDropdown') && !e.target.closest('#notifBellBtn')) {
        var openDd = document.getElementById('notifDropdown');
        if (openDd) openDd.classList.remove('open');
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
          window.location.href = 'category.html?q=' + encodeURIComponent(searchInput.value);
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
    window.addEventListener('asf:auth-updated', updateBadges);
    window.addEventListener('asf:notifications-updated', function () {
      updateBadges();
      renderNotifDropdown();
    });
  }

  function initHeaderAndFooter() {
    var headerHost = document.getElementById('siteHeader');
    var footerHost = document.getElementById('siteFooter');
    if (headerHost) headerHost.innerHTML = HEADER_HTML + CART_DRAWER_HTML;
    if (footerHost) footerHost.innerHTML = FOOTER_HTML;

    renderMegaMenu();
    if (window.ASF.notifications) window.ASF.notifications.seedIfEmpty();
    updateBadges();
    renderCartDrawer();
    renderNotifDropdown();
    bindHeaderEvents();
    initScrollShadow();

    document.dispatchEvent(new CustomEvent('asf:chrome-ready'));
  }

  document.addEventListener('DOMContentLoaded', initHeaderAndFooter);
})();
