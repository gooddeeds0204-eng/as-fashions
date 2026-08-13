/* =========================================================
   AS FASHIONS — PRODUCTS.JS
   Complete Product Catalogue + Filters + Search + Wishlist
   + Cart + Sorting + Navigation
========================================================= */

"use strict";

/* =========================================================
   PRODUCT DATA
========================================================= */

const AS_PRODUCTS = [

  /* ================= WOMEN ================= */

  {
    id:"w001",
    name:"Floral Print A-Line Dress",
    brand:"AS Studio",
    category:"women",
    subcategory:"dresses",
    gender:"women",
    price:799,
    mrp:1599,
    discount:50,
    rating:4.5,
    reviews:128,
    badge:"HOT DEAL",
    sizes:["S","M","L","XL"],
    image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"w002",
    name:"Elegant Women Co-Ord Set",
    brand:"AS Trends",
    category:"women",
    subcategory:"western",
    gender:"women",
    price:999,
    mrp:1999,
    discount:50,
    rating:4.4,
    reviews:96,
    badge:"TRENDING",
    sizes:["S","M","L","XL"],
    image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"w003",
    name:"Classic Women Kurti",
    brand:"AS Ethnic",
    category:"women",
    subcategory:"kurtis",
    gender:"women",
    price:649,
    mrp:1299,
    discount:50,
    rating:4.6,
    reviews:214,
    badge:"BESTSELLER",
    sizes:["S","M","L","XL","XXL"],
    image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"w004",
    name:"Women Oversized Denim Jacket",
    brand:"AS Denim",
    category:"women",
    subcategory:"jackets",
    gender:"women",
    price:1199,
    mrp:2499,
    discount:52,
    rating:4.3,
    reviews:72,
    badge:"NEW",
    sizes:["S","M","L","XL"],
    image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"w005",
    name:"Women Relaxed Fit Jeans",
    brand:"AS Denim",
    category:"women",
    subcategory:"denim",
    gender:"women",
    price:899,
    mrp:1799,
    discount:50,
    rating:4.4,
    reviews:156,
    badge:"HOT DEAL",
    sizes:["26","28","30","32","34"],
    image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"w006",
    name:"Women Satin Party Dress",
    brand:"AS Luxe",
    category:"women",
    subcategory:"dresses",
    gender:"women",
    price:1499,
    mrp:2999,
    discount:50,
    rating:4.7,
    reviews:89,
    badge:"PREMIUM",
    sizes:["S","M","L"],
    image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85"
  },

  /* ================= MEN ================= */

  {
    id:"m001",
    name:"Men Premium Oxford Shirt",
    brand:"AS Menswear",
    category:"men",
    subcategory:"shirts",
    gender:"men",
    price:699,
    mrp:1399,
    discount:50,
    rating:4.5,
    reviews:184,
    badge:"BESTSELLER",
    sizes:["S","M","L","XL","XXL"],
    image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"m002",
    name:"Men Casual Oversized T-Shirt",
    brand:"AS Street",
    category:"men",
    subcategory:"tshirts",
    gender:"men",
    price:499,
    mrp:999,
    discount:50,
    rating:4.4,
    reviews:231,
    badge:"UNDER ₹499",
    sizes:["S","M","L","XL","XXL"],
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"m003",
    name:"Men Slim Fit Denim Jeans",
    brand:"AS Denim",
    category:"men",
    subcategory:"denim",
    gender:"men",
    price:999,
    mrp:1999,
    discount:50,
    rating:4.3,
    reviews:143,
    badge:"TRENDING",
    sizes:["30","32","34","36","38"],
    image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"m004",
    name:"Men Relaxed Cargo Pants",
    brand:"AS Street",
    category:"men",
    subcategory:"trousers",
    gender:"men",
    price:899,
    mrp:1799,
    discount:50,
    rating:4.4,
    reviews:91,
    badge:"HOT DEAL",
    sizes:["30","32","34","36"],
    image:"https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"m005",
    name:"Men Premium Bomber Jacket",
    brand:"AS Urban",
    category:"men",
    subcategory:"jackets",
    gender:"men",
    price:1599,
    mrp:3499,
    discount:54,
    rating:4.6,
    reviews:64,
    badge:"54% OFF",
    sizes:["M","L","XL","XXL"],
    image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"m006",
    name:"Men Linen Casual Shirt",
    brand:"AS Premium",
    category:"men",
    subcategory:"shirts",
    gender:"men",
    price:799,
    mrp:1599,
    discount:50,
    rating:4.5,
    reviews:118,
    badge:"NEW",
    sizes:["S","M","L","XL","XXL"],
    image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85"
  },

  /* ================= GIRLS ================= */

  {
    id:"g001",
    name:"Girls Floral Party Dress",
    brand:"AS Kids",
    category:"girls",
    subcategory:"dresses",
    gender:"girls",
    price:599,
    mrp:1199,
    discount:50,
    rating:4.7,
    reviews:74,
    badge:"BESTSELLER",
    sizes:["2-3Y","4-5Y","6-7Y","8-9Y"],
    image:"https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"g002",
    name:"Girls Casual Denim Dress",
    brand:"AS Kids",
    category:"girls",
    subcategory:"dresses",
    gender:"girls",
    price:699,
    mrp:1399,
    discount:50,
    rating:4.5,
    reviews:61,
    badge:"TRENDING",
    sizes:["3-4Y","5-6Y","7-8Y","9-10Y"],
    image:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"g003",
    name:"Girls Cotton Top & Skirt Set",
    brand:"AS Junior",
    category:"girls",
    subcategory:"sets",
    gender:"girls",
    price:749,
    mrp:1499,
    discount:50,
    rating:4.6,
    reviews:47,
    badge:"NEW",
    sizes:["4-5Y","6-7Y","8-9Y","10-11Y"],
    image:"https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=85"
  },

  /* ================= BOYS ================= */

  {
    id:"b001",
    name:"Boys Casual Printed T-Shirt",
    brand:"AS Junior",
    category:"boys",
    subcategory:"tshirts",
    gender:"boys",
    price:399,
    mrp:799,
    discount:50,
    rating:4.5,
    reviews:93,
    badge:"UNDER ₹499",
    sizes:["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"b002",
    name:"Boys Casual Denim Shirt",
    brand:"AS Kids",
    category:"boys",
    subcategory:"shirts",
    gender:"boys",
    price:599,
    mrp:1199,
    discount:50,
    rating:4.4,
    reviews:51,
    badge:"HOT DEAL",
    sizes:["3-4Y","5-6Y","7-8Y","9-10Y"],
    image:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"b003",
    name:"Boys Jogger Set",
    brand:"AS Active Kids",
    category:"boys",
    subcategory:"sets",
    gender:"boys",
    price:799,
    mrp:1599,
    discount:50,
    rating:4.6,
    reviews:68,
    badge:"BESTSELLER",
    sizes:["4-5Y","6-7Y","8-9Y","10-11Y"],
    image:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85"
  },

  /* ================= FOOTWEAR ================= */

  {
    id:"f001",
    name:"Classic White Sneakers",
    brand:"AS Footwear",
    category:"footwear",
    subcategory:"sneakers",
    gender:"unisex",
    price:999,
    mrp:1999,
    discount:50,
    rating:4.5,
    reviews:188,
    badge:"TRENDING",
    sizes:["6","7","8","9","10"],
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"f002",
    name:"Men Casual Running Shoes",
    brand:"AS Active",
    category:"footwear",
    subcategory:"sports",
    gender:"men",
    price:1199,
    mrp:2499,
    discount:52,
    rating:4.4,
    reviews:112,
    badge:"52% OFF",
    sizes:["6","7","8","9","10"],
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"f003",
    name:"Women Everyday Sneakers",
    brand:"AS Street",
    category:"footwear",
    subcategory:"sneakers",
    gender:"women",
    price:899,
    mrp:1799,
    discount:50,
    rating:4.3,
    reviews:97,
    badge:"HOT DEAL",
    sizes:["4","5","6","7","8"],
    image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=85"
  },

  /* ================= ACCESSORIES ================= */

  {
    id:"a001",
    name:"Minimal Everyday Handbag",
    brand:"AS Accessories",
    category:"accessories",
    subcategory:"bags",
    gender:"women",
    price:699,
    mrp:1499,
    discount:53,
    rating:4.4,
    reviews:81,
    badge:"53% OFF",
    sizes:["ONE SIZE"],
    image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"a002",
    name:"Classic Leather Wallet",
    brand:"AS Accessories",
    category:"accessories",
    subcategory:"wallets",
    gender:"men",
    price:499,
    mrp:999,
    discount:50,
    rating:4.5,
    reviews:136,
    badge:"UNDER ₹499",
    sizes:["ONE SIZE"],
    image:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=85"
  },

  {
    id:"a003",
    name:"Premium Sunglasses",
    brand:"AS Luxe",
    category:"accessories",
    subcategory:"sunglasses",
    gender:"unisex",
    price:799,
    mrp:1599,
    discount:50,
    rating:4.3,
    reviews:58,
    badge:"NEW",
    sizes:["ONE SIZE"],
    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85"
  }

];


/* =========================================================
   STORAGE
========================================================= */

const WISHLIST_KEY =
  "asfashions_wishlist";

const CART_KEY =
  "asfashions_cart";


function readStorage(key){

  try{

    const value =
      localStorage.getItem(key);

    return value
      ? JSON.parse(value)
      : [];

  }catch(error){

    return [];

  }

}


function writeStorage(key,value){

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


/* =========================================================
   PAGE STATE
========================================================= */

let wishlist =
  readStorage(WISHLIST_KEY);

let cart =
  readStorage(CART_KEY);

let filteredProducts = [];

let currentSort =
  "recommended";


/* =========================================================
   URL STATE
========================================================= */

const urlParams =
  new URLSearchParams(
    window.location.search
  );

const urlCategory =
  (
    urlParams.get("category") ||
    "all"
  ).toLowerCase();

const urlSearch =
  (
    urlParams.get("search") ||
    ""
  ).trim().toLowerCase();


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(price){

  return "₹" +
    Number(price).toLocaleString(
      "en-IN"
    );

}


function escapeHTML(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function getWishlist(){

  wishlist =
    readStorage(WISHLIST_KEY);

  return wishlist;

}


function getCart(){

  cart =
    readStorage(CART_KEY);

  return cart;

}


/* =========================================================
   WISHLIST
========================================================= */

function isWishlisted(productId){

  return getWishlist()
    .some(
      item =>
        String(item.id) ===
        String(productId)
    );

}


function toggleWishlist(productId){

  let items =
    getWishlist();

  const index =
    items.findIndex(
      item =>
        String(item.id) ===
        String(productId)
    );

  if(index >= 0){

    items.splice(
      index,
      1
    );

    showToast(
      "Wishlist nundi remove chesam"
    );

  }else{

    const product =
      AS_PRODUCTS.find(
        item =>
          String(item.id) ===
          String(productId)
      );

    if(product){

      items.push({
        id:product.id,
        name:product.name,
        brand:product.brand,
        price:product.price,
        mrp:product.mrp,
        image:product.image,
        size:product.sizes?.[0] || ""
      });

    }

    showToast(
      "Wishlist lo add chesam ❤️"
    );

  }

  writeStorage(
    WISHLIST_KEY,
    items
  );

  updateCounts();

  renderProducts();

}


/* =========================================================
   CART
========================================================= */

function addToCart(productId){

  const product =
    AS_PRODUCTS.find(
      item =>
        String(item.id) ===
        String(productId)
    );

  if(!product){
    return;
  }

  let items =
    getCart();

  const existing =
    items.find(
      item =>
        String(item.id) ===
        String(productId)
    );

  if(existing){

    existing.quantity =
      Number(existing.quantity || 1) + 1;

  }else{

    items.push({

      id:product.id,

      name:product.name,

      brand:product.brand,

      price:product.price,

      mrp:product.mrp,

      image:product.image,

      size:product.sizes?.[0] || "",

      quantity:1

    });

  }

  writeStorage(
    CART_KEY,
    items
  );

  updateCounts();

  showToast(
    "Cart lo product add ayyindi 🛒"
  );

}


/* =========================================================
   COUNT BADGES
========================================================= */

function updateCounts(){

  const wishlistCount =
    document.getElementById(
      "wishlistCount"
    );

  const cartCount =
    document.getElementById(
      "cartCount"
    );

  const wishlistItems =
    getWishlist();

  const cartItems =
    getCart();

  if(wishlistCount){

    wishlistCount.textContent =
      wishlistItems.length;

  }

  if(cartCount){

    const quantity =
      cartItems.reduce(
        (total,item) =>
          total +
          Number(
            item.quantity || 1
          ),
        0
      );

    cartCount.textContent =
      quantity;

  }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message){

  if(
    typeof window.asFashionToast ===
    "function"
  ){

    window.asFashionToast(
      message
    );

    return;

  }

  const toast =
    document.getElementById(
      "toast"
    );

  if(!toast){
    return;
  }

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.__asToastTimer
  );

  window.__asToastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2200
    );

}


/* =========================================================
   PRODUCT URL
========================================================= */

function openProduct(productId){

  window.location.href =
    "product.html?id=" +
    encodeURIComponent(
      productId
    );

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product){

  const wished =
    isWishlisted(
      product.id
    );

  const discount =
    Number(
      product.discount || 0
    );

  const badgeClass =
    String(
      product.badge || ""
    ).toLowerCase()
     .includes("hot")
      ? "badge hot"
      : discount >= 50
        ? "badge sale"
        : "badge";

  const sizes =
    Array.isArray(product.sizes)
      ? product.sizes
      : [];

  const visibleSizes =
    sizes.slice(0,4);

  const sizeHTML =
    visibleSizes.length
      ? `
        <div class="size-row">
          ${
            visibleSizes
              .map(
                size =>
                  `<span class="size-chip">${escapeHTML(size)}</span>`
              )
              .join("")
          }
        </div>
      `
      : "";

  return `

    <article
      class="product-card"
      data-product-id="${escapeHTML(product.id)}">

      <div
        class="product-image-wrap"
        data-open-product="${escapeHTML(product.id)}">

        ${
          product.badge
            ? `
              <span class="${badgeClass}">
                ${escapeHTML(product.badge)}
              </span>
            `
            : ""
        }

        <button
          type="button"
          class="wishlist-btn ${
            wished ? "active" : ""
          }"
          data-wishlist="${escapeHTML(product.id)}"
          aria-label="Add to wishlist">

          ${
            wished
              ? "♥"
              : "♡"
          }

        </button>

        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/800x1067/f4f4f4/777?text=AS+FASHIONS';"
        >

        <button
          type="button"
          class="quick-add"
          data-cart="${escapeHTML(product.id)}">

          ADD TO BAG

        </button>

      </div>

      <div class="product-info">

        <div class="product-brand">
          ${escapeHTML(product.brand)}
        </div>

        <div
          class="product-name"
          data-open-product="${escapeHTML(product.id)}">

          ${escapeHTML(product.name)}

        </div>

        <span class="rating">
          ★ ${Number(product.rating || 0).toFixed(1)}
        </span>

        <span style="
          color:#888;
          font-size:10px;
          margin-left:5px;
        ">
          (${Number(product.reviews || 0)})
        </span>

        <div class="price-row">

          <span class="price">
            ${formatPrice(product.price)}
          </span>

          <span class="mrp">
            ${formatPrice(product.mrp)}
          </span>

          <span class="discount">
            (${discount}% OFF)
          </span>

        </div>

        ${sizeHTML}

      </div>

    </article>

  `;

}


/* =========================================================
   GET SELECTED FILTERS
========================================================= */

function getSelectedCategories(){

  const desktop =
    [
      ...document.querySelectorAll(
        "[data-filter-category]:checked"
      )
    ]
    .map(
      input => input.value
    );

  const mobile =
    [
      ...document.querySelectorAll(
        "[data-mobile-category]:checked"
      )
    ]
    .map(
      input => input.value
    );

  return [
    ...new Set(
      [...desktop,...mobile]
    )
  ];

}


function getSelectedPrice(){

  const desktop =
    document.querySelector(
      "input[name='price']:checked"
    );

  const mobile =
    document.querySelector(
      "input[name='mobilePrice']:checked"
    );

  return (
    desktop?.value ||
    mobile?.value ||
    ""
  );

}


function getSelectedDiscount(){

  const desktop =
    document.querySelector(
      "input[name='discount']:checked"
    );

  const mobile =
    document.querySelector(
      "input[name='mobileDiscount']:checked"
    );

  return Number(
    desktop?.value ||
    mobile?.value ||
    0
  );

}


/* =========================================================
   CATEGORY MATCHING
========================================================= */

function matchesCategory(
  product,
  category
){

  if(
    !category ||
    category === "all"
  ){

    return true;

  }

  if(category === "kids"){

    return [
      "kids",
      "girls",
      "boys"
    ].includes(
      product.category
    );

  }

  if(category === "sale"){

    return (
      Number(
        product.discount || 0
      ) >= 40
    );

  }

  if(category === "dresses"){

    return (
      product.subcategory ===
      "dresses"
    );

  }

  if(category === "shirts"){

    return (
      product.subcategory ===
      "shirts"
    );

  }

  if(category === "denim"){

    return (
      product.subcategory ===
      "denim"
    );

  }

  if(category === "footwear"){

    return (
      product.category ===
      "footwear"
    );

  }

  if(category === "accessories"){

    return (
      product.category ===
      "accessories"
    );

  }

  return (
    product.category ===
    category
  );

}


/* =========================================================
   PRICE MATCH
========================================================= */

function matchesPrice(
  product,
  range
){

  if(!range){
    return true;
  }

  const price =
    Number(
      product.price || 0
    );

  if(range === "0-499"){

    return price <= 499;

  }

  if(range === "500-999"){

    return (
      price >= 500 &&
      price <= 999
    );

  }

  if(range === "1000-1999"){

    return (
      price >= 1000 &&
      price <= 1999
    );

  }

  if(range === "2000+"){

    return price >= 2000;

  }

  return true;

}


/* =========================================================
   SEARCH MATCH
========================================================= */

function matchesSearch(
  product,
  search
){

  if(!search){
    return true;
  }

  const text = [

    product.name,

    product.brand,

    product.category,

    product.subcategory,

    product.gender,

    ...(product.sizes || [])

  ]
  .join(" ")
  .toLowerCase();

  return text.includes(
    search
  );

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function getFilteredProducts(){

  const selectedCategories =
    getSelectedCategories();

  const selectedPrice =
    getSelectedPrice();

  const selectedDiscount =
    getSelectedDiscount();

  let result =
    AS_PRODUCTS.filter(
      product => {

        /* URL category */

        if(
          !matchesCategory(
            product,
            urlCategory
          )
        ){

          return false;

        }

        /* URL search */

        if(
          !matchesSearch(
            product,
            urlSearch
          )
        ){

          return false;

        }

        /* checkbox category */

        if(
          selectedCategories.length > 0
        ){

          const matched =
            selectedCategories.some(
              category =>
                matchesCategory(
                  product,
                  category
                )
            );

          if(!matched){

            return false;

          }

        }

        /* price */

        if(
          !matchesPrice(
            product,
            selectedPrice
          )
        ){

          return false;

        }

        /* discount */

        if(
          selectedDiscount &&
          Number(
            product.discount || 0
          ) < selectedDiscount
        ){

          return false;

        }

        return true;

      }
    );

  return sortProducts(
    result,
    currentSort
  );

}


/* =========================================================
   SORT
========================================================= */

function sortProducts(
  products,
  sort
){

  const result =
    [...products];

  switch(sort){

    case "price-low":

      result.sort(
        (a,b) =>
          a.price - b.price
      );

      break;


    case "price-high":

      result.sort(
        (a,b) =>
          b.price - a.price
      );

      break;


    case "discount":

      result.sort(
        (a,b) =>
          b.discount - a.discount
      );

      break;


    case "rating":

      result.sort(
        (a,b) =>
          b.rating - a.rating
      );

      break;


    case "newest":

      result.reverse();

      break;


    case "recommended":

    default:

      result.sort(
        (a,b) => {

          const scoreA =
            (a.rating || 0) * 10 +
            (a.discount || 0) / 10;

          const scoreB =
            (b.rating || 0) * 10 +
            (b.discount || 0) / 10;

          return scoreB - scoreA;

        }
      );

      break;

  }

  return result;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(){

  const grid =
    document.getElementById(
      "productGrid"
    );

  const empty =
    document.getElementById(
      "emptyState"
    );

  const count =
    document.getElementById(
      "productCount"
    );

  if(!grid){
    return;
  }

  filteredProducts =
    getFilteredProducts();

  if(count){

    count.textContent =
      `${filteredProducts.length} ${
        filteredProducts.length === 1
          ? "Product"
          : "Products"
      }`;

  }

  if(
    filteredProducts.length === 0
  ){

    grid.innerHTML = "";

    empty?.classList.add(
      "show"
    );

    return;

  }

  empty?.classList.remove(
    "show"
  );

  grid.innerHTML =
    filteredProducts
      .map(
        createProductCard
      )
      .join("");

  bindProductEvents();

}


/* =========================================================
   BIND PRODUCT EVENTS
========================================================= */

function bindProductEvents(){

  /* product click */

  document.querySelectorAll(
    "[data-open-product]"
  ).forEach(
    element => {

      element.addEventListener(
        "click",
        event => {

          /*
           * Wishlist button / quick-add
           * click chesthe product open kakudadhu.
           */

          if(
            event.target.closest(
              "[data-wishlist]"
            ) ||
            event.target.closest(
              "[data-cart]"
            )
          ){

            return;

          }

          const id =
            element.dataset.openProduct;

          openProduct(id);

        }
      );

    }
  );


  /* wishlist */

  document.querySelectorAll(
    "[data-wishlist]"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          toggleWishlist(
            button.dataset.wishlist
          );

        }
      );

    }
  );


  /* cart */

  document.querySelectorAll(
    "[data-cart]"
  ).forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          addToCart(
            button.dataset.cart
          );

        }
      );

    }
  );

}


