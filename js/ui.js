/**
 * AS FASHIONS — Shared UI Engine (Myntra-Grade Card System)
 */
(function (global) {
  'use strict';

  function money(n) { return '\u20B9' + Number(n || 0).toLocaleString('en-IN'); }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < (str || '').length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    var hue = Math.abs(hash) % 360;
    return 'hsl(' + hue + ', 25%, 92%)';
  }

  function productCard(p) {
    var wishApi = global.ASF.wishlist;
    var wished = wishApi ? wishApi.isWishlisted(p.id) : false;
    var card = document.createElement('article');
    card.className = 'product-card myntra-card';

    var ratingCountFormatted = p.ratingCount >= 1000 ? (p.ratingCount / 1000).toFixed(1) + 'k' : (p.ratingCount || 0);

    var highlightHtml = '';
    if (p.isBestseller) {
      highlightHtml = '<div class="highlight-ribbon rising-star">Rising Star</div>';
    } else if (p.isNew) {
      highlightHtml = '<div class="highlight-ribbon new-arrival">New Season</div>';
    } else if (p.discountPct >= 40) {
      highlightHtml = '<div class="highlight-ribbon hot-deal">Hot Deal</div>';
    }

    card.innerHTML =
      '<div class="card-media-box">' +
        '<a href="product.html?id=' + encodeURIComponent(p.id) + '" class="media-link">' +
          '<img class="card-img" src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
        '</a>' +
        highlightHtml +
        '<button class="card-wish-btn' + (wished ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Wishlist">' +
          (wished ? '&#9829;' : '&#9825;') +
        '</button>' +
        (p.rating ? '<div class="card-rating-tag"><span>' + p.rating + ' &#9733;</span><span class="rating-bar">|</span><span>' + ratingCountFormatted + '</span></div>' : '') +
        '<button class="card-quick-add btn-add" data-id="' + p.id + '">&#128092; Add</button>' +
      '</div>' +
      '<div class="card-details">' +
        '<a href="product.html?id=' + encodeURIComponent(p.id) + '" class="details-anchor">' +
          '<h4 class="brand-title">' + p.brand + '</h4>' +
          '<p class="item-title">' + p.name + '</p>' +
          '<div class="price-block">' +
            '<span class="current-price">' + money(p.price) + '</span>' +
            (p.discountPct > 0 ? '<span class="original-mrp">' + money(p.mrp) + '</span><span class="discount-label">(' + p.discountPct + '% OFF)</span>' : '') +
          '</div>' +
          (p.discountPct > 0 ? '<p class="offer-subtext">Best Price ' + money(Math.round(p.price * 0.9)) + ' with coupon</p>' : '') +
        '</a>' +
      '</div>';

    var imgEl = card.querySelector('.card-img');
    imgEl.addEventListener('error', function () {
      if (imgEl.dataset.fallbackApplied) { imgEl.style.display = 'none'; return; }
      imgEl.dataset.fallbackApplied = '1';
      imgEl.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60';
    });

    return card;
  }

  function renderProductGrid(containerId, products, opts) {
    opts = opts || {};
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    if (!products.length) {
      el.innerHTML = '<p class="empty-state" style="grid-column:1/-1;">No products found.</p>';
      return;
    }
    var list = opts.limit ? products.slice(0, opts.limit) : products;
    list.forEach(function (p, i) {
      var card = productCard(p);
      if (opts.reveal !== false) {
        card.classList.add('reveal');
        card.style.transitionDelay = Math.min(i, 8) * 30 + 'ms';
      }
      el.appendChild(card);
    });
    if (opts.reveal !== false) observeReveal(el.querySelectorAll('.reveal'));
  }

  var revealObserver = null;
  function observeReveal(nodes) {
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach(function (n) { n.classList.add('in-view'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
    }
    nodes.forEach(function (n) { revealObserver.observe(n); });
  }

  function bindProductCardEvents(root) {
    root = root || document.body;
    root.addEventListener('click', function (e) {
      var addBtn = e.target.closest('.card-quick-add');
      if (addBtn) {
        e.preventDefault();
        global.ASF.cart.addItem(addBtn.dataset.id, { qty: 1 });
        if (typeof global.__asfOpenCartDrawer === 'function') global.__asfOpenCartDrawer();
        return;
      }
      var wishBtn = e.target.closest('.card-wish-btn');
      if (wishBtn) {
        e.preventDefault();
        global.ASF.wishlist.toggle(wishBtn.dataset.id);
        var active = global.ASF.wishlist.isWishlisted(wishBtn.dataset.id);
        wishBtn.classList.toggle('active', active);
        wishBtn.innerHTML = active ? '&#9829;' : '&#9825;';
        return;
      }
    });
  }

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
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
