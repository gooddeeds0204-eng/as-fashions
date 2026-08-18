/**
 * AS FASHIONS — UI Components & Global Render Engine
 */
(function (global) {
  'use strict';

  var BACKUP_IMAGES = [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80'
  ];

  function formatPrice(num) {
    return '₹' + Number(num || 0).toLocaleString('en-IN');
  }

  function getCardImage(prod) {
    if (prod.image && prod.image.indexOf('http') === 0) return prod.image;
    if (prod.images && prod.images[0] && prod.images[0].indexOf('http') === 0) return prod.images[0];
    
    // Hash id to select persistent high-res fashion photo
    var sum = 0;
    for (var i = 0; i < (prod.id || '').length; i++) sum += prod.id.charCodeAt(i);
    return BACKUP_IMAGES[sum % BACKUP_IMAGES.length];
  }

  function createProductCard(prod) {
    var card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', prod.id);

    var imgUrl = getCardImage(prod);

    var ribbonHtml = '';
    if (prod.isNew) ribbonHtml = '<span class="product-ribbon">NEW</span>';
    else if (prod.isBestseller) ribbonHtml = '<span class="product-ribbon" style="background:#111;">BESTSELLER</span>';
    else if (prod.discountPct >= 30) ribbonHtml = '<span class="product-ribbon">' + prod.discountPct + '% OFF</span>';

    var mrpHtml = prod.mrp && prod.mrp > prod.price 
      ? '<span class="product-mrp">' + formatPrice(prod.mrp) + '</span><span class="product-discount">(' + prod.discountPct + '% OFF)</span>' 
      : '';

    var ratingHtml = prod.rating 
      ? '<div class="product-rating-pill">' + prod.rating + ' ★</div>' 
      : '';

    card.innerHTML =
      '<div class="product-media-wrap">' +
        ribbonHtml +
        '<button class="wishlist-btn" onclick="event.preventDefault(); this.innerHTML = this.innerHTML === \'♥\' ? \'♡\' : \'♥\';">♡</button>' +
        '<a href="product.html?id=' + encodeURIComponent(prod.id) + '">' +
          '<img src="' + imgUrl + '" alt="' + (prod.name || 'Product') + '" loading="lazy" onerror="this.onerror=null;this.src=\'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80\';" />' +
        '</a>' +
        ratingHtml +
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

  function renderProductGrid(targetId, products, options) {
    var el = document.getElementById(targetId);
    if (!el) return;

    el.innerHTML = '';
    var list = Array.isArray(products) ? products : [];
    var limit = (options && options.limit) ? options.limit : list.length;
    var slice = list.slice(0, limit);

    var fragment = document.createDocumentFragment();
    slice.forEach(function (p) {
      fragment.appendChild(createProductCard(p));
    });
    el.appendChild(fragment);
  }

  global.ASF = global.ASF || {};
  global.ASF.ui = {
    formatPrice: formatPrice,
    createProductCard: createProductCard,
    renderProductGrid: renderProductGrid,
    bindProductCardEvents: function () {},
    colorFromString: function (str) {
      return '#efe6d4';
    }
  };
})(window);
