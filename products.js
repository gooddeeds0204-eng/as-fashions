/* =========================================================
   AS FASHIONS — PRODUCTS.JS
   Product catalogue + filters + sorting + wishlist + cart
   ========================================================= */

"use strict";

/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = [
  // ================= WOMEN =================

  {
    id: "w001",
    name: "Women Floral Printed Kurti",
    category: "Women",
    subcategory: "Kurtis",
    gender: "Women",
    price: 799,
    oldPrice: 1499,
    discount: 47,
    rating: 4.5,
    reviews: 128,
    sizes: ["S", "M", "L", "XL"],
    color: "Pink",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "w002",
    name: "Women Oversized Casual T-Shirt",
    category: "Women",
    subcategory: "T-Shirts",
    gender: "Women",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.3,
    reviews: 96,
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "w003",
    name: "Women Elegant Western Dress",
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    price: 999,
    oldPrice: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 214,
    sizes: ["S", "M", "L"],
    color: "Black",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "w004",
    name: "Women Straight Fit Jeans",
    category: "Women",
    subcategory: "Jeans",
    gender: "Women",
    price: 899,
    oldPrice: 1799,
    discount: 50,
    rating: 4.4,
    reviews: 175,
    sizes: ["28", "30", "32", "34"],
    color: "Blue",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "w005",
    name: "Women Premium Handbag",
    category: "Women",
    subcategory: "Bags",
    gender: "Women",
    price: 699,
    oldPrice: 1399,
    discount: 50,
    rating: 4.6,
    reviews: 82,
    sizes: ["Free Size"],
    color: "Brown",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80"
  },

  // ================= MEN =================

  {
    id: "m001",
    name: "Men Premium Casual Shirt",
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    price: 699,
    oldPrice: 1499,
    discount: 53,
    rating: 4.5,
    reviews: 189,
    sizes: ["S", "M", "L", "XL", "XXL"],
    color: "Blue",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "m002",
    name: "Men Slim Fit T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 399,
    oldPrice: 799,
    discount: 50,
    rating: 4.2,
    reviews: 114,
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    badge: "Under ₹499",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "m003",
    name: "Men Relaxed Fit Jeans",
    category: "Men",
    subcategory: "Jeans",
    gender: "Men",
    price: 899,
    oldPrice: 1799,
    discount: 50,
    rating: 4.4,
    reviews: 142,
    sizes: ["30", "32", "34", "36"],
    color: "Blue",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "m004",
    name: "Men Premium Sneakers",
    category: "Men",
    subcategory: "Footwear",
    gender: "Men",
    price: 1299,
    oldPrice: 2499,
    discount: 48,
    rating: 4.6,
    reviews: 221,
    sizes: ["7", "8", "9", "10"],
    color: "White",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },

  // ================= KIDS — GIRL =================

  {
    id: "g001",
    name: "Girls Floral Party Dress",
    category: "Kids",
    subcategory: "Dresses",
    gender: "Girl",
    price: 599,
    oldPrice: 1199,
    discount: 50,
    rating: 4.7,
    reviews: 91,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    color: "Pink",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "g002",
    name: "Girls Cotton Casual Top",
    category: "Kids",
    subcategory: "Tops",
    gender: "Girl",
    price: 399,
    oldPrice: 799,
    discount: 50,
    rating: 4.4,
    reviews: 63,
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    color: "Yellow",
    badge: "Under ₹499",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "g003",
    name: "Girls Denim Jacket",
    category: "Kids",
    subcategory: "Jackets",
    gender: "Girl",
    price: 799,
    oldPrice: 1599,
    discount: 50,
    rating: 4.5,
    reviews: 77,
    sizes: ["4-5Y", "6-7Y", "8-9Y"],
    color: "Blue",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80"
  },

  // ================= KIDS — BOY =================

  {
    id: "b001",
    name: "Boys Casual Printed Shirt",
    category: "Kids",
    subcategory: "Shirts",
    gender: "Boy",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.4,
    reviews: 84,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    color: "Blue",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "b002",
    name: "Boys Premium T-Shirt",
    category: "Kids",
    subcategory: "T-Shirts",
    gender: "Boy",
    price: 349,
    oldPrice: 699,
    discount: 50,
    rating: 4.3,
    reviews: 69,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    color: "Green",
    badge: "Under ₹499",
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80"
  },

  {
    id: "b003",
    name: "Boys Denim Casual Jeans",
    category: "Kids",
    subcategory: "Jeans",
    gender: "Boy",
    price: 699,
    oldPrice: 1399,
    discount: 50,
    rating: 4.5,
    reviews: 73,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    color: "Blue",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80"
  }
];


