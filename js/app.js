/**
 * AS FASHIONS — Homepage Application Controller
 */
(function () {
  'use strict';

  function renderPromos(offersApi) {
    var el = document.getElementById('promoStrip');
    if (!el || !offersApi || typeof offersApi.getPromoBanners !== 'function') return;
    el.innerHTML = '';
    offersApi.getPromoBanners().forEach(function (promo) {
      var card = document.createElement('a');
      card.className = 'promo-card ' + (promo.tone || 'tone-a');
      card.href = promo.link || '#';
      if (promo.img) {
        card.style.backgroundImage = 'linear-gradient(120deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3)), url(' + promo.img + ')';
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
        '<div class="category-swatch" style="background:' + bgColor + '; background-image:url(https://picsum.photos/seed/' + encodeURIComponent(top.id) + '/180/180); background-size:cover; background-position:center;"></div>' +
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
        '<div class="subcat-swatch" style="background-image:url(https://picsum.photos/seed/' + encodeURIComponent(id) + '/160/160); background-size:cover; background-position:center;"></div>' +
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
        title: 'Curated Fashion<br><span>For Every You</span>',
        sub: 'Handpicked styles from premium labels',
        discount: '50\u201380% OFF',
        img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=80'
      },
      {
        title: 'Statement Fits<br><span>Fresh Drops</span>',
        sub: 'Elevate your seasonal wardrobe today',
        discount: 'UP TO 65% OFF',
        img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=80'
      },
      {
        title: 'Modern Luxury<br><span>Effortless Style</span>',
        sub: 'Minimal essentials to standout ethnics',
        discount: 'FLAT 40% OFF',
        img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&auto=format&fit=crop&q=80'
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
    if (prevBtn) prevBtn.addEventListener('click', function () { render((current - 1 + sets.length) % sets.length); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { render((current + 1) % sets.length); startAutoSlide(); });

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

    if (!catApi || !prodApi || !ui) return;

    initHeroGrid();
    renderPromos(offersApi);
    renderCategoryRail(catApi, ui);
    renderSubcatRail(catApi);

    var newItems = (typeof prodApi.getNewArrivals === 'function') ? prodApi.getNewArrivals() : [];
    var allItems = (typeof prodApi.getAllProducts === 'function') ? prodApi.getAllProducts() : [];
    var bestItems = (typeof prodApi.getBestsellers === 'function') ? prodApi.getBestsellers() : [];

    ui.renderProductGrid('newArrivalsRail', newItems.length ? newItems : allItems, { limit: 8 });
    ui.renderProductGrid('trendingRail', bestItems.length ? bestItems.slice().reverse() : allItems.slice(0, 8), { limit: 8 });
    ui.renderProductGrid('bestsellersRail', bestItems.length ? bestItems : allItems.slice(8, 16), { limit: 8 });

    ui.bindProductCardEvents(document.body);
    initCountdown();
    ui.observeReveal(document.querySelectorAll('.reveal-section'));
  }

  document.addEventListener('DOMContentLoaded', init);
})();
