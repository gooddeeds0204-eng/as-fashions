/**
 * AS FASHIONS — Master Product Catalog
 * Fully populated with authentic vertical fashion portrait assets and categories.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'asf_admin_products_override';

  var PRODUCTS = [
    // ------------------ MEN'S SECTION ------------------
    {
      id: 'asf-m-01',
      name: 'Oversized Vintage Acid Wash Heavyweight Tee',
      brand: 'AS ORIGINALS',
      categoryId: 'men-clothing-t-shirts',
      gender: 'men',
      price: 699,
      mrp: 1499,
      discountPct: 53,
      stock: 18,
      rating: 4.6,
      ratingCount: 1420,
      isNew: true,
      isBestseller: true,
      colors: ['Charcoal Black', 'Faded Olive', 'Washed Grey'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80'
      ],
      description: '240 GSM French Terry 100% cotton tee with dropped shoulders, distressed ribbed collar, and raw vintage aesthetic.'
    },
    {
      id: 'asf-m-02',
      name: 'Relaxed Fit Textured Cuban Collar Linen Shirt',
      brand: 'DECCAN CROWN',
      categoryId: 'men-clothing-shirts',
      gender: 'men',
      price: 1199,
      mrp: 2499,
      discountPct: 52,
      stock: 12,
      rating: 4.4,
      ratingCount: 890,
      isNew: true,
      isBestseller: false,
      colors: ['Sage Green', 'Off White', 'Terracotta'],
      sizes: ['M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Breezy linen-cotton blend shirt crafted for warm evenings. Features a retro revere collar and tonal matte buttons.'
    },
    {
      id: 'asf-m-03',
      name: 'Baggy Wide-Leg Rigid Denim Jeans',
      brand: 'URBAN DHAAGA',
      categoryId: 'men-clothing-jeans',
      gender: 'men',
      price: 1599,
      mrp: 3299,
      discountPct: 51,
      stock: 15,
      rating: 4.7,
      ratingCount: 2310,
      isNew: false,
      isBestseller: true,
      colors: ['Vintage Indigo', 'Mid Blue', 'Raw Black'],
      sizes: ['30', '32', '34', '36'],
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&auto=format&fit=crop&q=80'
      ],
      description: '100% non-stretch authentic 13.5oz denim with a relaxed skater silhouette and subtle distressing at the seams.'
    },
    {
      id: 'asf-m-04',
      name: 'Minimalist Lightweight Trucker Bomber Jacket',
      brand: 'VANTAGE',
      categoryId: 'men-clothing-jackets',
      gender: 'men',
      price: 1899,
      mrp: 3999,
      discountPct: 52,
      stock: 8,
      rating: 4.5,
      ratingCount: 540,
      isNew: false,
      isBestseller: false,
      colors: ['Olive Drab', 'Matte Black', 'Navy'],
      sizes: ['M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Matte nylon windbreaker bomber featuring utility zipped pockets, custom metal hardware, and comfortable ribbed trims.'
    },
    {
      id: 'asf-m-05',
      name: 'Handloom Slub Cotton Short Kurta',
      brand: 'WEFT & WARP',
      categoryId: 'men-ethnic-wear-kurtas',
      gender: 'men',
      price: 899,
      mrp: 1899,
      discountPct: 52,
      stock: 22,
      rating: 4.6,
      ratingCount: 1120,
      isNew: true,
      isBestseller: true,
      colors: ['Mustard Yellow', 'Deep Maroon', 'Ivory'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Breathable hand-spun slub cotton with wooden buttons and a crisp mandarin collar. Perfect for festive celebrations and casual ethnic fits.'
    },

    // ------------------ WOMEN'S SECTION ------------------
    {
      id: 'asf-w-01',
      name: 'Smocked Bodice Tiered Meadow Floral Maxi Dress',
      brand: 'STUDIO AS',
      categoryId: 'women-western-wear-dresses',
      gender: 'women',
      price: 1399,
      mrp: 2999,
      discountPct: 53,
      stock: 14,
      rating: 4.8,
      ratingCount: 3120,
      isNew: true,
      isBestseller: true,
      colors: ['Buttercup Yellow', 'Sage Blossom', 'Lilac Floral'],
      sizes: ['XS', 'S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Flowy georgette floral maxi dress designed with puff sleeves, stretchy smocked waist, and side slits for fluid movement.'
    },
    {
      id: 'asf-w-02',
      name: 'Heritage Kalamkari Print Pure Chanderi Saree',
      brand: 'KALANKARI HOUSE',
      categoryId: 'women-indian-wear-sarees',
      gender: 'women',
      price: 2499,
      mrp: 5499,
      discountPct: 54,
      stock: 10,
      rating: 4.9,
      ratingCount: 1840,
      isNew: false,
      isBestseller: true,
      colors: ['Rust & Indigo', 'Mustard & Black'],
      sizes: ['Free Size'],
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Authentic block printed Chanderi silk blend with rich zari border details. Includes matching unstitched blouse piece.'
    },
    {
      id: 'asf-w-03',
      name: 'Cropped Fleece Pullover Hoodie & Joggers Set',
      brand: 'BLOOMSTREET',
      categoryId: 'women-western-wear-tops',
      gender: 'women',
      price: 1299,
      mrp: 2799,
      discountPct: 53,
      stock: 16,
      rating: 4.5,
      ratingCount: 940,
      isNew: true,
      isBestseller: false,
      colors: ['Ochre Yellow', 'Lavender', 'Charcoal'],
      sizes: ['S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Super-soft brushed interior fleece two-piece lounge set with cinch elastic waistband and drop-shoulder crop silhouette.'
    },
    {
      id: 'asf-w-04',
      name: 'Anarkali Embroidered Kurta with Dupatta Set',
      brand: 'NORTHLINE',
      categoryId: 'women-indian-wear-kurtas',
      gender: 'women',
      price: 1999,
      mrp: 4299,
      discountPct: 53,
      stock: 9,
      rating: 4.7,
      ratingCount: 1650,
      isNew: false,
      isBestseller: true,
      colors: ['Emerald Green', 'Royal Crimson', 'Teal'],
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Zari and sequin embroidered rayon flared Anarkali paired with tapered pants and a sheer organza bordered dupatta.'
    },

    // ------------------ FOOTWEAR & ACCESSORIES ------------------
    {
      id: 'asf-f-01',
      name: 'Retro Chunky Sole Low-Top Street Sneakers',
      brand: 'IRONLOOM',
      categoryId: 'men-footwear-sneakers',
      gender: 'unisex',
      price: 1799,
      mrp: 3599,
      discountPct: 50,
      stock: 12,
      rating: 4.6,
      ratingCount: 2200,
      isNew: true,
      isBestseller: true,
      colors: ['Chalk White & Navy', 'All Black', 'White & Tan'],
      sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Dual-tone premium faux leather upper with cushioned OrthoLite insole and high-grip rubber outsole for everyday comfort.'
    },
    {
      id: 'asf-a-01',
      name: 'Structured Vegan Leather Top-Handle Tote Bag',
      brand: 'MARIGOLD & CO',
      categoryId: 'women-bags-handbags',
      gender: 'women',
      price: 1499,
      mrp: 2999,
      discountPct: 50,
      stock: 7,
      rating: 4.8,
      ratingCount: 780,
      isNew: true,
      isBestseller: false,
      colors: ['Tan Brown', 'Midnight Black', 'Ivory Cream'],
      sizes: ['Regular'],
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Roomy compartment that comfortably fits a 13-inch laptop, complete with gold-tone hardware and detachable crossbody strap.'
    },
    {
      id: 'asf-a-02',
      name: 'Minimalist Chronograph Mesh Watch',
      brand: 'PETAL ROW',
      categoryId: 'men-accessories-watches',
      gender: 'unisex',
      price: 1299,
      mrp: 2999,
      discountPct: 56,
      stock: 14,
      rating: 4.7,
      ratingCount: 1450,
      isNew: false,
      isBestseller: true,
      colors: ['Matte Black', 'Brushed Rose Gold', 'Silver'],
      sizes: ['40mm'],
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80'
      ],
      description: 'Japanese quartz movement in a slim stainless steel casing, finished with a breathable magnetic mesh loop band.'
    }
  ];

  /* ---------------- Persistence & Helper APIs ---------------- */
  function getStoredOverrides() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  function setStoredOverrides(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      console.error('Storage full / save failed', e);
      return false;
    }
  }

  function getAllProducts() {
    var overrides = getStoredOverrides();
    return (overrides && overrides.length) ? overrides : PRODUCTS;
  }

  function getProductById(id) {
    return getAllProducts().find(function (p) { return p.id === id; }) || null;
  }

  function getProductsByCategory(catId) {
    var all = getAllProducts();
    var catApi = global.ASF && global.ASF.categories;
    if (!catApi || typeof catApi.isDescendantOf !== 'function') {
      return all.filter(function (p) { return p.categoryId === catId; });
    }
    return all.filter(function (p) {
      return p.categoryId === catId || catApi.isDescendantOf(p.categoryId, catId);
    });
  }

  function getNewArrivals() {
    var list = getAllProducts().filter(function (p) { return p.isNew; });
    return list.length ? list : getAllProducts().slice(0, 8);
  }

  function getBestsellers() {
    var list = getAllProducts().filter(function (p) { return p.isBestseller; });
    return list.length ? list : getAllProducts().slice().reverse();
  }

  function searchProducts(query) {
    var q = (query || '').trim().toLowerCase();
    if (!q) return [];
    return getAllProducts().filter(function (p) {
      return (p.name && p.name.toLowerCase().indexOf(q) !== -1) ||
             (p.brand && p.brand.toLowerCase().indexOf(q) !== -1) ||
             (p.description && p.description.toLowerCase().indexOf(q) !== -1);
    });
  }

  /* ---------------- Admin Hooks ---------------- */
  function addProduct(prod) {
    var list = getAllProducts().slice();
    list.unshift(prod);
    var saved = setStoredOverrides(list);
    return { success: true, saved: saved, product: prod };
  }

  function updateProduct(id, patch) {
    var list = getAllProducts().slice();
    var idx = list.findIndex(function (p) { return p.id === id; });
    if (idx === -1) return { success: false, error: 'Product not found' };
    list[idx] = Object.assign({}, list[idx], patch);
    var saved = setStoredOverrides(list);
    return { success: true, saved: saved, product: list[idx] };
  }

  function deleteProduct(id) {
    var list = getAllProducts().filter(function (p) { return p.id !== id; });
    var saved = setStoredOverrides(list);
    return { success: true, saved: saved };
  }

  function getNextProductId() {
    return 'asf-item-' + Date.now().toString().slice(-6);
  }

  function clearOverrides() {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  }

  function exportProductsFileText() {
    return '/* AS FASHIONS — Exported Catalog */\nwindow.__EXPORTED_PRODUCTS = ' + JSON.stringify(getAllProducts(), null, 2) + ';';
  }

  global.ASF = global.ASF || {};
  global.ASF.products = {
    PRODUCTS: PRODUCTS,
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    getProductsByCategory: getProductsByCategory,
    getNewArrivals: getNewArrivals,
    getBestsellers: getBestsellers,
    searchProducts: searchProducts,
    admin: {
      addProduct: addProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct,
      getNextProductId: getNextProductId,
      clearOverrides: clearOverrides,
      exportProductsFileText: exportProductsFileText
    }
  };
})(window);