/* =========================================================
   STATE
   ========================================================= */

let currentProducts = [...products];

let wishlist =
  JSON.parse(localStorage.getItem("asFashionsWishlist")) || [];

let cart =
  JSON.parse(localStorage.getItem("asFashionsCart")) || [];


/* =========================================================
   URL FILTERS
   Example:
   products.html?category=Women
   products.html?category=Kids&gender=Girl
   products.html?maxPrice=499
   products.html?discount=50
   ========================================================= */

const params = new URLSearchParams(window.location.search);

let selectedCategory = params.get("category") || "All";
let selectedGender = params.get("gender") || "All";
let selectedSubcategory = params.get("subcategory") || "All";
let maxPrice = Number(params.get("maxPrice")) || Infinity;
let minDiscount = Number(params.get("discount")) || 0;
let searchQuery = params.get("search") || "";
let sortValue = params.get("sort") || "featured";


/* =========================================================
   HELPERS
   ========================================================= */

function saveWishlist() {
  localStorage.setItem(
    "asFashionsWishlist",
    JSON.stringify(wishlist)
  );
}

function saveCart() {
  localStorage.setItem(
    "asFashionsCart",
    JSON.stringify(cart)
  );
}

function isInWishlist(id) {
  return wishlist.includes(id);
}

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function filterProducts() {

  currentProducts = products.filter(product => {

    const categoryMatch =
      selectedCategory === "All" ||
      product.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    const genderMatch =
      selectedGender === "All" ||
      product.gender.toLowerCase() ===
        selectedGender.toLowerCase();

    const subcategoryMatch =
      selectedSubcategory === "All" ||
      product.subcategory.toLowerCase() ===
        selectedSubcategory.toLowerCase();

    const priceMatch =
      product.price <= maxPrice;

    const discountMatch =
      product.discount >= minDiscount;

    const searchMatch =
      !searchQuery ||
      `${product.name} ${product.category} ${product.subcategory}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return (
      categoryMatch &&
      genderMatch &&
      subcategoryMatch &&
      priceMatch &&
      discountMatch &&
      searchMatch
    );
  });

  sortProducts();

  renderProducts();
}


/* =========================================================
   SORTING
   ========================================================= */

function sortProducts() {

  switch (sortValue) {

    case "price-low":
      currentProducts.sort(
        (a, b) => a.price - b.price
      );
      break;

    case "price-high":
      currentProducts.sort(
        (a, b) => b.price - a.price
      );
      break;

    case "discount":
      currentProducts.sort(
        (a, b) => b.discount - a.discount
      );
      break;

    case "rating":
      currentProducts.sort(
        (a, b) => b.rating - a.rating
      );
      break;

    case "newest":
      currentProducts.reverse();
      break;

    default:
      break;
  }
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

  const liked = isInWishlist(product.id);

  return `
    <article class="product-card"
      data-product-id="${product.id}">

      <div class="product-image-wrapper">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/500x650?text=AS+Fashions'"
        >

        ${
          product.badge
            ? `<span class="product-badge pulse-badge">
                ${product.badge}
              </span>`
            : ""
        }

        <button
          class="wishlist-btn ${liked ? "active" : ""}"
          onclick="toggleWishlist('${product.id}', event)"
          aria-label="Wishlist">

          ${liked ? "♥" : "♡"}

        </button>

        <button
          class="quick-view-btn"
          onclick="openProduct('${product.id}', event)">

          Quick View

        </button>

      </div>

      <div class="product-info">

        <p class="product-category">
          ${product.category}
          ${product.gender !== product.category
            ? ` • ${product.gender}`
            : ""}
        </p>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <div class="rating">

          <span class="rating-star">
            ★
          </span>

          <span>
            ${product.rating}
          </span>

          <span class="review-count">
            (${product.reviews})
          </span>

        </div>

        <div class="price-row">

          <strong class="product-price">
            ₹${product.price.toLocaleString("en-IN")}
          </strong>

          <span class="old-price">
            ₹${product.oldPrice.toLocaleString("en-IN")}
          </span>

          <span class="discount">
            ${product.discount}% OFF
          </span>

        </div>

        <div class="product-actions">

          <button
            class="add-cart-btn"
            onclick="addToCart('${product.id}', event)">

            🛒 Add to Cart

          </button>

          <button
            class="view-product-btn"
            onclick="openProduct('${product.id}', event)">

            View

          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

  const container =
    document.querySelector(
      "#productsGrid, .products-grid, .product-grid"
    );

  if (!container) return;

  if (!currentProducts.length) {

    container.innerHTML = `
      <div class="no-products">

        <div class="no-products-icon">
          🛍️
        </div>

        <h2>No products found</h2>

        <p>
          Try changing your filters or search.
        </p>

        <button
          onclick="clearAllFilters()">

          Clear Filters

        </button>

      </div>
    `;

  } else {

    container.innerHTML =
      currentProducts
        .map(createProductCard)
        .join("");
  }

  updateProductCount();
  updateWishlistCount();
  updateCartCount();
}


/* =========================================================
   PRODUCT COUNT
   ========================================================= */

function updateProductCount() {

  const elements = document.querySelectorAll(
    "#productCount, .product-count"
  );

  elements.forEach(el => {
    el.textContent =
      `${currentProducts.length} Products`;
  });
}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id, event) {

  if (event) {
    event.stopPropagation();
  }

  const index = wishlist.indexOf(id);

  if (index === -1) {

    wishlist.push(id);

    showToast("❤️ Added to Wishlist");

  } else {

    wishlist.splice(index, 1);

    showToast("Removed from Wishlist");
  }

  saveWishlist();

  renderProducts();
}


/* =========================================================
   CART
   ========================================================= */

function addToCart(id, event) {

  if (event) {
    event.stopPropagation();
  }

  const product =
    products.find(p => p.id === id);

  if (!product) return;

  const existing =
    cart.find(item => item.id === id);

  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({
      id: id,
      quantity: 1
    });
  }

  saveCart();

  updateCartCount();

  showToast("🛒 Added to Cart");
}


