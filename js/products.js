/* =========================================================
   AS FASHIONS
   PRODUCT DATABASE
   js/products.js
   ========================================================= */

const PRODUCTS = [

    /* =====================================================
       MEN — TOPWEAR
       ===================================================== */

    {
        id: "AF-MEN-001",
        name: "Premium Oversized Cotton T-Shirt",
        brand: "AS FASHIONS",
        category: "men",
        subcategory: "topwear",
        type: "T-Shirts",

        price: 699,
        mrp: 1499,
        discount: 53,
        currency: "INR",

        rating: 4.5,
        reviews: 328,

        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "White",
                code: "#ffffff"
            },
            {
                name: "Olive",
                code: "#556b2f"
            }
        ],

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: 42,

        tags: [
            "oversized",
            "cotton",
            "trending",
            "streetwear"
        ],

        offers: [
            "Extra 10% OFF on selected products",
            "Free shipping above ₹999"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    {
        id: "AF-MEN-002",
        name: "Slim Fit Casual Shirt",
        brand: "AS FASHIONS",
        category: "men",
        subcategory: "topwear",
        type: "Casual Shirts",

        price: 899,
        mrp: 1899,
        discount: 53,
        currency: "INR",

        rating: 4.3,
        reviews: 214,

        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
        ],

        colors: [
            {
                name: "Sky Blue",
                code: "#87ceeb"
            },
            {
                name: "White",
                code: "#ffffff"
            },
            {
                name: "Black",
                code: "#111111"
            }
        ],

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: 31,

        tags: [
            "casual",
            "slim-fit",
            "shirt"
        ],

        offers: [
            "Buy 2 for ₹1499"
        ],

        isNew: false,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    {
        id: "AF-MEN-003",
        name: "Classic Polo T-Shirt",
        brand: "AS FASHIONS",
        category: "men",
        subcategory: "topwear",
        type: "Polo T-Shirts",

        price: 749,
        mrp: 1599,
        discount: 53,

        rating: 4.4,
        reviews: 189,

        images: [
            "https://images.unsplash.com/photo-1625910513413-5fc45b8b9d5b"
        ],

        colors: [
            {
                name: "Navy",
                code: "#172554"
            },
            {
                name: "Maroon",
                code: "#7f1d1d"
            }
        ],

        sizes: ["S", "M", "L", "XL", "XXL"],

        stock: 26,

        tags: [
            "polo",
            "casual",
            "classic"
        ],

        offers: [
            "10% instant discount"
        ],

        isNew: true,
        isTrending: false,
        isSale: true,
        isFeatured: false,
        isFlashSale: false
    },


    /* =====================================================
       MEN — BOTTOMWEAR
       ===================================================== */

    {
        id: "AF-MEN-004",
        name: "Relaxed Fit Cargo Pants",
        brand: "AS FASHIONS",
        category: "men",
        subcategory: "bottomwear",
        type: "Cargo Trousers",

        price: 1199,
        mrp: 2499,
        discount: 52,

        rating: 4.6,
        reviews: 456,

        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
        ],

        colors: [
            {
                name: "Olive",
                code: "#556b2f"
            },
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Beige",
                code: "#d6c6a5"
            }
        ],

        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],

        stock: 18,

        tags: [
            "cargo",
            "streetwear",
            "trending"
        ],

        offers: [
            "Extra ₹150 OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    {
        id: "AF-MEN-005",
        name: "Straight Fit Blue Jeans",
        brand: "AS FASHIONS",
        category: "men",
        subcategory: "bottomwear",
        type: "Jeans",

        price: 1099,
        mrp: 2299,
        discount: 52,

        rating: 4.4,
        reviews: 367,

        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d"
        ],

        colors: [
            {
                name: "Blue",
                code: "#2563eb"
            },
            {
                name: "Dark Blue",
                code: "#172554"
            }
        ],

        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],

        stock: 35,

        tags: [
            "jeans",
            "denim",
            "casual"
        ],

        offers: [
            "Buy 2 get extra 15% OFF"
        ],

        isNew: false,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       WOMEN — WESTERN WEAR
       ===================================================== */

    {
        id: "AF-WOMEN-001",
        name: "Elegant Ribbed Crop Top",
        brand: "AS FASHIONS",
        category: "women",
        subcategory: "western-wear",
        type: "Crop Tops",

        price: 499,
        mrp: 999,
        discount: 50,

        rating: 4.5,
        reviews: 521,

        images: [
            "https://images.unsplash.com/photo-1564257577054-1f3f5a1a4d5a"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Pink",
                code: "#ec4899"
            },
            {
                name: "White",
                code: "#ffffff"
            }
        ],

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],

        stock: 52,

        tags: [
            "crop-top",
            "trending",
            "western"
        ],

        offers: [
            "Flat 50% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    {
        id: "AF-WOMEN-002",
        name: "Relaxed Fit Women's Shirt",
        brand: "AS FASHIONS",
        category: "women",
        subcategory: "western-wear",
        type: "Shirts",

        price: 799,
        mrp: 1699,
        discount: 53,

        rating: 4.3,
        reviews: 276,

        images: [
            "https://images.unsplash.com/photo-1598554747436-c9293d6a588f"
        ],

        colors: [
            {
                name: "White",
                code: "#ffffff"
            },
            {
                name: "Blue",
                code: "#2563eb"
            }
        ],

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],

        stock: 24,

        tags: [
            "shirt",
            "oversized",
            "casual"
        ],

        offers: [
            "Extra 10% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: false,
        isFlashSale: false
    },


    /* =====================================================
       WOMEN — DRESSES
       ===================================================== */

    {
        id: "AF-WOMEN-003",
        name: "Floral Midi Dress",
        brand: "AS FASHIONS",
        category: "women",
        subcategory: "dresses",
        type: "Midi Dresses",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.6,
        reviews: 643,

        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
        ],

        colors: [
            {
                name: "Floral Pink",
                code: "#f9a8d4"
            },
            {
                name: "Floral Blue",
                code: "#93c5fd"
            }
        ],

        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],

        stock: 16,

        tags: [
            "dress",
            "floral",
            "party",
            "trending"
        ],

        offers: [
            "Flat 55% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       WOMEN — ETHNIC
       ===================================================== */

    {
        id: "AF-WOMEN-004",
        name: "Printed Kurta Set",
        brand: "AS FASHIONS",
        category: "women",
        subcategory: "indian-wear",
        type: "Kurta Sets",

        price: 1299,
        mrp: 2999,
        discount: 57,

        rating: 4.7,
        reviews: 812,

        images: [
            "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
        ],

        colors: [
            {
                name: "Pink",
                code: "#ec4899"
            },
            {
                name: "Green",
                code: "#16a34a"
            }
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],

        stock: 29,

        tags: [
            "ethnic",
            "kurta",
            "festive"
        ],

        offers: [
            "Extra ₹200 OFF on ₹1499"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       WOMEN — SAREES
       ===================================================== */

    {
        id: "AF-WOMEN-005",
        name: "Elegant Printed Georgette Saree",
        brand: "AS FASHIONS",
        category: "women",
        subcategory: "sarees",
        type: "Georgette Sarees",

        price: 1499,
        mrp: 3499,
        discount: 57,

        rating: 4.5,
        reviews: 298,

        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
        ],

        colors: [
            {
                name: "Red",
                code: "#dc2626"
            },
            {
                name: "Blue",
                code: "#2563eb"
            },
            {
                name: "Green",
                code: "#15803d"
            }
        ],

        sizes: [
            "Free Size"
        ],

        stock: 21,

        tags: [
            "saree",
            "georgette",
            "festive"
        ],

        offers: [
            "Flat 57% OFF"
        ],

        isNew: true,
        isTrending: false,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       KIDS — BOYS
       ===================================================== */

    {
        id: "AF-KIDS-001",
        name: "Boys Printed Casual T-Shirt",
        brand: "AS FASHIONS KIDS",
        category: "kids",
        subcategory: "boys",
        type: "T-Shirts",

        price: 399,
        mrp: 799,
        discount: 50,

        rating: 4.4,
        reviews: 167,

        images: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
        ],

        colors: [
            {
                name: "Blue",
                code: "#2563eb"
            },
            {
                name: "Black",
                code: "#111111"
            }
        ],

        sizes: [
            "2-3Y",
            "4-5Y",
            "6-7Y",
            "8-9Y",
            "10-11Y",
            "12-13Y"
        ],

        stock: 44,

        tags: [
            "kids",
            "boys",
            "casual"
        ],

        offers: [
            "Buy 2 for ₹699"
        ],

        isNew: true,
        isTrending: false,
        isSale: true,
        isFeatured: false,
        isFlashSale: false
    },


    /* =====================================================
       KIDS — GIRLS
       ===================================================== */

    {
        id: "AF-KIDS-002",
        name: "Girls Floral Party Dress",
        brand: "AS FASHIONS KIDS",
        category: "kids",
        subcategory: "girls",
        type: "Dresses",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.6,
        reviews: 241,

        images: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7"
        ],

        colors: [
            {
                name: "Pink",
                code: "#ec4899"
            },
            {
                name: "Purple",
                code: "#9333ea"
            }
        ],

        sizes: [
            "2-3Y",
            "4-5Y",
            "6-7Y",
            "8-9Y",
            "10-11Y"
        ],

        stock: 19,

        tags: [
            "kids",
            "girls",
            "dress",
            "party"
        ],

        offers: [
            "Flat 53% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       FOOTWEAR — MEN
       ===================================================== */

    {
        id: "AF-FOOT-001",
        name: "Premium Everyday Sneakers",
        brand: "AS FASHIONS",
        category: "footwear",
        subcategory: "mens-footwear",
        type: "Sneakers",

        price: 1299,
        mrp: 2999,
        discount: 57,

        rating: 4.6,
        reviews: 927,

        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ],

        colors: [
            {
                name: "White",
                code: "#ffffff"
            },
            {
                name: "Black",
                code: "#111111"
            }
        ],

        sizes: [
            "UK 6",
            "UK 7",
            "UK 8",
            "UK 9",
            "UK 10",
            "UK 11"
        ],

        stock: 14,

        tags: [
            "sneakers",
            "footwear",
            "trending"
        ],

        offers: [
            "Extra 10% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       FOOTWEAR — WOMEN
       ===================================================== */

    {
        id: "AF-FOOT-002",
        name: "Women's Block Heel Sandals",
        brand: "AS FASHIONS",
        category: "footwear",
        subcategory: "womens-footwear",
        type: "Block Heels",

        price: 899,
        mrp: 1999,
        discount: 55,

        rating: 4.4,
        reviews: 314,

        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Beige",
                code: "#d6c6a5"
            }
        ],

        sizes: [
            "UK 3",
            "UK 4",
            "UK 5",
            "UK 6",
            "UK 7",
            "UK 8"
        ],

        stock: 27,

        tags: [
            "heels",
            "sandals",
            "women"
        ],

        offers: [
            "Flat 55% OFF"
        ],

        isNew: false,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       BAGS
       ===================================================== */

    {
        id: "AF-BAG-001",
        name: "Premium Everyday Tote Bag",
        brand: "AS FASHIONS",
        category: "bags",
        subcategory: "womens-bags",
        type: "Tote Bags",

        price: 799,
        mrp: 1799,
        discount: 56,

        rating: 4.5,
        reviews: 438,

        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Brown",
                code: "#78350f"
            },
            {
                name: "Beige",
                code: "#d6c6a5"
            }
        ],

        sizes: [
            "One Size"
        ],

        stock: 33,

        tags: [
            "tote",
            "bag",
            "everyday"
        ],

        offers: [
            "Flat 56% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       ACCESSORIES — WATCH
       ===================================================== */

    {
        id: "AF-ACC-001",
        name: "Minimal Analog Watch",
        brand: "AS FASHIONS",
        category: "accessories",
        subcategory: "watches",
        type: "Analog Watches",

        price: 999,
        mrp: 2499,
        discount: 60,

        rating: 4.5,
        reviews: 583,

        images: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Silver",
                code: "#c0c0c0"
            }
        ],

        sizes: [
            "One Size"
        ],

        stock: 22,

        tags: [
            "watch",
            "accessory",
            "minimal"
        ],

        offers: [
            "Extra 10% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       SPORTS
       ===================================================== */

    {
        id: "AF-SPORT-001",
        name: "Performance Running T-Shirt",
        brand: "AS FASHIONS ACTIVE",
        category: "sports",
        subcategory: "mens-sportswear",
        type: "Sports T-Shirts",

        price: 599,
        mrp: 1299,
        discount: 54,

        rating: 4.6,
        reviews: 389,

        images: [
            "https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Blue",
                code: "#2563eb"
            },
            {
                name: "Green",
                code: "#16a34a"
            }
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],

        stock: 48,

        tags: [
            "running",
            "sports",
            "gym",
            "activewear"
        ],

        offers: [
            "Buy 2 for ₹999"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       WINTER WEAR
       ===================================================== */

    {
        id: "AF-WINTER-001",
        name: "Premium Puffer Jacket",
        brand: "AS FASHIONS",
        category: "winter-wear",
        subcategory: "men-winter",
        type: "Puffer Jackets",

        price: 1799,
        mrp: 3999,
        discount: 55,

        rating: 4.7,
        reviews: 296,

        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Navy",
                code: "#172554"
            }
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],

        stock: 12,

        tags: [
            "winter",
            "jacket",
            "puffer"
        ],

        offers: [
            "Flat 55% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       TRENDING
       ===================================================== */

    {
        id: "AF-TREND-001",
        name: "Streetwear Co-ord Set",
        brand: "AS FASHIONS",
        category: "trending",
        subcategory: "trending-fashion",
        type: "Co-ord Sets",

        price: 1299,
        mrp: 2799,
        discount: 54,

        rating: 4.8,
        reviews: 731,

        images: [
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Grey",
                code: "#6b7280"
            }
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],

        stock: 9,

        tags: [
            "trending",
            "streetwear",
            "coord-set",
            "viral"
        ],

        offers: [
            "Flash Sale — Limited Stock"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    },


    /* =====================================================
       NEW ARRIVALS
       ===================================================== */

    {
        id: "AF-NEW-001",
        name: "Premium Minimal Hoodie",
        brand: "AS FASHIONS",
        category: "new-arrivals",
        subcategory: "new-men",
        type: "New Hoodies",

        price: 999,
        mrp: 1999,
        discount: 50,

        rating: 4.7,
        reviews: 112,

        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
        ],

        colors: [
            {
                name: "Black",
                code: "#111111"
            },
            {
                name: "Grey",
                code: "#6b7280"
            },
            {
                name: "Cream",
                code: "#f5f5dc"
            }
        ],

        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],

        stock: 38,

        tags: [
            "new",
            "hoodie",
            "minimal",
            "winter"
        ],

        offers: [
            "New Arrival Offer — Extra 10% OFF"
        ],

        isNew: true,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: false
    },


    /* =====================================================
       SALE
       ===================================================== */

    {
        id: "AF-SALE-001",
        name: "Premium Casual Sneakers — Mega Deal",
        brand: "AS FASHIONS",
        category: "sale",
        subcategory: "footwear-sale",
        type: "Sneakers",

        price: 799,
        mrp: 1999,
        discount: 60,

        rating: 4.5,
        reviews: 1042,

        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
        ],

        colors: [
            {
                name: "White",
                code: "#ffffff"
            },
            {
                name: "Black",
                code: "#111111"
            }
        ],

        sizes: [
            "UK 6",
            "UK 7",
            "UK 8",
            "UK 9",
            "UK 10",
            "UK 11"
        ],

        stock: 5,

        tags: [
            "sale",
            "mega-deal",
            "flash-sale",
            "limited-stock"
        ],

        offers: [
            "FLAT 60% OFF",
            "Only 5 left at this price!"
        ],

        isNew: false,
        isTrending: true,
        isSale: true,
        isFeatured: true,
        isFlashSale: true
    }

];


