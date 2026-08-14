/**
 * AS FASHIONS — Offers & Coupons
 * Simple client-side coupon validation for demo purposes. In production,
 * coupon validation should happen server-side at checkout.
 */
(function (global) {
  'use strict';

  var COUPONS = [
    { code: 'WELCOME10', type: 'percent', value: 10, minOrder: 999, label: 'Flat 10% off on your first order' },
    { code: 'AS300', type: 'flat', value: 300, minOrder: 1999, label: '₹300 off on orders above ₹1999' },
    { code: 'BIGSALE20', type: 'percent', value: 20, minOrder: 2999, label: '20% off on orders above ₹2999' }
  ];

  var PROMO_BANNERS = [
    { id: 'promo-1', title: 'End of Season Sale', subtitle: 'Up to 70% off', ctaLabel: 'Shop Sale', link: '#sale' },
    { id: 'promo-2', title: 'New Season, New Edit', subtitle: 'Fresh arrivals every week', ctaLabel: 'Explore', link: '#new-arrivals' },
    { id: 'promo-3', title: 'Festive Edit', subtitle: 'Ethnic wear for every occasion', ctaLabel: 'Shop Ethnic', link: '#collections' }
  ];

  function getCoupons() {
    return COUPONS;
  }

  function getPromoBanners() {
    return PROMO_BANNERS;
  }

  function validateCoupon(code, subtotal) {
    var coupon = COUPONS.find(function (c) { return c.code.toLowerCase() === (code || '').trim().toLowerCase(); });
    if (!coupon) {
      return { valid: false, message: 'Invalid coupon code' };
    }
    if (subtotal < coupon.minOrder) {
      return { valid: false, message: 'Add items worth ₹' + (coupon.minOrder - subtotal) + ' more to use this coupon' };
    }
    var discount = coupon.type === 'percent'
      ? Math.round(subtotal * (coupon.value / 100))
      : coupon.value;
    return { valid: true, coupon: coupon, discount: discount, message: coupon.label + ' applied' };
  }

  global.ASF = global.ASF || {};
  global.ASF.offers = {
    getCoupons: getCoupons,
    getPromoBanners: getPromoBanners,
    validateCoupon: validateCoupon
  };
})(window);
