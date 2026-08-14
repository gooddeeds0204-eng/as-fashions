/* =========================================================
   AS FASHIONS — js/wishlist.js
   Premium Wishlist Engine
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "asf_wishlist";

  let wishlist = loadWishlist();


  /* =======================================================
     STORAGE
     ======================================================= */

  function loadWishlist() {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (!saved) return [];

      const parsed =
        JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch (error) {
      console.error(
        "AS FASHIONS wishlist load error:",
        error
      );

      return [];
    }
  }


  function saveWishlist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(wishlist)
    );

    emitWishlistUpdate();
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
      product =>
        product.id === productId
    );
  }


  /* =======================================================
     ADD
     ======================================================= */

  function addToWishlist(productId) {

    const product =
      typeof productId === "object"
        ? productId
        : findProduct(productId);


    if (!product) {

      return {
        success: false,
        message: "Product not found"
      };
    }


    const exists =
      wishlist.some(
        item =>
          item.productId === product.id
      );


    if (exists) {

      return {
        success: true,
        alreadyExists: true,
        message: "Already in wishlist"
      };
    }


    wishlist.push({

      productId: product.id,

      addedAt: Date.now()

    });


    saveWishlist();


    return {
      success: true,
      alreadyExists: false,
      message: "Added to wishlist",
      product
    };
  }


  /* =======================================================
     REMOVE
     ======================================================= */

  function removeFromWishlist(
    productId
  ) {

    const index =
      wishlist.findIndex(
        item =>
          item.productId === productId
      );


    if (index === -1) {
      return false;
    }


    wishlist.splice(index, 1);

    saveWishlist();

    return true;
  }


  /* =======================================================
     TOGGLE
     ======================================================= */

  function toggleWishlist(
    productId
  ) {

    if (
      isInWishlist(productId)
    ) {

      removeFromWishlist(
        productId
      );

      return {
        active: false,
        message: "Removed from wishlist"
      };
    }


    addToWishlist(productId);


    return {
      active: true,
      message: "Added to wishlist"
    };
  }


  /* =======================================================
     CHECK
     ======================================================= */

  function isInWishlist(
    productId
  ) {

    return wishlist.some(
      item =>
        item.productId === productId
    );
  }


  /* =======================================================
     GET RAW WISHLIST
     ======================================================= */

  function getWishlist() {
    return [...wishlist];
  }


  /* =======================================================
     GET FULL PRODUCTS
     ======================================================= */

  function getWishlistProducts() {

    return wishlist
      .map(item =>
        findProduct(
          item.productId
        )
      )
      .filter(Boolean);
  }


  /* =======================================================
     COUNT
     ======================================================= */

  function getWishlistCount() {
    return wishlist.length;
  }


  /* =======================================================
     CLEAR
     ======================================================= */

  function clearWishlist() {

    wishlist = [];

    saveWishlist();

    return true;
  }


  /* =======================================================
     MOVE TO CART
     ======================================================= */

  function moveToCart(
    productId,
    options = {}
  ) {

    const product =
      findProduct(productId);


    if (!product) {

      return {
        success: false,
        message: "Product not found"
      };
    }


    if (
      !window.ASFCart ||
      typeof window.ASFCart.addToCart !==
        "function"
    ) {

      return {
        success: false,
        message: "Cart system not ready"
      };
    }


    const result =
      window.ASFCart.addToCart(
        productId,
        options
      );


    if (result.success) {

      removeFromWishlist(
        productId
      );

    }


    return result;
  }


  /* =======================================================
     MOVE ALL TO CART
     ======================================================= */

  function moveAllToCart(
    options = {}
  ) {

    const products =
      getWishlistProducts();


    if (
      !window.ASFCart ||
      typeof window.ASFCart.addToCart !==
        "function"
    ) {

      return {
        success: false,
        added: 0,
        message: "Cart system not ready"
      };
    }


    let added = 0;


    products.forEach(
      product => {

        const result =
          window.ASFCart.addToCart(
            product.id,
            options
          );


        if (result.success) {
          added++;
        }

      }
    );


    if (added > 0) {

      wishlist =
        wishlist.filter(
          item =>
            !products.some(
              product =>
                product.id ===
                item.productId
            )
        );


      saveWishlist();
    }


    return {
      success: added > 0,
      added,
      message:
        `${added} product(s) moved to cart`
    };
  }


  /* =======================================================
     PRICE HELPERS
     ======================================================= */

  function getWishlistValue() {

    return getWishlistProducts()
      .reduce(
        (total, product) =>
          total +
          Number(product.price || 0),
        0
      );
  }


  function getWishlistMrpValue() {

    return getWishlistProducts()
      .reduce(
        (total, product) =>
          total +
          Number(
            product.mrp ||
            product.price ||
            0
          ),
        0
      );
  }


  function getWishlistSavings() {

    return Math.max(
      0,
      getWishlistMrpValue() -
      getWishlistValue()
    );
  }


  /* =======================================================
     CLEAN INVALID ITEMS
     ======================================================= */

  function cleanWishlist() {

    const products =
      window.PRODUCTS ||
      window.products ||
      [];


    const validIds =
      new Set(
        products.map(
          product => product.id
        )
      );


    const before =
      wishlist.length;


    wishlist =
      wishlist.filter(
        item =>
          validIds.has(
            item.productId
          )
      );


    if (
      wishlist.length !== before
    ) {
      saveWishlist();
    }


    return wishlist.length;
  }


  /* =======================================================
     WISHLIST EVENTS
     ======================================================= */

  function emitWishlistUpdate() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:wishlist-updated",
        {
          detail: {

            wishlist:
              getWishlist(),

            products:
              getWishlistProducts(),

            count:
              getWishlistCount()

          }
        }
      )
    );
  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFWishlist = {

    addToWishlist,

    removeFromWishlist,

    toggleWishlist,

    isInWishlist,

    getWishlist,

    getWishlistProducts,

    getWishlistCount,

    clearWishlist,

    moveToCart,

    moveAllToCart,

    getWishlistValue,

    getWishlistMrpValue,

    getWishlistSavings,

    cleanWishlist

  };


  /* =======================================================
     GLOBAL HELPERS
     ======================================================= */

  window.addToWishlist =
    addToWishlist;

  window.removeFromWishlist =
    removeFromWishlist;

  window.toggleWishlist =
    toggleWishlist;

  window.isInWishlist =
    isInWishlist;

  window.getWishlistCount =
    getWishlistCount;


  /* =======================================================
     INITIAL CLEANUP
     ======================================================= */

  cleanWishlist();


  /* =======================================================
     READY EVENT
     ======================================================= */

  window.dispatchEvent(
    new CustomEvent(
      "asf:wishlist-ready",
      {
        detail: {
          count:
            getWishlistCount()
        }
      }
    )
  );

})();
