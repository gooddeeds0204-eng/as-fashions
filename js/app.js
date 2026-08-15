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
        '<div class="category-swatch" style="background:' + ui.colorFromString(top.id) + '; background-image:url(https://picsum.photos/seed/' + encodeURIComponent(top.id) + '/160/160); background-size:cover; background-position:center;"></div>' +
        '<p>' + top.name + '</p>';
      el.appendChild(card);
    });
  }

  function initHeroCarousel() {
    var slides = document.querySelectorAll('#heroCarousel .hero-slide');
    if (!slides.length) return;
    var dotsWrap = document.getElementById('heroDots');
    if (dotsWrap) {
      slides.forEach(function (s, i) {
        var dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', function () { showSlide(i); });
        dotsWrap.appendChild(dot);
      });
    }
    var current = 0;
    function showSlide(idx) {
      slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.hero-dot').forEach(function (d, i) { d.classList.toggle('active', i === idx); });
      }
      current = idx;
    }
    setInterval(function () { showSlide((current + 1) % slides.length); }, 5000);
  }

  function initCountdown() {
    var el = document.getElementById('countdown');
    if (!el) return;
    // Counts down to the next local midnight, then wraps — always shows a
    // live, moving countdown without needing a fixed sale end-date wired up.
    function tick() {
      var now = new Date();
      var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      var diff = Math.max(0, midnight - now);
      var h = Math.floor(diff / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      var pad = function (n) { return String(n).padStart(2, '0'); };
      var hEl = document.getElementById('cdHours');
      var mEl = document.getElementById('cdMinutes');
      var sEl = document.getElementById('cdSeconds');
      if (hEl) hEl.textContent = pad(h);
      if (mEl) mEl.textContent = pad(m);
      if (sEl) sEl.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
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
    safeRun('renderRail:trending', function () {
      var list = prodApi.getBestsellers();
      ui.renderProductGrid('trendingRail', list.length ? list.slice().reverse() : prodApi.getAllProducts().slice(0, 8), { limit: 8 });
    });
    safeRun('renderRail:bestsellers', function () {
      var list = prodApi.getBestsellers();
      ui.renderProductGrid('bestsellersRail', list.length ? list : prodApi.getAllProducts().slice(8, 16), { limit: 8 });
    });
    safeRun('bindProductCardEvents', function () { ui.bindProductCardEvents(document.body); });
    safeRun('initHeroCarousel', initHeroCarousel);
    safeRun('initCountdown', initCountdown);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
