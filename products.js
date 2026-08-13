/* =========================================================
   AS FASHIONS — PRODUCTS.JS (COMPLETE MASTER DATA)
========================================================= */

const AS_PRODUCTS = [

  /* =========================
     MEN — TOPWEAR
  ========================= */

  {
    id: "MEN-TW-001",
    brand: "AS FASHIONS",
    name: "Premium Cotton T-Shirt",
    category: "Men",
    department: "Topwear",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 699,
    mrp: 1299,
    discount: 46,
    rating: 4.4,
    ratingCount: 128,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","White","Navy"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    stock: 24
  },

  {
    id: "MEN-TW-002",
    brand: "AS FASHIONS",
    name: "Slim Fit Casual Shirt",
    category: "Men",
    department: "Topwear",
    subcategory: "Casual Shirts",
    gender: "Men",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.3,
    ratingCount: 96,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Blue","White","Olive"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  {
    id: "MEN-TW-003",
    brand: "AS FASHIONS",
    name: "Premium Formal Shirt",
    category: "Men",
    department: "Topwear",
    subcategory: "Formal Shirts",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 143,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["White","Sky Blue","Black"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    stock: 21
  },

  {
    id: "MEN-TW-004",
    brand: "AS FASHIONS",
    name: "Oversized Sweatshirt",
    category: "Men",
    department: "Topwear",
    subcategory: "Sweatshirts",
    gender: "Men",
    price: 1099,
    mrp: 2199,
    discount: 50,
    rating: 4.2,
    ratingCount: 77,
    sizes: ["M","L","XL","XXL"],
    colors: ["Black","Grey","Green"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    stock: 15
  },

  {
    id: "MEN-TW-005",
    brand: "AS FASHIONS",
    name: "Lightweight Casual Jacket",
    category: "Men",
    department: "Topwear",
    subcategory: "Jackets",
    gender: "Men",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.4,
    ratingCount: 62,
    sizes: ["M","L","XL","XXL"],
    colors: ["Black","Brown"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    stock: 12
  },

  {
    id: "MEN-TW-006",
    brand: "AS FASHIONS",
    name: "Classic Wool Sweater",
    category: "Men",
    department: "Topwear",
    subcategory: "Sweaters",
    gender: "Men",
    price: 1199,
    mrp: 2399,
    discount: 50,
    rating: 4.1,
    ratingCount: 48,
    sizes: ["M","L","XL","XXL"],
    colors: ["Beige","Grey","Navy"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    stock: 16
  },

  {
    id: "MEN-TW-007",
    brand: "AS FASHIONS",
    name: "Premium Blazer",
    category: "Men",
    department: "Topwear",
    subcategory: "Blazers & Coats",
    gender: "Men",
    price: 2499,
    mrp: 4999,
    discount: 50,
    rating: 4.6,
    ratingCount: 39,
    sizes: ["38","40","42","44"],
    colors: ["Black","Navy"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
    stock: 8
  },

  {
    id: "MEN-TW-008",
    brand: "AS FASHIONS",
    name: "Classic Wedding Suit",
    category: "Men",
    department: "Topwear",
    subcategory: "Suits",
    gender: "Men",
    price: 3999,
    mrp: 6999,
    discount: 43,
    rating: 4.7,
    ratingCount: 31,
    sizes: ["38","40","42","44"],
    colors: ["Black","Navy","Charcoal"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=85",
    stock: 6
  },

  /* =========================
     MEN — BOTTOMWEAR
  ========================= */

  {
    id: "MEN-BW-001",
    brand: "AS FASHIONS",
    name: "Slim Fit Denim Jeans",
    category: "Men",
    department: "Bottomwear",
    subcategory: "Jeans",
    gender: "Men",
    price: 1199,
    mrp: 2399,
    discount: 50,
    rating: 4.4,
    ratingCount: 211,
    sizes: ["28","30","32","34","36","38"],
    colors: ["Blue","Black"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    stock: 32
  },

  {
    id: "MEN-BW-002",
    brand: "AS FASHIONS",
    name: "Regular Casual Trousers",
    category: "Men",
    department: "Bottomwear",
    subcategory: "Casual Trousers",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.2,
    ratingCount: 88,
    sizes: ["30","32","34","36","38"],
    colors: ["Beige","Black","Olive"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85",
    stock: 20
  },

  {
    id: "MEN-BW-003",
    brand: "AS FASHIONS",
    name: "Formal Office Trousers",
    category: "Men",
    department: "Bottomwear",
    subcategory: "Formal Trousers",
    gender: "Men",
    price: 1099,
    mrp: 2199,
    discount: 50,
    rating: 4.3,
    ratingCount: 72,
    sizes: ["30","32","34","36","38"],
    colors: ["Black","Charcoal","Navy"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    stock: 17
  },

  {
    id: "MEN-BW-004",
    brand: "AS FASHIONS",
    name: "Relaxed Cotton Shorts",
    category: "Men",
    department: "Bottomwear",
    subcategory: "Shorts",
    gender: "Men",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.2,
    ratingCount: 105,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","Grey","Khaki"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=85",
    stock: 25
  },

  {
    id: "MEN-BW-005",
    brand: "AS FASHIONS",
    name: "Performance Track Joggers",
    category: "Men",
    department: "Bottomwear",
    subcategory: "Track Pants & Joggers",
    gender: "Men",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.5,
    ratingCount: 156,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","Grey","Navy"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    stock: 29
  },

  /* =========================
     MEN — ETHNIC WEAR
  ========================= */

  {
    id: "MEN-EW-001",
    brand: "AS FASHIONS",
    name: "Premium Kurta Set",
    category: "Men",
    department: "Ethnic Wear",
    subcategory: "Kurtas & Kurta Sets",
    gender: "Men",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.6,
    ratingCount: 132,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["White","Cream","Blue"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  {
    id: "MEN-EW-002",
    brand: "AS FASHIONS",
    name: "Royal Wedding Sherwani",
    category: "Men",
    department: "Ethnic Wear",
    subcategory: "Sherwanis",
    gender: "Men",
    price: 4499,
    mrp: 7999,
    discount: 44,
    rating: 4.8,
    ratingCount: 27,
    sizes: ["38","40","42","44"],
    colors: ["Cream","Gold","Black"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=900&q=85",
    stock: 5
  },

  {
    id: "MEN-EW-003",
    brand: "AS FASHIONS",
    name: "Textured Nehru Jacket",
    category: "Men",
    department: "Ethnic Wear",
    subcategory: "Nehru Jackets",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    ratingCount: 63,
    sizes: ["S","M","L","XL"],
    colors: ["Black","Navy","Maroon"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=900&q=85",
    stock: 14
  },

  {
    id: "MEN-EW-004",
    brand: "AS FASHIONS",
    name: "Traditional Cotton Dhoti",
    category: "Men",
    department: "Ethnic Wear",
    subcategory: "Dhotis",
    gender: "Men",
    price: 699,
    mrp: 1299,
    discount: 46,
    rating: 4.3,
    ratingCount: 54,
    sizes: ["Free Size"],
    colors: ["White","Cream"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1605908502724-9093a675b0e6?auto=format&fit=crop&w=900&q=85",
    stock: 19
  },

  /* =========================
     MEN — FOOTWEAR
  ========================= */

  {
    id: "MEN-FW-001",
    brand: "AS FASHIONS",
    name: "Urban Casual Shoes",
    category: "Men",
    department: "Footwear",
    subcategory: "Casual Shoes",
    gender: "Men",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.4,
    ratingCount: 184,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"],
    colors: ["White","Black"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 23
  },

  {
    id: "MEN-FW-002",
    brand: "AS FASHIONS",
    name: "Performance Running Shoes",
    category: "Men",
    department: "Footwear",
    subcategory: "Sports Shoes",
    gender: "Men",
    price: 1599,
    mrp: 3199,
    discount: 50,
    rating: 4.6,
    ratingCount: 247,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"],
    colors: ["Black","Blue","White"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 31
  },

  {
    id: "MEN-FW-003",
    brand: "AS FASHIONS",
    name: "Classic Formal Shoes",
    category: "Men",
    department: "Footwear",
    subcategory: "Formal Shoes",
    gender: "Men",
    price: 1399,
    mrp: 2799,
    discount: 50,
    rating: 4.5,
    ratingCount: 119,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10","UK 11"],
    colors: ["Black","Brown"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
    stock: 16
  },

  {
    id: "MEN-FW-004",
    brand: "AS FASHIONS",
    name: "Comfort Sandals",
    category: "Men",
    department: "Footwear",
    subcategory: "Sandals & Floaters",
    gender: "Men",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.2,
    ratingCount: 91,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    colors: ["Black","Brown"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85",
    stock: 27
  },

  {
    id: "MEN-FW-005",
    brand: "AS FASHIONS",
    name: "Everyday Flip Flops",
    category: "Men",
    department: "Footwear",
    subcategory: "Flip Flops",
    gender: "Men",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.1,
    ratingCount: 133,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    colors: ["Black","Navy"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85",
    stock: 40
  },

  {
    id: "MEN-FW-006",
    brand: "AS FASHIONS",
    name: "Premium Cotton Socks",
    category: "Men",
    department: "Footwear",
    subcategory: "Socks",
    gender: "Men",
    price: 299,
    mrp: 599,
    discount: 50,
    rating: 4.3,
    ratingCount: 176,
    sizes: ["Free Size"],
    colors: ["Black","White","Grey"],
    badge: "VALUE",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=85",
    stock: 50
  },

  /* =========================
     MEN — SPORTS & ACTIVE
  ========================= */

  {
    id: "MEN-SA-001",
    brand: "AS FASHIONS",
    name: "Lightweight Sport Shoes",
    category: "Men",
    department: "Sports & Active Wear",
    subcategory: "Sport Shoes",
    gender: "Men",
    price: 1399,
    mrp: 2799,
    discount: 50,
    rating: 4.5,
    ratingCount: 104,
    sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    colors: ["Black","White"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    stock: 22
  },

  {
    id: "MEN-SA-002",
    brand: "AS FASHIONS",
    name: "Active Sports Jacket",
    category: "Men",
    department: "Sports & Active Wear",
    subcategory: "Jackets",
    gender: "Men",
    price: 1199,
    mrp: 2399,
    discount: 50,
    rating: 4.4,
    ratingCount: 71,
    sizes: ["M","L","XL","XXL"],
    colors: ["Black","Grey"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85",
    stock: 17
  },

  {
    id: "MEN-SA-003",
    brand: "AS FASHIONS",
    name: "Performance Tracksuit",
    category: "Men",
    department: "Sports & Active Wear",
    subcategory: "Tracksuits",
    gender: "Men",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    ratingCount: 83,
    sizes: ["S","M","L","XL","XXL"],
    colors: ["Black","Navy"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    stock: 14
  },

  {
    id: "MEN-SA-004",
    brand: "AS FASHIONS",
    name: "Training Shorts",
    category: "Men",
    department: "Sports & Active Wear",
    subcategory: "Shorts",
    gender: "Men",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.3,
    ratingCount: 93,
    sizes: ["S","M","L","XL"],
    colors: ["Black","Grey","Blue"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=85",
    stock: 26
  },

  /* =========================
     MEN — ACCESSORIES
  ========================= */

  {
    id: "MEN-AC-001",
    brand: "AS FASHIONS",
    name: "Leather Wallet",
    category: "Men",
    department: "Accessories",
    subcategory: "Wallets",
    gender: "Men",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.4,
    ratingCount: 188,
    sizes: ["Free Size"],
    colors: ["Black","Brown"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    stock: 35
  },

  {
    id: "MEN-AC-002",
    brand: "AS FASHIONS",
    name: "Classic Leather Belt",
    category: "Men",
    department: "Accessories",
    subcategory: "Belts",
    gender: "Men",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.3,
    ratingCount: 121,
    sizes: ["30","32","34","36","38"],
    colors: ["Black","Brown"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85",
    stock: 29
  },

  {
    id: "MEN-AC-003",
    brand: "AS FASHIONS",
    name: "Minimal Analog Watch",
    category: "Men",
    department: "Accessories",
    subcategory: "Watches",
    gender: "Men",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.6,
    ratingCount: 147,
    sizes: ["Free Size"],
    colors: ["Black","Silver"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    stock: 19
  },

  {
    id: "MEN-AC-004",
    brand: "AS FASHIONS",
    name: "UV Protection Sunglasses",
    category: "Men",
    department: "Accessories",
    subcategory: "Sunglasses",
    gender: "Men",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.2,
    ratingCount: 88,
    sizes: ["Free Size"],
    colors: ["Black","Brown"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    stock: 24
  },

  {
    id: "MEN-AC-005",
    brand: "AS FASHIONS",
    name: "Classic Baseball Cap",
    category: "Men",
    department: "Accessories",
    subcategory: "Caps",
    gender: "Men",
    price: 349,
    mrp: 699,
    discount: 50,
    rating: 4.1,
    ratingCount: 64,
    sizes: ["Free Size"],
    colors: ["Black","Navy","White"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    stock: 38
  },

  {
    id: "MEN-AC-006",
    brand: "AS FASHIONS",
    name: "Minimal Fashion Jewellery",
    category: "Men",
    department: "Accessories",
    subcategory: "Jewellery",
    gender: "Men",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.2,
    ratingCount: 42,
    sizes: ["Free Size"],
    colors: ["Silver","Black"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  {
    id: "MEN-AC-007",
    brand: "AS FASHIONS",
    name: "Urban Travel Backpack",
    category: "Men",
    department: "Accessories",
    subcategory: "Bags",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 116,
    sizes: ["Free Size"],
    colors: ["Black","Grey"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    stock: 21
  },

  /* =========================
     WOMEN — ETHNIC & FUSION WEAR
  ========================= */

  {
    id: "WOMEN-EF-001",
    brand: "AS FASHIONS",
    name: "Premium Kurta Suit Set",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Kurtas & Suits",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 186,
    sizes: ["XS","S","M","L","XL","XXL"],
    colors: ["Blue","Pink","Green"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e4?auto=format&fit=crop&w=900&q=85",
    stock: 24
  },

  {
    id: "WOMEN-EF-002",
    brand: "AS FASHIONS",
    name: "Elegant Printed Kurti",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Kurtis",
    gender: "Women",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 143,
    sizes: ["XS","S","M","L","XL","XXL"],
    colors: ["Pink","Yellow","Blue"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    stock: 31
  },

  {
    id: "WOMEN-EF-003",
    brand: "AS FASHIONS",
    name: "Fusion Tunic Top",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Tunics & Tops",
    gender: "Women",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.3,
    ratingCount: 98,
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Black","Beige"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    stock: 22
  },

  {
    id: "WOMEN-EF-004",
    brand: "AS FASHIONS",
    name: "Designer Printed Saree",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Sarees",
    gender: "Women",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.7,
    ratingCount: 214,
    sizes: ["Free Size"],
    colors: ["Red","Blue","Green"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    stock: 17
  },

  {
    id: "WOMEN-EF-005",
    brand: "AS FASHIONS",
    name: "Embroidered Ethnic Dress",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Ethnic Dresses",
    gender: "Women",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    ratingCount: 87,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Maroon","Pink","Navy"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    stock: 15
  },

  {
    id: "WOMEN-EF-006",
    brand: "AS FASHIONS",
    name: "Bridal Lehenga Choli",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Lehenga Choli",
    gender: "Women",
    price: 3999,
    mrp: 7999,
    discount: 50,
    rating: 4.8,
    ratingCount: 46,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Red","Pink","Wine"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1583391733981-8499c6f8f6c8?auto=format&fit=crop&w=900&q=85",
    stock: 7
  },

  {
    id: "WOMEN-EF-007",
    brand: "AS FASHIONS",
    name: "Printed Palazzo Skirt Set",
    category: "Women",
    department: "Ethnic & Fusion Wear",
    subcategory: "Skirts & Palazzos",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.3,
    ratingCount: 74,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Black","White","Pink"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
    stock: 19
  },

  /* =========================
     WOMEN — WESTERN WEAR
  ========================= */

  {
    id: "WOMEN-WW-001",
    brand: "AS FASHIONS",
    name: "Floral Western Dress",
    category: "Women",
    department: "Western Wear",
    subcategory: "Dresses",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.5,
    ratingCount: 176,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Blue","Pink","Black"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
    stock: 27
  },

  {
    id: "WOMEN-WW-002",
    brand: "AS FASHIONS",
    name: "Relaxed Fit Top",
    category: "Women",
    department: "Western Wear",
    subcategory: "Tops",
    gender: "Women",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.2,
    ratingCount: 112,
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Black","Pink"],
    badge: "UNDER ₹499",
    image: "https://images.unsplash.com/photo-1564257577054-2e5c9b5f8e8e?auto=format&fit=crop&w=900&q=85",
    stock: 34
  },

  {
    id: "WOMEN-WW-003",
    brand: "AS FASHIONS",
    name: "Premium Everyday T-Shirt",
    category: "Women",
    department: "Western Wear",
    subcategory: "T-Shirts",
    gender: "Women",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.4,
    ratingCount: 221,
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Black","Grey","Pink"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    stock: 41
  },

  {
    id: "WOMEN-WW-004",
    brand: "AS FASHIONS",
    name: "High Rise Skinny Jeans",
    category: "Women",
    department: "Western Wear",
    subcategory: "Jeans & Jeggings",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 194,
    sizes: ["26","28","30","32","34","36"],
    colors: ["Blue","Black"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    stock: 28
  },

  {
    id: "WOMEN-WW-005",
    brand: "AS FASHIONS",
    name: "Smart Fit Trousers",
    category: "Women",
    department: "Western Wear",
    subcategory: "Trousers & Capris",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.3,
    ratingCount: 81,
    sizes: ["26","28","30","32","34"],
    colors: ["Black","Beige","Navy"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    stock: 21
  },

  {
    id: "WOMEN-WW-006",
    brand: "AS FASHIONS",
    name: "Summer Shorts & Skirt Set",
    category: "Women",
    department: "Western Wear",
    subcategory: "Shorts & Skirts",
    gender: "Women",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.2,
    ratingCount: 67,
    sizes: ["XS","S","M","L","XL"],
    colors: ["White","Black","Blue"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  {
    id: "WOMEN-WW-007",
    brand: "AS FASHIONS",
    name: "Trendy Co-ord Set",
    category: "Women",
    department: "Western Wear",
    subcategory: "Co-ords",
    gender: "Women",
    price: 1199,
    mrp: 2399,
    discount: 50,
    rating: 4.6,
    ratingCount: 109,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Beige","Black","Green"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    stock: 16
  },

  {
    id: "WOMEN-WW-008",
    brand: "AS FASHIONS",
    name: "Structured Blazer Waistcoat",
    category: "Women",
    department: "Western Wear",
    subcategory: "Blazers & Waistcoats",
    gender: "Women",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.5,
    ratingCount: 58,
    sizes: ["XS","S","M","L","XL"],
    colors: ["Black","Beige","White"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
    stock: 11
  },

  /* =========================
     WOMEN — FOOTWEAR
  ========================= */

  {
    id: "WOMEN-FW-001",
    brand: "AS FASHIONS",
    name: "Comfort Everyday Flats",
    category: "Women",
    department: "Footwear",
    subcategory: "Flats",
    gender: "Women",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 142,
    sizes: ["UK 3","UK 4","UK 5","UK 6","UK 7","UK 8"],
    colors: ["Black","Tan","Beige"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
    stock: 26
  },

  {
    id: "WOMEN-FW-002",
    brand: "AS FASHIONS",
    name: "Elegant Block Heels",
    category: "Women",
    department: "Footwear",
    subcategory: "Heels",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 97,
    sizes: ["UK 3","UK 4","UK 5","UK 6","UK 7"],
    colors: ["Black","Red","Nude"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
    stock: 15
  },

  {
    id: "WOMEN-FW-003",
    brand: "AS FASHIONS",
    name: "Premium Casual Sneakers",
    category: "Women",
    department: "Footwear",
    subcategory: "Casual Shoes",
    gender: "Women",
    price: 1099,
    mrp: 2199,
    discount: 50,
    rating: 4.5,
    ratingCount: 163,
    sizes: ["UK 3","UK 4","UK 5","UK 6","UK 7","UK 8"],
    colors: ["White","Black","Pink"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 24
  },

  {
    id: "WOMEN-FW-004",
    brand: "AS FASHIONS",
    name: "Classic Ankle Boots",
    category: "Women",
    department: "Footwear",
    subcategory: "Boots",
    gender: "Women",
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.4,
    ratingCount: 73,
    sizes: ["UK 3","UK 4","UK 5","UK 6","UK 7"],
    colors: ["Black","Brown"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 13
  },

  {
    id: "WOMEN-FW-005",
    brand: "AS FASHIONS",
    name: "Lightweight Sports Shoes",
    category: "Women",
    department: "Footwear",
    subcategory: "Sports Shoes",
    gender: "Women",
    price: 1299,
    mrp: 2599,
    discount: 50,
    rating: 4.6,
    ratingCount: 128,
    sizes: ["UK 3","UK 4","UK 5","UK 6","UK 7","UK 8"],
    colors: ["White","Pink","Black"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 22
  },

  /* =========================
     WOMEN — LINGERIE & SLEEPWEAR
  ========================= */

  {
    id: "WOMEN-LS-001",
    brand: "AS FASHIONS",
    name: "Comfort Everyday Bra",
    category: "Women",
    department: "Lingerie & Sleepwear",
    subcategory: "Bras",
    gender: "Women",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.3,
    ratingCount: 192,
    sizes: ["32B","34B","36B","38B"],
    colors: ["Black","White","Beige"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f2096?auto=format&fit=crop&w=900&q=85",
    stock: 30
  },

  {
    id: "WOMEN-LS-002",
    brand: "AS FASHIONS",
    name: "Soft Cotton Briefs",
    category: "Women",
    department: "Lingerie & Sleepwear",
    subcategory: "Briefs",
    gender: "Women",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.2,
    ratingCount: 115,
    sizes: ["S","M","L","XL"],
    colors: ["Black","White","Pink"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f2096?auto=format&fit=crop&w=900&q=85",
    stock: 42
  },

  {
    id: "WOMEN-LS-003",
    brand: "AS FASHIONS",
    name: "Premium Lingerie Set",
    category: "Women",
    department: "Lingerie & Sleepwear",
    subcategory: "Lingerie Sets",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.4,
    ratingCount: 86,
    sizes: ["S","M","L","XL"],
    colors: ["Black","Wine","Pink"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    stock: 19
  },

  {
    id: "WOMEN-LS-004",
    brand: "AS FASHIONS",
    name: "Soft Satin Nightsuit",
    category: "Women",
    department: "Lingerie & Sleepwear",
    subcategory: "Nightsuits",
    gender: "Women",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.5,
    ratingCount: 121,
    sizes: ["S","M","L","XL"],
    colors: ["Pink","Blue","Lavender"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    stock: 23
  },

  {
    id: "WOMEN-LS-005",
    brand: "AS FASHIONS",
    name: "Satin Sleepwear Set",
    category: "Women",
    department: "Lingerie & Sleepwear",
    subcategory: "Babydolls",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.3,
    ratingCount: 61,
    sizes: ["S","M","L","XL"],
    colors: ["Black","Red","Wine"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    stock: 12
  },

  /* =========================
     WOMEN — BEAUTY & PERSONAL CARE
  ========================= */

  {
    id: "WOMEN-BP-001",
    brand: "AS FASHIONS",
    name: "Everyday Makeup Kit",
    category: "Women",
    department: "Beauty & Personal Care",
    subcategory: "Makeup",
    gender: "Women",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 148,
    sizes: ["One Size"],
    colors: ["Natural"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    stock: 32
  },

  {
    id: "WOMEN-BP-002",
    brand: "AS FASHIONS",
    name: "Hydrating Skincare Set",
    category: "Women",
    department: "Beauty & Personal Care",
    subcategory: "Skincare",
    gender: "Women",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.5,
    ratingCount: 172,
    sizes: ["One Size"],
    colors: ["Standard"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    stock: 25
  },

  {
    id: "WOMEN-BP-003",
    brand: "AS FASHIONS",
    name: "Haircare Essentials Kit",
    category: "Women",
    department: "Beauty & Personal Care",
    subcategory: "Haircare",
    gender: "Women",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.3,
    ratingCount: 94,
    sizes: ["One Size"],
    colors: ["Standard"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    stock: 21
  },

  {
    id: "WOMEN-BP-004",
    brand: "AS FASHIONS",
    name: "Premium Floral Fragrance",
    category: "Women",
    department: "Beauty & Personal Care",
    subcategory: "Fragrances",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.6,
    ratingCount: 136,
    sizes: ["One Size"],
    colors: ["Standard"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  /* =========================
     WOMEN — ACCESSORIES & BAGS
  ========================= */

  {
    id: "WOMEN-AB-001",
    brand: "AS FASHIONS",
    name: "Premium Handbag",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Handbags",
    gender: "Women",
    price: 1199,
    mrp: 2399,
    discount: 50,
    rating: 4.6,
    ratingCount: 167,
    sizes: ["One Size"],
    colors: ["Black","Tan","Beige"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    stock: 20
  },

  {
    id: "WOMEN-AB-002",
    brand: "AS FASHIONS",
    name: "Compact Sling Bag",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Slings",
    gender: "Women",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 132,
    sizes: ["One Size"],
    colors: ["Black","Pink","Brown"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
    stock: 27
  },

  {
    id: "WOMEN-AB-003",
    brand: "AS FASHIONS",
    name: "Compact Women's Wallet",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Wallets",
    gender: "Women",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.3,
    ratingCount: 104,
    sizes: ["One Size"],
    colors: ["Black","Pink","Tan"],
    badge: "UNDER ₹499",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    stock: 33
  },

  {
    id: "WOMEN-AB-004",
    brand: "AS FASHIONS",
    name: "Elegant Analog Watch",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Watches",
    gender: "Women",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.5,
    ratingCount: 91,
    sizes: ["One Size"],
    colors: ["Gold","Silver","Rose Gold"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    stock: 16
  },

  {
    id: "WOMEN-AB-005",
    brand: "AS FASHIONS",
    name: "Statement Earrings",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Earrings",
    gender: "Women",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.4,
    ratingCount: 139,
    sizes: ["One Size"],
    colors: ["Gold","Silver"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
    stock: 35
  },

  {
    id: "WOMEN-AB-006",
    brand: "AS FASHIONS",
    name: "Minimal Fashion Jewellery Set",
    category: "Women",
    department: "Accessories & Bags",
    subcategory: "Jewellery",
    gender: "Women",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.5,
    ratingCount: 118,
    sizes: ["One Size"],
    colors: ["Gold","Silver"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    stock: 23
  },

  /* =====================================================
     KIDS — CLOTHING
  ===================================================== */

  {
    id: "KIDS-CL-001",
    brand: "AS FASHIONS",
    name: "Premium Kids T-Shirt",
    category: "Kids",
    department: "Clothing",
    subcategory: "T-Shirts",
    gender: "Unisex",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.4,
    ratingCount: 126,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y","12-13Y"],
    colors: ["Blue","White","Yellow"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    stock: 30
  },

  {
    id: "KIDS-CL-002",
    brand: "AS FASHIONS",
    name: "Smart Kids Casual Shirt",
    category: "Kids",
    department: "Clothing",
    subcategory: "Shirts",
    gender: "Boy",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.3,
    ratingCount: 84,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y","12-13Y"],
    colors: ["White","Blue","Green"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",
    stock: 24
  },

  {
    id: "KIDS-CL-003",
    brand: "AS FASHIONS",
    name: "Cute Party Dress",
    category: "Kids",
    department: "Clothing",
    subcategory: "Dresses",
    gender: "Girl",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.6,
    ratingCount: 117,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colors: ["Pink","Purple","Red"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    stock: 18
  },

  {
    id: "KIDS-CL-004",
    brand: "AS FASHIONS",
    name: "Comfort Cotton Shorts",
    category: "Kids",
    department: "Clothing",
    subcategory: "Shorts",
    gender: "Boy",
    price: 349,
    mrp: 699,
    discount: 50,
    rating: 4.2,
    ratingCount: 73,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colors: ["Black","Blue","Grey"],
    badge: "UNDER ₹499",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    stock: 29
  },

  {
    id: "KIDS-CL-005",
    brand: "AS FASHIONS",
    name: "Kids Denim Jeans",
    category: "Kids",
    department: "Clothing",
    subcategory: "Jeans",
    gender: "Unisex",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 91,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y","12-13Y"],
    colors: ["Blue","Black"],
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
    stock: 21
  },

  {
    id: "KIDS-CL-006",
    brand: "AS FASHIONS",
    name: "Girls Flared Skirt",
    category: "Kids",
    department: "Clothing",
    subcategory: "Skirts",
    gender: "Girl",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.5,
    ratingCount: 68,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colors: ["Pink","Yellow","Blue"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",
    stock: 20
  },

  {
    id: "KIDS-CL-007",
    brand: "AS FASHIONS",
    name: "Kids Ethnic Kurta Set",
    category: "Kids",
    department: "Clothing",
    subcategory: "Ethnic Wear",
    gender: "Unisex",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.6,
    ratingCount: 82,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y","12-13Y"],
    colors: ["Cream","Blue","Maroon"],
    badge: "FESTIVE",
    image: "https://images.unsplash.com/photo-1605908502724-9093a675b0e6?auto=format&fit=crop&w=900&q=85",
    stock: 15
  },

  {
    id: "KIDS-CL-008",
    brand: "AS FASHIONS",
    name: "Kids Party Wear Set",
    category: "Kids",
    department: "Clothing",
    subcategory: "Party Wear",
    gender: "Unisex",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.7,
    ratingCount: 59,
    sizes: ["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"],
    colors: ["Black","Red","Navy"],
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    stock: 11
  },

  /* =====================================================
     KIDS — INFANTS
  ===================================================== */

  {
    id: "KIDS-IN-001",
    brand: "AS FASHIONS",
    name: "Soft Cotton Baby Romper",
    category: "Kids",
    department: "Infants",
    subcategory: "Rompers",
    gender: "Unisex",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.6,
    ratingCount: 142,
    sizes: ["0-3M","3-6M","6-12M","12-18M"],
    colors: ["Blue","Pink","Yellow"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85",
    stock: 32
  },

  {
    id: "KIDS-IN-002",
    brand: "AS FASHIONS",
    name: "Newborn Clothing Set",
    category: "Kids",
    department: "Infants",
    subcategory: "Clothing Sets",
    gender: "Unisex",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.5,
    ratingCount: 98,
    sizes: ["0-3M","3-6M","6-12M"],
    colors: ["White","Pink","Blue"],
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=85",
    stock: 25
  },

  {
    id: "KIDS-IN-003",
    brand: "AS FASHIONS",
    name: "Gentle Baby Bodysuit",
    category: "Kids",
    department: "Infants",
    subcategory: "Bodysuits",
    gender: "Unisex",
    price: 349,
    mrp: 699,
    discount: 50,
    rating: 4.4,
    ratingCount: 76,
    sizes: ["0-3M","3-6M","6-12M"],
    colors: ["White","Blue","Pink"],
    badge: "DEAL",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85",
    stock: 37
  },

  {
    id: "KIDS-IN-004",
    brand: "AS FASHIONS",
    name: "Soft Baby Booties",
    category: "Kids",
    department: "Infants",
    subcategory: "Booties",
    gender: "Unisex",
    price: 299,
    mrp: 599,
    discount: 50,
    rating: 4.3,
    ratingCount: 63,
    sizes: ["0-3M","3-6M","6-12M"],
    colors: ["White","Pink","Blue"],
    badge: "UNDER ₹499",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85",
    stock: 40
  },

  /* =====================================================
     KIDS — FOOTWEAR & TOYS
  ===================================================== */

  {
    id: "KIDS-FT-001",
    brand: "AS FASHIONS",
    name: "Kids School Shoes",
    category: "Kids",
    department: "Footwear & Toys",
    subcategory: "School Shoes",
    gender: "Unisex",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    ratingCount: 105,
    sizes: ["UK 10C","UK 11C","UK 12C","UK 13C","UK 1","UK 2","UK 3"],
    colors: ["Black"],
    badge: "BACK TO SCHOOL",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 28
  },

  {
    id: "KIDS-FT-002",
    brand: "AS FASHIONS",
    name: "Kids Comfort Sandals",
    category: "Kids",
    department: "Footwear & Toys",
    subcategory: "Sandals",
    gender: "Unisex",
    price: 499,
    mrp: 999,
    discount: 50,
    rating: 4.3,
    ratingCount: 89,
    sizes: ["UK 10C","UK 11C","UK 12C","UK 13C","UK 1","UK 2"],
    colors: ["Blue","Pink","Black"],
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85",
    stock: 31
  },

  {
    id: "KIDS-FT-003",
    brand: "AS FASHIONS",
    name: "Cute Soft Toy",
    category: "Kids",
    department: "Footwear & Toys",
    subcategory: "Soft Toys",
    gender: "Unisex",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.7,
    ratingCount: 154,
    sizes: ["One Size"],
    colors: ["Brown","White","Pink"],
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=85",
    stock: 45
  },

  {
    id: "KIDS-FT-004",
    brand: "AS FASHIONS",
    name: "Kids Learning Toy Kit",
    category: "Kids",
    department: "Footwear & Toys",
    subcategory: "Learning Toys",
    gender: "Unisex",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.6,
    ratingCount: 97,
    sizes: ["One Size"],
    colors: ["Multicolor"],
    badge: "LEARNING",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85",
    stock: 26
  }

];

window.ASF_PRODUCTS = AS_PRODUCTS;

/* =====================================================
   CANONICAL CATEGORY INDEX
===================================================== */

window.ASF_CATEGORY_INDEX = {

  Men: {
    "Topwear": [
      "T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts",
      "Jackets", "Sweaters", "Blazers & Coats", "Suits"
    ],
    "Bottomwear": [
      "Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"
    ],
    "Ethnic Wear": [
      "Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"
    ],
    "Footwear": [
      "Casual Shoes", "Sports Shoes", "Formal Shoes", "Sandals & Floaters", "Flip Flops", "Socks"
    ],
    "Sports & Active Wear": [
      "Sport Shoes", "Jackets", "Tracksuits", "Shorts"
    ],
    "Accessories": [
      "Wallets", "Belts", "Watches", "Sunglasses", "Caps", "Jewellery", "Bags"
    ]
  },

  Women: {
    "Ethnic & Fusion Wear": [
      "Kurtas & Suits", "Kurtis", "Tunics & Tops", "Sarees",
      "Ethnic Dresses", "Lehenga Choli", "Skirts & Palazzos"
    ],
    "Western Wear": [
      "Dresses", "Tops", "T-Shirts", "Jeans & Jeggings",
      "Trousers & Capris", "Shorts & Skirts", "Co-ords", "Blazers & Waistcoats"
    ],
    "Footwear": [
      "Flats", "Heels", "Casual Shoes", "Boots", "Sports Shoes"
    ],
    "Lingerie & Sleepwear": [
      "Bras", "Briefs", "Lingerie Sets", "Nightsuits", "Babydolls"
    ],
    "Beauty & Personal Care": [
      "Makeup", "Skincare", "Haircare", "Fragrances"
    ],
    "Accessories & Bags": [
      "Handbags", "Slings", "Wallets", "Watches", "Earrings", "Jewellery"
    ]
  },

  Kids: {
    "Clothing": [
      "T-Shirts", "Shirts", "Dresses", "Shorts", "Jeans", "Skirts", "Ethnic Wear", "Party Wear"
    ],
    "Infants": [
      "Rompers", "Clothing Sets", "Bodysuits", "Booties"
    ],
    "Footwear & Toys": [
      "School Shoes", "Sandals", "Soft Toys", "Learning Toys"
    ]
  }
};


/* =====================================================
   PRODUCT HELPERS
===================================================== */

window.getASProducts = function () {
  return [...window.ASF_PRODUCTS];
};

window.findASProduct = function (id) {
  return window.ASF_PRODUCTS.find(
    product => String(product.id) === String(id)
  );
};

window.getProductsByCategory = function (category) {
  if (!category) {
    return getASProducts();
  }
  return window.ASF_PRODUCTS.filter(
    product =>
      product.category.toLowerCase() ===
      String(category).toLowerCase()
  );
};

window.getProductsBySubcategory = function (subcategory) {
  if (!subcategory) {
    return getASProducts();
  }
  return window.ASF_PRODUCTS.filter(
    product =>
      product.subcategory.toLowerCase() ===
      String(subcategory).toLowerCase()
  );
};

window.getProductsByDepartment = function (department) {
  if (!department) {
    return getASProducts();
  }
  return window.ASF_PRODUCTS.filter(
    product =>
      product.department.toLowerCase() ===
      String(department).toLowerCase()
  );
};


/* =====================================================
   ADVANCED FILTER
===================================================== */

window.filterASProducts = function (filters = {}) {
  let products = [...window.ASF_PRODUCTS];

  if (filters.category) {
    products = products.filter(product =>
      product.category.toLowerCase() ===
      String(filters.category).toLowerCase()
    );
  }

  if (filters.department) {
    products = products.filter(product =>
      product.department.toLowerCase() ===
      String(filters.department).toLowerCase()
    );
  }

  if (filters.subcategory) {
    products = products.filter(product =>
      product.subcategory.toLowerCase() ===
      String(filters.subcategory).toLowerCase()
    );
  }

  if (filters.gender) {
    products = products.filter(product =>
      product.gender.toLowerCase() ===
      String(filters.gender).toLowerCase()
    );
  }

  if (filters.maxPrice !== undefined) {
    products = products.filter(product =>
      Number(product.price) <= Number(filters.maxPrice)
    );
  }

  if (filters.minPrice !== undefined) {
    products = products.filter(product =>
      Number(product.price) >= Number(filters.minPrice)
    );
  }

  if (filters.minDiscount !== undefined) {
    products = products.filter(product =>
      Number(product.discount) >= Number(filters.minDiscount)
    );
  }

  if (filters.search) {
    const query = String(filters.search).toLowerCase().trim();
    products = products.filter(product => {
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        product.department,
        product.subcategory,
        product.gender,
        ...(product.colors || [])
      ]
      .join(" ")
      .toLowerCase();

      return searchableText.includes(query);
    });
  }

  return products;
};


/* =====================================================
   SORTING
===================================================== */

window.sortASProducts = function (
  products,
  sort = "recommended"
) {
  const list = [...products];

  switch (sort) {
    case "price-low":
      return list.sort((a,b) => Number(a.price) - Number(b.price));

    case "price-high":
      return list.sort((a,b) => Number(b.price) - Number(a.price));

    case "discount":
      return list.sort((a,b) => Number(b.discount) - Number(a.discount));

    case "rating":
      return list.sort((a,b) => Number(b.rating) - Number(a.rating));

    case "new":
      return list.filter(
        product => product.badge === "NEW"
      ).concat(
        list.filter(
          product => product.badge !== "NEW"
        )
      );

    default:
      return list;
  }
};


/* =====================================================
   URL NAVIGATION HELPERS
===================================================== */

window.asfSlug = function (value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

window.openASProduct = function (productId) {
  const product = window.findASProduct(productId);
  if (!product) {
    console.warn("AS FASHIONS: Product not found:", productId);
    return;
  }
  window.location.href = "product.html?id=" + encodeURIComponent(product.id);
};


/* =====================================================
   CATEGORY NAVIGATION
===================================================== */

window.openASCategory = function (category, subcategory = "") {
  let url = "products.html?category=" + encodeURIComponent(category);
  if (subcategory) {
    url += "&subcategory=" + encodeURIComponent(subcategory);
  }
  window.location.href = url;
};


/* =====================================================
   PRODUCT COUNT
===================================================== */

window.getASProductCount = function () {
  return window.ASF_PRODUCTS.length;
};


/* =====================================================
   CONSOLE CHECK
===================================================== */

console.log("AS FASHIONS — Products loaded:", window.ASF_PRODUCTS.length);
console.log("AS FASHIONS — Category index:", window.ASF_CATEGORY_INDEX);
