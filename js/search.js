/**
 * AS FASHIONS — Search
 * Combines category + product search into one ranked suggestion list.
 * UI (app.js) calls ASF.search.suggest(query) for the typeahead dropdown
 * and ASF.search.runSearch(query) when the user hits Enter.
 */
(function (global) {
  'use strict';

  function suggest(query, limit) {
    limit = limit || 8;
    var q = (query || '').trim();
    if (!q) return { categories: [], products: [] };

    var catApi = global.ASF && global.ASF.categories;
    var prodApi = global.ASF && global.ASF.products;

    var categories = catApi ? catApi.searchCategories(q).slice(0, limit) : [];
    var products = prodApi ? prodApi.searchProducts(q).slice(0, limit) : [];

    return { categories: categories, products: products };
  }

  // Debounce helper so keystroke handlers in app.js don't re-run search on every character.
  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait || 200);
    };
  }

  function runSearch(query) {
    var prodApi = global.ASF && global.ASF.products;
    return prodApi ? prodApi.searchProducts(query) : [];
  }

  // Lightweight recent-searches list, stored client-side for a "recent" chip row.
  var RECENT_KEY = 'asf_recent_searches';

  function getRecent() {
    try {
      var raw = localStorage.getItem(RECENT_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function pushRecent(query) {
    var q = (query || '').trim();
    if (!q) return;
    var recent = getRecent().filter(function (r) { return r.toLowerCase() !== q.toLowerCase(); });
    recent.unshift(q);
    recent = recent.slice(0, 8);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(recent)); } catch (e) {}
    return recent;
  }

  global.ASF = global.ASF || {};
  global.ASF.search = {
    suggest: suggest,
    runSearch: runSearch,
    debounce: debounce,
    getRecent: getRecent,
    pushRecent: pushRecent
  };
})(window);