/* =========================================================
   SEARCH BOX
========================================================= */

function setupSearch(){

  const input =
    document.getElementById(
      "searchInput"
    );

  if(!input){
    return;
  }

  input.addEventListener(
    "input",
    () => {

      const value =
        input.value
          .trim()
          .toLowerCase();

      /*
       * Live search current page.
       */

      let result =
        AS_PRODUCTS.filter(
          product => {

            if(
              !matchesCategory(
                product,
                urlCategory
              )
            ){

              return false;

            }

            return matchesSearch(
              product,
              value
            );

          }
        );

      /*
       * Apply existing filters.
       */

      const selectedCategories =
        getSelectedCategories();

      const price =
        getSelectedPrice();

      const discount =
        getSelectedDiscount();

      if(
        selectedCategories.length
      ){

        result =
          result.filter(
            product =>
              selectedCategories.some(
                category =>
                  matchesCategory(
                    product,
                    category
                  )
              )
          );

      }

      if(price){

        result =
          result.filter(
            product =>
              matchesPrice(
                product,
                price
              )
          );

      }

      if(discount){

        result =
          result.filter(
            product =>
              Number(
                product.discount || 0
              ) >= discount
          );

      }

      result =
        sortProducts(
          result,
          currentSort
        );

      filteredProducts =
        result;

      const grid =
        document.getElementById(
          "productGrid"
        );

      const empty =
        document.getElementById(
          "emptyState"
        );

      const count =
        document.getElementById(
          "productCount"
        );

      if(count){

        count.textContent =
          `${result.length} ${
            result.length === 1
              ? "Product"
              : "Products"
          }`;

      }

      if(
        result.length === 0
      ){

        grid.innerHTML = "";

        empty?.classList.add(
          "show"
        );

      }else{

        empty?.classList.remove(
          "show"
        );

        grid.innerHTML =
          result
            .map(
              createProductCard
            )
            .join("");

        bindProductEvents();

      }

    }
  );

}


