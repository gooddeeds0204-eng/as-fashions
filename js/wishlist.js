/**
 * AS FASHIONS — Wishlist
 * Persists to localStorage under 'asf_wishlist'. Fires 'asf:wishlist-updated'
 * on window whenever it changes.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'asf_wishlist';

  function readWishlist() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Wishlist read failed', e);
      return [];
    }
  }

  function writeWishlist(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error('Wishlist write failed', e);
    }
    global.dispatchEvent(new CustomEvent('asf:wishlist-updated', { detail: { ids: ids } }));
  }

  function isWishlisted(productId) {
    return readWishlist().indexOf(productId) !== -1;
  }

  function add(productId) {
    var ids = readWishlist();
    if (ids.indexOf(productId) === -1) ids.push(productId);
    writeWishlist(ids);
    return ids;
  }

  function remove(productId) {
    var ids = readWishlist().filter(function (id) { return id !== productId; });
    writeWishlist(ids);
    return ids;
  }

  function toggle(productId) {
    return isWishlisted(productId) ? remove(productId) : add(productId);
  }

  function getIds() {
    return readWishlist();
  }

  function getProducts() {
    var productsApi = global.ASF && global.ASF.products;
    if (!productsApi) return [];
    return readWishlist()
      .map(function (id) { return productsApi.getProductById(id); })
      .filter(Boolean);
  }

  function getCount() {
    return readWishlist().length;
  }

  global.ASF = global.ASF || {};
  global.ASF.wishlist = {
    isWishlisted: isWishlisted,
    add: add,
    remove: remove,
    toggle: toggle,
    getIds: getIds,
    getProducts: getProducts,
    getCount: getCount
  };
})(window);
