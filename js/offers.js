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

/* AS FASHIONS — shared flash-sale timer */
(function () {
  const nodes = document.querySelectorAll("[data-asf-hour], [data-asf-min], [data-asf-sec]");
  if (!nodes.length) return;

  let end = Number(localStorage.getItem("asf_sale_end"));
  if (!end || end < Date.now()) {
    end = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("asf_sale_end", String(end));
  }

  function tick() {
    const d = Math.max(0, end - Date.now());
    const values = {
      hour: Math.floor(d / 3600000),
      min: Math.floor((d % 3600000) / 60000),
      sec: Math.floor((d % 60000) / 1000)
    };
    document.querySelectorAll("[data-asf-hour]").forEach(x => x.textContent = String(values.hour).padStart(2,"0"));
    document.querySelectorAll("[data-asf-min]").forEach(x => x.textContent = String(values.min).padStart(2,"0"));
    document.querySelectorAll("[data-asf-sec]").forEach(x => x.textContent = String(values.sec).padStart(2,"0"));
  }
  tick();
  setInterval(tick, 1000);
})();
