/* =========================================================
   AS FASHIONS — js/search.js
   Premium Search Engine
   ========================================================= */

(function () {
  "use strict";

  const SEARCH_HISTORY_KEY = "asf_search_history";
  const MAX_HISTORY = 8;


  /* =======================================================
     PRODUCT SOURCE
     ======================================================= */

  function getProducts() {
    return window.PRODUCTS ||
           window.products ||
           [];
  }


  /* =======================================================
     NORMALIZE
     ======================================================= */

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }


  /* =======================================================
     SEARCH SCORE
     ======================================================= */

  function getSearchScore(product, query) {

    const q = normalize(query);

    if (!q) return 0;


    const name =
      normalize(product.name);

    const brand =
      normalize(product.brand);

    const category =
      normalize(product.category);

    const subcategory =
      normalize(product.subcategory);

    const tags =
      (product.tags || [])
        .map(normalize);


    let score = 0;


    /* Exact product name */

    if (name === q) {
      score += 100;
    }


    /* Product name starts with query */

    if (name.startsWith(q)) {
      score += 80;
    }


    /* Product name contains query */

    if (name.includes(q)) {
      score += 60;
    }


    /* Brand */

    if (brand === q) {
      score += 55;
    }

    if (brand.includes(q)) {
      score += 35;
    }


    /* Category */

    if (category === q) {
      score += 50;
    }

    if (category.includes(q)) {
      score += 30;
    }


    /* Subcategory */

    if (subcategory === q) {
      score += 45;
    }

    if (subcategory.includes(q)) {
      score += 28;
    }


    /* Tags */

    tags.forEach(tag => {

      if (tag === q) {
        score += 45;
      } else if (tag.includes(q)) {
        score += 25;
      }

    });


    /* Individual words */

    const words =
      q.split(" ")
        .filter(Boolean);


    words.forEach(word => {

      if (name.includes(word)) {
        score += 12;
      }

      if (category.includes(word)) {
        score += 8;
      }

      if (subcategory.includes(word)) {
        score += 8;
      }

      tags.forEach(tag => {

        if (tag.includes(word)) {
          score += 6;
        }

      });

    });


    /* Trending / New boost */

    if (score > 0) {

      if (product.isTrending) {
        score += 3;
      }

      if (product.isNew) {
        score += 2;
      }

    }


    return score;
  }


  /* =======================================================
     SEARCH PRODUCTS
     ======================================================= */

  function searchProducts(
    query,
    options = {}
  ) {

    const q =
      normalize(query);


    if (!q) {
      return [];
    }


    const products =
      getProducts();


    const results =
      products
        .map(product => ({

          product,

          score:
            getSearchScore(
              product,
              q
            )

        }))
        .filter(
          result =>
            result.score > 0
        )
        .sort(
          (a, b) =>
            b.score - a.score
        )
        .map(
          result =>
            result.product
        );


    const limit =
      Number(options.limit);


    if (
      Number.isFinite(limit) &&
      limit > 0
    ) {
      return results.slice(0, limit);
    }


    return results;
  }


  /* =======================================================
     SEARCH WITH METADATA
     ======================================================= */

  function search(
    query,
    options = {}
  ) {

    const results =
      searchProducts(
        query,
        options
      );


    if (
      options.saveHistory !== false &&
      normalize(query)
    ) {

      saveSearch(query);

    }


    return {

      query:
        String(query || "").trim(),

      total:
        results.length,

      products:
        results

    };
  }


  /* =======================================================
     SUGGESTIONS
     ======================================================= */

  function getSuggestions(
    query,
    limit = 8
  ) {

    const q =
      normalize(query);


    if (!q) {
      return getPopularSearches(
        limit
      );
    }


    const products =
      getProducts();


    const suggestions =
      new Map();


    products.forEach(product => {

      const name =
        String(
          product.name || ""
        ).trim();


      const category =
        String(
          product.category || ""
        ).trim();


      const subcategory =
        String(
          product.subcategory || ""
        ).trim();


      const brand =
        String(
          product.brand || ""
        ).trim();


      const candidates = [

        {
          text: name,
          type: "product",
          score:
            getSearchScore(
              product,
              q
            )
        },

        {
          text: subcategory,
          type: "category",
          score:
            normalize(subcategory)
              .includes(q)
              ? 45
              : 0
        },

        {
          text: category,
          type: "category",
          score:
            normalize(category)
              .includes(q)
              ? 40
              : 0
        },

        {
          text: brand,
          type: "brand",
          score:
            normalize(brand)
              .includes(q)
              ? 35
              : 0
        }

      ];


      candidates.forEach(
        candidate => {

          if (
            candidate.text &&
            candidate.score > 0
          ) {

            const key =
              normalize(
                candidate.text
              );


            if (
              !suggestions.has(key) ||
              suggestions.get(key).score <
                candidate.score
            ) {

              suggestions.set(
                key,
                candidate
              );

            }

          }

        }
      );

    });


    return [...suggestions.values()]
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(0, limit);
  }


  /* =======================================================
     POPULAR SEARCHES
     ======================================================= */

  function getPopularSearches(
    limit = 8
  ) {

    const products =
      getProducts();


    const popular = [];


    products
      .filter(
        product =>
          product.isTrending ||
          product.isNew
      )
      .sort(
        (a, b) => {

          const aScore =
            Number(a.rating || 0) +
            Number(a.reviews || 0) / 1000;

          const bScore =
            Number(b.rating || 0) +
            Number(b.reviews || 0) / 1000;

          return bScore - aScore;

        }
      )
      .forEach(product => {

        if (
          !popular.some(
            item =>
              normalize(item) ===
              normalize(product.name)
          )
        ) {

          popular.push(
            product.name
          );

        }

      });


    return popular.slice(
      0,
      limit
    );
  }


  /* =======================================================
     SEARCH HISTORY
     ======================================================= */

  function getSearchHistory() {

    try {

      const saved =
        localStorage.getItem(
          SEARCH_HISTORY_KEY
        );


      if (!saved) return [];


      const parsed =
        JSON.parse(saved);


      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch (error) {

      console.error(
        "AS FASHIONS search history error:",
        error
      );

      return [];

    }
  }


  function saveSearch(query) {

    const value =
      String(query || "").trim();


    if (!value) {
      return;
    }


    let history =
      getSearchHistory();


    history =
      history.filter(
        item =>
          normalize(item) !==
          normalize(value)
      );


    history.unshift(value);


    history =
      history.slice(
        0,
        MAX_HISTORY
      );


    localStorage.setItem(
      SEARCH_HISTORY_KEY,
      JSON.stringify(history)
    );


    window.dispatchEvent(
      new CustomEvent(
        "asf:search-history-updated",
        {
          detail: {
            history
          }
        }
      )
    );
  }


  function removeSearch(
    query
  ) {

    const value =
      normalize(query);


    const history =
      getSearchHistory()
        .filter(
          item =>
            normalize(item) !==
            value
        );


    localStorage.setItem(
      SEARCH_HISTORY_KEY,
      JSON.stringify(history)
    );


    window.dispatchEvent(
      new CustomEvent(
        "asf:search-history-updated",
        {
          detail: {
            history
          }
        }
      )
    );
  }


  function clearSearchHistory() {

    localStorage.removeItem(
      SEARCH_HISTORY_KEY
    );


    window.dispatchEvent(
      new CustomEvent(
        "asf:search-history-updated",
        {
          detail: {
            history: []
          }
        }
      )
    );
  }


  /* =======================================================
     CATEGORY SEARCH
     ======================================================= */

  function searchCategory(
    category,
    subcategory = null
  ) {

    const categoryName =
      normalize(category);


    const subcategoryName =
      normalize(subcategory);


    return getProducts()
      .filter(product => {

        const productCategory =
          normalize(
            product.category
          );


        const productSubcategory =
          normalize(
            product.subcategory
          );


        const categoryMatch =
          productCategory ===
          categoryName;


        if (!subcategoryName) {
          return categoryMatch;
        }


        return (
          categoryMatch &&
          productSubcategory ===
            subcategoryName
        );

      });
  }


  /* =======================================================
     TAG SEARCH
     ======================================================= */

  function searchByTag(
    tag
  ) {

    const target =
      normalize(tag);


    if (!target) return [];


    return getProducts()
      .filter(product => {

        const tags =
          (product.tags || [])
            .map(normalize);


        return tags.some(
          item =>
            item === target ||
            item.includes(target)
        );

      });
  }


  /* =======================================================
     PRICE SEARCH
     ======================================================= */

  function searchByPrice(
    maxPrice
  ) {

    const max =
      Number(maxPrice);


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


  /* =======================================================
     CLEAR SEARCH
     ======================================================= */

  function clearSearch() {

    window.dispatchEvent(
      new CustomEvent(
        "asf:search-cleared"
      )
    );
  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.ASFSearch = {

    search,

    searchProducts,

    getSuggestions,

    getPopularSearches,

    getSearchHistory,

    saveSearch,

    removeSearch,

    clearSearchHistory,

    searchCategory,

    searchByTag,

    searchByPrice,

    clearSearch

  };


  /* =======================================================
     GLOBAL HELPERS
     ======================================================= */

  window.searchProducts =
    searchProducts;

  window.getSearchSuggestions =
    getSuggestions;

  window.getSearchHistory =
    getSearchHistory;


  /* =======================================================
     READY EVENT
     ======================================================= */

  window.dispatchEvent(
    new CustomEvent(
      "asf:search-ready"
    )
  );

})();
