/**
 * AS FASHIONS — Homepage
 * Renders hero-adjacent sections only: promo strip, category rail, and
 * product rails (New Arrivals / Bestsellers / Sale). The shared header,
 * mega-menu, search, wishlist/cart badges, and cart drawer are all owned
 * by js/header.js (loaded before this file) — this file does not touch
 * any of that, to avoid double-binding the same click handlers twice.
 */
(function () {
  'use strict';

  window.addEventListener('error', function (e) {
    showErrorBanner('window.onerror', (e.error && e.error.message) || e.message || e);
  });

  function showErrorBanner(label, err) {
    console.error('[AS FASHIONS]', label, err);
    var banner = document.getElementById('asfDebugBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'asfDebugBanner';
      banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999;background:#6e1f2b;color:#fff;font:12px/1.4 monospace;padding:10px 14px;max-height:40vh;overflow:auto;white-space:pre-wrap;';
      document.body.appendChild(banner);
    }
    var line = document.createElement('div');
    line.style.marginBottom = '6px';
    line.textContent = '\u26A0 ' + label + ': ' + (err && err.message ? err.message : err);
    banner.appendChild(line);
  }

  function safeRun(label, fn) {
    try { fn(); } catch (err) { showErrorBanner(label, err); }
  }

  function renderPromos(offersApi) {
    var el = document.getElementById('promoStrip');
    if (!el) return;
    el.innerHTML = '';
    offersApi.getPromoBanners().forEach(function (promo) {
      var card = document.createElement('a');
      card.className = 'promo-card';
      card.href = promo.link;
      card.innerHTML =
        '<p class="promo-title">' + promo.title + '</p>' +
        '<p class="promo-subtitle">' + promo.subtitle + '</p>' +
        '<span class="promo-cta">' + promo.ctaLabel + ' \u2192</span>';
      el.appendChild(card);
    });
  }

  function renderCategoryRail(catApi, ui) {
    var el = document.getElementById('categoryRail');
    if (!el) return;
    el.innerHTML = '';
    catApi.CATEGORY_TREE.forEach(function (top) {
      var card = document.createElement('a');
      card.className = 'category-card';
      card.href = 'shop.html?cat=' + encodeURIComponent(top.id);
      card.innerHTML =
        '<div class="category-swatch" style="background:' + ui.colorFromString(top.id) + '"></div>' +
        '<p>' + top.name + '</p>';
      el.appendChild(card);
    });
  }

  function init() {
    var ASF = window.ASF || {};
    var catApi = ASF.categories;
    var prodApi = ASF.products;
    var offersApi = ASF.offers;
    var ui = ASF.ui;

    if (!catApi) { showErrorBanner('boot', 'js/categories.js did not load — check the script path.'); return; }
    if (!prodApi) { showErrorBanner('boot', 'js/products.js did not load or has a syntax error.'); return; }
    if (!ui) { showErrorBanner('boot', 'js/ui.js did not load — check the script path and that it loads before app.js.'); return; }

    safeRun('renderPromos', function () { renderPromos(offersApi); });
    safeRun('renderCategoryRail', function () { renderCategoryRail(catApi, ui); });
    safeRun('renderRail:newArrivals', function () {
      var list = prodApi.getNewArrivals();
      ui.renderProductGrid('newArrivalsRail', list.length ? list : prodApi.getAllProducts(), { limit: 8 });
    });
    safeRun('renderRail:bestsellers', function () {
      var list = prodApi.getBestsellers();
      ui.renderProductGrid('bestsellersRail', list.length ? list : prodApi.getAllProducts().slice(8, 16), { limit: 8 });
    });
    safeRun('renderRail:sale', function () {
      ui.renderProductGrid('saleRail', prodApi.getSaleProducts(), { limit: 8 });
    });
    safeRun('bindProductCardEvents', function () { ui.bindProductCardEvents(document.body); });
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/* =========================================================
   AS FASHIONS — UI integration layer
   ========================================================= */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Keep missing image paths from creating huge broken-image gaps.
  function safeImage(img) {
    if (!img || img.dataset.asfFallback) return;
    img.dataset.asfFallback = "1";
    img.addEventListener("error", function () {
      this.style.objectFit = "cover";
      this.src = "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800">' +
          '<rect width="100%" height="100%" fill="#eee9e1"/>' +
          '<text x="50%" y="47%" dominant-baseline="middle" text-anchor="middle" ' +
          'font-family="Georgia,serif" font-size="34" fill="#7b684f">AS FASHIONS</text>' +
          '<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" ' +
          'font-family="Arial" font-size="14" fill="#8d8d8d">IMAGE COMING SOON</text></svg>'
        );
    }, { once: true });
  }

  function bindImageFallbacks() {
    $$("img").forEach(safeImage);
  }

  // Recently viewed products are stored locally for a real storefront feel.
  window.ASFRecentlyViewed = {
    add(id) {
      if (!id) return;
      const key = "asf_recently_viewed";
      let items = JSON.parse(localStorage.getItem(key) || "[]");
      items = [String(id), ...items.filter(x => String(x) !== String(id))].slice(0, 12);
      localStorage.setItem(key, JSON.stringify(items));
    },
    get() {
      return JSON.parse(localStorage.getItem("asf_recently_viewed") || "[]");
    }
  };

  // Make product links register recently viewed items.
  document.addEventListener("click", e => {
    const link = e.target.closest('a[href*="product"]');
    if (!link) return;
    const match = link.href.match(/[?&](?:id|product)=([^&#]+)/i);
    if (match) window.ASFRecentlyViewed.add(decodeURIComponent(match[1]));
  });

  bindImageFallbacks();
  new MutationObserver(bindImageFallbacks).observe(document.documentElement, {
    childList: true, subtree: true
  });
})();
