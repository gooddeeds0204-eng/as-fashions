/**
 * AS FASHIONS — App
 * Boots the homepage: mega-menu, hero, promo strip, category rail,
 * product rails (New Arrivals / Bestsellers / Sale), cart drawer,
 * wishlist count, and search typeahead.
 */
(function () {
  'use strict';

  var catApi = window.ASF.categories;
  var prodApi = window.ASF.products;
  var cartApi = window.ASF.cart;
  var wishApi = window.ASF.wishlist;
  var searchApi = window.ASF.search;
  var offersApi = window.ASF.offers;

  var money = function (n) { return '\u20B9' + Number(n).toLocaleString('en-IN'); };

  /* ---------- Mega menu ---------- */
  function renderMegaMenu() {
    var nav = document.getElementById('mainNav');
    if (!nav) return;
    nav.innerHTML = '';

    var swatchColors = ['#D98E2E', '#6E1F2B', '#3F5B4B', '#274472', '#8A6D3B', '#B25A45', '#4C4A55', '#7A8C6E', '#A9445B', '#5C6E91'];

    catApi.CATEGORY_TREE.forEach(function (top, i) {
      var item = document.createElement('div');
      item.className = 'nav-item';

      var link = document.createElement('a');
      link.href = '#' + top.slug;
      link.className = 'nav-link';
      link.textContent = top.name;
      item.appendChild(link);

      if (top.children && top.children.length) {
        var panel = document.createElement('div');
        panel.className = 'mega-panel';

        top.children.forEach(function (section) {
          var col = document.createElement('div');
          col.className = 'mega-col';

          var heading = document.createElement('p');
          heading.className = 'mega-col-heading';
          heading.textContent = section.name;
          col.appendChild(heading);

          var list = document.createElement('ul');
          (section.children || []).slice(0, 9).forEach(function (leaf, idx) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + leaf.slug;
            var chip = document.createElement('span');
            chip.className = 'swatch-chip';
            chip.style.background = swatchColors[(idx + i) % swatchColors.length];
            a.appendChild(chip);
            a.appendChild(document.createTextNode(leaf.name));
            li.appendChild(a);
            list.appendChild(li);
          });
          col.appendChild(list);
          panel.appendChild(col);
        });

        item.appendChild(panel);
      }

      nav.appendChild(item);
    });
  }

  /* ---------- Product card ---------- */
  function productCard(p) {
    var wished = wishApi.isWishlisted(p.id);
    var card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-media">' +
        '<div class="product-media-fallback" style="background:' + colorFromString(p.id) + '"></div>' +
        '<button class="wish-btn' + (wished ? ' active' : '') + '" data-id="' + p.id + '" aria-label="Add to wishlist">&#9825;</button>' +
        (p.discountPct >= 30 ? '<span class="tag tag-sale">' + p.discountPct + '% OFF</span>' : '') +
        (p.isNew ? '<span class="tag tag-new">NEW</span>' : '') +
      '</div>' +
      '<div class="product-info">' +
        '<p class="product-brand">' + p.brand + '</p>' +
        '<p class="product-name">' + p.name + '</p>' +
        '<p class="product-price">' + money(p.price) +
          (p.discountPct > 0 ? ' <span class="mrp">' + money(p.mrp) + '</span>' : '') +
        '</p>' +
        '<p class="product-rating">&#9733; ' + p.rating + ' (' + p.ratingCount + ')</p>' +
        '<button class="btn btn-add" data-id="' + p.id + '">Add to Bag</button>' +
      '</div>';
    return card;
  }

  function colorFromString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    var hue = Math.abs(hash) % 360;
    return 'hsl(' + hue + ', 32%, 88%)';
  }

  function renderRail(containerId, products) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    products.slice(0, 8).forEach(function (p) { el.appendChild(productCard(p)); });
  }

  /* ---------- Promo banners ---------- */
  function renderPromos() {
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

  /* ---------- Category rail (top-level) ---------- */
  function renderCategoryRail() {
    var el = document.getElementById('categoryRail');
    if (!el) return;
    el.innerHTML = '';
    catApi.CATEGORY_TREE.forEach(function (top, i) {
      var card = document.createElement('a');
      card.className = 'category-card';
      card.href = '#' + top.slug;
      card.innerHTML =
        '<div class="category-swatch" style="background:' + colorFromString(top.id) + '"></div>' +
        '<p>' + top.name + '</p>';
      el.appendChild(card);
    });
  }

  /* ---------- Cart badge + drawer ---------- */
  function updateCartBadge() {
    var badge = document.getElementById('cartCount');
    if (badge) badge.textContent = cartApi.getItemCount();
  }
  function updateWishBadge() {
    var badge = document.getElementById('wishCount');
    if (badge) badge.textContent = wishApi.getCount();
  }

  function renderCartDrawer() {
    var body = document.getElementById('cartDrawerBody');
    var totalEl = document.getElementById('cartSubtotal');
    if (!body) return;
    var summary = cartApi.getSummary();
    body.innerHTML = '';
    if (!summary.lines.length) {
      body.innerHTML = '<p class="empty-state">Your bag is empty.</p>';
    } else {
      summary.lines.forEach(function (line) {
        if (!line.product) return;
        var row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML =
          '<div class="cart-row-media" style="background:' + colorFromString(line.product.id) + '"></div>' +
          '<div class="cart-row-info">' +
            '<p class="cart-row-name">' + line.product.name + '</p>' +
            '<p class="cart-row-meta">' + (line.size || '') + (line.color ? ' \u00b7 ' + line.color : '') + ' \u00b7 Qty ' + line.qty + '</p>' +
            '<p class="cart-row-price">' + money(line.lineTotal) + '</p>' +
          '</div>' +
          '<button class="cart-row-remove" data-id="' + line.product.id + '" data-size="' + (line.size || '') + '" data-color="' + (line.color || '') + '">Remove</button>';
        body.appendChild(row);
      });
    }
    if (totalEl) totalEl.textContent = money(summary.subtotal);
  }

  function toggleDrawer(open) {
    var drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.toggle('open', open);
  }

  /* ---------- Search ---------- */
  function renderSearchResults(query) {
    var box = document.getElementById('searchResults');
    if (!box) return;
    var results = searchApi.suggest(query, 6);
    if (!query.trim()) { box.innerHTML = ''; box.classList.remove('open'); return; }

    var html = '';
    if (results.categories.length) {
      html += '<p class="search-group-label">Categories</p>';
      results.categories.forEach(function (c) {
        html += '<a class="search-row" href="#' + c.slug + '">' + c.name + '</a>';
      });
    }
    if (results.products.length) {
      html += '<p class="search-group-label">Products</p>';
      results.products.forEach(function (p) {
        html += '<a class="search-row" href="#product-' + p.id + '">' + p.brand + ' ' + p.name + '</a>';
      });
    }
    if (!html) html = '<p class="empty-state">No results found</p>';
    box.innerHTML = html;
    box.classList.add('open');
  }

  /* ---------- Wire up events ---------- */
  function bindEvents() {
    document.body.addEventListener('click', function (e) {
      var addBtn = e.target.closest('.btn-add');
      if (addBtn) {
        cartApi.addItem(addBtn.dataset.id, { qty: 1 });
        toggleDrawer(true);
        return;
      }
      var wishBtn = e.target.closest('.wish-btn');
      if (wishBtn) {
        wishApi.toggle(wishBtn.dataset.id);
        wishBtn.classList.toggle('active');
        return;
      }
      var removeBtn = e.target.closest('.cart-row-remove');
      if (removeBtn) {
        cartApi.removeItem(removeBtn.dataset.id, removeBtn.dataset.size, removeBtn.dataset.color);
        return;
      }
      if (e.target.closest('#cartToggle')) { toggleDrawer(true); return; }
      if (e.target.closest('#cartClose') || e.target.closest('.drawer-backdrop')) { toggleDrawer(false); return; }
      if (e.target.closest('#mobileMenuToggle')) {
        document.getElementById('mainNav').classList.toggle('open');
        return;
      }
    });

    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', searchApi.debounce(function (e) {
        renderSearchResults(e.target.value);
      }, 180));
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          searchApi.pushRecent(e.target.value);
          renderSearchResults(e.target.value);
        }
      });
    }

    window.addEventListener('asf:cart-updated', function () {
      updateCartBadge();
      renderCartDrawer();
    });
    window.addEventListener('asf:wishlist-updated', updateWishBadge);
  }

  /* ---------- Boot ---------- */
  function init() {
    renderMegaMenu();
    renderPromos();
    renderCategoryRail();
    renderRail('newArrivalsRail', prodApi.getNewArrivals().length ? prodApi.getNewArrivals() : prodApi.getAllProducts());
    renderRail('bestsellersRail', prodApi.getBestsellers().length ? prodApi.getBestsellers() : prodApi.getAllProducts().slice(8, 16));
    renderRail('saleRail', prodApi.getSaleProducts());
    updateCartBadge();
    updateWishBadge();
    renderCartDrawer();
    bindEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
