/* =========================================================
   AS FASHIONS
   FINAL CATEGORY / SUBCATEGORY DATABASE
   js/categories.js
   ========================================================= */

const CATEGORIES = [

    /* =====================================================
       1. MEN
       ===================================================== */

    {
        id: "men",
        name: "Men",
        slug: "men",
        icon: "👨",
        featured: true,

        subcategories: [

            {
                id: "men-topwear",
                name: "Topwear",
                slug: "topwear",

                items: [
                    "T-Shirts",
                    "Casual Shirts",
                    "Formal Shirts",
                    "Polo T-Shirts",
                    "Oversized T-Shirts",
                    "Hoodies",
                    "Sweatshirts",
                    "Tank Tops",
                    "Jackets",
                    "Sweaters",
                    "Kurtas",
                    "Nehru Jackets"
                ]
            },

            {
                id: "men-bottomwear",
                name: "Bottomwear",
                slug: "bottomwear",

                items: [
                    "Jeans",
                    "Casual Trousers",
                    "Formal Trousers",
                    "Cargo Trousers",
                    "Joggers",
                    "Track Pants",
                    "Shorts",
                    "Chinos",
                    "Dhoti Pants"
                ]
            },

            {
                id: "men-ethnic",
                name: "Indian & Ethnic Wear",
                slug: "ethnic-wear",

                items: [
                    "Kurtas",
                    "Kurta Sets",
                    "Sherwanis",
                    "Nehru Jackets",
                    "Bandhgalas",
                    "Indo-Western",
                    "Dhotis",
                    "Ethnic Bottomwear"
                ]
            },

            {
                id: "men-suits",
                name: "Suits & Blazers",
                slug: "suits-blazers",

                items: [
                    "Blazers",
                    "Suits",
                    "Tuxedos",
                    "Waistcoats",
                    "Formal Jackets"
                ]
            },

            {
                id: "men-innerwear",
                name: "Innerwear & Sleepwear",
                slug: "innerwear-sleepwear",

                items: [
                    "Briefs",
                    "Boxers",
                    "Trunks",
                    "Vests",
                    "Innerwear Sets",
                    "Night Suits",
                    "Lounge Pants"
                ]
            },

            {
                id: "men-sportswear",
                name: "Sportswear",
                slug: "sportswear",

                items: [
                    "Sports T-Shirts",
                    "Sports Shorts",
                    "Track Pants",
                    "Track Jackets",
                    "Compression Wear",
                    "Gym Wear",
                    "Running Wear",
                    "Cricket Wear"
                ]
            },

            {
                id: "men-winter",
                name: "Winter Wear",
                slug: "winter-wear",

                items: [
                    "Sweaters",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets",
                    "Puffer Jackets",
                    "Thermal Wear",
                    "Fleece Wear"
                ]
            }
        ]
    },


    /* =====================================================
       2. WOMEN
       ===================================================== */

    {
        id: "women",
        name: "Women",
        slug: "women",
        icon: "👩",
        featured: true,

        subcategories: [

            {
                id: "women-western",
                name: "Western Wear",
                slug: "western-wear",

                items: [
                    "T-Shirts",
                    "Tops",
                    "Shirts",
                    "Blouses",
                    "Tunics",
                    "Crop Tops",
                    "Bodysuits",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets",
                    "Shrugs"
                ]
            },

            {
                id: "women-dresses",
                name: "Dresses",
                slug: "dresses",

                items: [
                    "Casual Dresses",
                    "Party Dresses",
                    "Maxi Dresses",
                    "Midi Dresses",
                    "Mini Dresses",
                    "Bodycon Dresses",
                    "Shirt Dresses",
                    "Wrap Dresses",
                    "A-Line Dresses"
                ]
            },

            {
                id: "women-bottomwear",
                name: "Bottomwear",
                slug: "women-bottomwear",

                items: [
                    "Jeans",
                    "Trousers",
                    "Cargo Pants",
                    "Joggers",
                    "Track Pants",
                    "Shorts",
                    "Skirts",
                    "Palazzos",
                    "Jeggings",
                    "Leggings"
                ]
            },

            {
                id: "women-indian",
                name: "Indian & Ethnic Wear",
                slug: "indian-wear",

                items: [
                    "Kurtas",
                    "Kurta Sets",
                    "Kurtis",
                    "Sarees",
                    "Lehengas",
                    "Anarkalis",
                    "Sharara Sets",
                    "Palazzo Sets",
                    "Ethnic Dresses"
                ]
            },

            {
                id: "women-sarees",
                name: "Sarees",
                slug: "sarees",

                items: [
                    "Silk Sarees",
                    "Cotton Sarees",
                    "Georgette Sarees",
                    "Chiffon Sarees",
                    "Organza Sarees",
                    "Party Wear Sarees",
                    "Printed Sarees",
                    "Designer Sarees"
                ]
            },

            {
                id: "women-activewear",
                name: "Activewear",
                slug: "activewear",

                items: [
                    "Sports T-Shirts",
                    "Sports Bras",
                    "Gym Tops",
                    "Leggings",
                    "Track Pants",
                    "Shorts",
                    "Yoga Wear",
                    "Running Wear"
                ]
            },

            {
                id: "women-winter",
                name: "Winter Wear",
                slug: "women-winter-wear",

                items: [
                    "Sweaters",
                    "Cardigans",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets",
                    "Coats",
                    "Puffer Jackets",
                    "Thermals"
                ]
            },

            {
                id: "women-maternity",
                name: "Maternity Wear",
                slug: "maternity-wear",

                items: [
                    "Maternity Dresses",
                    "Maternity Kurtas",
                    "Maternity Tops",
                    "Maternity Trousers",
                    "Nursing Tops"
                ]
            }
        ]
    },


    /* =====================================================
       3. KIDS
       ===================================================== */

    {
        id: "kids",
        name: "Kids",
        slug: "kids",
        icon: "🧒",
        featured: true,

        subcategories: [

            {
                id: "kids-boys",
                name: "Boys",
                slug: "boys",

                items: [
                    "T-Shirts",
                    "Shirts",
                    "Jeans",
                    "Trousers",
                    "Shorts",
                    "Joggers",
                    "Ethnic Wear",
                    "Suits & Blazers",
                    "Sweatshirts",
                    "Jackets"
                ]
            },

            {
                id: "kids-girls",
                name: "Girls",
                slug: "girls",

                items: [
                    "Dresses",
                    "Tops",
                    "T-Shirts",
                    "Skirts",
                    "Jeans",
                    "Trousers",
                    "Leggings",
                    "Ethnic Wear",
                    "Jumpsuits",
                    "Jackets"
                ]
            },

            {
                id: "kids-infants",
                name: "Infants",
                slug: "infants",

                items: [
                    "Bodysuits",
                    "Romper Sets",
                    "Dresses",
                    "T-Shirts",
                    "Trousers",
                    "Sleepwear",
                    "Newborn Sets"
                ]
            },

            {
                id: "kids-ethnic",
                name: "Ethnic Wear",
                slug: "kids-ethnic-wear",

                items: [
                    "Kurta Sets",
                    "Lehengas",
                    "Sherwanis",
                    "Ethnic Dresses",
                    "Nehru Jackets"
                ]
            },

            {
                id: "kids-sports",
                name: "Sportswear",
                slug: "kids-sportswear",

                items: [
                    "Sports T-Shirts",
                    "Track Pants",
                    "Shorts",
                    "Sports Sets",
                    "Activewear"
                ]
            },

            {
                id: "kids-winter",
                name: "Winter Wear",
                slug: "kids-winter-wear",

                items: [
                    "Sweaters",
                    "Hoodies",
                    "Jackets",
                    "Thermals",
                    "Winter Sets"
                ]
            }
        ]
    },


    /* =====================================================
       4. FOOTWEAR
       ===================================================== */

    {
        id: "footwear",
        name: "Footwear",
        slug: "footwear",
        icon: "👟",
        featured: true,

        subcategories: [

            {
                id: "footwear-men",
                name: "Men's Footwear",
                slug: "mens-footwear",

                items: [
                    "Casual Shoes",
                    "Sneakers",
                    "Sports Shoes",
                    "Running Shoes",
                    "Formal Shoes",
                    "Loafers",
                    "Boots",
                    "Sandals",
                    "Flip Flops",
                    "Mojaris"
                ]
            },

            {
                id: "footwear-women",
                name: "Women's Footwear",
                slug: "womens-footwear",

                items: [
                    "Heels",
                    "Block Heels",
                    "Wedges",
                    "Flats",
                    "Sneakers",
                    "Sports Shoes",
                    "Boots",
                    "Loafers",
                    "Sandals",
                    "Flip Flops",
                    "Juttis"
                ]
            },

            {
                id: "footwear-kids",
                name: "Kids' Footwear",
                slug: "kids-footwear",

                items: [
                    "School Shoes",
                    "Sneakers",
                    "Sports Shoes",
                    "Sandals",
                    "Flip Flops",
                    "Boots",
                    "Party Shoes"
                ]
            },

            {
                id: "footwear-sports",
                name: "Sports Footwear",
                slug: "sports-footwear",

                items: [
                    "Running Shoes",
                    "Training Shoes",
                    "Walking Shoes",
                    "Basketball Shoes",
                    "Football Shoes",
                    "Cricket Shoes",
                    "Trekking Shoes"
                ]
            },

            {
                id: "footwear-sizes",
                name: "Shop By Size",
                slug: "footwear-sizes",

                items: [
                    "UK 3",
                    "UK 4",
                    "UK 5",
                    "UK 6",
                    "UK 7",
                    "UK 8",
                    "UK 9",
                    "UK 10",
                    "UK 11",
                    "UK 12",
                    "UK 13"
                ]
            }
        ]
    },


    /* =====================================================
       5. BAGS
       ===================================================== */

    {
        id: "bags",
        name: "Bags",
        slug: "bags",
        icon: "👜",
        featured: true,

        subcategories: [

            {
                id: "bags-women",
                name: "Women's Bags",
                slug: "womens-bags",

                items: [
                    "Handbags",
                    "Shoulder Bags",
                    "Sling Bags",
                    "Tote Bags",
                    "Clutches",
                    "Crossbody Bags",
                    "Mini Bags"
                ]
            },

            {
                id: "bags-men",
                name: "Men's Bags",
                slug: "mens-bags",

                items: [
                    "Backpacks",
                    "Laptop Bags",
                    "Sling Bags",
                    "Messenger Bags",
                    "Travel Bags",
                    "Crossbody Bags"
                ]
            },

            {
                id: "bags-travel",
                name: "Travel Bags",
                slug: "travel-bags",

                items: [
                    "Duffle Bags",
                    "Trolley Bags",
                    "Suitcases",
                    "Travel Backpacks",
                    "Weekender Bags"
                ]
            },

            {
                id: "bags-school",
                name: "School & College Bags",
                slug: "school-college-bags",

                items: [
                    "School Backpacks",
                    "College Backpacks",
                    "Laptop Backpacks",
                    "Kids Backpacks"
                ]
            }
        ]
    },


    /* =====================================================
       6. ACCESSORIES
       ===================================================== */

    {
        id: "accessories",
        name: "Accessories",
        slug: "accessories",
        icon: "🕶️",
        featured: true,

        subcategories: [

            {
                id: "accessories-jewellery",
                name: "Jewellery",
                slug: "jewellery",

                items: [
                    "Earrings",
                    "Necklaces",
                    "Bracelets",
                    "Rings",
                    "Anklets",
                    "Jewellery Sets"
                ]
            },

            {
                id: "accessories-watches",
                name: "Watches",
                slug: "watches",

                items: [
                    "Analog Watches",
                    "Digital Watches",
                    "Smart Watches",
                    "Chronograph Watches",
                    "Couple Watches"
                ]
            },

            {
                id: "accessories-wallets",
                name: "Wallets & Belts",
                slug: "wallets-belts",

                items: [
                    "Wallets",
                    "Card Holders",
                    "Belts",
                    "Money Clips"
                ]
            },

            {
                id: "accessories-eyewear",
                name: "Eyewear",
                slug: "eyewear",

                items: [
                    "Sunglasses",
                    "Blue Light Glasses",
                    "Eyeglasses Frames",
                    "Sports Sunglasses"
                ]
            },

            {
                id: "accessories-fashion",
                name: "Fashion Accessories",
                slug: "fashion-accessories",

                items: [
                    "Caps",
                    "Hats",
                    "Scarves",
                    "Stoles",
                    "Gloves",
                    "Socks",
                    "Ties",
                    "Pocket Squares",
                    "Hair Accessories"
                ]
            }
        ]
    },


    /* =====================================================
       7. SPORTS
       ===================================================== */

    {
        id: "sports",
        name: "Sports",
        slug: "sports",
        icon: "🏃",
        featured: true,

        subcategories: [

            {
                id: "sports-men",
                name: "Men's Sportswear",
                slug: "mens-sportswear",

                items: [
                    "T-Shirts",
                    "Shorts",
                    "Track Pants",
                    "Track Jackets",
                    "Compression Wear",
                    "Training Wear"
                ]
            },

            {
                id: "sports-women",
                name: "Women's Sportswear",
                slug: "womens-sportswear",

                items: [
                    "Sports Bras",
                    "Tops",
                    "T-Shirts",
                    "Leggings",
                    "Shorts",
                    "Track Pants",
                    "Training Wear"
                ]
            },

            {
                id: "sports-running",
                name: "Running",
                slug: "running",

                items: [
                    "Running Shoes",
                    "Running T-Shirts",
                    "Running Shorts",
                    "Running Track Pants",
                    "Running Accessories"
                ]
            },

            {
                id: "sports-gym",
                name: "Gym & Training",
                slug: "gym-training",

                items: [
                    "Gym T-Shirts",
                    "Gym Shorts",
                    "Gym Leggings",
                    "Training Shoes",
                    "Gym Accessories"
                ]
            },

            {
                id: "sports-cricket",
                name: "Cricket",
                slug: "cricket",

                items: [
                    "Cricket Jerseys",
                    "Cricket Trousers",
                    "Cricket Shoes",
                    "Cricket Kits",
                    "Cricket Accessories"
                ]
            },

            {
                id: "sports-football",
                name: "Football",
                slug: "football",

                items: [
                    "Football Jerseys",
                    "Football Shorts",
                    "Football Shoes",
                    "Football Accessories"
                ]
            }
        ]
    },


    /* =====================================================
       8. WINTER WEAR
       ===================================================== */

    {
        id: "winter-wear",
        name: "Winter Wear",
        slug: "winter-wear",
        icon: "🧥",
        featured: true,

        subcategories: [

            {
                id: "winter-men",
                name: "Men",
                slug: "men-winter",

                items: [
                    "Jackets",
                    "Puffer Jackets",
                    "Sweaters",
                    "Hoodies",
                    "Sweatshirts",
                    "Coats",
                    "Thermals",
                    "Fleece"
                ]
            },

            {
                id: "winter-women",
                name: "Women",
                slug: "women-winter",

                items: [
                    "Jackets",
                    "Puffer Jackets",
                    "Sweaters",
                    "Cardigans",
                    "Hoodies",
                    "Coats",
                    "Thermals",
                    "Fleece"
                ]
            },

            {
                id: "winter-kids",
                name: "Kids",
                slug: "kids-winter",

                items: [
                    "Jackets",
                    "Sweaters",
                    "Hoodies",
                    "Winter Sets",
                    "Thermals",
                    "Fleece"
                ]
            }
        ]
    },


    /* =====================================================
       9. TRENDING
       ===================================================== */

    {
        id: "trending",
        name: "Trending",
        slug: "trending",
        icon: "🔥",
        featured: true,

        subcategories: [

            {
                id: "trending-fashion",
                name: "Trending Fashion",
                slug: "trending-fashion",

                items: [
                    "Oversized Fits",
                    "Streetwear",
                    "Co-ord Sets",
                    "Cargo Fashion",
                    "Minimal Fashion",
                    "Old Money Style",
                    "Y2K Fashion",
                    "Quiet Luxury"
                ]
            },

            {
                id: "trending-footwear",
                name: "Trending Footwear",
                slug: "trending-footwear",

                items: [
                    "Chunky Sneakers",
                    "Retro Sneakers",
                    "Running Sneakers",
                    "Platform Shoes",
                    "Loafers"
                ]
            },

            {
                id: "trending-accessories",
                name: "Trending Accessories",
                slug: "trending-accessories",

                items: [
                    "Statement Bags",
                    "Sunglasses",
                    "Caps",
                    "Minimal Jewellery",
                    "Smart Watches"
                ]
            }
        ]
    },


    /* =====================================================
       10. NEW ARRIVALS
       ===================================================== */

    {
        id: "new-arrivals",
        name: "New Arrivals",
        slug: "new-arrivals",
        icon: "✨",
        featured: true,

        subcategories: [

            {
                id: "new-men",
                name: "Men",
                slug: "new-men",

                items: [
                    "New T-Shirts",
                    "New Shirts",
                    "New Jeans",
                    "New Trousers",
                    "New Jackets",
                    "New Ethnic Wear"
                ]
            },

            {
                id: "new-women",
                name: "Women",
                slug: "new-women",

                items: [
                    "New Tops",
                    "New Dresses",
                    "New Jeans",
                    "New Kurtas",
                    "New Sarees",
                    "New Ethnic Wear"
                ]
            },

            {
                id: "new-kids",
                name: "Kids",
                slug: "new-kids",

                items: [
                    "New Boys Wear",
                    "New Girls Wear",
                    "New Baby Wear",
                    "New Ethnic Wear"
                ]
            },

            {
                id: "new-footwear",
                name: "Footwear",
                slug: "new-footwear",

                items: [
                    "New Sneakers",
                    "New Heels",
                    "New Sports Shoes",
                    "New Sandals",
                    "New Formal Shoes"
                ]
            }
        ]
    },


    /* =====================================================
       11. SALE
       ===================================================== */

    {
        id: "sale",
        name: "Sale",
        slug: "sale",
        icon: "🏷️",
        featured: true,

        subcategories: [

            {
                id: "sale-men",
                name: "Men",
                slug: "men-sale",

                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "Under ₹1499",
                    "50% & Above",
                    "70% & Above"
                ]
            },

            {
                id: "sale-women",
                name: "Women",
                slug: "women-sale",

                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "Under ₹1499",
                    "50% & Above",
                    "70% & Above"
                ]
            },

            {
                id: "sale-kids",
                name: "Kids",
                slug: "kids-sale",

                items: [
                    "Under ₹399",
                    "Under ₹599",
                    "Under ₹999",
                    "50% & Above",
                    "70% & Above"
                ]
            },

            {
                id: "sale-footwear",
                name: "Footwear",
                slug: "footwear-sale",

                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "50% & Above",
                    "70% & Above"
                ]
            },

            {
                id: "sale-bags-accessories",
                name: "Bags & Accessories",
                slug: "bags-accessories-sale",

                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "50% & Above",
                    "70% & Above"
                ]
            }
        ]
    }

];