/* =========================================================
   PRODUCT HELPERS
   ========================================================= */


/**
 * Get product using ID.
 */
function getProductById(productId) {

    return PRODUCTS.find(
        product => product.id === productId
    ) || null;

}


/**
 * Get products by category.
 */
function getProductsByCategory(categoryId) {

    return PRODUCTS.filter(
        product => product.category === categoryId
    );

}


/**
 * Get products by subcategory.
 */
function getProductsBySubcategory(subcategoryId) {

    return PRODUCTS.filter(
        product => product.subcategory === subcategoryId
    );

}


/**
 * Get products by product type.
 */
function getProductsByType(type) {

    return PRODUCTS.filter(
        product =>
            product.type &&
            product.type.toLowerCase() ===
            type.toLowerCase()
    );

}


/**
 * Get products by brand.
 */
function getProductsByBrand(brand) {

    return PRODUCTS.filter(
        product =>
            product.brand.toLowerCase() ===
            brand.toLowerCase()
    );

}


/**
 * Get new arrivals.
 */
function getNewArrivals() {

    return PRODUCTS.filter(
        product => product.isNew === true
    );

}


/**
 * Get trending products.
 */
function getTrendingProducts() {

    return PRODUCTS.filter(
        product => product.isTrending === true
    );

}


/**
 * Get sale products.
 */
