/* =========================================================
   AS FASHIONS
   PRODUCT DATABASE
========================================================= */

const products = [

    /* =====================================================
       MEN — TOPWEAR
    ===================================================== */

    {
        id: "MEN001",
        name: "Premium Cotton Oversized T-Shirt",
        brand: "AS Originals",
        category: "men",
        subcategory: "men-topwear",
        type: "T-Shirts",
        gender: "Men",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.5,
        reviews: 1842,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White", "Grey"],

        color: "Black",

        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=85",

        tags: ["Oversized", "Bestseller", "Cotton"],
        badge: "BESTSELLER",

        stock: 18,
        available: true
    },

    {
        id: "MEN002",
        name: "Slim Fit Casual Shirt",
        brand: "Roadster",
        category: "men",
        subcategory: "men-topwear",
        type: "Casual Shirts",
        gender: "Men",

        price: 899,
        mrp: 1999,
        discount: 55,

        rating: 4.3,
        reviews: 923,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "White"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=85",

        tags: ["Casual", "Slim Fit"],
        badge: "55% OFF",

        stock: 12,
        available: true
    },

    {
        id: "MEN003",
        name: "Classic Polo T-Shirt",
        brand: "HIGHLANDER",
        category: "men",
        subcategory: "men-topwear",
        type: "Polo T-Shirts",
        gender: "Men",

        price: 599,
        mrp: 1299,
        discount: 54,

        rating: 4.4,
        reviews: 1260,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Navy", "Black", "Green"],

        color: "Navy",

        image: "https://images.unsplash.com/photo-1625910513413-5fc45d5c8a9a?w=700&q=85",

        tags: ["Polo", "Bestseller"],
        badge: "TRENDING",

        stock: 25,
        available: true
    },

    {
        id: "MEN004",
        name: "Premium Printed Graphic T-Shirt",
        brand: "HRX",
        category: "men",
        subcategory: "men-topwear",
        type: "Graphic T-Shirts",
        gender: "Men",

        price: 749,
        mrp: 1599,
        discount: 53,

        rating: 4.2,
        reviews: 764,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White"],

        color: "Black",

        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=85",

        tags: ["Graphic", "Streetwear"],
        badge: "53% OFF",

        stock: 9,
        available: true
    },

    {
        id: "MEN005",
        name: "Classic Full Sleeve Sweatshirt",
        brand: "Campus Sutra",
        category: "men",
        subcategory: "men-topwear",
        type: "Sweatshirts",
        gender: "Men",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.5,
        reviews: 532,

        sizes: ["M", "L", "XL", "XXL"],
        colors: ["Grey", "Black"],

        color: "Grey",

        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=700&q=85",

        tags: ["Winter", "Casual"],
        badge: "55% OFF",

        stock: 14,
        available: true
    },


    /* =====================================================
       MEN — BOTTOMWEAR
    ===================================================== */

    {
        id: "MEN006",
        name: "Men Slim Fit Stretch Jeans",
        brand: "Roadster",
        category: "men",
        subcategory: "men-bottomwear",
        type: "Jeans",
        gender: "Men",

        price: 1199,
        mrp: 2499,
        discount: 52,

        rating: 4.4,
        reviews: 2198,

        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Blue", "Black"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=85",

        tags: ["Jeans", "Bestseller"],
        badge: "BESTSELLER",

        stock: 22,
        available: true
    },

    {
        id: "MEN007",
        name: "Relaxed Fit Cargo Pants",
        brand: "Dennis Lingo",
        category: "men",
        subcategory: "men-bottomwear",
        type: "Cargo Pants",
        gender: "Men",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.3,
        reviews: 815,

        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Black", "Olive", "Beige"],

        color: "Olive",

        image: "https://images.unsplash.com/photo-1517445312882-9d0a7f0c1b4f?w=700&q=85",

        tags: ["Cargo", "Trending"],
        badge: "TRENDING",

        stock: 16,
        available: true
    },

    {
        id: "MEN008",
        name: "Comfort Jogger Pants",
        brand: "HRX",
        category: "men",
        subcategory: "men-bottomwear",
        type: "Joggers",
        gender: "Men",

        price: 799,
        mrp: 1699,
        discount: 53,

        rating: 4.5,
        reviews: 1410,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Grey"],

        color: "Black",

        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&q=85",

        tags: ["Activewear", "Comfort"],
        badge: "53% OFF",

        stock: 30,
        available: true
    },


    /* =====================================================
       MEN — INDIAN WEAR
    ===================================================== */

    {
        id: "MEN009",
        name: "Embroidered Festive Kurta",
        brand: "Manyavar",
        category: "men",
        subcategory: "men-indianwear",
        type: "Kurtas",
        gender: "Men",

        price: 1499,
        mrp: 2999,
        discount: 50,

        rating: 4.6,
        reviews: 632,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["White", "Beige"],

        color: "White",

        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=85",

        tags: ["Festive", "Ethnic"],
        badge: "50% OFF",

        stock: 8,
        available: true
    },

    {
        id: "MEN010",
        name: "Classic Nehru Jacket Set",
        brand: "Manyavar",
        category: "men",
        subcategory: "men-indianwear",
        type: "Nehru Jackets",
        gender: "Men",

        price: 1999,
        mrp: 3999,
        discount: 50,

        rating: 4.5,
        reviews: 284,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy"],

        color: "Navy",

        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=85",

        tags: ["Wedding", "Festive"],
        badge: "50% OFF",

        stock: 6,
        available: true
    },


    /* =====================================================
       WOMEN — WESTERN WEAR
    ===================================================== */

    {
        id: "WOM001",
        name: "Floral Printed Midi Dress",
        brand: "SASSAFRAS",
        category: "women",
        subcategory: "women-western",
        type: "Dresses",
        gender: "Women",

        price: 899,
        mrp: 1999,
        discount: 55,

        rating: 4.5,
        reviews: 1840,

        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Pink", "White", "Blue"],

        color: "Pink",

        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85",

        tags: ["Floral", "Summer", "Bestseller"],
        badge: "BESTSELLER",

        stock: 13,
        available: true
    },

    {
        id: "WOM002",
        name: "Relaxed Fit Ribbed Top",
        brand: "Tokyo Talkies",
        category: "women",
        subcategory: "women-western",
        type: "Tops",
        gender: "Women",

        price: 499,
        mrp: 999,
        discount: 50,

        rating: 4.2,
        reviews: 724,

        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "White", "Pink"],

        color: "Black",

        image: "https://images.unsplash.com/photo-1564257577054-2e3b9e1c5f6d?w=700&q=85",

        tags: ["Casual", "Trending"],
        badge: "50% OFF",

        stock: 27,
        available: true
    },

    {
        id: "WOM003",
        name: "Oversized Graphic T-Shirt",
        brand: "H&M",
        category: "women",
        subcategory: "women-western",
        type: "T-Shirts",
        gender: "Women",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.4,
        reviews: 1142,

        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black", "Grey", "White"],

        color: "Grey",

        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=85",

        tags: ["Oversized", "Streetwear"],
        badge: "TRENDING",

        stock: 19,
        available: true
    },

    {
        id: "WOM004",
        name: "Elegant Satin Co-ord Set",
        brand: "FREAKINS",
        category: "women",
        subcategory: "women-western",
        type: "Co-ord Sets",
        gender: "Women",

        price: 1299,
        mrp: 2799,
        discount: 54,

        rating: 4.3,
        reviews: 426,

        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Beige"],

        color: "Beige",

        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&q=85",

        tags: ["Co-ord", "Premium"],
        badge: "54% OFF",

        stock: 7,
        available: true
    },


    /* =====================================================
       WOMEN — INDIAN WEAR
    ===================================================== */

    {
        id: "WOM005",
        name: "Printed Straight Kurta",
        brand: "Libas",
        category: "women",
        subcategory: "women-indianwear",
        type: "Kurtas",
        gender: "Women",

        price: 799,
        mrp: 1799,
        discount: 56,

        rating: 4.6,
        reviews: 2670,

        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Blue", "Pink", "Green"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=85",

        tags: ["Ethnic", "Bestseller"],
        badge: "BESTSELLER",

        stock: 32,
        available: true
    },

    {
        id: "WOM006",
        name: "Embroidered Anarkali Kurta",
        brand: "Biba",
        category: "women",
        subcategory: "women-indianwear",
        type: "Anarkali",
        gender: "Women",

        price: 1399,
        mrp: 2999,
        discount: 53,

        rating: 4.5,
        reviews: 936,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red", "Blue", "Green"],

        color: "Red",

        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85",

        tags: ["Festive", "Wedding"],
        badge: "53% OFF",

        stock: 11,
        available: true
    },


    /* =====================================================
       WOMEN — SAREES
    ===================================================== */

    {
        id: "WOM007",
        name: "Elegant Printed Georgette Saree",
        brand: "Sangria",
        category: "women",
        subcategory: "women-sarees",
        type: "Georgette Sarees",
        gender: "Women",

        price: 1099,
        mrp: 2499,
        discount: 56,

        rating: 4.4,
        reviews: 1180,

        sizes: ["Free Size"],
        colors: ["Pink", "Blue", "Green"],

        color: "Pink",

        image: "https://images.unsplash.com/photo-1610030469668-8f8f7a7d0d5a?w=700&q=85",

        tags: ["Saree", "Party Wear"],
        badge: "56% OFF",

        stock: 14,
        available: true
    },

    {
        id: "WOM008",
        name: "Premium Silk Festive Saree",
        brand: "Suta",
        category: "women",
        subcategory: "women-sarees",
        type: "Silk Sarees",
        gender: "Women",

        price: 2499,
        mrp: 4999,
        discount: 50,

        rating: 4.7,
        reviews: 342,

        sizes: ["Free Size"],
        colors: ["Red", "Green", "Gold"],

        color: "Green",

        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=700&q=85",

        tags: ["Silk", "Festive", "Premium"],
        badge: "PREMIUM",

        stock: 5,
        available: true
    },


    /* =====================================================
       WOMEN — BOTTOMWEAR
    ===================================================== */

    {
        id: "WOM009",
        name: "High Rise Wide Leg Jeans",
        brand: "FREAKINS",
        category: "women",
        subcategory: "women-bottomwear",
        type: "Wide Leg Pants",
        gender: "Women",

        price: 1199,
        mrp: 2499,
        discount: 52,

        rating: 4.5,
        reviews: 1652,

        sizes: ["26", "28", "30", "32", "34"],
        colors: ["Blue", "Black"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&q=85",

        tags: ["Wide Leg", "Trending"],
        badge: "TRENDING",

        stock: 17,
        available: true
    },

    {
        id: "WOM010",
        name: "Relaxed Fit Cargo Trousers",
        brand: "Mast & Harbour",
        category: "women",
        subcategory: "women-bottomwear",
        type: "Cargo Pants",
        gender: "Women",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.3,
        reviews: 618,

        sizes: ["26", "28", "30", "32", "34"],
        colors: ["Black", "Olive", "Beige"],

        color: "Black",

        image: "https://images.unsplash.com/photo-1506629905607-d9e9e5c6f7b3?w=700&q=85",

        tags: ["Cargo", "Streetwear"],
        badge: "55% OFF",

        stock: 12,
        available: true
    },


    /* =====================================================
       KIDS — BOYS
    ===================================================== */

    {
        id: "KID001",
        name: "Boys Printed Cotton T-Shirt",
        brand: "H&M Kids",
        category: "kids",
        subcategory: "kids-boys",
        type: "T-Shirts",
        gender: "Kids",

        price: 449,
        mrp: 899,
        discount: 50,

        rating: 4.5,
        reviews: 712,

        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        colors: ["Blue", "Black", "Green"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=85",

        tags: ["Kids", "Cotton"],
        badge: "50% OFF",

        stock: 20,
        available: true
    },

    {
        id: "KID002",
        name: "Boys Casual Denim Jeans",
        brand: "U.S. Polo Assn.",
        category: "kids",
        subcategory: "kids-boys",
        type: "Jeans",
        gender: "Kids",

        price: 799,
        mrp: 1699,
        discount: 53,

        rating: 4.4,
        reviews: 418,

        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
        colors: ["Blue"],

        color: "Blue",

        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=85",

        tags: ["Denim", "Casual"],
        badge: "53% OFF",

        stock: 11,
        available: true
    },


    /* =====================================================
       KIDS — GIRLS
    ===================================================== */

    {
        id: "KID003",
        name: "Girls Floral Party Dress",
        brand: "Aarika",
        category: "kids",
        subcategory: "kids-girls",
        type: "Dresses",
        gender: "Kids",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.6,
        reviews: 842,

        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        colors: ["Pink", "White"],

        color: "Pink",

        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=700&q=85",

        tags: ["Party Wear", "Girls"],
        badge: "BESTSELLER",

        stock: 9,
        available: true
    },

    {
        id: "KID004",
        name: "Girls Printed Co-ord Set",
        brand: "Pantaloons Junior",
        category: "kids",
        subcategory: "kids-girls",
        type: "Co-ord Sets",
        gender: "Kids",

        price: 799,
        mrp: 1599,
        discount: 50,

        rating: 4.3,
        reviews: 296,

        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        colors: ["Pink", "Yellow"],

        color: "Yellow",

        image: "https://images.unsplash.com/photo-1604917019117-3f4f4c2a5c3b?w=700&q=85",

        tags: ["Co-ord", "Summer"],
        badge: "50% OFF",

        stock: 15,
        available: true
    },


    /* =====================================================
       KIDS — BABY
    ===================================================== */

    {
        id: "KID005",
        name: "Baby Cotton Romper Set",
        brand: "Mothercare",
        category: "kids",
        subcategory: "kids-baby",
        type: "Romper Sets",
        gender: "Kids",

        price: 599,
        mrp: 1199,
        discount: 50,

        rating: 4.7,
        reviews: 536,

        sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
        colors: ["White", "Blue", "Pink"],

        color: "White",

        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700&q=85",

        tags: ["Baby", "Cotton"],
        badge: "50% OFF",

        stock: 21,
        available: true
    },


    /* =====================================================
       FOOTWEAR — MEN
    ===================================================== */

    {
        id: "FTW001",
        name: "Premium Casual Sneakers",
        brand: "Puma",
        category: "footwear",
        subcategory: "footwear-men",
        type: "Sneakers",
        gender: "Men",

        price: 1799,
        mrp: 3999,
        discount: 55,

        rating: 4.5,
        reviews: 3214,

        sizes: ["6", "7", "8", "9", "10", "11"],
        footwearSizes: ["6", "7", "8", "9", "10", "11"],

        colors: ["White", "Black"],
        color: "White",

        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85",

        tags: ["Sneakers", "Bestseller"],
        badge: "BESTSELLER",

        stock: 7,
        available: true
    },

    {
        id: "FTW002",
        name: "Men Running Performance Shoes",
        brand: "Nike",
        category: "footwear",
        subcategory: "footwear-men",
        type: "Running Shoes",
        gender: "Men",

        price: 2499,
        mrp: 5499,
        discount: 55,

        rating: 4.6,
        reviews: 1850,

        sizes: ["7", "8", "9", "10", "11"],
        footwearSizes: ["7", "8", "9", "10", "11"],

        colors: ["Black", "Blue"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85",

        tags: ["Running", "Sports"],
        badge: "55% OFF",

        stock: 11,
        available: true
    },


    /* =====================================================
       FOOTWEAR — WOMEN
    ===================================================== */

    {
        id: "FTW003",
        name: "Elegant Block Heel Sandals",
        brand: "Lavie",
        category: "footwear",
        subcategory: "footwear-women",
        type: "Heels",
        gender: "Women",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.4,
        reviews: 1136,

        sizes: ["4", "5", "6", "7", "8"],
        footwearSizes: ["4", "5", "6", "7", "8"],

        colors: ["Black", "Beige"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=85",

        tags: ["Heels", "Party"],
        badge: "55% OFF",

        stock: 13,
        available: true
    },

    {
        id: "FTW004",
        name: "Women's Everyday White Sneakers",
        brand: "Skechers",
        category: "footwear",
        subcategory: "footwear-women",
        type: "Sneakers",
        gender: "Women",

        price: 1999,
        mrp: 3999,
        discount: 50,

        rating: 4.6,
        reviews: 2041,

        sizes: ["4", "5", "6", "7", "8"],
        footwearSizes: ["4", "5", "6", "7", "8"],

        colors: ["White"],
        color: "White",

        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&q=85",

        tags: ["Sneakers", "Casual"],
        badge: "BESTSELLER",

        stock: 6,
        available: true
    },


    /* =====================================================
       FOOTWEAR — KIDS
    ===================================================== */

    {
        id: "FTW005",
        name: "Kids Lightweight Sports Shoes",
        brand: "Puma Kids",
        category: "footwear",
        subcategory: "footwear-kids",
        type: "Sports Shoes",
        gender: "Kids",

        price: 899,
        mrp: 1899,
        discount: 53,

        rating: 4.4,
        reviews: 462,

        sizes: ["10C", "11C", "12C", "13C", "1", "2", "3"],
        footwearSizes: ["10C", "11C", "12C", "13C", "1", "2", "3"],

        colors: ["Blue", "Black"],
        color: "Blue",

        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=700&q=85",

        tags: ["Kids", "Sports"],
        badge: "53% OFF",

        stock: 10,
        available: true
    },


    /* =====================================================
       BAGS
    ===================================================== */

    {
        id: "BAG001",
        name: "Structured Everyday Handbag",
        brand: "Lavie",
        category: "bags",
        subcategory: "bags-women",
        type: "Handbags",
        gender: "Women",

        price: 1199,
        mrp: 2499,
        discount: 52,

        rating: 4.5,
        reviews: 1684,

        sizes: ["Free Size"],
        colors: ["Black", "Brown", "Beige"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85",

        tags: ["Handbag", "Bestseller"],
        badge: "BESTSELLER",

        stock: 15,
        available: true
    },

    {
        id: "BAG002",
        name: "Premium Women's Sling Bag",
        brand: "Caprese",
        category: "bags",
        subcategory: "bags-women",
        type: "Sling Bags",
        gender: "Women",

        price: 799,
        mrp: 1699,
        discount: 53,

        rating: 4.4,
        reviews: 936,

        sizes: ["Free Size"],
        colors: ["Black", "Pink", "Beige"],
        color: "Pink",

        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=85",

        tags: ["Sling", "Casual"],
        badge: "53% OFF",

        stock: 18,
        available: true
    },

    {
        id: "BAG003",
        name: "Water Resistant Laptop Backpack",
        brand: "American Tourister",
        category: "bags",
        subcategory: "bags-men",
        type: "Laptop Bags",
        gender: "Men",

        price: 1299,
        mrp: 2799,
        discount: 54,

        rating: 4.6,
        reviews: 2842,

        sizes: ["Free Size"],
        colors: ["Black", "Navy"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=85",

        tags: ["Laptop", "Travel", "Bestseller"],
        badge: "BESTSELLER",

        stock: 20,
        available: true
    },

    {
        id: "BAG004",
        name: "Large Travel Duffle Bag",
        brand: "Wildcraft",
        category: "bags",
        subcategory: "bags-travel",
        type: "Duffle Bags",
        gender: "Unisex",

        price: 1099,
        mrp: 2299,
        discount: 52,

        rating: 4.5,
        reviews: 1142,

        sizes: ["Free Size"],
        colors: ["Black", "Grey"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=700&q=85",

        tags: ["Travel", "Duffle"],
        badge: "52% OFF",

        stock: 14,
        available: true
    },


    /* =====================================================
       ACCESSORIES
    ===================================================== */

    {
        id: "ACC001",
        name: "Minimal Analog Watch",
        brand: "Fossil",
        category: "accessories",
        subcategory: "accessories-watches",
        type: "Analog Watches",
        gender: "Unisex",

        price: 2499,
        mrp: 5999,
        discount: 58,

        rating: 4.6,
        reviews: 2184,

        sizes: ["Free Size"],
        colors: ["Black", "Brown"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85",

        tags: ["Watch", "Premium"],
        badge: "58% OFF",

        stock: 8,
        available: true
    },

    {
        id: "ACC002",
        name: "Classic Polarized Sunglasses",
        brand: "Ray-Ban",
        category: "accessories",
        subcategory: "accessories-sunglasses",
        type: "Polarized Sunglasses",
        gender: "Unisex",

        price: 2999,
        mrp: 6999,
        discount: 57,

        rating: 4.7,
        reviews: 742,

        sizes: ["Free Size"],
        colors: ["Black", "Brown"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=85",

        tags: ["Sunglasses", "Premium"],
        badge: "PREMIUM",

        stock: 5,
        available: true
    },

    {
        id: "ACC003",
        name: "Premium Leather Wallet",
        brand: "Tommy Hilfiger",
        category: "accessories",
        subcategory: "accessories-wallets",
        type: "Bi-Fold Wallets",
        gender: "Men",

        price: 999,
        mrp: 1999,
        discount: 50,

        rating: 4.5,
        reviews: 1526,

        sizes: ["Free Size"],
        colors: ["Black", "Brown"],
        color: "Brown",

        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&q=85",

        tags: ["Wallet", "Leather"],
        badge: "50% OFF",

        stock: 17,
        available: true
    },

    {
        id: "ACC004",
        name: "Classic Adjustable Baseball Cap",
        brand: "Puma",
        category: "accessories",
        subcategory: "accessories-caps",
        type: "Baseball Caps",
        gender: "Unisex",

        price: 499,
        mrp: 999,
        discount: 50,

        rating: 4.3,
        reviews: 534,

        sizes: ["Free Size"],
        colors: ["Black", "White", "Navy"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&q=85",

        tags: ["Cap", "Casual"],
        badge: "50% OFF",

        stock: 23,
        available: true
    },


    /* =====================================================
       SPORTS
    ===================================================== */

    {
        id: "SPT001",
        name: "Performance Dry-Fit Training T-Shirt",
        brand: "HRX",
        category: "sports",
        subcategory: "sports-men",
        type: "Sports T-Shirts",
        gender: "Men",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.5,
        reviews: 1892,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Blue", "Grey"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=85",

        tags: ["Gym", "Training", "Dry-Fit"],
        badge: "BESTSELLER",

        stock: 24,
        available: true
    },

    {
        id: "SPT002",
        name: "Women's High Support Sports Bra",
        brand: "HRX",
        category: "sports",
        subcategory: "sports-women",
        type: "Sports Bras",
        gender: "Women",

        price: 799,
        mrp: 1699,
        discount: 53,

        rating: 4.4,
        reviews: 842,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Pink", "Blue"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=85",

        tags: ["Training", "Gym"],
        badge: "53% OFF",

        stock: 12,
        available: true
    },

    {
        id: "SPT003",
        name: "Lightweight Running Shoes",
        brand: "Adidas",
        category: "sports",
        subcategory: "sports-running",
        type: "Running Shoes",
        gender: "Unisex",

        price: 2299,
        mrp: 4999,
        discount: 54,

        rating: 4.6,
        reviews: 2631,

        sizes: ["6", "7", "8", "9", "10", "11"],
        footwearSizes: ["6", "7", "8", "9", "10", "11"],

        colors: ["Black", "White"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85",

        tags: ["Running", "Sports", "Bestseller"],
        badge: "BESTSELLER",

        stock: 9,
        available: true
    },


    /* =====================================================
       WINTER WEAR
    ===================================================== */

    {
        id: "WIN001",
        name: "Classic Men's Puffer Jacket",
        brand: "Roadster",
        category: "winter",
        subcategory: "winter-men",
        type: "Puffer Jackets",
        gender: "Men",

        price: 1799,
        mrp: 3999,
        discount: 55,

        rating: 4.5,
        reviews: 924,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=85",

        tags: ["Winter", "Puffer"],
        badge: "55% OFF",

        stock: 13,
        available: true
    },

    {
        id: "WIN002",
        name: "Women's Soft Knit Sweater",
        brand: "Mast & Harbour",
        category: "winter",
        subcategory: "winter-women",
        type: "Sweaters",
        gender: "Women",

        price: 899,
        mrp: 1999,
        discount: 55,

        rating: 4.4,
        reviews: 736,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "Pink", "Grey"],
        color: "Beige",

        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85",

        tags: ["Winter", "Knit"],
        badge: "55% OFF",

        stock: 16,
        available: true
    },

    {
        id: "WIN003",
        name: "Kids Hooded Winter Sweatshirt",
        brand: "H&M Kids",
        category: "winter",
        subcategory: "winter-kids",
        type: "Hoodies",
        gender: "Kids",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.5,
        reviews: 382,

        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        colors: ["Grey", "Black", "Blue"],
        color: "Grey",

        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=700&q=85",

        tags: ["Kids", "Winter"],
        badge: "53% OFF",

        stock: 10,
        available: true
    },


    /* =====================================================
       INNERWEAR & LOUNGE
    ===================================================== */

    {
        id: "INW001",
        name: "Men Premium Cotton Boxer Pack",
        brand: "Jockey",
        category: "innerwear",
        subcategory: "innerwear-men",
        type: "Boxers",
        gender: "Men",

        price: 699,
        mrp: 999,
        discount: 30,

        rating: 4.6,
        reviews: 3218,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Blue", "Grey"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=700&q=85",

        tags: ["Cotton", "Pack"],
        badge: "30% OFF",

        stock: 35,
        available: true
    },

    {
        id: "INW002",
        name: "Women's Comfort Everyday Bra",
        brand: "Enamor",
        category: "innerwear",
        subcategory: "innerwear-women",
        type: "Bras",
        gender: "Women",

        price: 799,
        mrp: 1199,
        discount: 33,

        rating: 4.5,
        reviews: 2416,

        sizes: ["32B", "34B", "36B", "38B"],
        colors: ["Black", "Beige", "Pink"],
        color: "Beige",

        image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=700&q=85",

        tags: ["Comfort", "Everyday"],
        badge: "33% OFF",

        stock: 18,
        available: true
    },


    /* =====================================================
       NEW ARRIVALS
    ===================================================== */

    {
        id: "NEW001",
        name: "New Season Minimal Oversized Tee",
        brand: "AS Originals",
        category: "new-arrivals",
        subcategory: "new-men",
        type: "New T-Shirts",
        gender: "Men",

        price: 799,
        mrp: 1599,
        discount: 50,

        rating: 4.7,
        reviews: 128,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "White"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=85",

        tags: ["New", "Oversized"],
        badge: "NEW",

        stock: 20,
        available: true
    },

    {
        id: "NEW002",
        name: "New Season Women's Summer Dress",
        brand: "SASSAFRAS",
        category: "new-arrivals",
        subcategory: "new-women",
        type: "New Dresses",
        gender: "Women",

        price: 999,
        mrp: 2199,
        discount: 55,

        rating: 4.6,
        reviews: 96,

        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Pink", "White", "Blue"],
        color: "Pink",

        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85",

        tags: ["New", "Summer"],
        badge: "NEW",

        stock: 15,
        available: true
    },


    /* =====================================================
       TRENDING
    ===================================================== */

    {
        id: "TRD001",
        name: "Streetwear Oversized Cargo Tee",
        brand: "AS Originals",
        category: "trending",
        subcategory: "trend-fashion",
        type: "Oversized",
        gender: "Unisex",

        price: 699,
        mrp: 1499,
        discount: 53,

        rating: 4.6,
        reviews: 1742,

        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Grey", "White"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=85",

        tags: ["Trending", "Streetwear", "Oversized"],
        badge: "TRENDING",

        stock: 21,
        available: true
    },

    {
        id: "TRD002",
        name: "Premium Old Money Polo",
        brand: "HIGHLANDER",
        category: "trending",
        subcategory: "trend-fashion",
        type: "Minimal Fashion",
        gender: "Men",

        price: 899,
        mrp: 1799,
        discount: 50,

        rating: 4.5,
        reviews: 643,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "Navy", "White"],
        color: "Beige",

        image: "https://images.unsplash.com/photo-1625910513413-5fc45d5c8a9a?w=700&q=85",

        tags: ["Old Money", "Trending"],
        badge: "TRENDING",

        stock: 11,
        available: true
    },


    /* =====================================================
       SALE
    ===================================================== */

    {
        id: "SALE001",
        name: "Super Saver Casual T-Shirt",
        brand: "Roadster",
        category: "sale",
        subcategory: "sale-men",
        type: "T-Shirts",
        gender: "Men",

        price: 399,
        mrp: 999,
        discount: 60,

        rating: 4.3,
        reviews: 2310,

        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Blue"],
        color: "Black",

        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=85",

        tags: ["Sale", "Under 499"],
        badge: "60% OFF",

        stock: 28,
        available: true
    },

    {
        id: "SALE002",
        name: "Women's Fashion Top Deal",
        brand: "Tokyo Talkies",
        category: "sale",
        subcategory: "sale-women",
        type: "Tops",
        gender: "Women",

        price: 349,
        mrp: 899,
        discount: 61,

        rating: 4.2,
        reviews: 932,

        sizes: ["XS", "S", "M", "L"],
        colors: ["Pink", "Black", "White"],
        color: "Pink",

        image: "https://images.unsplash.com/photo-1564257577054-2e3b9e1c5f6d?w=700&q=85",

        tags: ["Sale", "Under 499"],
        badge: "61% OFF",

        stock: 17,
        available: true
    },

    {
        id: "SALE003",
        name: "Premium Sneakers Mega Deal",
        brand: "Puma",
        category: "sale",
        subcategory: "sale-footwear",
        type: "Sneakers",
        gender: "Unisex",

        price: 1299,
        mrp: 2999,
        discount: 57,

        rating: 4.5,
        reviews: 1568,

        sizes: ["6", "7", "8", "9", "10", "11"],
        footwearSizes: ["6", "7", "8", "9", "10", "11"],

        colors: ["White", "Black"],
        color: "White",

        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85",

        tags: ["Sale", "Sneakers"],
        badge: "57% OFF",

        stock: 4,
        available: true
    }

];


/* =========================================================
   PRODUCT DATABASE HELPERS
========================================================= */

function getProduct(productId) {
    return products.find(product => product.id === productId) || null;
}


function getProductsByCategory(categoryId) {
    return products.filter(
        product => product.category === categoryId
    );
}


function getProductsBySubcategory(subcategoryId) {
    return products.filter(
        product => product.subcategory === subcategoryId
    );
}


function getProductsByGender(gender) {
    return products.filter(
        product =>
            product.gender.toLowerCase() === gender.toLowerCase()
    );
}


function getProductsByType(type) {
    return products.filter(
        product =>
            product.type.toLowerCase() === type.toLowerCase()
    );
}


function getBestsellers() {
    return products.filter(
        product =>
            product.tags &&
            product.tags.some(
                tag => tag.toLowerCase() === "bestseller"
            )
    );
}


function getTrendingProducts() {
    return products.filter(
        product =>
            product.tags &&
            product.tags.some(
                tag => tag.toLowerCase() === "trending"
            )
    );
}


function getNewArrivals() {
    return products.filter(
        product => product.category === "new-arrivals"
    );
}


function getSaleProducts() {
    return products.filter(
        product =>
            product.discount >= 50 ||
            product.category === "sale"
    );
}


function getProductsUnderPrice(maxPrice) {
    return products.filter(
        product => product.price <= maxPrice
    );
}


function getProductsByPrice(minPrice, maxPrice) {
    return products.filter(
        product =>
            product.price >= minPrice &&
            product.price <= maxPrice
    );
}


function getProductsByDiscount(minDiscount) {
    return products.filter(
        product => product.discount >= minDiscount
    );
}


function getProductsByRating(minRating) {
    return products.filter(
        product => product.rating >= minRating
    );
}


function getProductsByColor(color) {
    return products.filter(
        product =>
            product.colors &&
            product.colors.some(
                item =>
                    item.toLowerCase() === color.toLowerCase()
            )
    );
}


function getProductsBySize(size) {
    return products.filter(
        product =>
            product.sizes &&
            product.sizes.includes(size)
    );
}


function getFootwearProducts() {
    return products.filter(
        product =>
            product.category === "footwear" ||
            product.footwearSizes
    );
}


function getProductsByFootwearSize(size) {
    return products.filter(
        product =>
            product.footwearSizes &&
            product.footwearSizes.includes(size)
    );
}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts(query) {

    const search = query
        .toLowerCase()
        .trim();

    if (!search) {
        return [];
    }

    return products.filter(product => {

        const searchableText = [

            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.type,
            product.gender,
            product.color,

            ...(product.tags || []),
            ...(product.colors || [])

        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(search);
    });
}


/* =========================================================
   SORT PRODUCTS
========================================================= */

function sortProducts(productList, sortBy) {

    const result = [...productList];

    switch (sortBy) {

        case "price-low":
            return result.sort(
                (a, b) => a.price - b.price
            );

        case "price-high":
            return result.sort(
                (a, b) => b.price - a.price
            );

        case "discount":
            return result.sort(
                (a, b) => b.discount - a.discount
            );

        case "rating":
            return result.sort(
                (a, b) => b.rating - a.rating
            );

        case "popular":
            return result.sort(
                (a, b) => b.reviews - a.reviews
            );

        case "newest":
            return result.filter(
                product =>
                    product.category === "new-arrivals"
            );

        case "recommended":
        default:

            return result.sort((a, b) => {

                const scoreA =
                    (a.rating * 10) +
                    Math.min(a.reviews / 100, 20) +
                    (a.tags?.includes("Bestseller") ? 15 : 0);

                const scoreB =
                    (b.rating * 10) +
                    Math.min(b.reviews / 100, 20) +
                    (b.tags?.includes("Bestseller") ? 15 : 0);

                return scoreB - scoreA;
            });
    }
}


/* =========================================================
   PRODUCT FILTER ENGINE
========================================================= */

function filterProducts(productList, filters = {}) {

    let result = [...productList];


    if (filters.gender && filters.gender.length) {

        result = result.filter(
            product =>
                filters.gender.includes(product.gender)
        );
    }


    if (filters.category) {

        result = result.filter(
            product =>
                product.category === filters.category
        );
    }


    if (filters.subcategory) {

        result = result.filter(
            product =>
                product.subcategory === filters.subcategory
        );
    }


    if (filters.type && filters.type.length) {

        result = result.filter(
            product =>
                filters.type.includes(product.type)
        );
    }


    if (filters.sizes && filters.sizes.length) {

        result = result.filter(product => {

            if (!product.sizes) {
                return false;
            }

            return filters.sizes.some(
                size => product.sizes.includes(size)
            );
        });
    }


    if (filters.footwearSizes && filters.footwearSizes.length) {

        result = result.filter(product => {

            if (!product.footwearSizes) {
                return false;
            }

            return filters.footwearSizes.some(
                size =>
                    product.footwearSizes.includes(size)
            );
        });
    }


    if (filters.colors && filters.colors.length) {

        result = result.filter(product => {

            if (!product.colors) {
                return false;
            }

            return filters.colors.some(
                color =>
                    product.colors.includes(color)
            );
        });
    }


    if (
        filters.minPrice !== undefined &&
        filters.minPrice !== null
    ) {

        result = result.filter(
            product =>
                product.price >= filters.minPrice
        );
    }


    if (
        filters.maxPrice !== undefined &&
        filters.maxPrice !== null
    ) {

        result = result.filter(
            product =>
                product.price <= filters.maxPrice
        );
    }


    if (filters.minDiscount) {

        result = result.filter(
            product =>
                product.discount >= filters.minDiscount
        );
    }


    if (filters.minRating) {

        result = result.filter(
            product =>
                product.rating >= filters.minRating
        );
    }


    if (filters.search) {

        const search =
            filters.search.toLowerCase().trim();

        result = result.filter(product => {

            const text = [

                product.name,
                product.brand,
                product.category,
                product.subcategory,
                product.type,
                product.gender,
                product.color,
                ...(product.tags || []),
                ...(product.colors || [])

            ]
                .join(" ")
                .toLowerCase();

            return text.includes(search);
        });
    }


    return result;
}


/* =========================================================
   PRODUCT STATISTICS
========================================================= */

function getProductStats() {

    const total = products.length;

    const averageRating =
        total
            ? (
                products.reduce(
                    (sum, product) =>
                        sum + product.rating,
                    0
                ) / total
            ).toFixed(1)
            : "0.0";

    const averageDiscount =
        total
            ? Math.round(
                products.reduce(
                    (sum, product) =>
                        sum + product.discount,
                    0
                ) / total
            )
            : 0;

    return {
        total,
        averageRating,
        averageDiscount
    };
}


/* =========================================================
   GLOBAL DATABASE OBJECT
========================================================= */

window.ASFashionProducts = {

    products,

    getProduct,
    getProductsByCategory,
    getProductsBySubcategory,
    getProductsByGender,
    getProductsByType,

    getBestsellers,
    getTrendingProducts,
    getNewArrivals,
    getSaleProducts,

    getProductsUnderPrice,
    getProductsByPrice,
    getProductsByDiscount,
    getProductsByRating,

    getProductsByColor,
    getProductsBySize,

    getFootwearProducts,
    getProductsByFootwearSize,

    searchProducts,
    sortProducts,
    filterProducts,

    getProductStats
};