/* =========================================================
   CATEGORY HELPERS
   ========================================================= */

/**
 * Get a category by ID.
 */
function getCategoryById(categoryId) {
    return CATEGORIES.find(
        category => category.id === categoryId
    ) || null;
}


/**
 * Get a category by slug.
 */
function getCategoryBySlug(slug) {
    return CATEGORIES.find(
        category => category.slug === slug
    ) || null;
}


/**
 * Get a subcategory by ID.
 */
function getSubcategoryById(subcategoryId) {

    for (const category of CATEGORIES) {

        const subcategory = category.subcategories.find(
            item => item.id === subcategoryId
        );

        if (subcategory) {
            return {
                category,
                subcategory
            };
        }
    }

    return null;
}


/**
 * Get all products/category filter values
 * belonging to a category.
 */
function getCategoryItems(categoryId) {

    const category = getCategoryById(categoryId);

    if (!category) {
        return [];
    }

    return category.subcategories.flatMap(
        subcategory => subcategory.items
    );
}


/**
 * Get only featured categories.
 */
function getFeaturedCategories() {
    return CATEGORIES.filter(
        category => category.featured
    );
}


/**
 * Search category/subcategory/item names.
 */
function searchCategories(query) {

    const searchTerm = String(query || "")
        .trim()
        .toLowerCase();

    if (!searchTerm) {
        return [];
    }

    const results = [];

    CATEGORIES.forEach(category => {

        if (
            category.name
                .toLowerCase()
                .includes(searchTerm)
        ) {
            results.push({
                type: "category",
                categoryId: category.id,
                categoryName: category.name,
                name: category.name
            });
        }

        category.subcategories.forEach(subcategory => {

            if (
                subcategory.name
                    .toLowerCase()
                    .includes(searchTerm)
            ) {
                results.push({
                    type: "subcategory",
                    categoryId: category.id,
                    categoryName: category.name,
                    subcategoryId: subcategory.id,
                    name: subcategory.name
                });
            }

            subcategory.items.forEach(item => {

                if (
                    item
                        .toLowerCase()
                        .includes(searchTerm)
                ) {
                    results.push({
                        type: "item",
                        categoryId: category.id,
                        categoryName: category.name,
                        subcategoryId: subcategory.id,
                        subcategoryName: subcategory.name,
                        name: item
                    });
                }

            });
        });
    });

    return results;
}


/* =========================================================
   MEGA MENU DATA
   ========================================================= */

const MEGA_MENU_CATEGORIES = getFeaturedCategories();


/* =========================================================
   GLOBAL CATEGORY CONFIG
   ========================================================= */

const CATEGORY_CONFIG = {

    maxMegaMenuColumns: 4,

    showIcons: true,

    enableCategorySearch: true,

    enableSubcategoryFilter: true,

    enableItemFilter: true,

    mobileAccordion: true,

    desktopMegaMenu: true,

    saleCategory: "sale",

    defaultCategory: "new-arrivals"
};


/* =========================================================
   FREEZE DATABASE
   Prevent accidental runtime modification.
   ========================================================= */

Object.freeze(CATEGORIES);

CATEGORIES.forEach(category => {

    Object.freeze(category);
    Object.freeze(category.subcategories);

    category.subcategories.forEach(subcategory => {
        Object.freeze(subcategory);
        Object.freeze(subcategory.items);
    });

});
