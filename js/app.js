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


/* AS FASHIONS: premium flash-sale countdown */
(function(){
  const root = document.querySelector('.asf-countdown');
  if (!root) return;
  let end = Number(localStorage.getItem('asf_flash_end'));
  if (!end || end < Date.now()) {
    end = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('asf_flash_end', String(end));
  }
  function tick(){
    let diff = Math.max(0, end - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const set = (key,val) => {
      const el = root.querySelector('[data-time="'+key+'"]');
      if (el) el.textContent = String(val).padStart(2,'0');
    };
    set('hours',h); set('minutes',m); set('seconds',s);
  }
  tick();
  setInterval(tick,1000);
})();
