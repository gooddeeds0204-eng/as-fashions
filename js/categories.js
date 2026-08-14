/* =========================================================
   AS FASHIONS — js/categories.js
   FINAL CATEGORY / SUBCATEGORY DATABASE
   Single-Vendor Fashion Commerce
   ========================================================= */

const CATEGORIES = [

  /* =======================================================
     01 — MEN
     ======================================================= */

  {
    id: "men",
    name: "Men",
    slug: "men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800",

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
          "Hoodies",
          "Sweatshirts",
          "Jackets",
          "Sweaters"
        ]
      },

      {
        id: "men-bottomwear",
        name: "Bottomwear",
        items: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Cargo Pants",
          "Track Pants",
          "Joggers",
          "Shorts"
        ]
      },

      {
        id: "men-ethnic",
        name: "Indian & Ethnic Wear",
        items: [
          "Kurtas",
          "Kurta Sets",
          "Nehru Jackets",
          "Sherwanis",
          "Ethnic Jackets",
          "Festive Wear"
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
          "Lounge Shorts"
        ]
      },

      {
        id: "men-sports",
        name: "Sports & Activewear",
        items: [
          "Sports T-Shirts",
          "Track Pants",
          "Joggers",
          "Sports Shorts",
          "Training Wear"
        ]
      },

      {
        id: "men-occasion",
        name: "Occasion Wear",
        items: [
          "Party Wear",
          "Wedding Wear",
          "Festive Wear",
          "Date Night",
          "Premium Evening Wear"
        ]
      }

    ]
  },


  /* =======================================================
     02 — WOMEN
     ======================================================= */

  {
    id: "women",
    name: "Women",
    slug: "women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",

    subcategories: [

      {
        id: "women-western",
        name: "Western Wear",
        items: [
          "Tops",
          "T-Shirts",
          "Shirts",
          "Blouses",
          "Tunics",
          "Bodysuits",
          "Crop Tops",
          "Sweatshirts",
          "Hoodies"
        ]
      },

      {
        id: "women-dresses",
        name: "Dresses",
        items: [
          "Casual Dresses",
          "Party Dresses",
          "Midi Dresses",
          "Maxi Dresses",
          "Mini Dresses",
          "Bodycon Dresses",
          "Shirt Dresses"
        ]
      },

      {
        id: "women-bottomwear",
        name: "Bottomwear",
        items: [
          "Jeans",
          "Trousers",
          "Wide Leg Trousers",
          "Cargo Pants",
          "Joggers",
          "Leggings",
          "Shorts",
          "Skirts"
        ]
      },

      {
        id: "women-ethnic",
        name: "Indian & Ethnic Wear",
        items: [
          "Kurtas & Kurtis",
          "Kurta Sets",
          "Anarkali",
          "Sarees",
          "Lehenga Choli",
          "Ethnic Dresses",
          "Dupattas",
          "Festive Wear"
        ]
      },

      {
        id: "women-innerwear",
        name: "Innerwear & Loungewear",
        items: [
          "Bras",
          "Panties",
          "Lingerie Sets",
          "Camisoles",
          "Night Suits",
          "Lounge Sets",
          "Robes"
        ]
      },

      {
        id: "women-activewear",
        name: "Sports & Activewear",
        items: [
          "Sports T-Shirts",
          "Sports Bras",
          "Training Tops",
          "Track Pants",
          "Joggers",
          "Gym Shorts",
          "Activewear Sets"
        ]
      },

      {
        id: "women-occasion",
        name: "Occasion Wear",
        items: [
          "Party Wear",
          "Wedding Wear",
          "Festive Wear",
          "Date Night",
          "Evening Wear",
          "Premium Occasion Wear"
        ]
      }

    ]
  },


  /* =======================================================
     03 — KIDS
     ======================================================= */

  {
    id: "kids",
    name: "Kids",
    slug: "kids",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800",

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
          "Ethnic Wear",
          "Jackets",
          "Sweatshirts",
          "Tracksuits"
        ]
      },

      {
        id: "kids-girls",
        name: "Girls",
        items: [
          "Tops",
          "T-Shirts",
          "Dresses",
          "Jeans",
          "Trousers",
          "Skirts",
          "Ethnic Wear",
          "Jackets",
          "Sweatshirts"
        ]
      },

      {
        id: "kids-baby",
        name: "Baby",
        items: [
          "Baby Rompers",
          "Baby Bodysuits",
          "Baby Dresses",
          "Baby Sets",
          "Baby T-Shirts",
          "Baby Bottomwear"
        ]
      },

      {
        id: "kids-ethnic",
        name: "Kids Ethnic Wear",
        items: [
          "Kurta Sets",
          "Lehenga Sets",
          "Ethnic Dresses",
          "Festive Wear"
        ]
      },

      {
        id: "kids-activewear",
        name: "Kids Sportswear",
        items: [
          "Sports T-Shirts",
          "Track Pants",
          "Joggers",
          "Shorts",
          "Tracksuits"
        ]
      }

    ]
  },


  /* =======================================================
     04 — FOOTWEAR
     ======================================================= */

  {
    id: "footwear",
    name: "Footwear",
    slug: "footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",

    subcategories: [

      {
        id: "footwear-men",
        name: "Men's Footwear",
        items: [
          "Casual Shoes",
          "Sneakers",
          "Formal Shoes",
          "Loafers",
          "Boots",
          "Sandals",
          "Slides",
          "Flip Flops"
        ]
      },

      {
        id: "footwear-women",
        name: "Women's Footwear",
        items: [
          "Sneakers",
          "Heels",
          "Flats",
          "Loafers",
          "Boots",
          "Sandals",
          "Slides",
          "Flip Flops"
        ]
      },

      {
        id: "footwear-kids",
        name: "Kids' Footwear",
        items: [
          "Sneakers",
          "Casual Shoes",
          "School Shoes",
          "Sandals",
          "Slides",
          "Flip Flops"
        ]
      },

      {
        id: "footwear-sports",
        name: "Sports Footwear",
        items: [
          "Running Shoes",
          "Training Shoes",
          "Walking Shoes",
          "Sports Sneakers"
        ]
      }

    ]
  },


  /* =======================================================
     05 — BAGS
     ======================================================= */

  {
    id: "bags",
    name: "Bags",
    slug: "bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",

    subcategories: [

      {
        id: "bags-women",
        name: "Women's Bags",
        items: [
          "Handbags",
          "Shoulder Bags",
          "Sling Bags",
          "Crossbody Bags",
          "Tote Bags",
          "Clutches",
          "Mini Bags"
        ]
      },

      {
        id: "bags-men",
        name: "Men's Bags",
        items: [
          "Backpacks",
          "Sling Bags",
          "Crossbody Bags",
          "Laptop Bags",
          "Messenger Bags",
          "Travel Bags"
        ]
      },

      {
        id: "bags-travel",
        name: "Travel Bags",
        items: [
          "Duffle Bags",
          "Trolley Bags",
          "Backpacks",
          "Weekender Bags",
          "Travel Organisers"
        ]
      },

      {
        id: "bags-school",
        name: "School & College",
        items: [
          "School Backpacks",
          "College Backpacks",
          "Laptop Backpacks",
          "Utility Bags"
        ]
      }

    ]
  },


  /* =======================================================
     06 — ACCESSORIES
     ======================================================= */

  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",

    subcategories: [

      {
        id: "accessories-watches",
        name: "Watches",
        items: [
          "Analog Watches",
          "Digital Watches",
          "Chronograph Watches",
          "Casual Watches",
          "Premium Watches"
        ]
      },

      {
        id: "accessories-eyewear",
        name: "Eyewear",
        items: [
          "Sunglasses",
          "Aviators",
          "Wayfarers",
          "Round Frames",
          "Sports Sunglasses"
        ]
      },

      {
        id: "accessories-jewellery",
        name: "Jewellery",
        items: [
          "Necklaces",
          "Earrings",
          "Bracelets",
          "Rings",
          "Jewellery Sets"
        ]
      },

      {
        id: "accessories-belts",
        name: "Belts & Wallets",
        items: [
          "Belts",
          "Wallets",
          "Card Holders",
          "Coin Pouches"
        ]
      },

      {
        id: "accessories-fashion",
        name: "Fashion Accessories",
        items: [
          "Caps",
          "Hats",
          "Scarves",
          "Socks",
          "Ties",
          "Pocket Squares",
          "Hair Accessories"
        ]
      }

    ]
  },


  /* =======================================================
     07 — SPORTS
     ======================================================= */

  {
    id: "sports",
    name: "Sports",
    slug: "sports",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",

    subcategories: [

      {
        id: "sports-men",
        name: "Men's Sportswear",
        items: [
          "Sports T-Shirts",
          "Training T-Shirts",
          "Track Pants",
          "Joggers",
          "Sports Shorts",
          "Training Sets"
        ]
      },

      {
        id: "sports-women",
        name: "Women's Sportswear",
        items: [
          "Sports T-Shirts",
          "Sports Bras",
          "Training Tops",
          "Track Pants",
          "Joggers",
          "Gym Shorts",
          "Activewear Sets"
        ]
      },

      {
        id: "sports-footwear",
        name: "Sports Footwear",
        items: [
          "Running Shoes",
          "Training Shoes",
          "Walking Shoes",
          "Sports Sneakers"
        ]
      },

      {
        id: "sports-equipment",
        name: "Sports Accessories",
        items: [
          "Gym Bags",
          "Sports Caps",
          "Socks",
          "Water Bottles",
          "Training Accessories"
        ]
      }

    ]
  },


  /* =======================================================
     08 — WINTER WEAR
     ======================================================= */

  {
    id: "winter-wear",
    name: "Winter Wear",
    slug: "winter-wear",
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800",

    subcategories: [

      {
        id: "winter-men",
        name: "Men's Winter Wear",
        items: [
          "Puffer Jackets",
          "Winter Jackets",
          "Sweaters",
          "Sweatshirts",
          "Hoodies",
          "Thermal Wear",
          "Winter Vests"
        ]
      },

      {
        id: "winter-women",
        name: "Women's Winter Wear",
        items: [
          "Puffer Jackets",
          "Winter Jackets",
          "Sweaters",
          "Cardigans",
          "Sweatshirts",
          "Hoodies",
          "Thermal Wear"
        ]
      },

      {
        id: "winter-kids",
        name: "Kids' Winter Wear",
        items: [
          "Winter Jackets",
          "Sweaters",
          "Hoodies",
          "Sweatshirts",
          "Thermal Wear"
        ]
      },

      {
        id: "winter-accessories",
        name: "Winter Accessories",
        items: [
          "Winter Caps",
          "Beanies",
          "Scarves",
          "Gloves",
          "Socks"
        ]
      }

    ]
  }

];


