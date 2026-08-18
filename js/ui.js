/**
 * AS FASHIONS — Shared UI Engine
 */
(function (global) {
  'use strict';

  var FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80'
  ];

  function money(n) {
    return '₹' + Number(n || 0).toLocaleString('en-IN');
  }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < (str || '').length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return 'hsl(' + (Math.abs(hash) % 360) + ', 30%, 88%)';
  }

  function resolveImage(p) {
    if (p.image && (p.image.indexOf('http') === 0 || p.image.indexOf('data:') === 0)) return p.image;
    if (p.images && p.images[0] && (p.images[0].indexOf('http') === 0 || p.images[0].indexOf('data:') === 0)) return p.images[0];
    var sum = 0;
    for (var i = 0; i < (p.id || '').length; i++) sum += p.id.charCodeAt(i);
    return FALLBACK_IMAGES[sum % FALLBACK_IMAGES.length];
  }

  function productCard(p) {
    var wishApi = global.ASF && global.ASF.wishlist;
    var wished = wishApi ? wishApi.isWishlisted(p.id) : false;
    var card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', p.id);

    var imgSrc = resolveImage(p);

    card.innerHTML =
      '<a class="product-media" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<img class="product-media-img" src="' + imgSrc + '" alt="' + (p.name || 'Product') + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMAGES[0] + '\';">' +
      '</a>' +
      '<button class="wish-btn' + (wished ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Add to wishlist">' + (wished ? '♥' : '♡') + '</button>' +
      (p.discountPct >= 30 ? '<span class="tag tag-sale">' + p.discountPct + '% OFF</span>' : '') +
      (p.isNew ? '<span class="tag tag-new">NEW</span>' : '') +
      '<div class="product-info">' +
        '<a href="product.html?id=' + encodeURIComponent(p.id) + '">' +
          '<p class="product-brand">' + (p.brand || 'AS FASHIONS') + '</p>' +
          '<p class="product-name">' + (p.name || '') + '</p>' +
        '</a>' +
        '<p class="product-price">' + money(p.price) +
          (p.discountPct > 0 ? ' <span class="mrp">' + money(p.mrp) + '</span><span class="off-pct">' + p.discountPct + '% off</span>' : '') +
        '</p>' +
        '<p class="product-rating">★ ' + (p.rating || '4.2') + ' (' + (p.ratingCount || '0') + ')</p>' +
        '<button class="btn btn-add" data-id="' + p.id + '">Add to Bag</button>' +
      '</div>';

    return card;
  }

  function renderProductGrid(containerId, products, opts) {
    opts = opts || {};
    var el = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!el) return;
    el.innerHTML = '';
    var list = Array.isArray(products) ? products : [];
    if (!list.length) {
      el.innerHTML = '<p class="empty-state">No products found.</p>';
      return;
    }
    var slice = opts.limit ? list.slice(0, opts.limit) : list;
    var fragment = document.createDocumentFragment();
    slice.forEach(function (p) {
      fragment.appendChild(productCard(p));
    });
    el.appendChild(fragment);
  }

  function bindProductCardEvents(root) {
    root = root || document.body;
    root.addEventListener('click', function (e) {
      var addBtn = e.target.closest('.btn-add');
      if (addBtn && global.ASF && global.ASF.cart) {
        e.preventDefault();
        e.stopPropagation();
        global.ASF.cart.addItem(addBtn.dataset.id, { qty: 1 });
        if (typeof global.__asfOpenCartDrawer === 'function') global.__asfOpenCartDrawer();
        return;
      }
      var wishBtn = e.target.closest('.wish-btn');
      if (wishBtn && global.ASF && global.ASF.wishlist) {
        e.preventDefault();
        e.stopPropagation();
        var id = wishBtn.dataset.id;
        var active = global.ASF.wishlist.toggle(id);
        wishBtn.classList.toggle('active');
        wishBtn.innerHTML = wishBtn.classList.contains('active') ? '♥' : '♡';
      }
    });
  }

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function observeReveal(nodes) {
    if (!nodes) return;
    nodes.forEach(function (n) { if (n) n.classList.add('in-view'); });
  }

  global.ASF = global.ASF || {};
  global.ASF.ui = {
    money: money,
    colorFromString: colorFromString,
    productCard: productCard,
    renderProductGrid: renderProductGrid,
    bindProductCardEvents: bindProductCardEvents,
    getQueryParam: getQueryParam,
    observeReveal: observeReveal
  };
})(window);
