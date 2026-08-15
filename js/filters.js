/**
 * AS FASHIONS — Filters
 * Pure functions that take a product list + a filter state object and
 * return the filtered/sorted list. No DOM here — app.js owns rendering.
 *
 * Filter state shape:
 * {
 *   categoryId: 'men-clothing-jeans' | null,
 *   priceMin, priceMax,
 *   sizes: ['M','L'],
 *   colors: ['Black'],
 *   minDiscount: 0-100,
 *   sort: 'popularity' | 'price-asc' | 'price-desc' | 'discount' | 'newest' | 'rating'
 * }
 */
(function (global) {
  'use strict';

  function applyFilters(products, state) {
    state = state || {};
    var result = products.slice();

    if (state.categoryId) {
      var catApi = global.ASF && global.ASF.categories;
      var index = catApi ? catApi.CATEGORY_INDEX : {};
      result = result.filter(function (p) {
        if (p.categoryId === state.categoryId) return true;
        var entry = index[p.categoryId];
        return entry && entry.ancestors && entry.ancestors.indexOf(state.categoryId) !== -1;
      });
    }

    if (typeof state.priceMin === 'number') {
      result = result.filter(function (p) { return p.price >= state.priceMin; });
    }
    if (typeof state.priceMax === 'number') {
      result = result.filter(function (p) { return p.price <= state.priceMax; });
    }

    if (state.sizes && state.sizes.length) {
      result = result.filter(function (p) {
        return p.sizes.some(function (s) { return state.sizes.indexOf(s) !== -1; });
      });
    }

    if (state.colors && state.colors.length) {
      result = result.filter(function (p) {
        return p.colors.some(function (c) { return state.colors.indexOf(c) !== -1; });
      });
    }

    if (typeof state.minDiscount === 'number' && state.minDiscount > 0) {
      result = result.filter(function (p) { return p.discountPct >= state.minDiscount; });
    }

    if (state.gender) {
      result = result.filter(function (p) { return p.gender === state.gender; });
    }

    return sortProducts(result, state.sort);
  }

  function sortProducts(products, sort) {
    var result = products.slice();
    switch (sort) {
      case 'price-asc':
        result.sort(function (a, b) { return a.price - b.price; });
        break;
      case 'price-desc':
        result.sort(function (a, b) { return b.price - a.price; });
        break;
      case 'discount':
        result.sort(function (a, b) { return b.discountPct - a.discountPct; });
        break;
      case 'rating':
        result.sort(function (a, b) { return b.rating - a.rating; });
        break;
      case 'newest':
        result.sort(function (a, b) { return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0); });
        break;
      case 'popularity':
      default:
        result.sort(function (a, b) { return b.ratingCount - a.ratingCount; });
    }
    return result;
  }

  // Derive available filter facets (sizes/colors/price range) from a product list,
  // so the UI only shows options that actually exist in the current result set.
  function getFacets(products) {
    var sizes = new Set();
    var colors = new Set();
    var min = Infinity, max = 0;
    products.forEach(function (p) {
      p.sizes.forEach(function (s) { sizes.add(s); });
      p.colors.forEach(function (c) { colors.add(c); });
      min = Math.min(min, p.price);
      max = Math.max(max, p.price);
    });
    return {
      sizes: Array.from(sizes),
      colors: Array.from(colors),
      priceMin: isFinite(min) ? min : 0,
      priceMax: max
    };
  }

  global.ASF = global.ASF || {};
  global.ASF.filters = {
    applyFilters: applyFilters,
    sortProducts: sortProducts,
    getFacets: getFacets
  };
})(window);

/* AS FASHIONS — filters UX */
(function () {
  document.addEventListener("click", e => {
    const clear = e.target.closest("[data-clear-filters], .clear-filters, .filter-clear");
    if (!clear) return;
    document.querySelectorAll("input[type=checkbox], input[type=radio]").forEach(i => i.checked = false);
    document.querySelectorAll("select").forEach(s => s.selectedIndex = 0);
    document.dispatchEvent(new CustomEvent("asf:filters-cleared"));
  });
})();