/* =========================================================
   REMOVE CART
   ========================================================= */

function removeFromCart(id) {

  cart =
    cart.filter(item => item.id !== id);

  saveCart();

  updateCartCount();
}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

  const count =
    getCartQuantity();

  document
    .querySelectorAll(
      "#cartCount, .cart-count, [data-cart-count]"
    )
    .forEach(el => {

      el.textContent = count;

      el.style.display =
        count > 0 ? "flex" : "none";
    });
}


/* =========================================================
   WISHLIST COUNT
   ========================================================= */

function updateWishlistCount() {

  document
    .querySelectorAll(
      "#wishlistCount, .wishlist-count, [data-wishlist-count]"
    )
    .forEach(el => {

      el.textContent =
        wishlist.length;

      el.style.display =
        wishlist.length > 0
          ? "flex"
          : "none";
    });
}


/* =========================================================
   PRODUCT DETAILS NAVIGATION
   ========================================================= */

function openProduct(id, event) {

  if (event) {
    event.stopPropagation();
  }

  const product =
    products.find(p => p.id === id);

  if (!product) return;

  /*
    product.html should read:
    ?id=w001
  */

  window.location.href =
    `product.html?id=${encodeURIComponent(id)}`;
}


/* =========================================================
   CATEGORY NAVIGATION
   ========================================================= */

