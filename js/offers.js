/**
 * AS FASHIONS — Offers & Coupons Engine
 */
(function (global) {
  'use strict';

  var COUPONS = [
    { code: 'WELCOME10', type: 'percent', value: 10, minOrder: 999, label: 'Flat 10% off on your first order' },
    { code: 'AS300', type: 'flat', value: 300, minOrder: 1999, label: '₹300 off on orders above ₹1999' },
    { code: 'BIGSALE20', type: 'percent', value: 20, minOrder: 2999, label: '20% off on orders above ₹2999' }
  ];

  var PROMO_BANNERS = [
    { id: 'promo-1', eyebrow: 'New Season', title: 'New Styles', subtitle: 'Up to 70% Off', ctaLabel: 'Shop Now', link: 'category.html?filter=new', tone: 'tone-a' },
    { id: 'promo-2', eyebrow: 'Limited Time Offer', title: 'Extra 10% Off', subtitle: 'On Prepaid Orders', ctaLabel: 'Shop Now', link: 'category.html', tone: 'tone-b' },
    { id: 'promo-3', eyebrow: 'Student Discount', title: 'Extra 15% Off', subtitle: 'Verify with Student ID', ctaLabel: 'Get Discount', link: 'category.html', tone: 'tone-c' }
  ];

  var COUPON_OVERRIDES_KEY = 'asf_admin_coupons';
  var BANNER_OVERRIDES_KEY = 'asf_admin_banners';

  function readOverrides(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function getCoupons() {
    var adminCoupons = readOverrides(COUPON_OVERRIDES_KEY);
    if (Array.isArray(adminCoupons) && adminCoupons.length) {
      return adminCoupons.map(function(c) {
        return Object.assign({}, c, { label: c.label || (c.type === 'percent' ? c.value + '% OFF' : '₹' + c.value + ' OFF') });
      });
    }
    return COUPONS;
  }

  function getPromoBanners() {
    var adminBanners = readOverrides(BANNER_OVERRIDES_KEY);
    if (Array.isArray(adminBanners) && adminBanners.length) {
      return adminBanners.filter(function(b) { return b.active !== false; });
    }
    return PROMO_BANNERS;
  }

  function validateCoupon(code, subtotal) {
    var coupon = getCoupons().find(function (c) {
      return c.code.toLowerCase() === (code || '').trim().toLowerCase();
    });
    if (!coupon) {
      return { valid: false, message: 'Invalid coupon code' };
    }
    if (coupon.minOrder && subtotal < coupon.minOrder) {
      return { valid: false, message: 'Add items worth ₹' + (coupon.minOrder - subtotal) + ' more to use this coupon' };
    }
    var discount = coupon.type === 'percent'
      ? Math.round(subtotal * (coupon.value / 100))
      : coupon.value;
    return { valid: true, coupon: coupon, discount: discount, message: (coupon.label || coupon.code) + ' applied' };
  }

  global.ASF = global.ASF || {};
  global.ASF.offers = {
    getCoupons: getCoupons,
    getPromoBanners: getPromoBanners,
    validateCoupon: validateCoupon
  };
})(window);
