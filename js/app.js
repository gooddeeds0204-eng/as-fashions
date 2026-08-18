/**
 * AS FASHIONS — Homepage Application Controller
 */
(function () {
  'use strict';

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
      'women-bags-handbags'
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
    viewAll.innerHTML = '<div class="subcat-swatch view-all">&#9776;</div><p>View All</p>';
    el.appendChild(viewAll);
  }

  function initHeroSlider() {
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

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      sets.forEach(function (s, i) {
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
    setInterval(function () {
      render((current + 1) % sets.length);
    }, 5000);
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

  function initHome() {
    var ASF = window.ASF || {};
    var catApi = ASF.categories;
    var prodApi = ASF.products;
    var ui = ASF.ui;

    if (!prodApi || !ui) return;

    initHeroSlider();
    initCountdown();

    if (catApi) {
      renderCategoryRail(catApi, ui);
      renderSubcatRail(catApi);
    }

    var allItems = prodApi.getAllProducts();
    var newItems = prodApi.getNewArrivals();
    var bestItems = prodApi.getBestsellers();

    ui.renderProductGrid('newArrivalsRail', newItems.length ? newItems : allItems, { limit: 8, reveal: false });
    ui.renderProductGrid('trendingRail', bestItems.length ? bestItems.slice().reverse() : allItems.slice(2, 10), { limit: 8, reveal: false });
    ui.renderProductGrid('bestsellersRail', bestItems.length ? bestItems : allItems.slice(4, 12), { limit: 8, reveal: false });

    ui.bindProductCardEvents(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHome);
  } else {
    initHome();
  }
})();
