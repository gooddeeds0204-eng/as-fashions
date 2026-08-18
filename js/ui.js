/**
 * AS FASHIONS — Shared UI helpers
 * Used by index.html, category.html, product.html, cart.html, wishlist.html.
 * Keeping product-card rendering here means every page looks and behaves
 * identically instead of drifting apart.
 */
(function (global) {
  'use strict';

  function money(n) { return '\u20B9' + Number(n || 0).toLocaleString('en-IN'); }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < (str || '').length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    var hue = Math.abs(hash) % 360;
    return 'hsl(' + hue + ', 30%, 92%)';
  }

  // Builds a <article class="product-card"> element wired with wishlist
  // toggle, add-to-bag, and a click-through link to the product detail page.
  function productCard(p) {
    var wishApi = global.ASF.wishlist;
    var wished = wishApi ? wishApi.isWishlisted(p.id) : false;
    var card = document.createElement('article');
    card.className = 'product-card myntra-style';

    var ratingCountFormatted = p.ratingCount >= 1000 ? (p.ratingCount / 1000).toFixed(1) + 'k' : (p.ratingCount || 0);

    card.innerHTML =
      '<div class="product-media-wrap">' +
        '<a class="product-media" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
          '<div class="product-media-fallback" style="background:' + colorFromString(p.id) + '"></div>' +
          '<img class="product-media-img" src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
        '</a>' +
        '<button class="wish-btn' + (wished ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Add to wishlist">' +
          (wished ? '&#9829;' : '&#9825;') +
        '</button>' +
        (p.discountPct >= 20 ? '<span class="tag tag-sale">' + p.discountPct + '% OFF</span>' : '') +
        (p.isNew ? '<span class="tag tag-new">NEW</span>' : '') +
        (p.rating ? '<div class="rating-pill"><span>' + p.rating + ' &#9733;</span><span class="rating-sep">|</span><span>' + ratingCountFormatted + '</span></div>' : '') +
        '<button class="quick-add-btn btn-add" data-id="' + p.id + '">&#128092; Add</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<a href="product.html?id=' + encodeURIComponent(p.id) + '" class="product-info-link">' +
          '<h4 class="product-brand">' + p.brand + '</h4>' +
          '<p class="product-name">' + p.name + '</p>' +
          '<div class="product-price-row">' +
            '<span class="product-price">' + money(p.price) + '</span>' +
            (p.discountPct > 0 ? '<span class="mrp">' + money(p.mrp) + '</span><span class="off-pct">(' + p.discountPct + '% OFF)</span>' : '') +
          '</div>' +
          (p.discountPct > 0 ? '<p class="best-price-tag">Best Price ' + money(Math.round(p.price * 0.9)) + ' with coupon</p>' : '') +
        '</a>' +
      '</div>';

    var imgEl = card.querySelector('.product-media-img');
    // If the real product image fails to load, fall back to a stable stock photo
    imgEl.addEventListener('error', function () {
      if (imgEl.dataset.fallbackApplied) { imgEl.style.display = 'none'; return; }
      imgEl.dataset.fallbackApplied = '1';
      imgEl.src = 'https://picsum.photos/seed/' + encodeURIComponent(p.id) + '/450/600';
    });
    imgEl.addEventListener('load', function () { imgEl.style.display = 'block'; });

    return card;
  }

  function renderProductGrid(containerId, products, opts) {
    opts = opts || {};
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    if (!products.length) {
      el.innerHTML = '<p class="empty-state">No products found.</p>';
      return;
    }
    var list = opts.limit ? products.slice(0, opts.limit) : products;
    list.forEach(function (p, i) {
      var card = productCard(p);
      if (opts.reveal !== false) {
        card.classList.add('reveal');
        card.style.transitionDelay = Math.min(i, 8) * 40 + 'ms';
      }
      el.appendChild(card);
    });
    if (opts.reveal !== false) observeReveal(el.querySelectorAll('.reveal'));
  }

  // Fades/slides elements into view the first time they scroll into the viewport.
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
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    nodes.forEach(function (n) { revealObserver.observe(n); });
  }

  // Wires up clicks for .wish-btn / .btn-add anywhere inside root.
  function bindProductCardEvents(root) {
    root = root || document.body;
    root.addEventListener('click', function (e) {
      var addBtn = e.target.closest('.btn-add');
      if (addBtn) {
        e.preventDefault();
        global.ASF.cart.addItem(addBtn.dataset.id, { qty: 1 });
        if (typeof global.__asfOpenCartDrawer === 'function') global.__asfOpenCartDrawer();
        return;
      }
      var wishBtn = e.target.closest('.wish-btn');
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
