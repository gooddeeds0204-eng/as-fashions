/* =========================================================
   AS FASHIONS — js/offers.js
   Premium Offers / Flash Sale / Coupon Engine
   ========================================================= */

(function () {
  "use strict";

  const OFFER_STORAGE_KEY = "asf_offer_state";
  const COUPON_STORAGE_KEY = "asf_applied_coupon";


  /* =======================================================
     OFFER DATABASE
     ======================================================= */

  const OFFERS = [

    {
      id: "flat-80",
      type: "discount",
      title: "FLAT 80% OFF",
      subtitle: "Limited Time Fashion Deals",
      discountType: "percentage",
      discountValue: 80,
      minOrder: 999,
      maxDiscount: 3000,
      active: true,
      priority: 100
    },

    {
      id: "flat-70",
      type: "discount",
      title: "FLAT 70% OFF",
      subtitle: "Premium Styles at Special Prices",
      discountType: "percentage",
      discountValue: 70,
      minOrder: 799,
      maxDiscount: 2500,
      active: true,
      priority: 90
    },

    {
      id: "flat-50",
      type: "discount",
      title: "FLAT 50% OFF",
      subtitle: "Trending Fashion Picks",
      discountType: "percentage",
      discountValue: 50,
      minOrder: 599,
      maxDiscount: 1500,
      active: true,
      priority: 80
    }

  ];


  /* =======================================================
     COUPONS
     ======================================================= */

  const COUPONS = [

    {
      code: "WELCOME10",
      title: "Welcome Offer",
      type: "percentage",
      value: 10,
      minOrder: 999,
      maxDiscount: 500,
      active: true
    },

    {
      code: "AS500",
      title: "Flat ₹500 Off",
      type: "flat",
      value: 500,
      minOrder: 2499,
      active: true
    },

    {
      code: "AS1000",
      title: "Flat ₹1000 Off",
      type: "flat",
      value: 1000,
      minOrder: 4999,
      active: true
    }

  ];


  /* =======================================================
     FLASH SALE
     ======================================================= */

  const FLASH_SALE = {

    id: "flash-sale-01",

    title: "FLASH SALE",

    subtitle:
      "Extra discounts on selected styles",

    discount: 80,

    active: true,

    startsAt:
      Date.now(),

    endsAt:
      Date.now() +
      (
        6 *
        60 *
        60 *
        1000
      )

  };


  /* =======================================================
     STORAGE
     ======================================================= */

  function saveOfferState(state) {

    try {

      localStorage.setItem(
        OFFER_STORAGE_KEY,
        JSON.stringify(state)
      );

    } catch (error) {

      console.error(
        "Offer state error:",
        error
      );

    }

  }


  function getOfferState() {

    try {

      const saved =
        localStorage.getItem(
          OFFER_STORAGE_KEY
        );


      return saved
        ? JSON.parse(saved)
        : {};

    } catch (error) {

      return {};

    }

  }


  /* =======================================================
     ACTIVE OFFERS
     ======================================================= */

  function getActiveOffers() {

    return OFFERS
      .filter(
        offer =>
          offer.active === true
      )
      .sort(
        (a, b) =>
          b.priority -
          a.priority
      );
  }


  function getPrimaryOffer() {

    return (
      getActiveOffers()[0] ||
      null
    );
  }


  /* =======================================================
     COUNTDOWN
     ======================================================= */

  function getCountdown(
    endTime
  ) {

    const remaining =
      Math.max(
        0,
        Number(endTime) -
        Date.now()
      );


    const totalSeconds =
      Math.floor(
        remaining / 1000
      );


    const hours =
      Math.floor(
        totalSeconds / 3600
      );


    const minutes =
      Math.floor(
        (totalSeconds % 3600) /
        60
      );


    const seconds =
      totalSeconds % 60;


    return {

      totalMilliseconds:
        remaining,

      totalSeconds,

      hours,

      minutes,

      seconds,

      formatted:

        `${String(hours).padStart(2, "0")}h : ` +
        `${String(minutes).padStart(2, "0")}m : ` +
        `${String(seconds).padStart(2, "0")}s`

    };

  }


  function isFlashSaleActive() {

    return (
      FLASH_SALE.active &&
      Date.now() >=
        FLASH_SALE.startsAt &&
      Date.now() <
        FLASH_SALE.endsAt
    );

  }


  function getFlashSaleCountdown() {

    if (
      !isFlashSaleActive()
    ) {

      return {
        active: false,
        remaining: 0,
        formatted: "SALE ENDED"
      };

    }


    return {

      active: true,

      ...getCountdown(
        FLASH_SALE.endsAt
      )

    };

  }


  /* =======================================================
     DISCOUNT CALCULATION
     ======================================================= */

  function calculateDiscount(
    price,
    offer
  ) {

    const amount =
      Number(price) || 0;


    if (!offer) {
      return 0;
    }


    let discount = 0;


    if (
      offer.discountType ===
      "percentage"
    ) {

      discount =
        amount *
        (
          Number(
            offer.discountValue
          ) / 100
        );

    } else {

      discount =
        Number(
          offer.discountValue
        ) || 0;

    }


    if (
      offer.maxDiscount
    ) {

      discount =
        Math.min(
          discount,
          Number(
            offer.maxDiscount
          )
        );

    }


    return Math.min(
      Math.max(0, discount),
      amount
    );

  }


  function getOfferPrice(
    price,
    offer
  ) {

    const original =
      Number(price) || 0;


    return Math.max(
      0,
      original -
      calculateDiscount(
        original,
        offer
      )
    );

  }


  /* =======================================================
     COUPON
     ======================================================= */

  function findCoupon(
    code
  ) {

    const target =
      String(code || "")
        .trim()
        .toUpperCase();


    return (
      COUPONS.find(
        coupon =>
          coupon.code === target &&
          coupon.active === true
      ) ||
      null
    );

  }


  function validateCoupon(
    code,
    subtotal
  ) {

    const coupon =
      findCoupon(code);


    if (!coupon) {

      return {

        valid: false,

        message:
          "Invalid coupon code",

        coupon: null,

        discount: 0

      };

    }


    const amount =
      Number(subtotal) || 0;


    if (
      coupon.minOrder &&
      amount <
        Number(coupon.minOrder)
    ) {

      return {

        valid: false,

        message:
          `Minimum order ₹${coupon.minOrder} required`,

        coupon,

        discount: 0

      };

    }


    const discount =
      calculateCouponDiscount(
        coupon,
        amount
      );


    return {

      valid: true,

      message:
        "Coupon applied successfully",

      coupon,

      discount

    };

  }


  function calculateCouponDiscount(
    coupon,
    subtotal
  ) {

    if (
      !coupon ||
      subtotal <= 0
    ) {

      return 0;

    }


    let discount = 0;


    if (
      coupon.type ===
      "percentage"
    ) {

      discount =
        subtotal *
        (
          Number(coupon.value) /
          100
        );


      if (
        coupon.maxDiscount
      ) {

        discount =
          Math.min(
            discount,
            Number(
              coupon.maxDiscount
            )
          );

      }

    } else {

      discount =
        Number(
          coupon.value
        ) || 0;

    }


    return Math.min(
      Math.max(
        0,
        discount
      ),
      subtotal
    );

  }


  function applyCoupon(
    code,
    subtotal
  ) {

    const result =
      validateCoupon(
        code,
        subtotal
      );


    if (!result.valid) {

      return result;

    }


    localStorage.setItem(
      COUPON_STORAGE_KEY,
      JSON.stringify(
        result.coupon
      )
    );


    window.dispatchEvent(
      new CustomEvent(
        "asf:coupon-applied",
        {
          detail: result
        }
      )
    );


    return result;

  }


  function getAppliedCoupon() {

    try {

      const saved =
        localStorage.getItem(
          COUPON_STORAGE_KEY
        );


      return saved
        ? JSON.parse(saved)
        : null;

    } catch {

      return null;

    }

  }


  function removeCoupon() {

    localStorage.removeItem(
      COUPON_STORAGE_KEY
    );


    window.dispatchEvent(
      new CustomEvent(
        "asf:coupon-removed"
      )
    );

  }


  function getCoupons() {

    return [...COUPONS];

  }


  /* =======================================================
     SCRATCH CARD
     ======================================================= */

  const SCRATCH_REWARDS = [

    {
      id: "scratch-10",
      type: "percentage",
      value: 10,
      label: "10% OFF",
      probability: 45
    },

    {
      id: "scratch-15",
      type: "percentage",
      value: 15,
      label: "15% OFF",
      probability: 30
    },

    {
      id: "scratch-20",
      type: "percentage",
      value: 20,
      label: "20% OFF",
      probability: 15
    },

    {
      id: "scratch-500",
      type: "flat",
      value: 500,
      label: "₹500 OFF",
      probability: 8
    },

    {
      id: "scratch-1000",
      type: "flat",
      value: 1000,
      label: "₹1000 OFF",
      probability: 2
    }

  ];


  function getScratchReward() {

    const total =
      SCRATCH_REWARDS.reduce(
        (sum, reward) =>
          sum +
          reward.probability,
        0
      );


    let random =
      Math.random() * total;


    for (
      const reward
      of SCRATCH_REWARDS
    ) {

      random -=
        reward.probability;


      if (random <= 0) {

        return {
          ...reward
        };

      }

    }


    return {
      ...SCRATCH_REWARDS[0]
    };

  }


  function generateScratchCard() {

    const reward =
      getScratchReward();


    const state = {

      id:
        `scratch-${Date.now()}`,

      reward,

      createdAt:
        Date.now(),

      scratched:
        false

    };


    saveOfferState(
      state
    );


    return state;

  }


  function revealScratchCard() {

    const state =
      getOfferState();


    if (!state.reward) {

      return generateScratchCard();

    }


    state.scratched =
      true;


    saveOfferState(
      state
    );


    return state;

  }


  /* =======================================================
     FOMO MESSAGES
     ======================================================= */

  function getFomoMessage(
    product
  ) {

    if (!product) {

      return {
        type: "general",
        text: "Limited-time offer"
      };

    }


    const stock =
      Number(
        product.stock
      );


    if (
      stock > 0 &&
      stock <= 3
    ) {

      return {

        type: "stock",

        text:
          `Hurry! Only ${stock} left`

      };

    }


    if (
      product.isTrending
    ) {

      return {

        type: "trending",

        text:
          "Trending now — selling fast"

      };

    }


    if (
      Number(
        product.discount
      ) >= 50
    ) {

      return {

        type: "offer",

        text:
          `Flat ${product.discount}% OFF`

      };

    }


    return {

      type: "general",

      text:
        "Limited-time deal"

    };

  }


  /* =======================================================
     FLASH SALE BADGE
     ======================================================= */

  function getFlashSaleBadge(
    product
  ) {

    if (
      !isFlashSaleActive()
    ) {

      return null;

    }


    if (!product) {

      return {
        text: "FLASH SALE"
      };

    }


    return {

      text:
        `UP TO ${FLASH_SALE.discount}% OFF`,

      productId:
        product.id

    };

  }


  /* =======================================================
     OFFER PROGRESS
     ======================================================= */

  function getOfferProgress(
    subtotal,
    target = 2999
  ) {

    const amount =
      Number(subtotal) || 0;


    const goal =
      Number(target) || 0;


    if (goal <= 0) {

      return {
        percentage: 100,
        remaining: 0,
        unlocked: true
      };

    }


    const percentage =
      Math.min(
        100,
        Math.round(
          (amount / goal) *
          100
        )
      );


    return {

      percentage,

      remaining:
        Math.max(
          0,
          goal - amount
        ),

      unlocked:
        amount >= goal

    };

  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFOffers = {

    OFFERS,

    COUPONS,

    FLASH_SALE,

    getActiveOffers,

    getPrimaryOffer,

    getCountdown,

    isFlashSaleActive,

    getFlashSaleCountdown,

    calculateDiscount,

    getOfferPrice,

    findCoupon,

    validateCoupon,

    calculateCouponDiscount,

    applyCoupon,

    getAppliedCoupon,

    removeCoupon,

    getCoupons,

    getScratchReward,

    generateScratchCard,

    revealScratchCard,

    getFomoMessage,

    getFlashSaleBadge,

    getOfferProgress

  };


  /* =======================================================
     GLOBAL HELPERS
     ======================================================= */

  window.getActiveOffers =
    getActiveOffers;

  window.getFlashSaleCountdown =
    getFlashSaleCountdown;

  window.applyCoupon =
    applyCoupon;

  window.getAppliedCoupon =
    getAppliedCoupon;


  /* =======================================================
     READY EVENT
     ======================================================= */

  window.dispatchEvent(
    new CustomEvent(
      "asf:offers-ready"
    )
  );

})();
