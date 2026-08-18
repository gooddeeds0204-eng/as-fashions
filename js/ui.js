/**
 * AS FASHIONS — UI Components & Global Render Engine
 */
(function (global) {
  'use strict';

  var FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80'
  ];

  function formatPrice(num) {
    return '₹' + Number(num || 0).toLocaleString('en-IN');
  }

  function resolveProductImage(prod) {
    if (prod.image && prod.image.indexOf('http') === 0) return prod.image;
    if (prod.images && prod.images[0] && prod.images[0].indexOf('http') === 0) return prod.images[0];
    
    // Fallback based on ID to keep image consistent per product
    var hash = 0;
    for (var i = 0; i < (prod.id || '').length; i++) hash += prod.id.charCodeAt(i);
    return FALLBACK_IMAGES[hash % FALLBACK_IMAGES.length];
  }

  function createProductCard(prod) {
    var card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', prod.id);

    var imgUrl = resolveProductImage(prod);

    var ribbonHtml = '';
    if (prod.isNew) {
      ribbonHtml = '<span class="product-ribbon ribbon-new">NEW SEASON</span>';
    } else if (prod.isBestseller) {
      ribbonHtml = '<span class="product-ribbon ribbon-star">BESTSELLER</span>';
    } else if (prod.discountPct >= 30) {
      ribbonHtml = '<span class="product-ribbon ribbon-deal">' + prod.discountPct + '% OFF</span>';
    }

    var mrpHtml = prod.mrp && prod.mrp > prod.price 
      ? '<span class="product-mrp">' + formatPrice(prod.mrp) + '</span><span class="product-discount">(' + prod.discountPct + '% OFF)</span>' 
      : '';

    var ratingHtml = prod.rating 
      ? '<div class="product-rating-pill">' + prod.rating + ' ★ <span class="rating-count">(' + (prod.ratingCount || 0) + ')</span></div>' 
      : '';

    card.innerHTML =
      '<div class="product-media-wrap">' +
        ribbonHtml +
        '<button class="wishlist-btn" aria-label="Save to wishlist" data-action="wishlist">♡</button>' +
        '<a href="product.html?id=' + encodeURIComponent(prod.id) + '" class="product-img-link">' +
          '<img src="' + imgUrl + '" alt="' + (prod.name || 'Product') + '" class="product-img" loading="lazy" onerror="this.onerror=null;this.src=\'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80\';" />' +
        '</a>' +
        ratingHtml +
        '<button class="quick-add-btn" data-action="quick-add">👜 Add</button>' +
      '</div>' +
      '<div class="product-details">' +
        '<h4 class="product-brand">' + (prod.brand || 'AS FASHIONS') + '</h4>' +
        '<p class="product-title"><a href="product.html?id=' + encodeURIComponent(prod.id) + '">' + (prod.name || 'Fashion Item') + '</a></p>' +
        '<div class="product-pricing">' +
          '<span class="product-price">' + formatPrice(prod.price) + '</span>' +
          mrpHtml +
        '</div>' +
      '</div>';

    return card;
  }

  function renderProductGrid(target, products, options) {
    var el = typeof target === 'string' ? document.getElementById(target) : target;
    if (!el) return;

    el.innerHTML = '';
    var list = Array.isArray(products) ? products : [];
    var limit = (options && options.limit) ? options.limit : list.length;
    var slice = list.slice(0, limit);

    if (!slice.length) {
      el.innerHTML = '<div class="rail-empty-msg">No products available at the moment.</div>';
      return;
    }

    var fragment = document.createDocumentFragment();
    slice.forEach(function (p) {
      fragment.appendChild(createProductCard(p));
    });
    el.appendChild(fragment);
  }

  function bindProductCardEvents(container) {
    var root = container || document.body;
    root.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      var card = btn.closest('.product-card');
      if (!card) return;
      var action = btn.getAttribute('data-action');

      if (action === 'wishlist') {
        e.preventDefault();
        e.stopPropagation();
        var isActive = btn.classList.toggle('active');
        btn.innerHTML = isActive ? '♥' : '♡';
      } else if (action === 'quick-add') {
        e.preventDefault();
        e.stopPropagation();
        btn.textContent = '✓ Added';
        setTimeout(function () { btn.innerHTML = '👜 Add'; }, 1500);
      }
    });
  }

  global.ASF = global.ASF || {};
  global.ASF.ui = {
    formatPrice: formatPrice,
    createProductCard: createProductCard,
    renderProductGrid: renderProductGrid,
    bindProductCardEvents: bindProductCardEvents,
    colorFromString: function (str) {
      var hash = 0;
      for (var i = 0; i < (str || '').length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
      return 'hsl(' + (Math.abs(hash) % 360) + ', 25%, 92%)';
    }
  };
})(window);