function getSaleProducts() {

    return PRODUCTS.filter(
        product => product.isSale === true
    );

}


/**
 * Get featured products.
 */
function getFeaturedProducts() {

    return PRODUCTS.filter(
        product => product.isFeatured === true
    );

}


/**
 * Get flash sale products.
 */
function getFlashSaleProducts() {

    return PRODUCTS.filter(
        product => product.isFlashSale === true
    );

}


/**
 * Search products.
 */
function searchProducts(query) {

    const searchTerm = String(query || "")
        .trim()
        .toLowerCase();

    if (!searchTerm) {
        return [];
    }

    return PRODUCTS.filter(product => {

        const searchableText = [

            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.type,

            ...(product.tags || []),

            ...(product.colors || [])
                .map(color => color.name)

        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm);

    });

}


/**
 * Get products within price range.
 */
function getProductsByPrice(minPrice, maxPrice) {

    return PRODUCTS.filter(product => {

        return (
            product.price >= minPrice &&
            product.price <= maxPrice
        );

    });

}


/**
 * Get products by minimum rating.
 */
function getProductsByRating(minRating) {

    return PRODUCTS.filter(
        product => product.rating >= minRating
    );

}


/**
 * Get products by color.
 */
function getProductsByColor(colorName) {

    const searchColor =
        String(colorName || "").toLowerCase();

    return PRODUCTS.filter(product => {

        return (product.colors || []).some(
            color =>
                color.name.toLowerCase() ===
                searchColor
        );

    });

}


