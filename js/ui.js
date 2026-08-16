/**
 * AS FASHIONS — Shared UI helpers
 * Used by index.html, category.html, product.html, cart.html, wishlist.html.
 * Keeping product-card rendering here means every page looks and behaves
 * identically instead of drifting apart.
 */
(function (global) {
  'use strict';

  function money(n) { return '\u20B9' + Number(n).toLocaleString('en-IN'); }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    var hue = Math.abs(hash) % 360;
    return 'hsl(' + hue + ', 32%, 88%)';
  }

  // Builds a <article class="product-card"> element wired with wishlist
  // toggle, add-to-bag, and a click-through link to the product detail page.
  function productCard(p) {
    var wishApi = global.ASF.wishlist;
    var wished = wishApi.isWishlisted(p.id);
    var card = document.createElement('article');
    card.className = 'product-card';

    var hasRealImage = p.image && p.image.indexOf('assets/products/') !== 0 ? true : null; // data URLs render immediately; asset-path images may 404
    card.innerHTML =
      '<a class="product-media" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="product-media-fallback" style="background:' + colorFromString(p.id) + '"></div>' +
        '<img class="product-media-img" src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
      '</a>' +
      '<button class="wish-btn' + (wished ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Add to wishlist">&#9825;</button>' +
      (p.discountPct >= 30 ? '<span class="tag tag-sale">' + p.discountPct + '% OFF</span>' : '') +
      (p.isNew ? '<span class="tag tag-new">NEW</span>' : '') +
      '<div class="product-info">' +
        '<a href="product.html?id=' + encodeURIComponent(p.id) + '" style="display:block;">' +
          '<p class="product-brand">' + p.brand + '</p>' +
          '<p class="product-name">' + p.name + '</p>' +
        '</a>' +
        '<p class="product-price">' + money(p.price) +
          (p.discountPct > 0 ? ' <span class="mrp">' + money(p.mrp) + '</span>' : '') +
        '</p>' +
        '<p class="product-rating">&#9733; ' + p.rating + ' (' + p.ratingCount + ')</p>' +
        '<button class="btn btn-add" data-id="' + p.id + '">Add to Bag</button>' +
      '</div>';

    var mediaWrap = card.querySelector('.product-media');
    mediaWrap.style.position = 'relative';
    var imgEl = card.querySelector('.product-media-img');
    // If the real product image (asset upload / admin photo) fails to load,
    // fall back to a stable stock photo instead of a blank colored block —
    // this keeps the storefront looking populated before real photography
    // is uploaded. Real uploaded/admin images always take priority when present.
    imgEl.addEventListener('error', function () {
      if (imgEl.dataset.fallbackApplied) { imgEl.style.display = 'none'; return; }
      imgEl.dataset.fallbackApplied = '1';
      imgEl.src = 'https://picsum.photos/seed/' + encodeURIComponent(p.id) + '/400/520';
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

  // Fades/slides elements into view the first time they scroll into the
  // viewport. Falls back to showing everything immediately if
  // IntersectionObserver isn't available (very old browsers).
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

  // Wires up clicks for .wish-btn / .btn-add anywhere inside `root` (defaults
  // to document.body). Call once per page after rendering product cards.
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
        wishBtn.classList.toggle('active');
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
