/* =========================================================
   AS FASHIONS — PRODUCT DATA + STORE LOGIC
   ========================================================= */

const AS_PRODUCTS = [

  /* ================= WOMEN ================= */

  {
    id: "w001",
    name: "Floral Printed Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.6,
    reviews: 128,
    badge: "🔥 Trending",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Floral",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "w002",
    name: "Elegant Black Evening Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 1199,
    mrp: 2499,
    discount: 52,
    rating: 4.8,
    reviews: 214,
    badge: "⚡ Hot Deal",
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "w003",
    name: "Premium Oversized Shirt",
    category: "Women",
    subcategory: "Shirts",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.5,
    reviews: 96,
    badge: "New",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "w004",
    name: "Classic Denim Jeans",
    category: "Women",
    subcategory: "Denim",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.4,
    reviews: 187,
    badge: "Best Seller",
    sizes: ["26", "28", "30", "32", "34"],
    color: "Blue",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85"
  },

  /* ================= MEN ================= */

  {
    id: "m001",
    name: "Premium Cotton Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.6,
    reviews: 312,
    badge: "🔥 Trending",
    sizes: ["S", "M", "L", "XL", "XXL"],
    color: "White",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "m002",
    name: "Relaxed Fit Black T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.5,
    reviews: 241,
    badge: "⚡ Under ₹499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    color: "Black",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "m003",
    name: "Slim Fit Blue Jeans",
    category: "Men",
    subcategory: "Denim",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 178,
    badge: "Best Seller",
    sizes: ["30", "32", "34", "36", "38"],
    color: "Blue",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "m004",
    name: "Casual Linen Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.4,
    reviews: 89,
    badge: "New Arrival",
    sizes: ["S", "M", "L", "XL"],
    color: "Beige",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85"
  },

  /* ================= GIRL ================= */

  {
    id: "g001",
    name: "Girls Floral Party Dress",
    category: "Kids",
    subcategory: "Girl",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.8,
    reviews: 76,
    badge: "🌸 Popular",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    color: "Pink",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "g002",
    name: "Girls Casual Denim Outfit",
    category: "Kids",
    subcategory: "Girl",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.5,
    reviews: 51,
    badge: "New",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    color: "Blue",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=900&q=85"
  },

  /* ================= BOY ================= */

  {
    id: "b001",
    name: "Boys Casual Shirt & Shorts",
    category: "Kids",
    subcategory: "Boy",
    price: 549,
    mrp: 1099,
    discount: 50,
    rating: 4.6,
    reviews: 64,
    badge: "🔥 Trending",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    color: "Blue",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "b002",
    name: "Boys Premium T-Shirt",
    category: "Kids",
    subcategory: "Boy",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.5,
    reviews: 82,
    badge: "⚡ Under ₹499",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    color: "Green",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85"
  },

  /* ================= FOOTWEAR ================= */

  {
    id: "f001",
    name: "Classic White Sneakers",
    category: "Footwear",
    subcategory: "Sneakers",
    price: 899,
    mrp: 1999,
    discount: 55,
    rating: 4.7,
    reviews: 328,
    badge: "🔥 Viral",
    sizes: ["6", "7", "8", "9", "10"],
    color: "White",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
  },

  {
    id: "f002",
    name: "Premium Casual Sneakers",
    category: "Footwear",
    subcategory: "Sneakers",
    price: 999,
    mrp: 2199,
    discount: 55,
    rating: 4.6,
    reviews: 197,
    badge: "Best Seller",
    sizes: ["6", "7", "8", "9", "10"],
    color: "Black",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"
  }

];


/* =========================================================
   STORAGE
   ========================================================= */

function getWishlist() {
  return JSON.parse(localStorage.getItem("asWishlist") || "[]");
}

function getCart() {
  return JSON.parse(localStorage.getItem("asCart") || "[]");
}

function saveWishlist(data) {
  localStorage.setItem("asWishlist", JSON.stringify(data));
}

function saveCart(data) {
  localStorage.setItem("asCart", JSON.stringify(data));
}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id) {

  let wishlist = getWishlist();

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
  } else {
    wishlist.push(id);
  }

  saveWishlist(wishlist);

  if (typeof updateHeaderCounts === "function") {
    updateHeaderCounts();
  }

  return wishlist.includes(id);
}


/* =========================================================
   CART
   ========================================================= */

function addToCart(id, size = null) {

  const product = AS_PRODUCTS.find(p => p.id === id);

  if (!product) return;

  let cart = getCart();

  const existing = cart.find(
    item => item.id === id && item.size === size
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id,
      size,
      qty: 1
    });
  }

  saveCart(cart);

  if (typeof updateHeaderCounts === "function") {
    updateHeaderCounts();
  }

  alert("🛍️ Cart లో product add అయింది!");
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function openProduct(id) {
  window.location.href = "products.html?product=" + encodeURIComponent(id);
}

function openCategory(category) {
  window.location.href =
    "products.html?category=" + encodeURIComponent(category);
}

function openSubCategory(subcategory) {
  window.location.href =
    "products.html?subcategory=" + encodeURIComponent(subcategory);
}

function openPrice(max) {
  window.location.href =
    "products.html?max=" + encodeURIComponent(max);
}

function openDiscount(discount) {
  window.location.href =
    "products.html?discount=" + encodeURIComponent(discount);
}

function goHome() {
  window.location.href = "index.html";
}

function openWishlist() {
  window.location.href = "products.html?wishlist=true";
}

function openCart() {
  window.location.href = "products.html?cart=true";
}


/* =========================================================
   HEADER COUNTS
   ========================================================= */

function updateHeaderCounts() {

  const wishlist = getWishlist();
  const cart = getCart();

  document.querySelectorAll("[data-wishlist-count]")
    .forEach(el => {
      el.textContent = wishlist.length;
    });

  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  document.querySelectorAll("[data-cart-count]")
    .forEach(el => {
      el.textContent = cartCount;
    });
}


window.AS_PRODUCTS = AS_PRODUCTS;
window.toggleWishlist = toggleWishlist;
window.addToCart = addToCart;
window.openProduct = openProduct;
window.openCategory = openCategory;
window.openSubCategory = openSubCategory;
window.openPrice = openPrice;
window.openDiscount = openDiscount;
window.goHome = goHome;
window.openWishlist = openWishlist;
window.openCart = openCart;
window.getWishlist = getWishlist;
window.getCart = getCart;
window.updateHeaderCounts = updateHeaderCounts;

document.addEventListener("DOMContentLoaded", updateHeaderCounts);