function goToCategory(category, gender = "All") {

  let url =
    `products.html?category=${encodeURIComponent(category)}`;

  if (gender !== "All") {

    url +=
      `&gender=${encodeURIComponent(gender)}`;
  }

  window.location.href = url;
}


/* =========================================================
   PRICE NAVIGATION
   ========================================================= */

function goToPrice(max) {

  window.location.href =
    `products.html?category=${encodeURIComponent(
      selectedCategory === "All"
        ? "All"
        : selectedCategory
    )}&maxPrice=${max}`;
}


/* =========================================================
   DISCOUNT NAVIGATION
   ========================================================= */

function goToDiscount(discount) {

  window.location.href =
    `products.html?category=${encodeURIComponent(
      selectedCategory === "All"
        ? "All"
        : selectedCategory
    )}&discount=${discount}`;
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(value) {

  const query =
    String(value || "").trim();

  const url =
    `products.html?search=${encodeURIComponent(query)}`;

  window.location.href = url;
}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearAllFilters() {

  window.location.href =
    "products.html";
}


/* =========================================================
   APPLY FILTER UI
   ========================================================= */

function setupFilters() {

  const categorySelect =
    document.querySelector(
      "#categoryFilter"
    );

  const genderSelect =
    document.querySelector(
      "#genderFilter"
    );

  const subcategorySelect =
    document.querySelector(
      "#subcategoryFilter"
    );

  const priceSelect =
    document.querySelector(
      "#priceFilter"
    );

  const discountSelect =
    document.querySelector(
      "#discountFilter"
    );

  const sortSelect =
    document.querySelector(
      "#sortFilter, #sortBy"
    );


  if (categorySelect) {

    categorySelect.value =
      selectedCategory;

    categorySelect.addEventListener(
      "change",
      function () {

        selectedCategory =
          this.value;

        updateURL();
        filterProducts();
      }
    );
  }


  if (genderSelect) {

    genderSelect.value =
      selectedGender;

    genderSelect.addEventListener(
      "change",
      function () {

        selectedGender =
          this.value;

        updateURL();
        filterProducts();
      }
    );
  }


  if (subcategorySelect) {

    subcategorySelect.value =
      selectedSubcategory;

    subcategorySelect.addEventListener(
      "change",
      function () {

        selectedSubcategory =
          this.value;

        updateURL();
        filterProducts();
      }
    );
  }


  if (priceSelect) {

    priceSelect.value =
      maxPrice === Infinity
        ? "all"
        : maxPrice;

    priceSelect.addEventListener(
      "change",
      function () {

        maxPrice =
          this.value === "all"
            ? Infinity
            : Number(this.value);

        updateURL();
        filterProducts();
      }
    );
  }


  if (discountSelect) {

    discountSelect.value =
      minDiscount || "all";

    discountSelect.addEventListener(
      "change",
      function () {

        minDiscount =
          this.value === "all"
            ? 0
            : Number(this.value);

        updateURL();
        filterProducts();
      }
    );
  }


  if (sortSelect) {

    sortSelect.value =
      sortValue;

    sortSelect.addEventListener(
      "change",
      function () {

        sortValue =
          this.value;

        updateURL();
        filterProducts();
      }
    );
  }
}


/* =========================================================
   UPDATE URL WITHOUT RELOADING
   ========================================================= */

function updateURL() {

  const url =
    new URL(
      window.location.href
    );

  url.search = "";

  if (
    selectedCategory &&
    selectedCategory !== "All"
  ) {

    url.searchParams.set(
      "category",
      selectedCategory
    );
  }

  if (
    selectedGender &&
    selectedGender !== "All"
  ) {

    url.searchParams.set(
      "gender",
      selectedGender
    );
  }

  if (
    selectedSubcategory &&
    selectedSubcategory !== "All"
  ) {

    url.searchParams.set(
      "subcategory",
      selectedSubcategory
    );
  }

  if (maxPrice !== Infinity) {

    url.searchParams.set(
      "maxPrice",
      maxPrice
    );
  }

  if (minDiscount > 0) {

    url.searchParams.set(
      "discount",
      minDiscount
    );
  }

  if (searchQuery) {

    url.searchParams.set(
      "search",
      searchQuery
    );
  }

  if (sortValue !== "featured") {

    url.searchParams.set(
      "sort",
      sortValue
    );
  }

  history.replaceState(
    {},
    "",
    url
  );
}


/* =========================================================
   SEARCH BOX SETUP
   ========================================================= */

function setupSearch() {

  const searchInputs =
    document.querySelectorAll(
      "#searchInput, .search-input"
    );

  searchInputs.forEach(input => {

    input.value =
      searchQuery;

    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          performSearch(
            input.value
          );
        }
      }
    );
  });
}


