/* =========================================================
   AS FASHIONS — js/filters.js
   Product Filtering + Sorting Engine
   ========================================================= */

(function () {
  "use strict";

  function getProducts() {
    return window.PRODUCTS ||
           window.products ||
           [];
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .trim();
  }


  /* =======================================================
     DEFAULT FILTER STATE
     ======================================================= */

  function createDefaultFilters() {
    return {
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


  /* =======================================================
     APPLY FILTERS
     ======================================================= */

  function filterProducts(
    products,
    filters = {}
  ) {

    const source =
      Array.isArray(products)
        ? products
        : getProducts();


    const f = {
      ...createDefaultFilters(),
      ...filters
    };


    return source.filter(product => {

      /* ---------------------------------------------------
         CATEGORY
         --------------------------------------------------- */

      if (f.category) {

        if (
          normalize(product.category) !==
          normalize(f.category)
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         SUBCATEGORY
         --------------------------------------------------- */

      if (f.subcategory) {

        if (
          normalize(product.subcategory) !==
          normalize(f.subcategory)
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         GENDER
         --------------------------------------------------- */

      if (f.gender) {

        const productGender =
          normalize(product.gender);

        const selectedGender =
          normalize(f.gender);


        if (
          productGender !== selectedGender &&
          productGender !== "unisex"
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         PRICE
         --------------------------------------------------- */

      const price =
        Number(product.price || 0);


      if (
        f.minPrice !== null &&
        f.minPrice !== "" &&
        price < Number(f.minPrice)
      ) {
        return false;
      }


      if (
        f.maxPrice !== null &&
        f.maxPrice !== "" &&
        price > Number(f.maxPrice)
      ) {
        return false;
      }


      /* ---------------------------------------------------
         SIZE
         --------------------------------------------------- */

      if (
        Array.isArray(f.sizes) &&
        f.sizes.length > 0
      ) {

        const productSizes =
          (product.sizes || [])
            .map(String);


        const hasSize =
          f.sizes.some(
            size =>
              productSizes.includes(
                String(size)
              )
          );


        if (!hasSize) {
          return false;
        }

      }


      /* ---------------------------------------------------
         COLOR
         --------------------------------------------------- */

      if (
        Array.isArray(f.colors) &&
        f.colors.length > 0
      ) {

        const productColors =
          (product.colors || [])
            .map(normalize);


        const hasColor =
          f.colors.some(
            color =>
              productColors.includes(
                normalize(color)
              )
          );


        if (!hasColor) {
          return false;
        }

      }


      /* ---------------------------------------------------
         TAGS
         --------------------------------------------------- */

      if (
        Array.isArray(f.tags) &&
        f.tags.length > 0
      ) {

        const productTags =
          (product.tags || [])
            .map(normalize);


        const hasTag =
          f.tags.some(
            tag =>
              productTags.includes(
                normalize(tag)
              )
          );


        if (!hasTag) {
          return false;
        }

      }


      /* ---------------------------------------------------
         RATING
         --------------------------------------------------- */

      if (
        f.minRating !== null &&
        f.minRating !== ""
      ) {

        if (
          Number(product.rating || 0) <
          Number(f.minRating)
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         DISCOUNT
         --------------------------------------------------- */

      if (
        f.discount !== null &&
        f.discount !== ""
      ) {

        if (
          Number(product.discount || 0) <
          Number(f.discount)
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         STOCK
         --------------------------------------------------- */

      if (
        f.availability === "in-stock"
      ) {

        if (
          Number(product.stock || 0) <= 0
        ) {
          return false;
        }

      }


      if (
        f.availability === "low-stock"
      ) {

        const stock =
          Number(product.stock || 0);

        if (
          stock <= 0 ||
          stock > 10
        ) {
          return false;
        }

      }


      /* ---------------------------------------------------
         NEW
         --------------------------------------------------- */

      if (
        f.isNew &&
        !product.isNew
      ) {
        return false;
      }


      /* ---------------------------------------------------
         TRENDING
         --------------------------------------------------- */

      if (
        f.isTrending &&
        !product.isTrending
      ) {
        return false;
      }


      return true;
    });
  }


  /* =======================================================
     SORT PRODUCTS
     ======================================================= */

  function sortProducts(
    products,
    sort = "recommended"
  ) {

    const result =
      [...products];


    switch (sort) {

      case "price-low":
        return result.sort(
          (a, b) =>
            Number(a.price || 0) -
            Number(b.price || 0)
        );


      case "price-high":
        return result.sort(
          (a, b) =>
            Number(b.price || 0) -
            Number(a.price || 0)
        );


      case "discount":
        return result.sort(
          (a, b) =>
            Number(b.discount || 0) -
            Number(a.discount || 0)
        );


      case "rating":
        return result.sort(
          (a, b) =>
            Number(b.rating || 0) -
            Number(a.rating || 0)
        );


      case "newest":
        return result.sort(
          (a, b) =>
            Number(Boolean(b.isNew)) -
            Number(Boolean(a.isNew))
        );


      case "trending":
        return result.sort(
          (a, b) =>
            Number(Boolean(b.isTrending)) -
            Number(Boolean(a.isTrending))
        );


      case "recommended":
      default:

        return result.sort(
          (a, b) => {

            const scoreA =
              Number(a.rating || 0) * 10 +
              Number(a.reviews || 0) / 100 +
              Number(Boolean(a.isTrending)) * 5 +
              Number(Boolean(a.isNew)) * 3;

            const scoreB =
              Number(b.rating || 0) * 10 +
              Number(b.reviews || 0) / 100 +
              Number(Boolean(b.isTrending)) * 5 +
              Number(Boolean(b.isNew)) * 3;

            return scoreB - scoreA;
          }
        );
    }
  }


  /* =======================================================
     FILTER + SORT
     ======================================================= */

  function getFilteredProducts(
    filters = {}
  ) {

    const filtered =
      filterProducts(
        getProducts(),
        filters
      );


    return sortProducts(
      filtered,
      filters.sort ||
        "recommended"
    );
  }


  /* =======================================================
     FILTER OPTIONS
     ======================================================= */

  function getAvailableSizes(
    products = getProducts()
  ) {

    const values =
      new Set();


    products.forEach(product => {

      (product.sizes || [])
        .forEach(size =>
          values.add(String(size))
        );

    });


    return [...values];
  }


  function getAvailableColors(
    products = getProducts()
  ) {

    const values =
      new Set();


    products.forEach(product => {

      (product.colors || [])
        .forEach(color =>
          values.add(String(color))
        );

    });


    return [...values];
  }


  function getAvailableTags(
    products = getProducts()
  ) {

    const values =
      new Set();


    products.forEach(product => {

      (product.tags || [])
        .forEach(tag =>
          values.add(String(tag))
        );

    });


    return [...values];
  }


  function getPriceRange(
    products = getProducts()
  ) {

    const prices =
      products
        .map(
          product =>
            Number(product.price || 0)
        )
        .filter(price => price >= 0);


    if (!prices.length) {

      return {
        min: 0,
        max: 0
      };

    }


    return {

      min: Math.min(...prices),

      max: Math.max(...prices)

    };
  }


  /* =======================================================
     QUICK FILTERS
     ======================================================= */

  function getSaleProducts() {

    return getProducts()
      .filter(
        product =>
          Number(product.discount || 0) > 0
      );
  }


  function getNewProducts() {

    return getProducts()
      .filter(
        product =>
          product.isNew === true
      );
  }


  function getTrendingProducts() {

    return getProducts()
      .filter(
        product =>
          product.isTrending === true
      );
  }


  function getBestsellers() {

    return getProducts()
      .filter(
        product =>
          String(product.badge || "")
            .toLowerCase()
            .includes("bestseller")
      )
      .sort(
        (a, b) =>
          Number(b.reviews || 0) -
          Number(a.reviews || 0)
      );
  }


  /* =======================================================
     PRICE COLLECTIONS
     ======================================================= */

  function getProductsUnder(
    amount
  ) {

    const max =
      Number(amount);


    if (!Number.isFinite(max)) {
      return [];
    }


    return getProducts()
      .filter(
        product =>
          Number(product.price || 0) <= max
      )
      .sort(
        (a, b) =>
          Number(a.price || 0) -
          Number(b.price || 0)
      );
  }


  function getProductsWithDiscount(
    minimumDiscount
  ) {

    const discount =
      Number(minimumDiscount);


    if (!Number.isFinite(discount)) {
      return [];
    }


    return getProducts()
      .filter(
        product =>
          Number(product.discount || 0) >=
          discount
      )
      .sort(
        (a, b) =>
          Number(b.discount || 0) -
          Number(a.discount || 0)
      );
  }


  /* =======================================================
     SIZE CATEGORY DETECTION
     ======================================================= */

  function getSizeType(
    product
  ) {

    const sizes =
      product?.sizes || [];


    if (!sizes.length) {
      return "none";
    }


    const numeric =
      sizes.every(
        size =>
          !isNaN(
            Number(
              String(size)
                .replace(/[^\d.]/g, "")
            )
          )
      );


    if (numeric) {
      return "footwear-or-bottomwear";
    }


    if (
      sizes.some(
        size =>
          /Y$/i.test(String(size))
      )
    ) {
      return "kids";
    }


    if (
      sizes.includes("XS") ||
      sizes.includes("S") ||
      sizes.includes("M") ||
      sizes.includes("L") ||
      sizes.includes("XL")
    ) {
      return "apparel";
    }


    return "other";
  }


  /* =======================================================
     RESET
     ======================================================= */

  function resetFilters() {
    return createDefaultFilters();
  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFFilters = {

    createDefaultFilters,

    filterProducts,

    sortProducts,

    getFilteredProducts,

    getAvailableSizes,

    getAvailableColors,

    getAvailableTags,

    getPriceRange,

    getSaleProducts,

    getNewProducts,

    getTrendingProducts,

    getBestsellers,

    getProductsUnder,

    getProductsWithDiscount,

    getSizeType,

    resetFilters

  };


  /* =======================================================
     GLOBAL HELPERS
     ======================================================= */

  window.filterProducts =
    filterProducts;

  window.sortProducts =
    sortProducts;

  window.getFilteredProducts =
    getFilteredProducts;


  /* =======================================================
     READY EVENT
     ======================================================= */

  window.dispatchEvent(
    new CustomEvent(
      "asf:filters-ready"
    )
  );

})();
