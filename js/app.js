/**
 * AS FASHIONS — Homepage
 * Renders hero-adjacent sections only: hero grid, promo strip, category
 * rail, subcategory rail, and product rails. The shared header, mega-menu,
 * search, wishlist/cart badges, and cart drawer are all owned by
 * js/header.js (loaded before this file).
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
    try { 
      fn(); 
    } catch (err) { 
      showErrorBanner(label, err); 
    }
  }

  function renderPromos(offersApi) {
    var el = document.getElementById('promoStrip');
    if (!el || !offersApi || typeof offersApi.getPromoBanners !== 'function') return;
    el.innerHTML = '';
    offersApi.getPromoBanners().forEach(function (promo) {
      var card = document.createElement('a');
      card.className = 'promo-card ' + (promo.tone || 'tone-a');
      card.href = promo.link || '#';
      if (promo.img) {
        card.style.backgroundImage = 'linear-gradient(120deg, rgba(255,255,255,0.55), rgba(255,255,255,0.15)), url(' + promo.img + ')';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      }
      card.innerHTML =
        '<p class="promo-eyebrow">' + (promo.eyebrow || '') + '</p>' +
        '<p class="promo-title">' + (promo.title || '') + '</p>' +
        '<p class="promo-subtitle">' + (promo.subtitle || '') + '</p>' +
        '<span class="btn btn-primary" style="width:fit-content; padding:8px 16px; font-size:11px;">' + (promo.ctaLabel || 'Shop Now') + '</span>';
      el.appendChild(card);
    });
  }

  function renderCategoryRail(catApi, ui) {
    var el = document.getElementById('categoryRail');
    if (!el || !catApi || !Array.isArray(catApi.CATEGORY_TREE)) return;
    el.innerHTML = '';
    catApi.CATEGORY_TREE.forEach(function (top) {
      var card = document.createElement('a');
      card.className = 'category-card';
      card.href = 'category.html?cat=' + encodeURIComponent(top.id);
      var bgColor = (ui && typeof ui.colorFromString === 'function') ? ui.colorFromString(top.id) : '#efe6d4';
      card.innerHTML =
        '<div class="category-swatch" style="background:' + bgColor + '; background-image:url(https://picsum.photos/seed/' + encodeURIComponent(top.id) + '/160/160); background-size:cover; background-position:center;"></div>' +
        '<p>' + top.name + '</p>';
      el.appendChild(card);
    });
  }

  function renderSubcatRail(catApi) {
    var el = document.getElementById('subcatRail');
    if (!el || !catApi || typeof catApi.getCategoryById !== 'function') return;
    var ids = [
      'men-clothing-t-shirts', 'men-clothing-shirts', 'men-clothing-jeans',
      'women-western-wear-dresses', 'men-ethnic-wear-kurtas', 'women-indian-wear-sarees',
      'men-clothing-jackets', 'men-footwear-sneakers', 'men-accessories-watches',
      'women-bags-handbags', 'men-accessories-sunglasses'
    ];
    el.innerHTML = '';
    ids.forEach(function (id) {
      var entry = catApi.getCategoryById(id);
      if (!entry) return;
      var card = document.createElement('a');
      card.className = 'subcat-card';
      card.href = 'category.html?cat=' + encodeURIComponent(id);
      card.innerHTML =
        '<div class="subcat-swatch" style="background-image:url(https://picsum.photos/seed/' + encodeURIComponent(id) + '/160/160)"></div>' +
        '<p>' + entry.name + '</p>';
      el.appendChild(card);
    });
    var viewAll = document.createElement('a');
    viewAll.className = 'subcat-card';
    viewAll.href = 'category.html';
    viewAll.innerHTML = '<div class="subcat-swatch view-all">\u2637</div><p>View All</p>';
    el.appendChild(viewAll);
  }

  function initHeroGrid() {
    var imageEl = document.getElementById('heroImage');
    var dotsWrap = document.getElementById('heroDots');
    if (!imageEl) return;

    var sets = [
      {
        title: 'Fashion That<br><span>Defines You</span>',
        sub: 'Curated styles for every you',
        discount: '50\u201380% OFF',
        img: 'https://picsum.photos/seed/asf-hero-main-1/1200/900'
      },
      {
        title: 'Style That<br><span>Feels Like You</span>',
        sub: 'Fresh arrivals every week',
        discount: 'UP TO 65% OFF',
        img: 'https://picsum.photos/seed/asf-hero-main-2/1200/900'
      },
      {
        title: 'Elevate Your<br><span>Everyday Look</span>',
        sub: 'Handpicked essentials, new every season',
        discount: 'FLAT 40% OFF',
        img: 'https://picsum.photos/seed/asf-hero-main-3/1200/900'
      }
    ];

    var current = 0;
    var slideTimer = null;

    function render(idx) {
      var set = sets[idx];
      var titleEl = document.getElementById('heroTitle');
      var subEl = document.getElementById('heroSub');
      var discEl = document.getElementById('heroDiscount');

      if (titleEl) titleEl.innerHTML = set.title;
      if (subEl) subEl.textContent = set.sub;
      if (discEl) discEl.textContent = set.discount;
      imageEl.style.backgroundImage = 'url(' + set.img + ')';

      if (dotsWrap) {
        dotsWrap.querySelectorAll('.hero-dot').forEach(function (d, i) {
          d.classList.toggle('active', i === idx);
        });
      }
      current = idx;
    }

    function startAutoSlide() {
      if (slideTimer) clearInterval(slideTimer);
      slideTimer = setInterval(function () {
        render((current + 1) % sets.length);
      }, 6000);
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      sets.forEach(function (s, i) {
        var dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', function () {
          render(i);
          startAutoSlide();
        });
        dotsWrap.appendChild(dot);
      });
    }

    var prevBtn = document.getElementById('heroPrev');
    var nextBtn = document.getElementById('heroNext');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        render((current - 1 + sets.length) % sets.length);
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        render((current + 1) % sets.length);
        startAutoSlide();
      });
    }

    render(0);
    startAutoSlide();
  }

  function initCountdown() {
    var el = document.getElementById('countdown');
    if (!el) return;

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
    if (!ui) { showErrorBanner('boot', 'js/ui.js did not load — check the script path and load order.'); return; }

    safeRun('initHeroGrid', initHeroGrid);
    safeRun('renderPromos', function () { renderPromos(offersApi); });
    safeRun('renderCategoryRail', function () { renderCategoryRail(catApi, ui); });
    safeRun('renderSubcatRail', function () { renderSubcatRail(catApi); });

    safeRun('renderRail:newArrivals', function () {
      var list = (typeof prodApi.getNewArrivals === 'function') ? prodApi.getNewArrivals() : [];
      var fallback = (typeof prodApi.getAllProducts === 'function') ? prodApi.getAllProducts() : [];
      ui.renderProductGrid('newArrivalsRail', list.length ? list : fallback, { limit: 8 });
    });

    safeRun('renderRail:trending', function () {
      var list = [];
      if (typeof prodApi.getTrending === 'function') {
        list = prodApi.getTrending();
      } else if (typeof prodApi.getBestsellers === 'function') {
        list = prodApi.getBestsellers().slice().reverse();
      }
      var fallback = (typeof prodApi.getAllProducts === 'function') ? prodApi.getAllProducts().slice(0, 8) : [];
      ui.renderProductGrid('trendingRail', list.length ? list : fallback, { limit: 8 });
    });

    safeRun('renderRail:bestsellers', function () {
      var list = (typeof prodApi.getBestsellers === 'function') ? prodApi.getBestsellers() : [];
      var fallback = (typeof prodApi.getAllProducts === 'function') ? prodApi.getAllProducts().slice(8, 16) : [];
      ui.renderProductGrid('bestsellersRail', list.length ? list : fallback, { limit: 8 });
    });

    safeRun('bindProductCardEvents', function () { 
      if (typeof ui.bindProductCardEvents === 'function') {
        ui.bindProductCardEvents(document.body); 
      }
    });

    safeRun('initCountdown', initCountdown);

    safeRun('observeSectionReveal', function () {
      if (typeof ui.observeReveal === 'function') {
        ui.observeReveal(document.querySelectorAll('.reveal-section'));
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
