// ==========================================
// AS FASHIONS - PRODUCT DATA
// ==========================================

const PRODUCTS = [
  {
    id: "w001",
    name: "Floral Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.6,
    reviews: 128,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "w002",
    name: "Oversized Premium Shirt",
    category: "Women",
    subcategory: "Shirts",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.5,
    reviews: 96,
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "w003",
    name: "Elegant Black Top",
    category: "Women",
    subcategory: "Tops",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.7,
    reviews: 214,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "w004",
    name: "Relaxed Fit Jeans",
    category: "Women",
    subcategory: "Denim",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 87,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: "m001",
    name: "Classic Cotton Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.5,
    reviews: 164,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m002",
    name: "Premium Black T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.6,
    reviews: 302,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m003",
    name: "Slim Fit Blue Jeans",
    category: "Men",
    subcategory: "Denim",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.5,
    reviews: 119,
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "m004",
    name: "Casual Oversized Hoodie",
    category: "Men",
    subcategory: "Hoodies",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 76,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: "g001",
    name: "Girls Floral Party Dress",
    category: "Kids",
    subcategory: "Girl",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.8,
    reviews: 64,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g002",
    name: "Girls Casual Summer Dress",
    category: "Kids",
    subcategory: "Girl",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.6,
    reviews: 48,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b001",
    name: "Boys Casual Shirt",
    category: "Kids",
    subcategory: "Boy",
    price: 449,
    mrp: 899,
    discount: 50,
    rating: 4.5,
    reviews: 52,
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b002",
    name: "Boys Denim Jacket",
    category: "Kids",
    subcategory: "Boy",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.7,
    reviews: 38,
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
  }
];


// ==========================================
// COMMON HELPERS
// ==========================================

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

function formatPrice(price) {
  return "₹" + Number(price).toLocaleString("en-IN");
}


// ==========================================
// WISHLIST
// ==========================================

function getWishlist() {
  return JSON.parse(localStorage.getItem("asWishlist") || "[]");
}

function toggleWishlist(id) {
  let wishlist = getWishlist();

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
  } else {
    wishlist.push(id);
  }

  localStorage.setItem("asWishlist", JSON.stringify(wishlist));

  if (typeof renderProducts === "function") {
    renderProducts();
  }

  updateHeaderCounts();
}


// ==========================================
// CART
// ==========================================

function getCart() {
  return JSON.parse(localStorage.getItem("asCart") || "[]");
}

function addToCart(id) {
  const product = getProductById(id);
  if (!product) return;

  let cart = getCart();

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  localStorage.setItem("asCart", JSON.stringify(cart));

  updateHeaderCounts();

  alert(product.name + " cart lo add ayyindi.");
}

function updateHeaderCounts() {
  const wishlistCount = getWishlist().length;

  const cart = getCart();
  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  document.querySelectorAll("[data-wishlist-count]").forEach(el => {
    el.textContent = wishlistCount;
  });

  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount;
  });
}


// ==========================================
// PRODUCT CARD
// ==========================================

function createProductCard(product) {
  const wishlist = getWishlist();
  const isWishlisted = wishlist.includes(product.id);

  return `
    <article class="product-card">

      <div
        class="product-image-wrap"
        onclick="openProduct('${product.id}')"
      >

        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/600x800?text=AS+FASHIONS'"
        >

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <button
          class="wishlist-button ${isWishlisted ? "active" : ""}"
          onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
          aria-label="Wishlist"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div class="product-info">

        <div
          class="product-brand"
          onclick="openProduct('${product.id}')"
        >
          AS FASHIONS
        </div>

        <h3
          class="product-name"
          onclick="openProduct('${product.id}')"
        >
          ${product.name}
        </h3>

        <div class="product-rating">
          <span>★ ${product.rating}</span>
          <small>${product.reviews} reviews</small>
        </div>

        <div class="product-price">
          <strong>${formatPrice(product.price)}</strong>
          <del>${formatPrice(product.mrp)}</del>
          <span>${product.discount}% OFF</span>
        </div>

        <button
          class="add-cart-button"
          onclick="addToCart('${product.id}')"
        >
          ADD TO CART
        </button>

      </div>

    </article>
  `;
}


// ==========================================
// OPEN PRODUCT DETAILS
// ==========================================

function openProduct(id) {
  const product = getProductById(id);

  if (!product) {
    console.error("Product not found:", id);
    return;
  }

  window.location.href =
    "product.html?id=" + encodeURIComponent(product.id);
}


// ==========================================
// PRODUCTS PAGE
// ==========================================

let activeCategory = "All";
let activeSubcategory = "All";
let activeSort = "newest";
let activeMaxPrice = 5000;
let activeDiscount = 0;


function filterProducts() {

  let result = [...PRODUCTS];

  if (activeCategory !== "All") {
    result = result.filter(
      product => product.category === activeCategory
    );
  }

  if (
    activeSubcategory !== "All" &&
    activeCategory === "Kids"
  ) {
    result = result.filter(
      product => product.subcategory === activeSubcategory
    );
  }

  result = result.filter(
    product => product.price <= activeMaxPrice
  );

  if (activeDiscount > 0) {
    result = result.filter(
      product => product.discount >= activeDiscount
    );
  }

  if (activeSort === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (activeSort === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (activeSort === "discount") {
    result.sort((a, b) => b.discount - a.discount);
  }

  if (activeSort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}


function renderProducts() {

  const container = document.getElementById("productsGrid");

  if (!container) return;

  const products = filterProducts();

  if (!products.length) {

    container.innerHTML = `
      <div class="no-products">
        <h2>Products dorakaledu</h2>
        <p>Filters marchi malli try cheyyandi.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    products.map(createProductCard).join("");

  updateHeaderCounts();
}


// ==========================================
// CATEGORY FILTER
// ==========================================

function setCategory(category) {

  activeCategory = category;
  activeSubcategory = "All";

  document.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderProducts();
}


// ==========================================
// KIDS FILTER
// ==========================================

function setKidsCategory(type) {

  activeCategory = "Kids";
  activeSubcategory = type;

  renderProducts();
}


// ==========================================
// SORT
// ==========================================

function setSort(sort) {

  activeSort = sort;

  renderProducts();
}


// ==========================================
// PRICE FILTER
// ==========================================

function setMaxPrice(price) {

  activeMaxPrice = Number(price);

  renderProducts();
}


// ==========================================
// DISCOUNT FILTER
// ==========================================

function setDiscount(discount) {

  activeDiscount = Number(discount);

  renderProducts();
}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  updateHeaderCounts();

});
