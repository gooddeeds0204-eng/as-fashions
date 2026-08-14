/* =========================================================
   AS FASHIONS — js/products.js
   Single-Vendor Product Database
   ========================================================= */

const PRODUCTS = [

  /* =======================================================
     MEN — TOPWEAR
     ======================================================= */

  {
    id: "ASF-MEN-001",
    sku: "ASF-M001",
    name: "Premium Slim Fit Cotton Shirt",
    brand: "AS FASHIONS",
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    price: 899,
    mrp: 1799,
    discount: 50,
    rating: 4.5,
    reviews: 328,
    stock: 42,
    isNew: true,
    isTrending: true,
    badge: "NEW",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
    tags: [
      "shirt",
      "men",
      "cotton",
      "slim fit",
      "casual"
    ],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800"
    ],
    description:
      "Premium cotton shirt with a clean slim-fit silhouette for everyday and smart-casual styling."
  },

  {
    id: "ASF-MEN-002",
    sku: "ASF-M002",
    name: "Oversized Graphic T-Shirt",
    brand: "AS FASHIONS",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 599,
    mrp: 1299,
    discount: 54,
    rating: 4.4,
    reviews: 512,
    stock: 67,
    isNew: true,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    tags: [
      "tshirt",
      "oversized",
      "graphic",
      "streetwear"
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
    ],
    description:
      "Relaxed oversized T-shirt designed for modern streetwear looks."
  },

  {
    id: "ASF-MEN-003",
    sku: "ASF-M003",
    name: "Regular Fit Polo T-Shirt",
    brand: "AS FASHIONS",
    category: "Men",
    subcategory: "Polo T-Shirts",
    gender: "Men",
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.3,
    reviews: 214,
    stock: 38,
    badge: "BESTSELLER",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Olive"],
    tags: [
      "polo",
      "tshirt",
      "casual",
      "men"
    ],
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc45f6a3b8c?w=800"
    ],
    description:
      "Classic regular-fit polo made for versatile everyday styling."
  },

  /* =======================================================
     MEN — BOTTOMWEAR
     ======================================================= */

  {
    id: "ASF-MEN-004",
    sku: "ASF-M004",
    name: "Straight Fit Stretch Jeans",
    brand: "AS FASHIONS",
    category: "Men",
    subcategory: "Jeans",
    gender: "Men",
    price: 1099,
    mrp: 2299,
    discount: 52,
    rating: 4.5,
    reviews: 681,
    stock: 54,
    isTrending: true,
    badge: "BESTSELLER",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Blue", "Black"],
    tags: [
      "jeans",
      "denim",
      "straight fit",
      "men"
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800"
    ],
    description:
      "Comfort stretch denim with a contemporary straight-fit profile."
  },

  {
    id: "ASF-MEN-005",
    sku: "ASF-M005",
    name: "Relaxed Cargo Pants",
    brand: "AS FASHIONS",
    category: "Men",
    subcategory: "Trousers & Cargos",
    gender: "Men",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 403,
    stock: 29,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Olive", "Beige"],
    tags: [
      "cargo",
      "pants",
      "streetwear",
      "utility"
    ],
    images: [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800"
    ],
    description:
      "Relaxed utility cargo pants with multiple practical pockets."
  },

  /* =======================================================
     WOMEN — TOPWEAR
     ======================================================= */

  {
    id: "ASF-WOMEN-001",
    sku: "ASF-W001",
    name: "Elegant Relaxed Fit Kurta",
    brand: "AS FASHIONS",
    category: "Women",
    subcategory: "Kurtas & Kurtis",
    gender: "Women",
    price: 799,
    mrp: 1699,
    discount: 53,
    rating: 4.6,
    reviews: 734,
    stock: 46,
    isNew: true,
    isTrending: true,
    badge: "NEW",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Pink", "Green"],
    tags: [
      "kurta",
      "kurti",
      "ethnic",
      "women"
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800"
    ],
    description:
      "Elegant relaxed-fit kurta combining contemporary comfort with ethnic styling."
  },

  {
    id: "ASF-WOMEN-002",
    sku: "ASF-W002",
    name: "Printed Casual Top",
    brand: "AS FASHIONS",
    category: "Women",
    subcategory: "Tops",
    gender: "Women",
    price: 549,
    mrp: 1199,
    discount: 54,
    rating: 4.3,
    reviews: 286,
    stock: 61,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Blue", "Pink"],
    tags: [
      "top",
      "casual",
      "printed",
      "women"
    ],
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800"
    ],
    description:
      "Lightweight printed top designed for effortless everyday outfits."
  },

  {
    id: "ASF-WOMEN-003",
    sku: "ASF-W003",
    name: "Classic Denim Jacket",
    brand: "AS FASHIONS",
    category: "Women",
    subcategory: "Jackets",
    gender: "Women",
    price: 1299,
    mrp: 2799,
    discount: 54,
    rating: 4.5,
    reviews: 198,
    stock: 25,
    badge: "HOT DEAL",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    tags: [
      "jacket",
      "denim",
      "layering"
    ],
    images: [
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800"
    ],
    description:
      "Timeless denim jacket designed for layering across seasons."
  },

  /* =======================================================
     WOMEN — BOTTOMWEAR
     ======================================================= */

  {
    id: "ASF-WOMEN-004",
    sku: "ASF-W004",
    name: "High Rise Straight Jeans",
    brand: "AS FASHIONS",
    category: "Women",
    subcategory: "Jeans",
    gender: "Women",
    price: 999,
    mrp: 2199,
    discount: 55,
    rating: 4.6,
    reviews: 542,
    stock: 47,
    isTrending: true,
    badge: "BESTSELLER",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Blue", "Black"],
    tags: [
      "jeans",
      "high rise",
      "denim",
      "women"
    ],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800"
    ],
    description:
      "High-rise straight-leg jeans with comfortable stretch denim."
  },

  {
    id: "ASF-WOMEN-005",
    sku: "ASF-W005",
    name: "Flowy Wide Leg Trousers",
    brand: "AS FASHIONS",
    category: "Women",
    subcategory: "Trousers",
    gender: "Women",
    price: 899,
    mrp: 1899,
    discount: 53,
    rating: 4.4,
    reviews: 177,
    stock: 33,
    isNew: true,
    badge: "NEW",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Beige", "Cream"],
    tags: [
      "trousers",
      "wide leg",
      "formal",
      "casual"
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800"
    ],
    description:
      "Flowy wide-leg trousers offering a polished silhouette and all-day comfort."
  },

  /* =======================================================
     KIDS
     ======================================================= */

  {
    id: "ASF-KIDS-001",
    sku: "ASF-K001",
    name: "Kids Printed Cotton T-Shirt",
    brand: "AS FASHIONS",
    category: "Kids",
    subcategory: "T-Shirts",
    gender: "Kids",
    price: 399,
    mrp: 799,
    discount: 50,
    rating: 4.5,
    reviews: 145,
    stock: 72,
    isNew: true,
    badge: "NEW",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Yellow", "White"],
    tags: [
      "kids",
      "tshirt",
      "cotton"
    ],
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800"
    ],
    description:
      "Soft cotton printed T-shirt designed for active kids."
  },

  {
    id: "ASF-KIDS-002",
    sku: "ASF-K002",
    name: "Kids Casual Denim Jeans",
    brand: "AS FASHIONS",
    category: "Kids",
    subcategory: "Jeans",
    gender: "Kids",
    price: 699,
    mrp: 1399,
    discount: 50,
    rating: 4.4,
    reviews: 102,
    stock: 35,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Black"],
    tags: [
      "kids",
      "jeans",
      "denim"
    ],
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800"
    ],
    description:
      "Comfortable everyday denim jeans for kids."
  },

  /* =======================================================
     FOOTWEAR
     ======================================================= */

  {
    id: "ASF-FOOT-001",
    sku: "ASF-F001",
    name: "Minimal Everyday Sneakers",
    brand: "AS FASHIONS",
    category: "Footwear",
    subcategory: "Casual Shoes",
    gender: "Unisex",
    price: 1199,
    mrp: 2499,
    discount: 52,
    rating: 4.5,
    reviews: 615,
    stock: 31,
    isTrending: true,
    badge: "BESTSELLER",
    sizes: [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    colors: ["White", "Black"],
    tags: [
      "sneakers",
      "shoes",
      "casual",
      "footwear"
    ],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    description:
      "Clean everyday sneakers with a versatile minimal profile."
  },

  {
    id: "ASF-FOOT-002",
    sku: "ASF-F002",
    name: "Comfort Casual Slides",
    brand: "AS FASHIONS",
    category: "Footwear",
    subcategory: "Sandals & Slides",
    gender: "Unisex",
    price: 449,
    mrp: 899,
    discount: 50,
    rating: 4.2,
    reviews: 264,
    stock: 58,
    sizes: [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    colors: ["Black", "Brown", "White"],
    tags: [
      "slides",
      "sandals",
      "casual"
    ],
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800"
    ],
    description:
      "Lightweight comfort slides for everyday use."
  },

  /* =======================================================
     BAGS
     ======================================================= */

  {
    id: "ASF-BAG-001",
    sku: "ASF-B001",
    name: "Structured Everyday Backpack",
    brand: "AS FASHIONS",
    category: "Bags",
    subcategory: "Backpacks",
    gender: "Unisex",
    price: 899,
    mrp: 1899,
    discount: 53,
    rating: 4.5,
    reviews: 342,
    stock: 28,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["Free Size"],
    colors: ["Black", "Grey"],
    tags: [
      "backpack",
      "bag",
      "travel",
      "college"
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
    ],
    description:
      "Structured everyday backpack with practical storage compartments."
  },

  {
    id: "ASF-BAG-002",
    sku: "ASF-B002",
    name: "Premium Sling Crossbody Bag",
    brand: "AS FASHIONS",
    category: "Bags",
    subcategory: "Sling Bags",
    gender: "Unisex",
    price: 649,
    mrp: 1299,
    discount: 50,
    rating: 4.3,
    reviews: 219,
    stock: 44,
    sizes: ["Free Size"],
    colors: ["Black", "Brown", "Cream"],
    tags: [
      "sling",
      "crossbody",
      "bag"
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
    ],
    description:
      "Compact crossbody sling designed for everyday essentials."
  },

  /* =======================================================
     ACCESSORIES
     ======================================================= */

  {
    id: "ASF-ACC-001",
    sku: "ASF-A001",
    name: "Classic Minimal Watch",
    brand: "AS FASHIONS",
    category: "Accessories",
    subcategory: "Watches",
    gender: "Unisex",
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 188,
    stock: 22,
    isTrending: true,
    badge: "HOT DEAL",
    sizes: ["Free Size"],
    colors: ["Black", "Silver"],
    tags: [
      "watch",
      "accessory",
      "minimal"
    ],
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"
    ],
    description:
      "Minimal everyday watch with a clean timeless dial."
  },

  {
    id: "ASF-ACC-002",
    sku: "ASF-A002",
    name: "Premium Everyday Sunglasses",
    brand: "AS FASHIONS",
    category: "Accessories",
    subcategory: "Sunglasses",
    gender: "Unisex",
    price: 599,
    mrp: 1199,
    discount: 50,
    rating: 4.3,
    reviews: 306,
    stock: 51,
    sizes: ["Free Size"],
    colors: ["Black", "Brown"],
    tags: [
      "sunglasses",
      "eyewear",
      "accessory"
    ],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"
    ],
    description:
      "Contemporary sunglasses designed to complete everyday looks."
  },

  /* =======================================================
     SPORTS
     ======================================================= */

  {
    id: "ASF-SPORT-001",
    sku: "ASF-S001",
    name: "Performance Active T-Shirt",
    brand: "AS FASHIONS",
    category: "Sports",
    subcategory: "Sports T-Shirts",
    gender: "Unisex",
    price: 649,
    mrp: 1299,
    discount: 50,
    rating: 4.5,
    reviews: 264,
    stock: 49,
    isNew: true,
    badge: "NEW",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Blue"],
    tags: [
      "sports",
      "activewear",
      "gym",
      "running"
    ],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
    ],
    description:
      "Lightweight performance T-shirt designed for training and active lifestyles."
  },

  {
    id: "ASF-SPORT-002",
    sku: "ASF-S002",
    name: "Performance Training Joggers",
    brand: "AS FASHIONS",
    category: "Sports",
    subcategory: "Track Pants & Joggers",
    gender: "Unisex",
    price: 799,
    mrp: 1599,
    discount: 50,
    rating: 4.4,
    reviews: 192,
    stock: 37,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey"],
    tags: [
      "joggers",
      "sports",
      "gym",
      "training"
    ],
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800"
    ],
    description:
      "Comfortable training joggers with a flexible athletic fit."
  },

  /* =======================================================
     WINTER WEAR
     ======================================================= */

  {
    id: "ASF-WINTER-001",
    sku: "ASF-W001",
    name: "Premium Puffer Jacket",
    brand: "AS FASHIONS",
    category: "Winter Wear",
    subcategory: "Jackets",
    gender: "Unisex",
    price: 1699,
    mrp: 3499,
    discount: 51,
    rating: 4.6,
    reviews: 157,
    stock: 19,
    isNew: true,
    badge: "NEW",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    tags: [
      "winter",
      "jacket",
      "puffer"
    ],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800"
    ],
    description:
      "Warm puffer jacket with a modern silhouette for winter layering."
  },

  {
    id: "ASF-WINTER-002",
    sku: "ASF-W002",
    name: "Classic Knit Sweater",
    brand: "AS FASHIONS",
    category: "Winter Wear",
    subcategory: "Sweaters",
    gender: "Unisex",
    price: 899,
    mrp: 1899,
    discount: 53,
    rating: 4.4,
    reviews: 231,
    stock: 34,
    isTrending: true,
    badge: "TRENDING",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Grey", "Black"],
    tags: [
      "sweater",
      "knitwear",
      "winter"
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    description:
      "Soft knit sweater designed for comfortable winter styling."
  }

];

/* =========================================================
   GLOBAL PRODUCT ACCESS
   ========================================================= */

window.PRODUCTS = PRODUCTS;
window.products = PRODUCTS;
