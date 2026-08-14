/* =========================================================
   AS FASHIONS — js/app.js
   Main Application Controller
   Connects:
   products.js
   categories.js
   cart.js
   wishlist.js
   search.js
   filters.js
   offers.js
   ========================================================= */

(function () {
  "use strict";

  const APP_NAME = "AS FASHIONS";
  const CART_BADGE_SELECTOR =
    "[data-cart-count], #cartCount, .cart-count";

  const WISHLIST_BADGE_SELECTOR =
    "[data-wishlist-count], #wishlistCount, .wishlist-count";


  /* =======================================================
     APPLICATION STATE
     ======================================================= */

  const state = {
    initialized: false,

    currentView: "home",

    currentCategory: null,

    currentSubcategory: null,

    searchQuery: "",

    filters: {
      category: null,
      subcategory: null,
      gender: null,

      sizes: [],
      colors: [],
      tags: [],

      minPrice: null,
      maxPrice: null,

      minRating: null,

      discount: null,

      availability: "all",

      isNew: false,
      isTrending: false,

      sort: "recommended"
    },

    products: [],

    visibleProducts: [],

    cartCount: 0,

    wishlistCount: 0,

    selectedProduct: null
  };


  /* =======================================================
     BASIC HELPERS
     ======================================================= */

  function getProducts() {
    return window.PRODUCTS ||
           window.products ||
           [];
  }


  function getCategories() {
    return window.CATEGORIES ||
           window.categories ||
           [];
  }


  function $(selector, parent = document) {
    return parent.querySelector(selector);
  }


  function $$(selector, parent = document) {
    return [
      ...parent.querySelectorAll(selector)
    ];
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function formatPrice(value) {

    const amount =
      Number(value) || 0;

    return new Intl.NumberFormat(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
      }
    ).format(amount);
  }


  function getProductById(id) {

    return getProducts().find(
      product =>
        String(product.id) === String(id)
    ) || null;
  }


  /* =======================================================
     TOAST
     ======================================================= */

  function showToast(
    message,
    type = "success"
  ) {

    let toast =
      $("#asfToast");


    if (!toast) {

      toast =
        document.createElement("div");

      toast.id = "asfToast";

      toast.setAttribute(
        "role",
        "status"
      );

      document.body.appendChild(
        toast
      );

    }


    toast.className =
      `asf-toast asf-toast-${type}`;


    toast.textContent =
      message;


    requestAnimationFrame(() => {

      toast.classList.add(
        "show"
      );

    });


    clearTimeout(
      toast._hideTimer
    );


    toast._hideTimer =
      setTimeout(() => {

        toast.classList.remove(
          "show"
        );

      }, 2600);
  }


  /* =======================================================
     CART / WISHLIST BADGES
     ======================================================= */

  function updateBadges() {

    let cartCount = 0;

    let wishlistCount = 0;


    if (
      window.ASFCart &&
      typeof window.ASFCart.getCartCount ===
        "function"
    ) {

      cartCount =
        window.ASFCart.getCartCount();

    }


    if (
      window.ASFWishlist &&
      typeof window.ASFWishlist.getWishlistCount ===
        "function"
    ) {

      wishlistCount =
        window.ASFWishlist.getWishlistCount();

    }


    state.cartCount =
      cartCount;

    state.wishlistCount =
      wishlistCount;


    $$(CART_BADGE_SELECTOR)
      .forEach(element => {

        element.textContent =
          cartCount;

        element.hidden =
          cartCount === 0;

      });


    $$(WISHLIST_BADGE_SELECTOR)
      .forEach(element => {

        element.textContent =
          wishlistCount;

        element.hidden =
          wishlistCount === 0;

      });
  }


  /* =======================================================
     PRODUCT CARD ACTIONS
     ======================================================= */

  function addProductToCart(
    productId,
    options = {}
  ) {

    if (
      !window.ASFCart ||
      typeof window.ASFCart.addToCart !==
        "function"
    ) {

      showToast(
        "Cart is not ready yet.",
        "error"
      );

      return false;
    }


    const product =
      getProductById(productId);


    if (!product) {

      showToast(
        "Product not found.",
        "error"
      );

      return false;
    }


    const result =
      window.ASFCart.addToCart(
        productId,
        options
      );


    if (result.success) {

      showToast(
        `${product.name} added to cart`
      );

      updateBadges();

      return true;
    }


    showToast(
      result.message ||
        "Unable to add product.",
      "error"
    );


    return false;
  }


  function toggleProductWishlist(
    productId
  ) {

    if (
      !window.ASFWishlist
    ) {

      showToast(
        "Wishlist is not ready yet.",
        "error"
      );

      return false;
    }


    const product =
      getProductById(productId);


    if (!product) {

      showToast(
        "Product not found.",
        "error"
      );

      return false;
    }


    const result =
      window.ASFWishlist
        .toggleWishlist(
          productId
        );


    showToast(
      result.message
    );


    updateBadges();


    return result.active;
  }


  /* =======================================================
     SEARCH
     ======================================================= */

  function performSearch(
    query
  ) {

    const value =
      String(query || "").trim();


    state.searchQuery =
      value;


    if (!value) {

      state.visibleProducts =
        getFilteredProducts();

      emitStateChange();

      return state.visibleProducts;
    }


    let results = [];


    if (
      window.ASFSearch &&
      typeof window.ASFSearch.searchProducts ===
        "function"
    ) {

      results =
        window.ASFSearch.searchProducts(
          value,
          {
            saveHistory: true
          }
        );

    } else {

      const normalized =
        value.toLowerCase();


      results =
        getProducts().filter(
          product =>
            String(
              product.name || ""
            )
              .toLowerCase()
              .includes(
                normalized
              )
        );

    }


    state.visibleProducts =
      applyLocalFilters(
        results
      );


    emitStateChange();


    window.dispatchEvent(
      new CustomEvent(
        "asf:search-complete",
        {
          detail: {
            query: value,
            products:
              state.visibleProducts
          }
        }
      )
    );


    return state.visibleProducts;
  }


  /* =======================================================
     FILTERING
     ======================================================= */

  function applyLocalFilters(
    products
  ) {

    if (
      !window.ASFFilters ||
      typeof window.ASFFilters.filterProducts !==
        "function"
    ) {

      return products;

    }


    return window.ASFFilters
      .filterProducts(
        products,
        state.filters
      );
  }


  function getFilteredProducts() {

    let products =
      getProducts();


    if (
      state.searchQuery
    ) {

      if (
        window.ASFSearch &&
        typeof window.ASFSearch.searchProducts ===
          "function"
      ) {

        products =
          window.ASFSearch.searchProducts(
            state.searchQuery,
            {
              saveHistory: false
            }
          );

      } else {

        const query =
          state.searchQuery
            .toLowerCase();


        products =
          products.filter(
            product =>
              String(
                product.name || ""
              )
                .toLowerCase()
                .includes(query)
          );

      }
    }


    products =
      applyLocalFilters(
        products
      );


    if (
      window.ASFFilters &&
      typeof window.ASFFilters.sortProducts ===
        "function"
    ) {

      products =
        window.ASFFilters.sortProducts(
          products,
          state.filters.sort
        );

    }


    state.visibleProducts =
      products;


    return products;
  }


  function setFilters(
    changes = {}
  ) {

    state.filters = {

      ...state.filters,

      ...changes

    };


    state.visibleProducts =
      getFilteredProducts();


    emitStateChange();


    return state.visibleProducts;
  }


  function resetFilters() {

    if (
      window.ASFFilters &&
      typeof window.ASFFilters.createDefaultFilters ===
        "function"
    ) {

      state.filters =
        window.ASFFilters
          .createDefaultFilters();

    } else {

      state.filters = {
        category: null,
        subcategory: null,
        gender: null,
        sizes: [],
        colors: [],
        tags: [],
        minPrice: null,
        maxPrice: null,
        minRating: null,
        discount: null,
        availability: "all",
        isNew: false,
        isTrending: false,
        sort: "recommended"
      };

    }


    state.visibleProducts =
      getFilteredProducts();


    emitStateChange();


    return state.visibleProducts;
  }


  /* =======================================================
     CATEGORY NAVIGATION
     ======================================================= */

  function openCategory(
    categoryId,
    subcategoryId = null
  ) {

    const category =
      getCategories().find(
        item =>
          item.id === categoryId
      );


    if (!category) {

      showToast(
        "Category not found.",
        "error"
      );

      return [];

    }


    state.currentView =
      "category";

    state.currentCategory =
      categoryId;

    state.currentSubcategory =
      subcategoryId;


    state.filters.category =
      category.name;


    if (subcategoryId) {

      const subcategory =
        category.subcategories?.find(
          item =>
            item.id === subcategoryId
        );


      state.filters.subcategory =
        subcategory
          ? subcategory.name
          : null;

    } else {

      state.filters.subcategory =
        null;

    }


    state.searchQuery =
      "";


    state.visibleProducts =
      getFilteredProducts();


    emitStateChange();


    window.dispatchEvent(
      new CustomEvent(
        "asf:category-opened",
        {
          detail: {
            category,
            subcategoryId,
            products:
              state.visibleProducts
          }
        }
      )
    );


    return state.visibleProducts;
  }


  function openHome() {

    state.currentView =
      "home";

    state.currentCategory =
      null;

    state.currentSubcategory =
      null;

    state.searchQuery =
      "";


    resetFilters();


    window.dispatchEvent(
      new CustomEvent(
        "asf:home-opened"
      )
    );
  }


  /* =======================================================
     COLLECTIONS
     ======================================================= */

  function openCollection(
    collectionId
  ) {

    resetFilters();


    state.currentView =
      "collection";


    switch (collectionId) {

      case "new-arrivals":

        state.filters.isNew =
          true;

        break;


      case "trending":

      case "trending-now":

        state.filters.isTrending =
          true;

        break;


      case "bestsellers":

        state.filters.sort =
          "rating";

        break;


      case "flash-sale":

        state.filters.discount =
          30;

        state.filters.sort =
          "discount";

        break;


      case "under-499":

        state.filters.maxPrice =
          499;

        break;


      case "under-999":

        state.filters.maxPrice =
          999;

        break;


      case "flat-50":

        state.filters.discount =
          50;

        state.filters.sort =
          "discount";

        break;


      case "flat-70":

        state.filters.discount =
          70;

        state.filters.sort =
          "discount";

        break;


      case "flat-80":

        state.filters.discount =
          80;

        state.filters.sort =
          "discount";

        break;


      default:

        showToast(
          "Collection not found.",
          "error"
        );

        return [];

    }


    state.visibleProducts =
      getFilteredProducts();


    emitStateChange();


    window.dispatchEvent(
      new CustomEvent(
        "asf:collection-opened",
        {
          detail: {
            collectionId,
            products:
              state.visibleProducts
          }
        }
      )
    );


    return state.visibleProducts;
  }


  /* =======================================================
     PRODUCT OPEN
     ======================================================= */

  function openProduct(
    productId
  ) {

    const product =
      getProductById(
        productId
      );


    if (!product) {

      showToast(
        "Product not found.",
        "error"
      );

      return null;
    }


    state.selectedProduct =
      product;


    window.dispatchEvent(
      new CustomEvent(
        "asf:product-opened",
        {
          detail: {
            product
          }
        }
      )
    );


    return product;
  }


  /* =======================================================
     CART NAVIGATION
     ======================================================= */

  function openCart() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:cart-open"
      )
    );


    const cartLink =
      $(
        "[data-open-cart]"
      );


    if (
      cartLink &&
      cartLink.tagName === "A"
    ) {

      return;

    }


    return window.ASFCart
      ? window.ASFCart.getCart()
      : [];
  }


  /* =======================================================
     WISHLIST NAVIGATION
     ======================================================= */

  function openWishlist() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:wishlist-open"
      )
    );


    return window.ASFWishlist
      ? window.ASFWishlist
          .getWishlistProducts()
      : [];
  }


  /* =======================================================
     OFFER HANDLING
     ======================================================= */

  function getOfferState() {

    if (
      !window.ASFOffers
    ) {

      return null;
    }


    return {

      primary:
        window.ASFOffers
          .getPrimaryOffer(),

      flashSale:
        window.ASFOffers
          .getFlashSaleCountdown(),

      coupons:
        window.ASFOffers
          .getCoupons()

    };
  }


  /* =======================================================
     EVENT DELEGATION
     ======================================================= */

  function handleClick(
    event
  ) {

    const target =
      event.target.closest(
        "[data-action]"
      );


    if (!target) {
      return;
    }


    const action =
      target.dataset.action;


    switch (action) {

      case "add-cart": {

        event.preventDefault();

        addProductToCart(
          target.dataset.productId,
          {
            size:
              target.dataset.size ||
              null,

            color:
              target.dataset.color ||
              null,

            quantity:
              Number(
                target.dataset.quantity ||
                1
              )
          }
        );

        break;
      }


      case "wishlist": {

        event.preventDefault();

        toggleProductWishlist(
          target.dataset.productId
        );

        break;
      }


      case "product": {

        event.preventDefault();

        openProduct(
          target.dataset.productId
        );

        break;
      }


      case "category": {

        event.preventDefault();

        openCategory(
          target.dataset.categoryId,
          target.dataset.subcategoryId ||
            null
        );

        break;
      }


      case "collection": {

        event.preventDefault();

        openCollection(
          target.dataset.collectionId
        );

        break;
      }


      case "cart": {

        event.preventDefault();

        openCart();

        break;
      }


      case "wishlist-page": {

        event.preventDefault();

        openWishlist();

        break;
      }


      case "home": {

        event.preventDefault();

        openHome();

        break;
      }

    }
  }


  /* =======================================================
     SEARCH FORM
     ======================================================= */

  function handleSearchSubmit(
    event
  ) {

    const form =
      event.target.closest(
        "form[data-search-form]"
      );


    if (!form) {
      return;
    }


    event.preventDefault();


    const input =
      form.querySelector(
        "input"
      );


    if (!input) {
      return;
    }


    performSearch(
      input.value
    );
  }


  /* =======================================================
     SEARCH INPUT
     ======================================================= */

  function handleSearchInput(
    event
  ) {

    const input =
      event.target.closest(
        "[data-search-input]"
      );


    if (!input) {
      return;
    }


    const query =
      input.value.trim();


    window.dispatchEvent(
      new CustomEvent(
        "asf:search-suggestions",
        {
          detail: {

            query,

            suggestions:
              window.ASFSearch &&
              window.ASFSearch
                .getSuggestions
                ? window.ASFSearch
                    .getSuggestions(
                      query
                    )
                : []

          }
        }
      )
    );
  }


  /* =======================================================
     GLOBAL EVENT LISTENERS
     ======================================================= */

  function bindEvents() {

    document.addEventListener(
      "click",
      handleClick
    );


    document.addEventListener(
      "submit",
      handleSearchSubmit
    );


    document.addEventListener(
      "input",
      handleSearchInput
    );


    window.addEventListener(
      "asf:cart-updated",
      () => {

        updateBadges();

        emitStateChange();

      }
    );


    window.addEventListener(
      "asf:wishlist-updated",
      () => {

        updateBadges();

        emitStateChange();

      }
    );


    window.addEventListener(
      "popstate",
      () => {

        updateBadges();

      }
    );
  }


  /* =======================================================
     STATE EVENT
     ======================================================= */

  function emitStateChange() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:state-changed",
        {
          detail: {
            state:
              getState()
          }
        }
      )
    );
  }


  /* =======================================================
     GET STATE
     ======================================================= */

  function getState() {

    return {

      ...state,

      filters: {
        ...state.filters,

        sizes:
          [...state.filters.sizes],

        colors:
          [...state.filters.colors],

        tags:
          [...state.filters.tags]

      },

      products:
        [...state.products],

      visibleProducts:
        [...state.visibleProducts]

    };
  }


  /* =======================================================
     INITIALIZATION
     ======================================================= */

  function init() {

    if (
      state.initialized
    ) {

      return getState();

    }


    state.products =
      getProducts();


    state.visibleProducts =
      getFilteredProducts();


    bindEvents();

    updateBadges();


    state.initialized =
      true;


    window.dispatchEvent(
      new CustomEvent(
        "asf:app-ready",
        {
          detail: {
            appName:
              APP_NAME,

            state:
              getState()
          }
        }
      )
    );


    return getState();
  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFApp = {

    APP_NAME,

    state,

    init,

    getState,

    getProducts,

    getProductById,

    getCategories,

    formatPrice,

    showToast,

    updateBadges,

    addProductToCart,

    toggleProductWishlist,

    performSearch,

    getFilteredProducts,

    setFilters,

    resetFilters,

    openCategory,

    openCollection,

    openHome,

    openProduct,

    openCart,

    openWishlist,

    getOfferState

  };


  /* =======================================================
     GLOBAL HELPERS
     ======================================================= */

  window.showToast =
    showToast;

  window.openProduct =
    openProduct;

  window.openCategory =
    openCategory;

  window.openCollection =
    openCollection;

  window.performSearch =
    performSearch;


  /* =======================================================
     DOM READY
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );

  } else {

    init();

  }

})();
