/* =========================================================
   AS FASHIONS — PRODUCT DATA
   Single source of truth for catalogue
========================================================= */

const PRODUCTS = [

  // ================= WOMEN =================

  {
    id: "W001",
    name: "Floral Printed Summer Dress",
    category: "women",
    subcategory: "dresses",
    price: 499,
    mrp: 999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "White"],
    stock: 18,
    isNew: true,
    isTrending: true,
    isClearance: false
  },

  {
    id: "W002",
    name: "Elegant Women's Kurti",
    category: "women",
    subcategory: "kurtis",
    price: 399,
    mrp: 799,
    discount: 50,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black"],
    stock: 25,
    isNew: false,
    isTrending: true,
    isClearance: false
  },

  {
    id: "W003",
    name: "Women's Casual Top",
    category: "women",
    subcategory: "tops",
    price: 299,
    mrp: 599,
    discount: 50,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    stock: 31,
    isNew: true,
    isTrending: false,
    isClearance: true
  },

  // ================= MEN =================

  {
    id: "M001",
    name: "Classic Regular Fit Shirt",
    category: "men",
    subcategory: "shirts",
    price: 549,
    mrp: 1099,
    discount: 50,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=85",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "White"],
    stock: 22,
    isNew: true,
    isTrending: true,
    isClearance: false
  },

  {
    id: "M002",
    name: "Oversized Premium T-Shirt",
    category: "men",
    subcategory: "t-shirts",
    price: 349,
    mrp: 699,
    discount: 50,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Green"],
    stock: 40,
    isNew: true,
    isTrending: true,
    isClearance: false
  },

  {
    id: "M003",
    name: "Slim Fit Denim Jeans",
    category: "men",
    subcategory: "jeans",
    price: 699,
    mrp: 1399,
    discount: 50,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Dark Blue"],
    stock: 15,
    isNew: false,
    isTrending: false,
    isClearance: true
  },

  // ================= KIDS GIRLS =================

  {
    id: "KG001",
    name: "Girls Floral Party Dress",
    category: "kids",
    subcategory: "girls-dresses",
    gender: "girl",
    ageGroup: "4-8 Years",
    price: 449,
    mrp: 899,
    discount: 50,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=85",
    sizes: ["4Y", "5Y", "6Y", "7Y", "8Y"],
    colors: ["Pink", "Purple"],
    stock: 20,
    isNew: true,
    isTrending: true,
    isClearance: false
  },

  {
    id: "KG002",
    name: "Girls Casual Top & Skirt Set",
    category: "kids",
    subcategory: "girls-sets",
    gender: "girl",
    ageGroup: "6-12 Years",
    price: 499,
    mrp: 999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=85",
    sizes: ["6Y", "8Y", "10Y", "12Y"],
    colors: ["Yellow", "Pink"],
    stock: 14,
    isNew: true,
    isTrending: false,
    isClearance: false
  },

  // ================= KIDS BOYS =================

  {
    id: "KB001",
    name: "Boys Casual Shirt & Shorts Set",
    category: "kids",
    subcategory: "boys-sets",
    gender: "boy",
    ageGroup: "4-8 Years",
    price: 449,
    mrp: 899,
    discount: 50,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    sizes: ["4Y", "5Y", "6Y", "7Y", "8Y"],
    colors: ["Blue", "White"],
    stock: 17,
    isNew: true,
    isTrending: true,
    isClearance: false
  },

  {
    id: "KB002",
    name: "Boys Graphic T-Shirt",
    category: "kids",
    subcategory: "boys-tshirts",
    gender: "boy",
    ageGroup: "8-14 Years",
    price: 299,
    mrp: 599,
    discount: 50,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=85",
    sizes: ["8Y", "10Y", "12Y", "14Y"],
    colors: ["Black", "Blue"],
    stock: 29,
    isNew: false,
    isTrending: true,
    isClearance: true
  }
];


/* =========================================================
   HELPERS
========================================================= */

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(product => product.category === category);
}

function getProductsBySubcategory(subcategory) {
  return PRODUCTS.filter(product => product.subcategory === subcategory);
}

function getProductsUnderPrice(price) {
  return PRODUCTS.filter(product => product.price <= price);
}

function getProductsByDiscount(discount) {
  return PRODUCTS.filter(product => product.discount >= discount);
}

function getNewProducts() {
  return PRODUCTS.filter(product => product.isNew);
}

function getTrendingProducts() {
  return PRODUCTS.filter(product => product.isTrending);
}

function getClearanceProducts() {
  return PRODUCTS.filter(product => product.isClearance);
}