/**
 * Get products by size.
 */
function getProductsBySize(size) {

    return PRODUCTS.filter(product => {

        return (product.sizes || []).includes(size);

    });

}


/**
 * Sort products.
 */
function sortProducts(products, sortBy) {

    const result = [...products];

    switch (sortBy) {

        case "price-low":
            return result.sort(
                (a, b) => a.price - b.price
            );

        case "price-high":
            return result.sort(
                (a, b) => b.price - a.price
            );

        case "rating":
            return result.sort(
                (a, b) => b.rating - a.rating
            );

        case "discount":
            return result.sort(
                (a, b) => b.discount - a.discount
            );

        case "newest":
            return result.sort(
                (a, b) =>
                    Number(b.isNew) -
                    Number(a.isNew)
            );

        case "popular":
            return result.sort(
                (a, b) => b.reviews - a.reviews
            );

        default:
            return result;

    }

}


/**
 * Calculate discount percentage.
 */
function calculateDiscount(price, mrp) {

    if (!mrp || mrp <= 0) {
        return 0;
    }

    return Math.round(
        ((mrp - price) / mrp) * 100
    );

}


/**
 * Check product stock.
 */
function isProductInStock(productId) {

    const product = getProductById(productId);

    return Boolean(
        product &&
        product.stock > 0
    );

}


/**
 * Get low-stock products.
 */
function getLowStockProducts(limit = 10) {

    return PRODUCTS
        .filter(product => product.stock > 0)
        .filter(product => product.stock <= limit)
        .sort(
            (a, b) => a.stock - b.stock
        );

}


/* =========================================================
   PRODUCT DATABASE CONFIG
   ========================================================= */

const PRODUCT_CONFIG = {

    currency: "₹",

    currencyCode: "INR",

    defaultSort: "popular",

    productsPerPage: 24,

    enableRatings: true,

    enableReviews: true,

    enableWishlist: true,

    enableQuickView: true,

    enableSizeSelection: true,

    enableColorSelection: true,

    enableStockTracking: true,

    enableOffers: true,

    enableFlashSale: true,

    lowStockThreshold: 5

};
