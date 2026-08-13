/* =========================================================
   AS FASHIONS
   FINAL CATEGORY & SUBCATEGORY DATABASE
========================================================= */

const categories = [

    /* =====================================================
       1. MEN
    ===================================================== */

    {
        id: "men",
        name: "Men",
        icon: "👔",

        subcategories: [

            {
                id: "men-topwear",
                name: "Topwear",
                items: [
                    "T-Shirts",
                    "Casual Shirts",
                    "Formal Shirts",
                    "Polo T-Shirts",
                    "Oversized T-Shirts",
                    "Printed T-Shirts",
                    "Graphic T-Shirts",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets",
                    "Sweaters",
                    "Kurtas",
                    "Nehru Jackets"
                ]
            },

            {
                id: "men-bottomwear",
                name: "Bottomwear",
                items: [
                    "Jeans",
                    "Casual Trousers",
                    "Formal Trousers",
                    "Track Pants",
                    "Joggers",
                    "Cargo Pants",
                    "Chinos",
                    "Shorts",
                    "Boxers",
                    "Pyjamas"
                ]
            },

            {
                id: "men-indianwear",
                name: "Indian Wear",
                items: [
                    "Kurtas",
                    "Kurta Sets",
                    "Sherwanis",
                    "Nehru Jackets",
                    "Dhotis",
                    "Ethnic Jackets",
                    "Festive Wear"
                ]
            },

            {
                id: "men-suits",
                name: "Suits & Blazers",
                items: [
                    "Blazers",
                    "Suit Sets",
                    "Tuxedos",
                    "Waistcoats",
                    "Formal Jackets"
                ]
            },

            {
                id: "men-activewear",
                name: "Activewear",
                items: [
                    "Sports T-Shirts",
                    "Track Pants",
                    "Training Shorts",
                    "Gym Vests",
                    "Running Wear",
                    "Sports Jackets"
                ]
            },

            {
                id: "men-innerwear",
                name: "Innerwear & Loungewear",
                items: [
                    "Briefs",
                    "Trunks",
                    "Boxers",
                    "Vests",
                    "Lounge Pants",
                    "Lounge Shorts",
                    "Night Suits"
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
        icon: "👗",

        subcategories: [

            {
                id: "women-western",
                name: "Western Wear",
                items: [
                    "Tops",
                    "T-Shirts",
                    "Shirts",
                    "Blouses",
                    "Dresses",
                    "Jumpsuits",
                    "Co-ord Sets",
                    "Bodysuits",
                    "Tunics",
                    "Shrugs",
                    "Jackets"
                ]
            },

            {
                id: "women-bottomwear",
                name: "Bottomwear",
                items: [
                    "Jeans",
                    "Trousers",
                    "Wide Leg Pants",
                    "Cargo Pants",
                    "Joggers",
                    "Track Pants",
                    "Shorts",
                    "Skirts",
                    "Leggings"
                ]
            },

            {
                id: "women-indianwear",
                name: "Indian Wear",
                items: [
                    "Kurtas",
                    "Kurta Sets",
                    "Kurtis",
                    "Anarkali",
                    "Salwar Suits",
                    "Palazzos",
                    "Lehengas",
                    "Sharara Sets",
                    "Gharara Sets",
                    "Ethnic Dresses"
                ]
            },

            {
                id: "women-sarees",
                name: "Sarees",
                items: [
                    "Silk Sarees",
                    "Cotton Sarees",
                    "Georgette Sarees",
                    "Chiffon Sarees",
                    "Linen Sarees",
                    "Party Wear Sarees",
                    "Wedding Sarees",
                    "Printed Sarees",
                    "Designer Sarees"
                ]
            },

            {
                id: "women-ethnic",
                name: "Ethnic Sets",
                items: [
                    "Kurta Sets",
                    "Sharara Sets",
                    "Anarkali Sets",
                    "Pant Sets",
                    "Dupatta Sets",
                    "Festive Sets"
                ]
            },

            {
                id: "women-activewear",
                name: "Activewear",
                items: [
                    "Sports Bras",
                    "Gym Tops",
                    "Training T-Shirts",
                    "Yoga Pants",
                    "Track Pants",
                    "Running Shorts",
                    "Activewear Sets"
                ]
            },

            {
                id: "women-lingerie",
                name: "Lingerie & Innerwear",
                items: [
                    "Bras",
                    "Panties",
                    "Bra Sets",
                    "Shapewear",
                    "Camisoles",
                    "Slips",
                    "Nightwear"
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
        icon: "🧒",

        subcategories: [

            {
                id: "kids-boys",
                name: "Boys",
                items: [
                    "T-Shirts",
                    "Shirts",
                    "Jeans",
                    "Trousers",
                    "Shorts",
                    "Joggers",
                    "Ethnic Wear",
                    "Party Wear",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets"
                ]
            },

            {
                id: "kids-girls",
                name: "Girls",
                items: [
                    "Tops",
                    "T-Shirts",
                    "Dresses",
                    "Skirts",
                    "Jeans",
                    "Trousers",
                    "Jumpsuits",
                    "Ethnic Wear",
                    "Party Wear",
                    "Sweatshirts",
                    "Jackets"
                ]
            },

            {
                id: "kids-baby",
                name: "Baby",
                items: [
                    "Bodysuits",
                    "Romper Sets",
                    "Baby Dresses",
                    "Baby T-Shirts",
                    "Baby Pants",
                    "Baby Sets",
                    "Sleepwear"
                ]
            },

            {
                id: "kids-ethnic",
                name: "Kids Ethnic Wear",
                items: [
                    "Kurta Sets",
                    "Sherwani Sets",
                    "Lehenga Sets",
                    "Anarkali Dresses",
                    "Festive Wear"
                ]
            },

            {
                id: "kids-sports",
                name: "Kids Sportswear",
                items: [
                    "Sports T-Shirts",
                    "Track Pants",
                    "Shorts",
                    "Sports Sets",
                    "Training Wear"
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
        icon: "👟",

        subcategories: [

            {
                id: "footwear-men",
                name: "Men's Footwear",
                items: [
                    "Casual Shoes",
                    "Sneakers",
                    "Running Shoes",
                    "Sports Shoes",
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
                items: [
                    "Heels",
                    "Flats",
                    "Sneakers",
                    "Casual Shoes",
                    "Sports Shoes",
                    "Running Shoes",
                    "Boots",
                    "Sandals",
                    "Sliders",
                    "Juttis",
                    "Mojaris"
                ]
            },

            {
                id: "footwear-kids",
                name: "Kids' Footwear",
                items: [
                    "School Shoes",
                    "Sneakers",
                    "Sports Shoes",
                    "Sandals",
                    "Slippers",
                    "Boots"
                ]
            },

            {
                id: "footwear-sports",
                name: "Sports Footwear",
                items: [
                    "Running",
                    "Training",
                    "Walking",
                    "Gym",
                    "Football",
                    "Cricket",
                    "Basketball"
                ]
            }
        ],

        sizes: {
            men: [
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ],

            women: [
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],

            kids: [
                "10C",
                "11C",
                "12C",
                "13C",
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        }
    },


    /* =====================================================
       5. BAGS
    ===================================================== */

    {
        id: "bags",
        name: "Bags",
        icon: "👜",

        subcategories: [

            {
                id: "bags-women",
                name: "Women's Bags",
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
                items: [
                    "Backpacks",
                    "Laptop Bags",
                    "Messenger Bags",
                    "Sling Bags",
                    "Crossbody Bags",
                    "Duffle Bags",
                    "Travel Bags"
                ]
            },

            {
                id: "bags-travel",
                name: "Travel Bags",
                items: [
                    "Trolley Bags",
                    "Suitcases",
                    "Duffle Bags",
                    "Travel Backpacks",
                    "Weekender Bags"
                ]
            },

            {
                id: "bags-school",
                name: "School & College",
                items: [
                    "School Bags",
                    "College Backpacks",
                    "Laptop Backpacks",
                    "Laptop Sleeves"
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
        icon: "🕶️",

        subcategories: [

            {
                id: "accessories-watches",
                name: "Watches",
                items: [
                    "Analog Watches",
                    "Digital Watches",
                    "Chronograph Watches",
                    "Smart Watches",
                    "Couple Watches"
                ]
            },

            {
                id: "accessories-jewellery",
                name: "Jewellery",
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
                id: "accessories-sunglasses",
                name: "Sunglasses",
                items: [
                    "Aviators",
                    "Wayfarers",
                    "Round",
                    "Rectangle",
                    "Sports Sunglasses",
                    "Polarized Sunglasses"
                ]
            },

            {
                id: "accessories-belts",
                name: "Belts",
                items: [
                    "Leather Belts",
                    "Casual Belts",
                    "Formal Belts",
                    "Reversible Belts"
                ]
            },

            {
                id: "accessories-wallets",
                name: "Wallets",
                items: [
                    "Bi-Fold Wallets",
                    "Tri-Fold Wallets",
                    "Card Holders",
                    "Coin Pouches"
                ]
            },

            {
                id: "accessories-caps",
                name: "Caps & Hats",
                items: [
                    "Baseball Caps",
                    "Snapback Caps",
                    "Bucket Hats",
                    "Beanies",
                    "Sun Hats"
                ]
            },

            {
                id: "accessories-fashion",
                name: "Fashion Accessories",
                items: [
                    "Scarves",
                    "Stoles",
                    "Ties",
                    "Pocket Squares",
                    "Hair Accessories",
                    "Socks",
                    "Gloves"
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
        icon: "🏃",

        subcategories: [

            {
                id: "sports-men",
                name: "Men's Sportswear",
                items: [
                    "T-Shirts",
                    "Track Pants",
                    "Shorts",
                    "Training Wear",
                    "Running Wear",
                    "Gym Wear"
                ]
            },

            {
                id: "sports-women",
                name: "Women's Sportswear",
                items: [
                    "Sports Bras",
                    "T-Shirts",
                    "Tights",
                    "Yoga Pants",
                    "Track Pants",
                    "Training Wear"
                ]
            },

            {
                id: "sports-running",
                name: "Running",
                items: [
                    "Running Shoes",
                    "Running T-Shirts",
                    "Running Shorts",
                    "Running Track Pants",
                    "Running Accessories"
                ]
            },

            {
                id: "sports-training",
                name: "Training & Gym",
                items: [
                    "Gym T-Shirts",
                    "Gym Shorts",
                    "Track Pants",
                    "Training Shoes",
                    "Gym Accessories"
                ]
            },

            {
                id: "sports-team",
                name: "Team Sports",
                items: [
                    "Football",
                    "Cricket",
                    "Basketball",
                    "Badminton",
                    "Tennis"
                ]
            }
        ]
    },


    /* =====================================================
       8. WINTER WEAR
    ===================================================== */

    {
        id: "winter",
        name: "Winter Wear",
        icon: "🧥",

        subcategories: [

            {
                id: "winter-men",
                name: "Men",
                items: [
                    "Sweaters",
                    "Sweatshirts",
                    "Hoodies",
                    "Jackets",
                    "Puffer Jackets",
                    "Winter Coats",
                    "Thermals"
                ]
            },

            {
                id: "winter-women",
                name: "Women",
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
                id: "winter-kids",
                name: "Kids",
                items: [
                    "Sweaters",
                    "Hoodies",
                    "Jackets",
                    "Puffer Jackets",
                    "Winter Sets",
                    "Thermals"
                ]
            },

            {
                id: "winter-accessories",
                name: "Winter Accessories",
                items: [
                    "Beanies",
                    "Scarves",
                    "Gloves",
                    "Mufflers",
                    "Winter Socks"
                ]
            }
        ]
    },


    /* =====================================================
       9. INNERWEAR & LOUNGE
    ===================================================== */

    {
        id: "innerwear",
        name: "Innerwear & Lounge",
        icon: "🩳",

        subcategories: [

            {
                id: "innerwear-men",
                name: "Men",
                items: [
                    "Briefs",
                    "Trunks",
                    "Boxers",
                    "Vests",
                    "Thermals",
                    "Night Suits",
                    "Lounge Pants"
                ]
            },

            {
                id: "innerwear-women",
                name: "Women",
                items: [
                    "Bras",
                    "Panties",
                    "Bra Sets",
                    "Camisoles",
                    "Shapewear",
                    "Nightwear",
                    "Lounge Sets"
                ]
            },

            {
                id: "innerwear-kids",
                name: "Kids",
                items: [
                    "Innerwear Sets",
                    "Briefs",
                    "Vests",
                    "Nightwear",
                    "Thermals"
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
        icon: "✨",

        subcategories: [
            {
                id: "new-men",
                name: "Men",
                items: [
                    "New T-Shirts",
                    "New Shirts",
                    "New Jeans",
                    "New Trousers",
                    "New Shoes",
                    "New Accessories"
                ]
            },

            {
                id: "new-women",
                name: "Women",
                items: [
                    "New Tops",
                    "New Dresses",
                    "New Kurtas",
                    "New Sarees",
                    "New Jeans",
                    "New Shoes",
                    "New Accessories"
                ]
            },

            {
                id: "new-kids",
                name: "Kids",
                items: [
                    "New Boys",
                    "New Girls",
                    "New Baby",
                    "New Footwear"
                ]
            }
        ]
    },


    /* =====================================================
       11. TRENDING
    ===================================================== */

    {
        id: "trending",
        name: "Trending",
        icon: "🔥",

        subcategories: [

            {
                id: "trend-fashion",
                name: "Trending Fashion",
                items: [
                    "Oversized",
                    "Streetwear",
                    "Co-ord Sets",
                    "Cargo",
                    "Minimal Fashion",
                    "Old Money",
                    "Y2K",
                    "Athleisure"
                ]
            },

            {
                id: "trend-viral",
                name: "Viral Now",
                items: [
                    "Instagram Trends",
                    "Social Media Picks",
                    "Celebrity Styles",
                    "Influencer Picks",
                    "Bestsellers"
                ]
            },

            {
                id: "trend-season",
                name: "Seasonal Trends",
                items: [
                    "Summer Trends",
                    "Monsoon Trends",
                    "Winter Trends",
                    "Festive Trends",
                    "Wedding Trends"
                ]
            }
        ]
    },


    /* =====================================================
       12. SALE
    ===================================================== */

    {
        id: "sale",
        name: "Sale",
        icon: "🏷️",

        subcategories: [

            {
                id: "sale-men",
                name: "Men Sale",
                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "50% Off & Above",
                    "70% Off & Above"
                ]
            },

            {
                id: "sale-women",
                name: "Women Sale",
                items: [
                    "Under ₹499",
                    "Under ₹799",
                    "Under ₹999",
                    "50% Off & Above",
                    "70% Off & Above"
                ]
            },

            {
                id: "sale-kids",
                name: "Kids Sale",
                items: [
                    "Under ₹399",
                    "Under ₹599",
                    "Under ₹799",
                    "50% Off & Above",
                    "70% Off & Above"
                ]
            },

            {
                id: "sale-footwear",
                name: "Footwear Sale",
                items: [
                    "Under ₹499",
                    "Under ₹999",
                    "Sneakers Sale",
                    "Sports Shoes Sale",
                    "50% Off & Above"
                ]
            }
        ]
    }

];


/* =========================================================
   QUICK ACCESS CATEGORIES
========================================================= */

const quickCategories = [
    {
        id: "men",
        name: "Men",
        icon: "👔"
    },
    {
        id: "women",
        name: "Women",
        icon: "👗"
    },
    {
        id: "kids",
        name: "Kids",
        icon: "🧒"
    },
    {
        id: "footwear",
        name: "Footwear",
        icon: "👟"
    },
    {
        id: "bags",
        name: "Bags",
        icon: "👜"
    },
    {
        id: "accessories",
        name: "Accessories",
        icon: "🕶️"
    },
    {
        id: "sports",
        name: "Sports",
        icon: "🏃"
    },
    {
        id: "winter",
        name: "Winter Wear",
        icon: "🧥"
    }
];


/* =========================================================
   FILTER OPTIONS
========================================================= */

const filterOptions = {

    gender: [
        "Men",
        "Women",
        "Kids"
    ],

    categories: [
        "T-Shirts",
        "Shirts",
        "Jeans",
        "Trousers",
        "Dresses",
        "Kurtas",
        "Sarees",
        "Footwear",
        "Bags",
        "Accessories",
        "Sportswear",
        "Winter Wear"
    ],

    sizes: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL"
    ],

    footwearSizes: [
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
    ],

    price: [
        {
            label: "Under ₹499",
            min: 0,
            max: 499
        },
        {
            label: "₹500 - ₹999",
            min: 500,
            max: 999
        },
        {
            label: "₹1,000 - ₹1,499",
            min: 1000,
            max: 1499
        },
        {
            label: "₹1,500 - ₹2,499",
            min: 1500,
            max: 2499
        },
        {
            label: "₹2,500 - ₹4,999",
            min: 2500,
            max: 4999
        },
        {
            label: "₹5,000+",
            min: 5000,
            max: Infinity
        }
    ],

    discount: [
        "10% and above",
        "20% and above",
        "30% and above",
        "40% and above",
        "50% and above",
        "60% and above",
        "70% and above"
    ],

    colors: [
        "Black",
        "White",
        "Grey",
        "Blue",
        "Navy",
        "Red",
        "Green",
        "Yellow",
        "Pink",
        "Purple",
        "Brown",
        "Beige",
        "Orange"
    ]
};


/* =========================================================
   SORT OPTIONS
========================================================= */

const sortOptions = [
    {
        value: "recommended",
        label: "Recommended"
    },
    {
        value: "newest",
        label: "What's New"
    },
    {
        value: "popular",
        label: "Popularity"
    },
    {
        value: "price-low",
        label: "Price: Low to High"
    },
    {
        value: "price-high",
        label: "Price: High to Low"
    },
    {
        value: "discount",
        label: "Better Discount"
    },
    {
        value: "rating",
        label: "Customer Rating"
    }
];


/* =========================================================
   CATEGORY HELPER FUNCTIONS
========================================================= */

function getCategory(categoryId) {
    return categories.find(category => category.id === categoryId);
}


function getSubcategory(categoryId, subcategoryId) {

    const category = getCategory(categoryId);

    if (!category) {
        return null;
    }

    return category.subcategories.find(
        subcategory => subcategory.id === subcategoryId
    ) || null;
}


function getAllSubcategories(categoryId) {

    const category = getCategory(categoryId);

    if (!category) {
        return [];
    }

    return category.subcategories;
}


function getAllCategoryItems(categoryId) {

    const category = getCategory(categoryId);

    if (!category) {
        return [];
    }

    return category.subcategories.flatMap(
        subcategory => subcategory.items
    );
}


function searchCategories(query) {

    const search = query
        .toLowerCase()
        .trim();

    if (!search) {
        return [];
    }

    const results = [];

    categories.forEach(category => {

        category.subcategories.forEach(subcategory => {

            subcategory.items.forEach(item => {

                if (
                    item.toLowerCase().includes(search) ||
                    subcategory.name.toLowerCase().includes(search) ||
                    category.name.toLowerCase().includes(search)
                ) {

                    results.push({
                        categoryId: category.id,
                        categoryName: category.name,

                        subcategoryId: subcategory.id,
                        subcategoryName: subcategory.name,

                        item: item
                    });

                }

            });

        });

    });

    return results;
}


/* =========================================================
   EXPORT TO GLOBAL WINDOW
========================================================= */

window.ASFashionCategories = {
    categories,
    quickCategories,
    filterOptions,
    sortOptions,

    getCategory,
    getSubcategory,
    getAllSubcategories,
    getAllCategoryItems,
    searchCategories
};
