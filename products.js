/* =========================================================
   AS FASHIONS — MASTER PRODUCT DATABASE
   One source of truth for index.html + products.html
   ========================================================= */

const AS_PRODUCTS = [

  /* ===================== MEN ===================== */

  {
    id: "M001",
    brand: "AS FASHIONS",
    name: "Premium Oversized T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 799,
    mrp: 1499,
    discount: 47,
    rating: 4.5,
    reviews: 1240,
    badge: "TRENDING",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: "M002",
    brand: "AS FASHIONS",
    name: "Premium Casual Shirt",
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.4,
    reviews: 982,
    badge: "BESTSELLER",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue", "White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: "M003",
    brand: "AS FASHIONS",
    name: "Relaxed Fit Cargo Pants",
    category: "Men",
    subcategory: "Trousers",
    gender: "Men",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.6,
    reviews: 756,
    badge: "HOT DEAL",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    colors: ["Olive", "Black", "Beige"],
    sizes: ["30", "32", "34", "36", "38"]
  },

  {
    id: "M004",
    brand: "AS FASHIONS",
    name: "Classic Denim Jeans",
    category: "Men",
    subcategory: "Jeans",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    reviews: 640,
    badge: "50% OFF",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue", "Dark Blue", "Black"],
    sizes: ["30", "32", "34", "36", "38"]
  },

  {
    id: "M005",
    brand: "AS FASHIONS",
    name: "Premium Bomber Jacket",
    category: "Men",
    subcategory: "Jackets",
    gender: "Men",
    price: 1599,
    mrp: 2999,
    discount: 47,
    rating: 4.7,
    reviews: 438,
    badge: "NEW",
    trending: false,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    colors: ["Black", "Brown"],
    sizes: ["M", "L", "XL", "XXL"]
  },

  {
    id: "M006",
    brand: "AS FASHIONS",
    name: "Minimal Polo T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.3,
    reviews: 890,
    badge: "UNDER ₹499",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85",
    colors: ["White", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },

  /* ===================== WOMEN ===================== */

  {
    id: "W001",
    brand: "AS FASHIONS",
    name: "Floral Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.6,
    reviews: 1500,
    badge: "TRENDING",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
    colors: ["Floral", "White"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },

  {
    id: "W002",
    brand: "AS FASHIONS",
    name: "Premium Everyday Top",
    category: "Women",
    subcategory: "Tops",
    gender: "Women",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.4,
    reviews: 1100,
    badge: "UNDER ₹499",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1564257577054-8c4b3e5c9b88?auto=format&fit=crop&w=900&q=85",
    colors: ["White", "Black", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },

  {
    id: "W003",
    brand: "AS FASHIONS",
    name: "Wide Leg Denim Jeans",
    category: "Women",
    subcategory: "Jeans",
    gender: "Women",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.5,
    reviews: 875,
    badge: "BESTSELLER",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue", "Black"],
    sizes: ["26", "28", "30", "32", "34"]
  },

  {
    id: "W004",
    brand: "AS FASHIONS",
    name: "Elegant Kurta Set",
    category: "Women",
    subcategory: "Ethnic Wear",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.7,
    reviews: 720,
    badge: "HOT DEAL",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
    colors: ["Pink", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: "W005",
    brand: "AS FASHIONS",
    name: "Premium Co-ord Set",
    category: "Women",
    subcategory: "Co-ords",
    gender: "Women",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    reviews: 480,
    badge: "NEW",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    colors: ["Beige", "Black"],
    sizes: ["XS", "S", "M", "L"]
  },

  {
    id: "W006",
    brand: "AS FASHIONS",
    name: "Statement Party Dress",
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    price: 1799,
    mrp: 3999,
    discount: 55,
    rating: 4.8,
    reviews: 360,
    badge: "55% OFF",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
    colors: ["Black", "Red"],
    sizes: ["XS", "S", "M", "L"]
  },

  /* ===================== GIRLS ===================== */

  {
    id: "G001",
    brand: "AS FASHIONS KIDS",
    name: "Girls Floral Party Frock",
    category: "Kids",
    subcategory: "Girls Dresses",
    gender: "Girls",
    price: 899,
    mrp: 1599,
    discount: 44,
    rating: 4.5,
    reviews: 322,
    badge: "TRENDING",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    colors: ["Pink", "White"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"]
  },

  {
    id: "G002",
    brand: "AS FASHIONS KIDS",
    name: "Girls Casual T-Shirt",
    category: "Kids",
    subcategory: "Girls Tops",
    gender: "Girls",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.3,
    reviews: 210,
    badge: "UNDER ₹499",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    colors: ["Pink", "Yellow"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"]
  },

  {
    id: "G003",
    brand: "AS FASHIONS KIDS",
    name: "Girls Denim Jacket",
    category: "Kids",
    subcategory: "Girls Jackets",
    gender: "Girls",
    price: 799,
    mrp: 1499,
    discount: 47,
    rating: 4.4,
    reviews: 184,
    badge: "NEW",
    trending: false,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue"],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"]
  },

  /* ===================== BOYS ===================== */

  {
    id: "B001",
    brand: "AS FASHIONS KIDS",
    name: "Boys Casual Outfit Set",
    category: "Kids",
    subcategory: "Boys Sets",
    gender: "Boys",
    price: 799,
    mrp: 1299,
    discount: 38,
    rating: 4.3,
    reviews: 288,
    badge: "BESTSELLER",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1503944583220-7eeec4934c7b?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue", "Black"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"]
  },

  {
    id: "B002",
    brand: "AS FASHIONS KIDS",
    name: "Boys Graphic T-Shirt",
    category: "Kids",
    subcategory: "Boys T-Shirts",
    gender: "Boys",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.4,
    reviews: 412,
    badge: "UNDER ₹499",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue", "White", "Black"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"]
  },

  {
    id: "B003",
    brand: "AS FASHIONS KIDS",
    name: "Boys Denim Jeans",
    category: "Kids",
    subcategory: "Boys Jeans",
    gender: "Boys",
    price: 699,
    mrp: 1299,
    discount: 46,
    rating: 4.5,
    reviews: 245,
    badge: "HOT DEAL",
    trending: true,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    colors: ["Blue"],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"]
  },

  /* ===================== FOOTWEAR ===================== */

  {
    id: "F001",
    brand: "AS FASHIONS",
    name: "Everyday Casual Sneakers",
    category: "Footwear",
    subcategory: "Sneakers",
    gender: "Men",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    reviews: 891,
    badge: "TRENDING",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    colors: ["White", "Black"],
    sizes: ["6", "7", "8", "9", "10"]
  },

  {
    id: "F002",
    brand: "AS FASHIONS",
    name: "Women's Street Sneakers",
    category: "Footwear",
    subcategory: "Sneakers",
    gender: "Women",
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.4,
    reviews: 530,
    badge: "HOT DEAL",
    trending: true,
    newArrival: true,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    colors: ["White", "Pink"],
    sizes: ["4", "5", "6", "7", "8"]
  }

];


/* =========================================================
   HELPERS
   ========================================================= */

function getAllProducts() {
  return [...AS_PRODUCTS];
}

function getProductById(id) {
  return AS_PRODUCTS.find(product => String(product.id) === String(id));
}

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function productLink(product) {
  return `products.html?product=${encodeURIComponent(product.id)}`;
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const AS_CART_KEY = "as_fashions_cart";
const AS_WISHLIST_KEY = "as_fashions_wishlist";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(AS_CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(AS_CART_KEY, JSON.stringify(cart));
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(AS_WISHLIST_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveWishlist(list) {
  localStorage.setItem(AS_WISHLIST_KEY, JSON.stringify(list));
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + Number(item.qty || 1), 0);
}

function wishlistCount() {
  return getWishlist().length;
}

function addToCart(id, size = "", color = "") {
  const product = getProductById(id);
  if (!product) return;

  const cart = getCart();

  const existing = cart.find(item =>
    String(item.id) === String(id) &&
    item.size === size &&
    item.color === color
  );

  if (existing) {
    existing.qty = Number(existing.qty || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      size,
      color,
      qty: 1
    });
  }

  saveCart(cart);
}

function toggleWishlist(id) {
  const list = getWishlist();
  const index = list.findIndex(x => String(x) === String(id));

  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(String(id));
  }

  saveWishlist(list);
  return list;
}


/* =========================================================
   URL FILTER ENGINE
   ========================================================= */

function filterProductsFromURL(products = AS_PRODUCTS) {

  const params = new URLSearchParams(window.location.search);

  const category = (params.get("category") || "All").trim();
  const gender = (params.get("gender") || "").trim();
  const subcategory = (params.get("subcategory") || "").trim();

  const priceMaxParam = params.get("priceMax");
  const priceMinParam = params.get("priceMin");
  const discountMinParam = params.get("discountMin");

  const search = (params.get("search") || "").trim().toLowerCase();
  const sort = params.get("sort") || "recommended";

  let result = [...products];

  /* CATEGORY */

  if (category && category.toLowerCase() !== "all") {
    result = result.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  /* GENDER / GIRLS / BOYS */

  if (gender) {
    result = result.filter(product =>
      product.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  /* SUBCATEGORY */

  if (subcategory) {
    result = result.filter(product =>
      product.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
  }

  /* SEARCH */

  if (search) {
    result = result.filter(product => {

      const searchable = [
        product.name,
        product.brand,
        product.category,
        product.subcategory,
        product.gender
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(search);
    });
  }

  /* PRICE MAX */

  if (priceMaxParam !== null && priceMaxParam !== "") {
    const max = Number(priceMaxParam);

    if (!Number.isNaN(max)) {
      result = result.filter(product =>
        Number(product.price) <= max
      );
    }
  }

  /* PRICE MIN */

  if (priceMinParam !== null && priceMinParam !== "") {
    const min = Number(priceMinParam);

    if (!Number.isNaN(min)) {
      result = result.filter(product =>
        Number(product.price) >= min
      );
    }
  }

  /* DISCOUNT */

  if (discountMinParam !== null && discountMinParam !== "") {
    const discount = Number(discountMinParam);

    if (!Number.isNaN(discount)) {
      result = result.filter(product =>
        Number(product.discount) >= discount
      );
    }
  }

  /* SORTING */

  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "discount") {
    result.sort((a, b) => b.discount - a.discount);
  }

  if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "newest") {
    result.sort((a, b) =>
      Number(b.newArrival) - Number(a.newArrival)
    );
  }

  return result;
}


/* =========================================================
   NAVIGATION URL BUILDERS
   ========================================================= */

function productsURL(options = {}) {

  const params = new URLSearchParams();

  if (options.category && options.category !== "All") {
    params.set("category", options.category);
  }

  if (options.gender) {
    params.set("gender", options.gender);
  }

  if (options.subcategory) {
    params.set("subcategory", options.subcategory);
  }

  if (options.priceMax !== undefined) {
    params.set("priceMax", options.priceMax);
  }

  if (options.priceMin !== undefined) {
    params.set("priceMin", options.priceMin);
  }

  if (options.discountMin !== undefined) {
    params.set("discountMin", options.discountMin);
  }

  if (options.search) {
    params.set("search", options.search);
  }

  if (options.sort) {
    params.set("sort", options.sort);
  }

  const query = params.toString();

  return `products.html${query ? "?" + query : ""}`;
}


/* =========================================================
   EXPORT
   ========================================================= */

window.AS_FASHIONS = {
  products: AS_PRODUCTS,
  getAllProducts,
  getProductById,
  money,
  productLink,
  getCart,
  saveCart,
  getWishlist,
  saveWishlist,
  cartCount,
  wishlistCount,
  addToCart,
  toggleWishlist,
  filterProductsFromURL,
  productsURL
};