/* =========================================================
   SORT EVENT
========================================================= */

window.addEventListener(
  "asfashions:sort",
  event => {

    currentSort =
      event.detail?.value ||
      "recommended";

    renderProducts();

  }
);


/* =========================================================
   FILTER EVENT
========================================================= */

window.addEventListener(
  "asfashions:filter",
  () => {

    renderProducts();

  }
);


/* =========================================================
   MOBILE / DESKTOP FILTER SYNC
========================================================= */

function syncFilters(){

  /* category */

  const desktopCategories =
    [
      ...document.querySelectorAll(
        "[data-filter-category]"
      )
    ];

  const mobileCategories =
    [
      ...document.querySelectorAll(
        "[data-mobile-category]"
      )
    ];

  mobileCategories.forEach(
    mobile => {

      const desktop =
        desktopCategories.find(
          item =>
            item.value ===
            mobile.value
        );

      if(desktop){

        desktop.checked =
          mobile.checked;

      }

    }
  );


  desktopCategories.forEach(
    desktop => {

      const mobile =
        mobileCategories.find(
          item =>
            item.value ===
            desktop.value
        );

      if(mobile){

        mobile.checked =
          desktop.checked;

      }

    }
  );

}


/* =========================================================
   FILTER CHECKBOX SYNC
========================================================= */