/* =========================================================
   QUICK ACCESS / COLLECTIONS
   ========================================================= */

const COLLECTIONS = [

  {
    id: "new-arrivals",
    name: "New Arrivals",
    type: "collection"
  },

  {
    id: "trending",
    name: "Trending Now",
    type: "collection"
  },

  {
    id: "bestsellers",
    name: "Bestsellers",
    type: "collection"
  },

  {
    id: "flash-sale",
    name: "Flash Sale",
    type: "collection"
  },

  {
    id: "under-499",
    name: "Under ₹499",
    type: "price"
  },

  {
    id: "under-999",
    name: "Under ₹999",
    type: "price"
  },

  {
    id: "flat-50",
    name: "Flat 50% Off",
    type: "offer"
  },

  {
    id: "flat-70",
    name: "Flat 70% Off",
    type: "offer"
  },

  {
    id: "flat-80",
    name: "Flat 80% Off",
    type: "offer"
  }

];


/* =========================================================
   CATEGORY HELPERS
   ========================================================= */

function getCategoryById(id) {
  return CATEGORIES.find(
    category => category.id === id
  );
}

function getCategoryByName(name) {
  if (!name) return null;

  const target = name
    .toLowerCase()
    .trim();

  return CATEGORIES.find(
    category =>
      category.name.toLowerCase() === target
  );
}

function getAllSubcategories() {
  return CATEGORIES.flatMap(
    category =>
      category.subcategories.map(
        subcategory => ({
          ...subcategory,
          categoryId: category.id,
          categoryName: category.name
        })
      )
  );
}

function getAllCategoryItems() {
  return CATEGORIES.flatMap(
    category =>
      category.subcategories.flatMap(
        subcategory =>
          subcategory.items.map(item => ({
            name: item,
            categoryId: category.id,
            categoryName: category.name,
            subcategoryId: subcategory.id,
            subcategoryName: subcategory.name
          }))
      )
  );
}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.CATEGORIES = CATEGORIES;
window.categories = CATEGORIES;
window.COLLECTIONS = COLLECTIONS;

window.ASF_Categories = {
  getCategoryById,
  getCategoryByName,
  getAllSubcategories,
  getAllCategoryItems
};
