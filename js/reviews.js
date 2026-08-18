/**
 * AS FASHIONS — Reviews (demo)
 * Reviews live in localStorage under this browser only (not shared across
 * visitors — that needs a backend). Product star ratings shown elsewhere
 * on the site come from the seeded catalog data (products.js), not these
 * reviews, unless you wire it up otherwise.
 */
(function (global) {
  'use strict';

  var REVIEWS_KEY = 'asf_reviews';

  function readAll() {
    try {
      var raw = localStorage.getItem(REVIEWS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function writeAll(all) {
    try { localStorage.setItem(REVIEWS_KEY, JSON.stringify(all)); return true; }
    catch (e) { console.error('Could not save review', e); return false; }
  }

  function getReviews(productId) {
    var all = readAll();
    return all[productId] || [];
  }

  function addReview(productId, review) {
    var all = readAll();
    if (!all[productId]) all[productId] = [];
    var user = global.ASF.auth ? global.ASF.auth.getCurrentUser() : null;
    all[productId].unshift({
      id: 'rev-' + Date.now(),
      name: review.name || (user ? user.name : 'Anonymous'),
      rating: review.rating,
      comment: review.comment,
      createdAt: new Date().toISOString()
    });
    if (!writeAll(all)) return { success: false, message: 'Could not save review (storage full?).' };
    return { success: true, reviews: all[productId] };
  }

  function getAverageRating(productId) {
    var reviews = getReviews(productId);
    if (!reviews.length) return null;
    var sum = reviews.reduce(function (s, r) { return s + r.rating; }, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  }

  global.ASF = global.ASF || {};
  global.ASF.reviews = {
    getReviews: getReviews,
    addReview: addReview,
    getAverageRating: getAverageRating
  };
})(window);