/* =========================================================
   TOAST MESSAGE
   ========================================================= */

function showToast(message) {

  let toast =
    document.querySelector(
      "#asToast"
    );

  if (!toast) {

    toast =
      document.createElement(
        "div"
      );

    toast.id =
      "asToast";

    toast.className =
      "as-toast";

    document.body.appendChild(
      toast
    );
  }

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.asToastTimer
  );

  window.asToastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2200);
}


/* =========================================================
   HEADER NAVIGATION
   ========================================================= */

function setupHeaderNavigation() {

  document
    .querySelectorAll(
      "[data-category]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const category =
            this.dataset.category;

          const gender =
            this.dataset.gender ||
            "All";

          goToCategory(
            category,
            gender
          );
        }
      );
    });
}


/* =========================================================
   CART PAGE
   ========================================================= */

function openCart() {

  window.location.href =
    "cart.html";
}


/* =========================================================
   WISHLIST PAGE
   ========================================================= */

function openWishlist() {

  window.location.href =
    "wishlist.html";
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const menuButton =
    document.querySelector(
      "#menuButton, .menu-button, .hamburger"
    );

  const mobileMenu =
    document.querySelector(
      "#mobileMenu, .mobile-menu"
    );

  if (
    !menuButton ||
    !mobileMenu
  ) return;

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.toggle(
        "active"
      );

      menuButton.classList.toggle(
        "active"
      );
    }
  );
}


/* =========================================================
   CARD CLICK
   ========================================================= */

function setupCardClicks() {

  document.addEventListener(
    "click",
    event => {

      const card =
        event.target.closest(
          ".product-card"
        );

      if (!card) return;

      if (
        event.target.closest(
          "button"
        )
      ) return;

      const id =
        card.dataset.productId;

      if (id) {
        openProduct(id);
      }
    }
  );
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupFilters();

    setupSearch();

    setupHeaderNavigation();

    setupMobileMenu();

    setupCardClicks();

    filterProducts();

    updateCartCount();

    updateWishlistCount();

  }
);


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.products =
  products;

window.filterProducts =
  filterProducts;

window.renderProducts =
  renderProducts;

window.toggleWishlist =
  toggleWishlist;

window.addToCart =
  addToCart;

window.removeFromCart =
  removeFromCart;

window.openProduct =
  openProduct;

window.goToCategory =
  goToCategory;

window.goToPrice =
  goToPrice;

window.goToDiscount =
  goToDiscount;

window.performSearch =
  performSearch;

window.clearAllFilters =
  clearAllFilters;

window.openCart =
  openCart;

window.openWishlist =
  openWishlist;