document.addEventListener(
  "change",
  event => {

    if(
      event.target.matches(
        "[data-mobile-category]"
      )
    ){

      syncFilters();

    }

    if(
      event.target.matches(
        "[data-filter-category]"
      )
    ){

      syncFilters();

    }

  }
);


/* =========================================================
   EMPTY CLEAR BUTTON
========================================================= */

document.getElementById(
  "clearFiltersBtn"
)?.addEventListener(
  "click",
  () => {

    document.querySelectorAll(
      "input[type='checkbox'], input[type='radio']"
    ).forEach(
      input => {

        input.checked =
          false;

      }
    );

    currentSort =
      "recommended";

    const sort =
      document.getElementById(
        "sortSelect"
      );

    if(sort){

      sort.value =
        "recommended";

    }

    renderProducts();

  }
);


/* =========================================================
   HEADER COUNTS
========================================================= */

window.addEventListener(
  "storage",
  updateCounts
);


/* =========================================================
   INITIAL LOAD
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateCounts();

    setupSearch();

    renderProducts();

  }
);


/* =========================================================
   GLOBAL API
   Future pages can use these functions.
========================================================= */

window.AS_FASHIONS = {

  products:AS_PRODUCTS,

  getProduct:function(id){

    return AS_PRODUCTS.find(
      product =>
        String(product.id) ===
        String(id)
    );

  },

  addToCart,

  toggleWishlist,

  openProduct,

  renderProducts,

  updateCounts

};
