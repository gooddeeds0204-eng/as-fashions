/* =========================================================
   AS FASHIONS — PRODUCTS DATA
   Works with: products.html
   ========================================================= */

const PRODUCTS = [

  /* ===================== WOMEN ===================== */

  {
    id: "W001",
    name: "Floral Printed Kurti",
    category: "Women",
    subcategory: "Kurtis",
    gender: "Women",
    price: 699,
    oldPrice: 1299,
    discount: 46,
    rating: 4.5,
    reviews: 128,
    image: "assets/products/women-kurti-1.jpg",
    badge: "Trending",
    tag: "Bestseller",
    colors: ["Black", "Pink", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 18
  },

  {
    id: "W002",
    name: "Women Relaxed Fit Top",
    category: "Women",
    subcategory: "Tops",
    gender: "Women",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.4,
    reviews: 96,
    image: "assets/products/women-top-1.jpg",
    badge: "Hot Deal",
    tag: "Under ₹499",
    colors: ["White", "Black", "Green"],
    sizes: ["S", "M", "L", "XL"],
    stock: 25
  },

  {
    id: "W003",
    name: "High Waist Wide Leg Jeans",
    category: "Women",
    subcategory: "Jeans",
    gender: "Women",
    price: 899,
    oldPrice: 1799,
    discount: 50,
    rating: 4.6,
    reviews: 214,
    image: "assets/products/women-jeans-1.jpg",
    badge: "Trending",
    tag: "50% OFF",
    colors: ["Blue", "Black"],
    sizes: ["26", "28", "30", "32", "34"],
    stock: 12
  },

  {
    id: "W004",
    name: "Women Casual Co-ord Set",
    category: "Women",
    subcategory: "Co-ord Sets",
    gender: "Women",
    price: 999,
    oldPrice: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 173,
    image: "assets/products/women-coord-1.jpg",
    badge: "Bestseller",
    tag: "Under ₹999",
    colors: ["Beige", "Black", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9
  },

  {
    id: "W005",
    name: "Elegant Anarkali Dress",
    category: "Women",
    subcategory: "Ethnic Wear",
    gender: "Women",
    price: 1199,
    oldPrice: 2499,
    discount: 52,
    rating: 4.8,
    reviews: 301,
    image: "assets/products/women-anarkali-1.jpg",
    badge: "New",
    tag: "52% OFF",
    colors: ["Maroon", "Navy", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 15
  },

  /* ===================== MEN ===================== */

  {
    id: "M001",
    name: "Men Slim Fit Casual Shirt",
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    price: 599,
    oldPrice: 1199,
    discount: 50,
    rating: 4.4,
    reviews: 142,
    image: "assets/products/men-shirt-1.jpg",
    badge: "Trending",
    tag: "Under ₹999",
    colors: ["White", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 20
  },

  {
    id: "M002",
    name: "Men Oversized Graphic T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 449,
    oldPrice: 899,
    discount: 50,
    rating: 4.5,
    reviews: 189,
    image: "assets/products/men-tshirt-1.jpg",
    badge: "Hot Deal",
    tag: "Under ₹499",
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    stock: 31
  },

  {
    id: "M003",
    name: "Men Relaxed Cargo Pants",
    category: "Men",
    subcategory: "Trousers",
    gender: "Men",
    price: 799,
    oldPrice: 1599,
    discount: 50,
    rating: 4.6,
    reviews: 117,
    image: "assets/products/men-cargo-1.jpg",
    badge: "Trending",
    tag: "50% OFF",
    colors: ["Black", "Olive", "Beige"],
    sizes: ["30", "32", "34", "36"],
    stock: 16
  },

  {
    id: "M004",
    name: "Men Premium Denim Jacket",
    category: "Men",
    subcategory: "Jackets",
    gender: "Men",
    price: 999,
    oldPrice: 2199,
    discount: 55,
    rating: 4.7,
    reviews: 84,
    image: "assets/products/men-jacket-1.jpg",
    badge: "Bestseller",
    tag: "55% OFF",
    colors: ["Blue", "Black"],
    sizes: ["M", "L", "XL", "XXL"],
    stock: 11
  },

  /* ===================== KIDS — GIRL ===================== */

  {
    id: "KG001",
    name: "Girls Floral Party Dress",
    category: "Kids",
    subcategory: "Girls Dresses",
    gender: "Girl",
    price: 699,
    oldPrice: 1399,
    discount: 50,
    rating: 4.7,
    reviews: 91,
    image: "assets/products/kids-girl-dress-1.jpg",
    badge: "Trending",
    tag: "50% OFF",
    colors: ["Pink", "Purple", "Yellow"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    stock: 14
  },

  {
    id: "KG002",
    name: "Girls Printed Cotton Top",
    category: "Kids",
    subcategory: "Girls Tops",
    gender: "Girl",
    price: 399,
    oldPrice: 799,
    discount: 50,
    rating: 4.4,
    reviews: 63,
    image: "assets/products/kids-girl-top-1.jpg",
    badge: "Hot Deal",
    tag: "Under ₹499",
    colors: ["Pink", "White", "Blue"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    stock: 22
  },

  {
    id: "KG003",
    name: "Girls Denim Jacket",
    category: "Kids",
    subcategory: "Girls Jackets",
    gender: "Girl",
    price: 799,
    oldPrice: 1599,
    discount: 50,
    rating: 4.6,
    reviews: 48,
    image: "assets/products/kids-girl-jacket-1.jpg",
    badge: "New",
    tag: "50% OFF",
    colors: ["Blue", "Pink"],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    stock: 10
  },

  /* ===================== KIDS — BOY ===================== */

  {
    id: "KB001",
    name: "Boys Casual Shirt",
    category: "Kids",
    subcategory: "Boys Shirts",
    gender: "Boy",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.5,
    reviews: 76,
    image: "assets/products/kids-boy-shirt-1.jpg",
    badge: "Trending",
    tag: "Under ₹499",
    colors: ["Blue", "White", "Green"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    stock: 19
  },

  {
    id: "KB002",
    name: "Boys Graphic T-Shirt",
    category: "Kids",
    subcategory: "Boys T-Shirts",
    gender: "Boy",
    price: 349,
    oldPrice: 699,
    discount: 50,
    rating: 4.4,
    reviews: 105,
    image: "assets/products/kids-boy-tshirt-1.jpg",
    badge: "Hot Deal",
    tag: "Under ₹499",
    colors: ["Black", "Red", "Blue"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    stock: 28
  },

  {
    id: "KB003",
    name: "Boys Cargo Joggers",
    category: "Kids",
    subcategory: "Boys Bottomwear",
    gender: "Boy",
    price: 599,
    oldPrice: 1199,
    discount: 50,
    rating: 4.6,
    reviews: 57,
    image: "assets/products/kids-boy-cargo-1.jpg",
    badge: "Bestseller",
    tag: "50% OFF",
    colors: ["Black", "Olive", "Grey"],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    stock: 13
  },

  /* ===================== SPECIAL SALE ===================== */

  {
    id: "S001",
    name: "Premium Women's Fashion Combo",
    category: "Women",
    subcategory: "Combo Offers",
    gender: "Women",
    price: 999,
    oldPrice: 2999,
    discount: 67,
    rating: 4.8,
    reviews: 226,
    image: "assets/products/sale-women-1.jpg",
    badge: "🔥 Mega Deal",
    tag: "67% OFF",
    colors: ["Black", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    stock: 7
  },

  {
    id: "S002",
    name: "Men Fashion Combo",
    category: "Men",
    subcategory: "Combo Offers",
    gender: "Men",
    price: 899,
    oldPrice: 2499,
    discount: 64,
    rating: 4.7,
    reviews: 154,
    image: "assets/products/sale-men-1.jpg",
    badge: "⚡ Lightning Deal",
    tag: "64% OFF",
    colors: ["Black", "Blue"],
    sizes: ["M", "L", "XL", "XXL"],
    stock: 8
  }

];


/* =========================================================
   CATEGORY CONFIG
   Used by filters / navigation / menus
   ========================================================= */

const CATEGORY_DATA = {

  Women: {
    label: "Women",
    subcategories: [
      "All",
      "Kurtis",
      "Tops",
      "Jeans",
      "Co-ord Sets",
      "Ethnic Wear",
      "Combo Offers"
    ]
  },

  Men: {
    label: "Men",
    subcategories: [
      "All",
      "Shirts",
      "T-Shirts",
      "Trousers",
      "Jackets",
      "Combo Offers"
    ]
  },

  Kids: {
    label: "Kids",
    subcategories: [
      "All",
      "Girls Dresses",
      "Girls Tops",
      "Girls Jackets",
      "Boys Shirts",
      "Boys T-Shirts",
      "Boys Bottomwear"
    ]
  }

};


/* =========================================================
   PRICE FILTERS
   ========================================================= */

const PRICE_FILTERS = [
  {
    id: "under499",
    label: "Under ₹499",
    max: 499
  },
  {
    id: "under999",
    label: "Under ₹999",
    max: 999
  },
  {
    id: "under1499",
    label: "Under ₹1499",
    max: 1499
  }
];


/* =========================================================
   QUICK FILTERS
   ========================================================= */

const QUICK_FILTERS = [
  {
    id: "trending",
    label: "Trending Now"
  },
  {
    id: "bestseller",
    label: "Bestsellers"
  },
  {
    id: "new",
    label: "New Arrivals"
  },
  {
    id: "deals",
    label: "Hot Deals"
  },
  {
    id: "discount70",
    label: "70% OFF"
  }
];


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}


function getProductsByCategory(category) {
  return PRODUCTS.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
}


function getProductsByGender(gender) {
  return PRODUCTS.filter(
    product => product.gender.toLowerCase() === gender.toLowerCase()
  );
}


function getProductsBySubcategory(subcategory) {
  if (subcategory === "All") {
    return PRODUCTS;
  }

  return PRODUCTS.filter(
    product =>
      product.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
}


function getProductsUnderPrice(maxPrice) {
  return PRODUCTS.filter(product => product.price <= maxPrice);
}


function getDiscountProducts(minDiscount) {
  return PRODUCTS.filter(product => product.discount >= minDiscount);
}


function getTrendingProducts() {
  return PRODUCTS.filter(
    product =>
      product.badge === "Trending" ||
      product.tag === "Bestseller"
  );
}


function getNewProducts() {
  return PRODUCTS.filter(
    product => product.badge === "New"
  );
}


function getHotDeals() {
  return PRODUCTS.filter(
    product =>
      product.badge === "Hot Deal" ||
      product.badge === "⚡ Lightning Deal" ||
      product.badge === "🔥 Mega Deal"
  );
}


/* =========================================================
   URL NAVIGATION HELPERS
   products.html?category=Women
   products.html?category=Women&subcategory=Kurtis
   products.html?gender=Girl
   products.html?price=499
   ========================================================= */

function productURL(product) {
  return `product.html?id=${encodeURIComponent(product.id)}`;
}


function categoryURL(category) {
  return `products.html?category=${encodeURIComponent(category)}`;
}


function subcategoryURL(category, subcategory) {
  return `products.html?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`;
}


function genderURL(gender) {
  return `products.html?gender=${encodeURIComponent(gender)}`;
}


function priceURL(price) {
  return `products.html?price=${encodeURIComponent(price)}`;
}


function filterURL(filter) {
  return `products.html?filter=${encodeURIComponent(filter)}`;
}


/* =========================================================
   CART
   ========================================================= */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("asFashionsCart")) || [];
  } catch (error) {
    return [];
  }
}


function saveCart(cart) {
  localStorage.setItem("asFashionsCart", JSON.stringify(cart));
}


function addToCart(productId, quantity = 1) {

  const product = getProductById(productId);

  if (!product) return false;

  const cart = getCart();

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes?.[0] || "",
      quantity
    });
  }

  saveCart(cart);

  window.dispatchEvent(new Event("cartUpdated"));

  return true;
}


/* =========================================================
   WISHLIST
   ========================================================= */

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("asFashionsWishlist")) || [];
  } catch (error) {
    return [];
  }
}


function saveWishlist(wishlist) {
  localStorage.setItem(
    "asFashionsWishlist",
    JSON.stringify(wishlist)
  );
}


function toggleWishlist(productId) {

  const wishlist = getWishlist();

  const index = wishlist.indexOf(productId);

  if (index >= 0) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }

  saveWishlist(wishlist);

  window.dispatchEvent(new Event("wishlistUpdated"));

  return wishlist.includes(productId);
}


function isWishlisted(productId) {
  return getWishlist().includes(productId);
}


/* =========================================================
   EXPORT FOR OTHER JS FILES
   ========================================================= */

window.ASFashions = {
  PRODUCTS,
  CATEGORY_DATA,
  PRICE_FILTERS,
  QUICK_FILTERS,

  getProductById,
  getProductsByCategory,
  getProductsByGender,
  getProductsBySubcategory,
  getProductsUnderPrice,
  getDiscountProducts,
  getTrendingProducts,
  getNewProducts,
  getHotDeals,

  productURL,
  categoryURL,
  subcategoryURL,
  genderURL,
  priceURL,
  filterURL,

  getCart,
  saveCart,
  addToCart,

  getWishlist,
  saveWishlist,
  toggleWishlist,
  isWishlisted
};
