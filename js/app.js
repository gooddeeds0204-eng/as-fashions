/* =========================================================
   AS FASHIONS — js/app.js
   Complete interaction controller
   ========================================================= */

(() => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const state = {
    products: [],
    cart: [],
    wishlist: [],
    activeCategory: "All",
    search: "",
    saleEnds:
      Date.now() +
      (((2 * 24 + 11) * 60 + 45) * 60 + 32) * 1000
  };

  /* =========================================================
     HELPERS
     ========================================================= */

  function getProducts() {
    if (Array.isArray(window.products)) return window.products;
    if (Array.isArray(window.PRODUCTS)) return window.PRODUCTS;
    return [];
  }

  function productId(product, index = 0) {
    return String(
      product?.id ??
      product?.productId ??
      product?.sku ??
      `product-${index}`
    );
  }

  function productName(product) {
    return (
      product?.name ||
      product?.title ||
      "AS FASHIONS Product"
    );
  }

  function productImage(product) {
    if (Array.isArray(product?.images) && product.images.length) {
      return product.images[0];
    }

    return (
      product?.image ||
      product?.imageUrl ||
      "https://via.placeholder.com/600x800?text=AS+FASHIONS"
    );
  }

  function productPrice(product) {
    return Number(
      product?.price ??
      product?.sellingPrice ??
      0
    );
  }

  function productMrp(product) {
    return Number(
      product?.mrp ??
      product?.originalPrice ??
      product?.oldPrice ??
      productPrice(product)
    );
  }

  function productCategory(product) {
    return (
      product?.category ||
      product?.mainCategory ||
      ""
    );
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function money(value) {
    return `₹${Number(value || 0).toLocaleString("en-IN")}`;
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }

  /* =========================================================
     LOCAL STORAGE
     ========================================================= */

  function loadStorage() {
    try {
      const savedCart =
        JSON.parse(localStorage.getItem("asf_cart"));

      const savedWishlist =
        JSON.parse(localStorage.getItem("asf_wishlist"));

      if (Array.isArray(savedCart)) {
        state.cart = savedCart;
      }

      if (Array.isArray(savedWishlist)) {
        state.wishlist = savedWishlist;
      }
    } catch {
      state.cart = [];
      state.wishlist = [];
    }
  }

  function saveStorage() {
    localStorage.setItem(
      "asf_cart",
      JSON.stringify(state.cart)
    );

    localStorage.setItem(
      "asf_wishlist",
      JSON.stringify(state.wishlist)
    );
  }

  /* =========================================================
     PRODUCT DATA
     ========================================================= */

  function initialiseProducts() {
    state.products = getProducts();

    renderAllProducts();
    updateProductCount();
  }

  function updateProductCount() {
    const count = $("#totalProducts");

    if (count) {
      count.textContent = state.products.length;
    }
  }

  /* =========================================================
     CATEGORY DATA
     ========================================================= */

  function getCategoryNames() {
    const result = [];

    if (Array.isArray(window.categories)) {
      window.categories.forEach(category => {
        if (typeof category === "string") {
          result.push(category);
        } else if (category?.name) {
          result.push(category.name);
        } else if (category?.title) {
          result.push(category.title);
        }
      });
    }

    if (Array.isArray(window.CATEGORIES)) {
      window.CATEGORIES.forEach(category => {
        if (typeof category === "string") {
          result.push(category);
        } else if (category?.name) {
          result.push(category.name);
        }
      });
    }

    state.products.forEach(product => {
      const category = productCategory(product);

      if (category && !result.includes(category)) {
        result.push(category);
      }
    });

    return [...new Set(result)];
  }

  function renderCategories() {
    const grid = $("#categoryGrid");
    if (!grid) return;

    const preferred = [
      "Men",
      "Women",
      "Kids",
      "Footwear",
      "Bags",
      "Accessories",
      "Sports",
      "Winter Wear"
    ];

    const available = getCategoryNames();

    let categories = preferred.filter(
      category =>
        available.length === 0 ||
        available.some(
          item =>
            item.toLowerCase() ===
            category.toLowerCase()
        )
    );

    if (!categories.length) {
      categories = preferred;
    }

    grid.innerHTML = categories
      .slice(0, 8)
      .map((category, index) => {

        const product =
          state.products.find(
            item =>
              productCategory(item).toLowerCase() ===
              category.toLowerCase()
          ) || state.products[index];

        return `
          <button
            class="category-card"
            data-category="${escapeHTML(category)}"
            type="button"
          >
            <span class="category-image">
              <img
                src="${escapeHTML(
                  productImage(product || {})
                )}"
                alt="${escapeHTML(category)}"
                loading="lazy"
              >
            </span>

            <span class="category-name">
              ${escapeHTML(category)}
            </span>
          </button>
        `;
      })
      .join("");
  }

  /* =========================================================
     PRODUCT FILTERING
     ========================================================= */

  function matchesCategory(product) {
    if (
      !state.activeCategory ||
      state.activeCategory === "All"
    ) {
      return true;
    }

    const category =
      productCategory(product).toLowerCase();

    const target =
      state.activeCategory.toLowerCase();

    if (category === target) return true;

    return (
      category.includes(target) ||
      target.includes(category)
    );
  }

  function matchesSearch(product) {
    if (!state.search) return true;

    const query =
      state.search.toLowerCase().trim();

    const text = [
      productName(product),
      productCategory(product),
      product?.brand,
      product?.subcategory,
      ...(Array.isArray(product?.tags)
        ? product.tags
        : [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return text.includes(query);
  }

  function filteredProducts() {
    return state.products.filter(product => {
      return (
        matchesCategory(product) &&
        matchesSearch(product)
      );
    });
  }

  /* =========================================================
     PRODUCT CARD
     ========================================================= */

  function productCard(product, index) {
    const id = productId(product, index);
    const name = productName(product);
    const image = productImage(product);
    const price = productPrice(product);
    const mrp = productMrp(product);

    const discount =
      mrp > price
        ? Math.round(((mrp - price) / mrp) * 100)
        : Number(product?.discount || 0);

    const wished =
      state.wishlist.includes(id);

    return `
      <article
        class="product-card"
        data-product-id="${escapeHTML(id)}"
      >

        <div class="product-image-wrap">

          <img
            class="product-image"
            src="${escapeHTML(image)}"
            alt="${escapeHTML(name)}"
            loading="lazy"
          >

          ${
            discount > 0
              ? `
                <span class="product-discount">
                  ${discount}% OFF
                </span>
              `
              : ""
          }

          <button
            class="product-wishlist ${wished ? "active" : ""}"
            data-action="wishlist"
            data-id="${escapeHTML(id)}"
            type="button"
            aria-label="Add to wishlist"
          >
            ${wished ? "♥" : "♡"}
          </button>

          <button
            class="quick-view-btn"
            data-action="quick"
            data-id="${escapeHTML(id)}"
            type="button"
          >
            QUICK VIEW
          </button>

        </div>

        <div class="product-info">

          <div class="product-brand">
            ${escapeHTML(
              product?.brand || "AS FASHIONS"
            )}
          </div>

          <h3 class="product-title">
            ${escapeHTML(name)}
          </h3>

          <div class="product-prices">

            <strong>
              ${money(price)}
            </strong>

            ${
              mrp > price
                ? `
                  <del>${money(mrp)}</del>
                `
                : ""
            }

          </div>

          ${
            discount > 0
              ? `
                <span class="product-offer">
                  ${discount}% OFF
                </span>
              `
              : ""
          }

        </div>

      </article>
    `;
  }

  function renderProductList(element, products) {
    if (!element) return;

    if (!products.length) {
      element.innerHTML = `
        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:50px 20px;
          color:#777;
        ">
          No products found.
        <br>
        Try another search or category.
      </div>
      `;
      return;
    }

    element.innerHTML =
      products
        .map((product, index) =>
          productCard(product, index)
        )
        .join("");
  }

  /* =========================================================
     PRODUCT SECTIONS
     ========================================================= */

  function renderAllProducts() {
    renderCategories();

    const all = filteredProducts();

    const flash =
      state.products.filter(
        product =>
          Number(product?.discount || 0) >= 30
      );

    const newest =
      state.products.filter(
        product =>
          product?.isNew === true ||
          product?.newArrival === true ||
          String(product?.badge || "")
            .toLowerCase()
            .includes("new")
      );

    const trending =
      state.products.filter(
        product =>
          product?.isTrending === true ||
          product?.trending === true ||
          String(product?.badge || "")
            .toLowerCase()
            .includes("trend")
      );

    renderProductList(
      $("#flashProducts"),
      flash.length ? flash.slice(0, 8) : all.slice(0, 8)
    );

    renderProductList(
      $("#newProducts"),
      newest.length ? newest.slice(0, 8) : all.slice(0, 8)
    );

    renderProductList(
      $("#trendingProducts"),
      trending.length ? trending.slice(0, 8) : all.slice(0, 8)
    );
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function selectCategory(category) {
    state.activeCategory = category;
    state.search = "";

    const searchInput = $("#searchInput");

    if (searchInput) {
      searchInput.value = "";
    }

    closeSearchResults();

    const products =
      filteredProducts();

    const allSections = [
      $("#flashProducts"),
      $("#newProducts"),
      $("#trendingProducts")
    ];

    allSections.forEach(section => {
      if (section) {
        renderProductList(
          section,
          products.slice(0, 8)
        );
      }
    });

    const main =
      $("#mainContent");

    if (main) {
      main.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    showToast(
      category === "All"
        ? "Showing all products"
        : `${category} collection`
    );
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function openMobileMenu() {
    $("#mobileMenu")?.classList.add("active");
    $("#mobileOverlay")?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    $("#mobileMenu")?.classList.remove("active");
    $("#mobileOverlay")?.classList.remove("active");
    document.body.style.overflow = "";
  }

  /* =========================================================
     SEARCH
     ========================================================= */

  function searchProducts(query) {
    state.search = query.trim();

    const resultsBox =
      $("#searchResults");

    if (!resultsBox) return;

    if (!state.search) {
      closeSearchResults();
      return;
    }

    const results =
      state.products
        .filter(matchesSearch)
        .slice(0, 8);

    if (!results.length) {
      resultsBox.innerHTML = `
        <div style="padding:20px;color:#777;">
          No products found.
        </div>
      `;

      resultsBox.classList.add("active");
      return;
    }

    resultsBox.innerHTML =
      results
        .map((product, index) => {

          const id =
            productId(product, index);

          return `
            <div
              class="search-result"
              data-search-id="${escapeHTML(id)}"
            >
              <img
                src="${escapeHTML(
                  productImage(product)
                )}"
                alt=""
              >

              <div>
                <strong>
                  ${escapeHTML(
                    productName(product)
                  )}
                </strong>

                <small>
                  ${money(
                    productPrice(product)
                  )}
                </small>
              </div>

            </div>
          `;
        })
        .join("");

    resultsBox.classList.add("active");
  }

  function closeSearchResults() {
    $("#searchResults")?.classList.remove("active");
  }

  function openProductById(id) {
    const product =
      state.products.find(
        (item, index) =>
          productId(item, index) === String(id)
      );

    if (!product) return;

    openQuickView(product);
  }

  /* =========================================================
     WISHLIST
     ========================================================= */

  function toggleWishlist(id) {
    id = String(id);

    const index =
      state.wishlist.indexOf(id);

    if (index === -1) {
      state.wishlist.push(id);
      showToast("Added to wishlist ♡");
    } else {
      state.wishlist.splice(index, 1);
      showToast("Removed from wishlist");
    }

    saveStorage();
    updateWishlistCount();
    renderAllProducts();
  }

  function updateWishlistCount() {
    const count =
      $("#wishlistCount");

    if (count) {
      count.textContent =
        state.wishlist.length;
    }
  }

  function showWishlist() {
    if (!state.wishlist.length) {
      showToast("Your wishlist is empty");
      return;
    }

    const products =
      state.products.filter(
        (product, index) =>
          state.wishlist.includes(
            productId(product, index)
          )
      );

    renderProductList(
      $("#newProducts"),
      products
    );

    $("#newProducts")?.scrollIntoView({
      behavior: "smooth"
    });

    showToast(
      `${products.length} wishlist item${
        products.length === 1 ? "" : "s"
      }`
    );
  }

  /* =========================================================
     CART
     ========================================================= */

  function addToCart(id) {
    id = String(id);

    const product =
      state.products.find(
        (item, index) =>
          productId(item, index) === id
      );

    if (!product) return;

    const existing =
      state.cart.find(
        item => String(item.id) === id
      );

    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id,
        name: productName(product),
        price: productPrice(product),
        image: productImage(product),
        quantity: 1
      });
    }

    saveStorage();
    updateCartCount();

    showToast("Added to bag 🛍");
  }

  function updateCartCount() {
    const count =
      $("#cartCount");

    if (!count) return;

    const total =
      state.cart.reduce(
        (sum, item) =>
          sum + Number(item.quantity || 0),
        0
      );

    count.textContent = total;
  }

  function showCart() {
    if (!state.cart.length) {
      showToast("Your shopping bag is empty");
      return;
    }

    const total =
      state.cart.reduce(
        (sum, item) =>
          sum +
          Number(item.price || 0) *
          Number(item.quantity || 0),
        0
      );

    showToast(
      `${state.cart.length} item(s) • ${money(total)}`
    );
  }

  /* =========================================================
     QUICK VIEW
     ========================================================= */

  function openQuickView(product) {
    const modal =
      $("#quickModal");

    const content =
      $("#quickContent");

    if (!modal || !content) return;

    const id =
      productId(
        product,
        state.products.indexOf(product)
      );

    const price =
      productPrice(product);

    const mrp =
      productMrp(product);

    content.innerHTML = `
      <div>
        <img
          src="${escapeHTML(
            productImage(product)
          )}"
          alt="${escapeHTML(
            productName(product)
          )}"
        >
      </div>

      <div class="quick-info">

        <div style="
          font-size:12px;
          color:#777;
          text-transform:uppercase;
          letter-spacing:.08em;
        ">
          ${escapeHTML(
            product?.brand || "AS FASHIONS"
          )}
        </div>

        <h2>
          ${escapeHTML(
            productName(product)
          )}
        </h2>

        <div class="quick-price">
          ${money(price)}
          ${
            mrp > price
              ? `
                <del style="
                  font-size:13px;
                  color:#888;
                  margin-left:8px;
                ">
                  ${money(mrp)}
                </del>
              `
              : ""
          }
        </div>

        <p style="
          color:#666;
          line-height:1.7;
        ">
          ${
            escapeHTML(
              product?.description ||
              "Premium fashion from AS FASHIONS."
            )
          }
        </p>

        <div class="quick-actions">

          <button
            type="button"
            data-modal-cart="${escapeHTML(id)}"
          >
            ADD TO BAG
          </button>

          <button
            class="secondary"
            type="button"
            data-modal-wishlist="${escapeHTML(id)}"
          >
            ${
              state.wishlist.includes(id)
                ? "♥ WISHLISTED"
                : "♡ WISHLIST"
            }
          </button>

        </div>

      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeQuickView() {
    $("#quickModal")?.classList.remove("active");
    document.body.style.overflow = "";
  }

  /* =========================================================
     COUNTDOWN
     ========================================================= */

  function updateCountdown() {
    const element =
      $("#saleCountdown");

    if (!element) return;

    let remaining =
      state.saleEnds - Date.now();

    if (remaining <= 0) {
      state.saleEnds =
        Date.now() + 24 * 60 * 60 * 1000;

      remaining =
        state.saleEnds - Date.now();
    }

    const totalSeconds =
      Math.floor(remaining / 1000);

    const hours =
      Math.floor(totalSeconds / 3600);

    const minutes =
      Math.floor(
        (totalSeconds % 3600) / 60
      );

    const seconds =
      totalSeconds % 60;

    element.textContent =
      `${String(hours).padStart(2, "0")}h : ` +
      `${String(minutes).padStart(2, "0")}m : ` +
      `${String(seconds).padStart(2, "0")}s`;
  }

  /* =========================================================
     GLOBAL CLICK HANDLER
     ========================================================= */

  function handleClick(event) {
    const target =
      event.target.closest(
        "button,a,[data-action],[data-category]," +
        "[data-search-id],[data-modal-cart]," +
        "[data-modal-wishlist]"
      );

    if (!target) return;

    /* Category */

    const category =
      target.dataset.category;

    if (category) {
      event.preventDefault();

      closeMobileMenu();

      selectCategory(category);

      return;
    }

    /* Wishlist */

    if (
      target.dataset.action === "wishlist"
    ) {
      event.preventDefault();

      toggleWishlist(
        target.dataset.id
      );

      return;
    }

    /* Quick view */

    if (
      target.dataset.action === "quick"
    ) {
      event.preventDefault();

      openProductById(
        target.dataset.id
      );

      return;
    }

    /* Search result */

    if (target.dataset.searchId) {
      event.preventDefault();

      openProductById(
        target.dataset.searchId
      );

      closeSearchResults();

      return;
    }

    /* Modal cart */

    if (target.dataset.modalCart) {
      addToCart(
        target.dataset.modalCart
      );

      closeQuickView();

      return;
    }

    /* Modal wishlist */

    if (target.dataset.modalWishlist) {
      toggleWishlist(
        target.dataset.modalWishlist
      );

      const product =
        state.products.find(
          (item, index) =>
            productId(item, index) ===
            String(
              target.dataset.modalWishlist
            )
        );

      if (product) {
        openQuickView(product);
      }

      return;
    }

    /* Brand */

    if (target.id === "brandHome") {
      event.preventDefault();

      state.activeCategory = "All";
      state.search = "";

      renderAllProducts();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }

    /* Mobile menu */

    if (target.id === "menuButton") {
      openMobileMenu();
      return;
    }

    if (target.id === "mobileClose") {
      closeMobileMenu();
      return;
    }

    /* Wishlist */

    if (target.id === "wishlistButton") {
      showWishlist();
      return;
    }

    /* Cart */

    if (target.id === "cartButton") {
      showCart();
      return;
    }

    /* Close quick view */

    if (target.id === "quickClose") {
      closeQuickView();
      return;
    }

    /* Sale buttons */

    if (
      target.id === "saleButton" ||
      target.id === "flashSaleButton" ||
      target.id === "promoSaleButton"
    ) {
      selectCategory("All");

      $("#flashProducts")?.scrollIntoView({
        behavior: "smooth"
      });

      return;
    }

    /* All categories */

    if (
      target.id === "allCategoriesButton"
    ) {
      $("#categoryGrid")?.scrollIntoView({
        behavior: "smooth"
      });

      return;
    }

    /* Generic product card */

    const card =
      target.closest(".product-card");

    if (
      card &&
      !target.dataset.action
    ) {
      openProductById(
        card.dataset.productId
      );
    }
  }

  /* =========================================================
     SEARCH EVENTS
     ========================================================= */

  function initialiseSearch() {
    const input =
      $("#searchInput");

    if (!input) return;

    input.addEventListener(
      "input",
      event => {
        searchProducts(
          event.target.value
        );
      }
    );

    input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          const results =
            filteredProducts();

          closeSearchResults();

          renderProductList(
            $("#newProducts"),
            results.slice(0, 12)
          );

          $("#newProducts")?.scrollIntoView({
            behavior: "smooth"
          });
        }

        if (event.key === "Escape") {
          closeSearchResults();
          input.blur();
        }

      }
    );
  }

  /* =========================================================
     OUTSIDE CLICK
     ========================================================= */

  function initialiseOutsideClick() {
    document.addEventListener(
      "click",
      event => {

        const searchWrap =
          event.target.closest(
            ".search-wrap"
          );

        if (!searchWrap) {
          closeSearchResults();
        }

      }
    );
  }

  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  function initialiseKeyboard() {
    document.addEventListener(
      "keydown",
      event => {

        if (event.key === "Escape") {
          closeMobileMenu();
          closeQuickView();
          closeSearchResults();
        }

      }
    );
  }

  /* =========================================================
     INITIALISE
     ========================================================= */

  function init() {
    loadStorage();

    initialiseProducts();

    updateCartCount();
    updateWishlistCount();

    initialiseSearch();
    initialiseOutsideClick();
    initialiseKeyboard();

    document.addEventListener(
      "click",
      handleClick
    );

    $("#mobileOverlay")?.addEventListener(
      "click",
      closeMobileMenu
    );

    $("#quickModal")?.addEventListener(
      "click",
      event => {
        if (
          event.target.id === "quickModal"
        ) {
          closeQuickView();
        }
      }
    );

    updateCountdown();

    setInterval(
      updateCountdown,
      1000
    );

    setTimeout(() => {
      $("#siteLoader")?.classList.add("hide");
    }, 500);
  }

  /* =========================================================
     START
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
