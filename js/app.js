/**
 * AS FASHIONS — Homepage Controller
 */
(function () {
  'use strict';

  function renderPromos(offersApi) {
    var el = document.getElementById('promoStrip');
    if (!el || !offersApi) return;
    el.innerHTML = '';
    offersApi.getPromoBanners().forEach(function (promo) {
      var card = document.createElement('a');
      card.className = 'promo-card ' + (promo.tone || 'tone-a');
      card.href = promo.link || 'category.html';
      card.innerHTML =
        '<p class="promo-eyebrow">' + (promo.eyebrow || 'Special Offer') + '</p>' +
        '<p class="promo-title">' + (promo.title || 'Curated Fit') + '</p>' +
        '<p class="promo-subtitle">' + (promo.subtitle || 'Shop modern styles') + '</p>' +
        '<span class="btn btn-primary" style="width:fit-content; padding:6px 14px; font-size:10px;">' + (promo.ctaLabel || 'Shop Now') + '</span>';
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
      card.innerHTML =
        '<div class="category-swatch" style="background-image:url(https://picsum.photos/seed/' + encodeURIComponent(top.id) + '/180/180); background-size:cover; background-position:center;"></div>' +
        '<p>' + top.name + '</p>';
      el.appendChild(card);
    });
  }

  function renderSubcatRail(catApi) {
    var el = document.getElementById('subcatRail');
    if (!el || !catApi) return;
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
        '<div class="subcat-swatch" style="background-image:url(https://picsum.photos/seed/' + encodeURIComponent(id) + '/160/160); background-size:cover;"></div>' +
        '<p>' + entry.name + '</p>';
      el.appendChild(card);
    });
    var viewAll = document.createElement('a');
    viewAll.className = 'subcat-card';
    viewAll.href = 'category.html';
    viewAll.innerHTML = '<div class="subcat-swatch view-all">➔</div><p>View All</p>';
    el.appendChild(viewAll);
  }

  function initHeroGrid() {
    var cardsWrap = document.getElementById('heroCatCards');
    var dotsWrap = document.getElementById('heroDots');
    if (!cardsWrap) return;

    var sets = [
      {
        title: 'Fashion That<br><span>Defines You</span>',
        sub: 'Curated styles for every you',
        discount: '50–80% OFF',
        cats: [
          { id: 'men', label: 'MEN', discount: '40-70% OFF', seed: 'asf-men' },
          { id: 'women', label: 'WOMEN', discount: '40-70% OFF', seed: 'asf-women' },
          { id: 'kids', label: 'KIDS', discount: '30-60% OFF', seed: 'asf-kids' },
          { id: 'footwear', label: 'FOOTWEAR', discount: '40-60% OFF', seed: 'asf-footwear' }
        ]
      },
      {
        title: 'Style That<br><span>Feels Like You</span>',
        sub: 'Fresh arrivals every week',
        discount: 'UP TO 65% OFF',
        cats: [
          { id: 'bags', label: 'BAGS', discount: '30-60% OFF', seed: 'asf-bags' },
          { id: 'accessories', label: 'ACCESSORIES', discount: '20-50% OFF', seed: 'asf-acc' },
          { id: 'sports', label: 'SPORTS', discount: '30-55% OFF', seed: 'asf-sports' },
          { id: 'winter-wear', label: 'WINTER WEAR', discount: '40-65% OFF', seed: 'asf-winter' }
        ]
      }
    ];

    var current = 0;
    function render(idx) {
      var set = sets[idx];
      var t = document.getElementById('heroTitle');
      var s = document.getElementById('heroSub');
      var d = document.getElementById('heroDiscount');
      if (t) t.innerHTML = set.title;
      if (s) s.textContent = set.sub;
      if (d) d.textContent = set.discount;

      cardsWrap.innerHTML = set.cats.map(function (c) {
        return '<a class="hero-cat-card" href="category.html?cat=' + encodeURIComponent(c.id) + '">' +
          '<img src="https://picsum.photos/seed/' + c.seed + '/400/600" alt="' + c.label + '">' +
          '<div class="hero-cat-card-content">' +
            '<p class="hero-cat-card-name">' + c.label + '</p>' +
            '<p class="hero-cat-card-discount">' + c.discount + '</p>' +
            '<p class="hero-cat-card-cta">Explore Now</p>' +
          '</div>' +
        '</a>';
      }).join('');

      if (dotsWrap) {
        dotsWrap.querySelectorAll('.hero-dot').forEach(function (dot, i) {
          dot.classList.toggle('active', i === idx);
        });
      }
      current = idx;
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      sets.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', function () { render(i); });
        dotsWrap.appendChild(dot);
      });
    }

    var prevBtn = document.getElementById('heroPrev');
    var nextBtn = document.getElementById('heroNext');
    if (prevBtn) prevBtn.addEventListener('click', function () { render((current - 1 + sets.length) % sets.length); });
    if (nextBtn) nextBtn.addEventListener('click', function () { render((current + 1) % sets.length); });

    render(0);
    setInterval(function () { render((current + 1) % sets.length); }, 6000);
  }

  function initCountdown() {
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

    if (!prodApi || !ui) return;

    initHeroGrid();
    if (offersApi) renderPromos(offersApi);
    if (catApi) {
      renderCategoryRail(catApi, ui);
      renderSubcatRail(catApi);
    }

    var all = prodApi.getAllProducts();
    var newItems = prodApi.getNewArrivals();
    var bestItems = prodApi.getBestsellers();

    ui.renderProductGrid('newArrivalsRail', newItems.length ? newItems : all.slice(0, 8), { limit: 8 });
    ui.renderProductGrid('trendingRail', bestItems.length ? bestItems : all.slice(8, 16), { limit: 8 });
    ui.renderProductGrid('bestsellersRail', all.slice(16, 24), { limit: 8 });

    ui.bindProductCardEvents(document.body);
    initCountdown();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
