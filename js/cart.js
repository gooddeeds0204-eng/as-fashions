/* =========================================================
   AS FASHIONS — js/cart.js
   Premium Single-Vendor Cart Engine
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "asf_cart";

  let cart = loadCart();


  /* =======================================================
     STORAGE
     ======================================================= */

  function loadCart() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) return [];

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed : [];

    } catch (error) {
      console.error("AS FASHIONS cart load error:", error);
      return [];
    }
  }


  function saveCart() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cart)
    );

    emitCartUpdate();
  }


  /* =======================================================
     PRODUCT LOOKUP
     ======================================================= */

  function findProduct(productId) {
    const products =
      window.PRODUCTS ||
      window.products ||
      [];

    return products.find(
      product => product.id === productId
    );
  }


  /* =======================================================
     NORMALIZE CART ITEM
     ======================================================= */

  function createCartItem(
    product,
    quantity = 1,
    size = null,
    color = null
  ) {

    return {
      cartId: createCartId(
        product.id,
        size,
        color
      ),

      productId: product.id,

      sku: product.sku || "",

      name: product.name,

      brand: product.brand || "AS FASHIONS",

      image:
        product.images?.[0] || "",

      price:
        Number(product.price) || 0,

      mrp:
        Number(product.mrp || product.price) || 0,

      quantity:
        Math.max(1, Number(quantity) || 1),

      size: size || null,

      color: color || null,

      selected: true,

      addedAt: Date.now()
    };
  }


  function createCartId(
    productId,
    size,
    color
  ) {
    return [
      productId,
      size || "",
      color || ""
    ].join("::");
  }


  /* =======================================================
     ADD TO CART
     ======================================================= */

  function addToCart(
    productId,
    options = {}
  ) {

    const product =
      typeof productId === "object"
        ? productId
        : findProduct(productId);

    if (!product) {
      console.warn(
        "Product not found:",
        productId
      );

      return {
        success: false,
        message: "Product not found"
      };
    }


    const quantity =
      Math.max(
        1,
        Number(options.quantity) || 1
      );


    const size =
      options.size || null;

    const color =
      options.color || null;


    const cartId =
      createCartId(
        product.id,
        size,
        color
      );


    const existing =
      cart.find(
        item =>
          item.cartId === cartId
      );


    if (existing) {

      existing.quantity += quantity;

    } else {

      cart.push(
        createCartItem(
          product,
          quantity,
          size,
          color
        )
      );

    }


    saveCart();

    return {
      success: true,
      message: "Added to cart",
      item: getCartItem(cartId)
    };
  }


  /* =======================================================
     GET CART
     ======================================================= */

  function getCart() {
    return [...cart];
  }


  function getCartItem(cartId) {
    return (
      cart.find(
        item =>
          item.cartId === cartId
      ) || null
    );
  }


  /* =======================================================
     UPDATE QUANTITY
     ======================================================= */

  function updateQuantity(
    cartId,
    quantity
  ) {

    const item =
      getCartItem(cartId);

    if (!item) return false;


    const newQuantity =
      Number(quantity);


    if (
      !Number.isFinite(newQuantity) ||
      newQuantity <= 0
    ) {

      removeFromCart(cartId);

      return true;
    }


    item.quantity =
      Math.floor(newQuantity);


    saveCart();

    return true;
  }


  /* =======================================================
     INCREASE / DECREASE
     ======================================================= */

  function increaseQuantity(cartId) {

    const item =
      getCartItem(cartId);

    if (!item) return false;

    item.quantity += 1;

    saveCart();

    return true;
  }


  function decreaseQuantity(cartId) {

    const item =
      getCartItem(cartId);

    if (!item) return false;


    if (item.quantity <= 1) {

      removeFromCart(cartId);

      return true;
    }


    item.quantity -= 1;

    saveCart();

    return true;
  }


  /* =======================================================
     REMOVE
     ======================================================= */

  function removeFromCart(cartId) {

    const index =
      cart.findIndex(
        item =>
          item.cartId === cartId
      );


    if (index === -1) {
      return false;
    }


    cart.splice(index, 1);

    saveCart();

    return true;
  }


  /* =======================================================
     CLEAR CART
     ======================================================= */

  function clearCart() {

    cart = [];

    saveCart();

    return true;
  }


  /* =======================================================
     SELECT / UNSELECT
     ======================================================= */

  function setSelected(
    cartId,
    selected
  ) {

    const item =
      getCartItem(cartId);

    if (!item) return false;


    item.selected =
      Boolean(selected);


    saveCart();

    return true;
  }


  function toggleSelected(cartId) {

    const item =
      getCartItem(cartId);

    if (!item) return false;


    item.selected =
      !item.selected;


    saveCart();

    return true;
  }


  function selectAll() {

    cart.forEach(
      item => {
        item.selected = true;
      }
    );

    saveCart();
  }


  function deselectAll() {

    cart.forEach(
      item => {
        item.selected = false;
      }
    );

    saveCart();
  }


  /* =======================================================
     TOTAL QUANTITY
     ======================================================= */

  function getTotalQuantity() {

    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }


  function getSelectedQuantity() {

    return cart.reduce(
      (total, item) =>
        item.selected
          ? total + item.quantity
          : total,
      0
    );
  }


  /* =======================================================
     SUBTOTAL
     ======================================================= */

  function getSubtotal(
    selectedOnly = true
  ) {

    return cart.reduce(
      (total, item) => {

        if (
          selectedOnly &&
          !item.selected
        ) {
          return total;
        }

        return (
          total +
          item.price *
          item.quantity
        );

      },
      0
    );
  }


  /* =======================================================
     MRP TOTAL
     ======================================================= */

  function getMrpTotal(
    selectedOnly = true
  ) {

    return cart.reduce(
      (total, item) => {

        if (
          selectedOnly &&
          !item.selected
        ) {
          return total;
        }

        return (
          total +
          item.mrp *
          item.quantity
        );

      },
      0
    );
  }


  /* =======================================================
     PRODUCT DISCOUNT
     ======================================================= */

  function getProductDiscount(
    selectedOnly = true
  ) {

    return Math.max(
      0,
      getMrpTotal(selectedOnly) -
      getSubtotal(selectedOnly)
    );
  }


  /* =======================================================
     COUPON DISCOUNT
     ======================================================= */

  function calculateCouponDiscount(
    coupon,
    subtotal
  ) {

    if (!coupon || subtotal <= 0) {
      return 0;
    }


    if (
      coupon.minOrder &&
      subtotal < coupon.minOrder
    ) {
      return 0;
    }


    let discount = 0;


    if (
      coupon.type === "percentage"
    ) {

      discount =
        subtotal *
        (Number(coupon.value) / 100);

      if (coupon.maxDiscount) {

        discount =
          Math.min(
            discount,
            Number(coupon.maxDiscount)
          );
      }

    } else if (
      coupon.type === "flat"
    ) {

      discount =
        Number(coupon.value) || 0;
    }


    return Math.min(
      Math.max(0, discount),
      subtotal
    );
  }


  /* =======================================================
     FINAL SUMMARY
     ======================================================= */

  function getSummary(
    coupon = null,
    shipping = 0
  ) {

    const mrp =
      getMrpTotal(true);

    const subtotal =
      getSubtotal(true);

    const productDiscount =
      getProductDiscount(true);

    const couponDiscount =
      calculateCouponDiscount(
        coupon,
        subtotal
      );


    const shippingAmount =
      subtotal === 0
        ? 0
        : Number(shipping) || 0;


    const total =
      Math.max(
        0,
        subtotal -
        couponDiscount +
        shippingAmount
      );


    return {

      itemCount:
        getSelectedQuantity(),

      mrp,

      subtotal,

      productDiscount,

      couponDiscount,

      shipping:
        shippingAmount,

      total,

      totalSavings:
        productDiscount +
        couponDiscount
    };
  }


  /* =======================================================
     CART COUNT
     ======================================================= */

  function getCartCount() {
    return getTotalQuantity();
  }


  /* =======================================================
     CHECK CART
     ======================================================= */

  function isInCart(
    productId,
    size = null,
    color = null
  ) {

    const cartId =
      createCartId(
        productId,
        size,
        color
      );

    return cart.some(
      item =>
        item.cartId === cartId
    );
  }


  /* =======================================================
     UPDATE PRODUCT VARIANT
     ======================================================= */

  function updateVariant(
    cartId,
    options = {}
  ) {

    const item =
      getCartItem(cartId);

    if (!item) return false;


    const newSize =
      options.size ??
      item.size;

    const newColor =
      options.color ??
      item.color;


    const newCartId =
      createCartId(
        item.productId,
        newSize,
        newColor
      );


    const duplicate =
      cart.find(
        other =>
          other.cartId === newCartId &&
          other.cartId !== cartId
      );


    if (duplicate) {

      duplicate.quantity +=
        item.quantity;

      removeFromCart(cartId);

      return true;
    }


    item.cartId =
      newCartId;

    item.size =
      newSize;

    item.color =
      newColor;


    saveCart();

    return true;
  }


  /* =======================================================
     CART EVENTS
     ======================================================= */

  function emitCartUpdate() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:cart-updated",
        {
          detail: {
            cart: getCart(),
            count: getCartCount(),
            summary: getSummary()
          }
        }
      )
    );
  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFCart = {

    addToCart,

    getCart,

    getCartItem,

    updateQuantity,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

    clearCart,

    setSelected,

    toggleSelected,

    selectAll,

    deselectAll,

    getTotalQuantity,

    getSelectedQuantity,

    getSubtotal,

    getMrpTotal,

    getProductDiscount,

    calculateCouponDiscount,

    getSummary,

    getCartCount,

    isInCart,

    updateVariant

  };


  /* =======================================================
     LEGACY-FRIENDLY GLOBALS
     ======================================================= */

  window.addToCart =
    addToCart;

  window.getCart =
    getCart;

  window.removeFromCart =
    removeFromCart;

  window.updateCartQuantity =
    updateQuantity;

  window.getCartCount =
    getCartCount;


  /* =======================================================
     INITIAL EVENT
     ======================================================= */

  window.dispatchEvent(
    new CustomEvent(
      "asf:cart-ready",
      {
        detail: {
          cart: getCart(),
          count: getCartCount()
        }
      }
    )
  );

})();
