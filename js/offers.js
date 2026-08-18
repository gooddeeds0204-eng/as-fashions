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
    { id: 'promo-1', eyebrow: 'New Season', title: 'New Styles', subtitle: 'Up to 70% Off', ctaLabel: 'Shop Now', link: 'category.html?filter=new', tone: 'tone-a', img: 'https://picsum.photos/seed/asf-promo-newseason/500/300' },
    { id: 'promo-2', eyebrow: 'Limited Time Offer', title: 'Extra 10% Off', subtitle: 'On Prepaid Orders', ctaLabel: 'Shop Now', link: 'category.html', tone: 'tone-b', img: '' },
    { id: 'promo-3', eyebrow: 'Student Discount', title: 'Extra 15% Off', subtitle: 'Verify with Student ID', ctaLabel: 'Get Discount', link: 'category.html', tone: 'tone-c', img: 'https://picsum.photos/seed/asf-promo-student/500/300' }
  ];

  function getCoupons() {
    try {
      var raw = localStorage.getItem('asf_admin_coupons');
      var adminCoupons = raw ? JSON.parse(raw) : [];
      var activeAdmin = adminCoupons.filter(function (c) { return c.active; }).map(function (c) {
        return {
          code: c.code,
          type: c.type,
          value: c.value,
          minOrder: c.minOrder || 0,
          label: (c.type === 'percent' ? c.value + '% off' : '₹' + c.value + ' off') + ' on orders above ₹' + (c.minOrder || 0)
        };
      });
      return COUPONS.concat(activeAdmin);
    } catch (e) {
      return COUPONS;
    }
  }

  function getPromoBanners() {
    try {
      var raw = localStorage.getItem('asf_admin_banners');
      var adminBanners = raw ? JSON.parse(raw) : [];
      var activeAdmin = adminBanners.filter(function (b) { return b.active; }).map(function (b, i) {
        var tones = ['tone-a', 'tone-b', 'tone-c'];
        return {
          id: b.id,
          eyebrow: 'Special Offer',
          title: b.title,
          subtitle: b.subtitle,
          ctaLabel: b.cta || 'Shop Now',
          link: b.link || 'category.html',
          tone: tones[i % tones.length],
          img: ''
        };
      });
      return activeAdmin.length ? activeAdmin : PROMO_BANNERS;
    } catch (e) {
      return PROMO_BANNERS;
    }
  }

  function validateCoupon(code, subtotal) {
    var couponsList = getCoupons();
    var coupon = couponsList.find(function (c) { return c.code.toLowerCase() === (code || '').trim().toLowerCase(); });
    if (!coupon) {
      return { valid: false, message: 'Invalid coupon code' };
    }
    if (subtotal < coupon.minOrder) {
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
