/**
 * AS FASHIONS — Product Catalog
 * Every product.categoryId matches an id in js/categories.js exactly,
 * so PLP filters, breadcrumbs, and category pages stay in sync automatically.
 *
 * Product schema:
 * {
 *   id, name, brand, categoryId, gender,
 *   mrp, price, discountPct,
 *   colors: string[], sizes: string[],
 *   rating, ratingCount,
 *   image, images: string[],
 *   isNew, isBestseller, tags: string[]
 * }
 */
(function (global) {
  'use strict';

  var PRODUCTS = [
  {
    "id": "asf-0001",
    "name": "Studio AS Slippers",
    "brand": "Studio AS",
    "categoryId": "men-footwear-slippers",
    "gender": "men",
    "mrp": 1499,
    "price": 750,
    "discountPct": 50,
    "colors": [
      "Mustard",
      "Olive"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.9,
    "ratingCount": 876,
    "image": "assets/products/asf-0001.jpg",
    "images": [
      "assets/products/asf-0001.jpg",
      "assets/products/asf-0001-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0002",
    "name": "Ironloom Slim Fit",
    "brand": "Ironloom",
    "categoryId": "men-clothing-jeans-slim-fit",
    "gender": "men",
    "mrp": 2199,
    "price": 2199,
    "discountPct": 0,
    "colors": [
      "Olive",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 583,
    "image": "assets/products/asf-0002.jpg",
    "images": [
      "assets/products/asf-0002.jpg",
      "assets/products/asf-0002-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0003",
    "name": "Urban Dhaaga Slim Fit",
    "brand": "Urban Dhaaga",
    "categoryId": "men-clothing-jeans-slim-fit",
    "gender": "men",
    "mrp": 1799,
    "price": 1079,
    "discountPct": 40,
    "colors": [
      "Olive",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 578,
    "image": "assets/products/asf-0003.jpg",
    "images": [
      "assets/products/asf-0003.jpg",
      "assets/products/asf-0003-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0004",
    "name": "Northline Clutches",
    "brand": "Northline",
    "categoryId": "women-bags-clutches",
    "gender": "women",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "Olive",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 1929,
    "image": "assets/products/asf-0004.jpg",
    "images": [
      "assets/products/asf-0004.jpg",
      "assets/products/asf-0004-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0005",
    "name": "Marigold & Co Heels",
    "brand": "Marigold & Co",
    "categoryId": "women-footwear-heels",
    "gender": "women",
    "mrp": 4999,
    "price": 2999,
    "discountPct": 40,
    "colors": [
      "Rust",
      "Maroon"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.5,
    "ratingCount": 1405,
    "image": "assets/products/asf-0005.jpg",
    "images": [
      "assets/products/asf-0005.jpg",
      "assets/products/asf-0005-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0006",
    "name": "Vantage Panties",
    "brand": "Vantage",
    "categoryId": "women-lingerie-and-innerwear-panties",
    "gender": "women",
    "mrp": 799,
    "price": 479,
    "discountPct": 40,
    "colors": [
      "Rust",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 447,
    "image": "assets/products/asf-0006.jpg",
    "images": [
      "assets/products/asf-0006.jpg",
      "assets/products/asf-0006-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0007",
    "name": "Kalankari House Shorts",
    "brand": "Kalankari House",
    "categoryId": "men-sportswear-shorts",
    "gender": "men",
    "mrp": 3499,
    "price": 2449,
    "discountPct": 30,
    "colors": [
      "Navy",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 2221,
    "image": "assets/products/asf-0007.jpg",
    "images": [
      "assets/products/asf-0007.jpg",
      "assets/products/asf-0007-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0008",
    "name": "Weft & Warp Shorts",
    "brand": "Weft & Warp",
    "categoryId": "men-sportswear-shorts",
    "gender": "men",
    "mrp": 799,
    "price": 559,
    "discountPct": 30,
    "colors": [
      "Grey",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 1498,
    "image": "assets/products/asf-0008.jpg",
    "images": [
      "assets/products/asf-0008.jpg",
      "assets/products/asf-0008-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0009",
    "name": "Kalankari House Loafers",
    "brand": "Kalankari House",
    "categoryId": "men-footwear-loafers",
    "gender": "men",
    "mrp": 1499,
    "price": 1499,
    "discountPct": 0,
    "colors": [
      "Ivory",
      "White"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.7,
    "ratingCount": 2002,
    "image": "assets/products/asf-0009.jpg",
    "images": [
      "assets/products/asf-0009.jpg",
      "assets/products/asf-0009-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0010",
    "name": "Ironloom Sweatshirts",
    "brand": "Ironloom",
    "categoryId": "winter-wear-kids-sweatshirts",
    "gender": "unisex",
    "mrp": 1199,
    "price": 1199,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 1745,
    "image": "assets/products/asf-0010.jpg",
    "images": [
      "assets/products/asf-0010.jpg",
      "assets/products/asf-0010-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0011",
    "name": "Vantage Sweatshirts",
    "brand": "Vantage",
    "categoryId": "winter-wear-kids-sweatshirts",
    "gender": "unisex",
    "mrp": 1499,
    "price": 899,
    "discountPct": 40,
    "colors": [
      "Olive",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 2131,
    "image": "assets/products/asf-0011.jpg",
    "images": [
      "assets/products/asf-0011.jpg",
      "assets/products/asf-0011-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0012",
    "name": "Urban Dhaaga Trunks",
    "brand": "Urban Dhaaga",
    "categoryId": "men-innerwear-and-loungewear-trunks",
    "gender": "men",
    "mrp": 2199,
    "price": 2199,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 41,
    "image": "assets/products/asf-0012.jpg",
    "images": [
      "assets/products/asf-0012.jpg",
      "assets/products/asf-0012-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0013",
    "name": "Weft & Warp Sandals",
    "brand": "Weft & Warp",
    "categoryId": "footwear-kids-sandals",
    "gender": "unisex",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "White",
      "Rust"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.9,
    "ratingCount": 2000,
    "image": "assets/products/asf-0013.jpg",
    "images": [
      "assets/products/asf-0013.jpg",
      "assets/products/asf-0013-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0014",
    "name": "Kalankari House Baggy Fit",
    "brand": "Kalankari House",
    "categoryId": "men-clothing-jeans-baggy-fit",
    "gender": "men",
    "mrp": 3999,
    "price": 3199,
    "discountPct": 20,
    "colors": [
      "Grey",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 409,
    "image": "assets/products/asf-0014.jpg",
    "images": [
      "assets/products/asf-0014.jpg",
      "assets/products/asf-0014-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0015",
    "name": "Studio AS Baggy Fit",
    "brand": "Studio AS",
    "categoryId": "men-clothing-jeans-baggy-fit",
    "gender": "men",
    "mrp": 2499,
    "price": 1999,
    "discountPct": 20,
    "colors": [
      "White",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 1401,
    "image": "assets/products/asf-0015.jpg",
    "images": [
      "assets/products/asf-0015.jpg",
      "assets/products/asf-0015-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0016",
    "name": "Ironloom Relaxed Fit",
    "brand": "Ironloom",
    "categoryId": "men-clothing-jeans-relaxed-fit",
    "gender": "men",
    "mrp": 1499,
    "price": 1049,
    "discountPct": 30,
    "colors": [
      "Navy",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 1906,
    "image": "assets/products/asf-0016.jpg",
    "images": [
      "assets/products/asf-0016.jpg",
      "assets/products/asf-0016-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0017",
    "name": "Studio AS Nightwear",
    "brand": "Studio AS",
    "categoryId": "men-innerwear-and-loungewear-nightwear",
    "gender": "men",
    "mrp": 3499,
    "price": 3499,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.8,
    "ratingCount": 980,
    "image": "assets/products/asf-0017.jpg",
    "images": [
      "assets/products/asf-0017.jpg",
      "assets/products/asf-0017-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0018",
    "name": "Northline Palazzo Sets",
    "brand": "Northline",
    "categoryId": "women-indian-wear-palazzo-sets",
    "gender": "women",
    "mrp": 2499,
    "price": 2499,
    "discountPct": 0,
    "colors": [
      "Olive",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.8,
    "ratingCount": 1098,
    "image": "assets/products/asf-0018.jpg",
    "images": [
      "assets/products/asf-0018.jpg",
      "assets/products/asf-0018-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0019",
    "name": "Petal Row Innerwear Sets",
    "brand": "Petal Row",
    "categoryId": "women-lingerie-and-innerwear-innerwear-sets",
    "gender": "women",
    "mrp": 2499,
    "price": 1499,
    "discountPct": 40,
    "colors": [
      "Grey",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 903,
    "image": "assets/products/asf-0019.jpg",
    "images": [
      "assets/products/asf-0019.jpg",
      "assets/products/asf-0019-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0020",
    "name": "Weft & Warp Gym Wear",
    "brand": "Weft & Warp",
    "categoryId": "sports-gym-wear",
    "gender": "unisex",
    "mrp": 799,
    "price": 479,
    "discountPct": 40,
    "colors": [
      "Black",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 2071,
    "image": "assets/products/asf-0020.jpg",
    "images": [
      "assets/products/asf-0020.jpg",
      "assets/products/asf-0020-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0021",
    "name": "Marigold & Co Gym Wear",
    "brand": "Marigold & Co",
    "categoryId": "sports-gym-wear",
    "gender": "unisex",
    "mrp": 799,
    "price": 559,
    "discountPct": 30,
    "colors": [
      "Navy",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 975,
    "image": "assets/products/asf-0021.jpg",
    "images": [
      "assets/products/asf-0021.jpg",
      "assets/products/asf-0021-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0022",
    "name": "Urban Dhaaga Skinny Fit",
    "brand": "Urban Dhaaga",
    "categoryId": "men-clothing-jeans-skinny-fit",
    "gender": "men",
    "mrp": 1499,
    "price": 1049,
    "discountPct": 30,
    "colors": [
      "Black",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 2327,
    "image": "assets/products/asf-0022.jpg",
    "images": [
      "assets/products/asf-0022.jpg",
      "assets/products/asf-0022-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0023",
    "name": "Weft & Warp Skinny Fit",
    "brand": "Weft & Warp",
    "categoryId": "men-clothing-jeans-skinny-fit",
    "gender": "men",
    "mrp": 1499,
    "price": 899,
    "discountPct": 40,
    "colors": [
      "Beige",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 1240,
    "image": "assets/products/asf-0023.jpg",
    "images": [
      "assets/products/asf-0023.jpg",
      "assets/products/asf-0023-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0024",
    "name": "Urban Dhaaga Printed Kurta Sets",
    "brand": "Urban Dhaaga",
    "categoryId": "women-indian-wear-kurta-sets-printed-kurta-sets",
    "gender": "women",
    "mrp": 799,
    "price": 639,
    "discountPct": 20,
    "colors": [
      "Ivory",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 885,
    "image": "assets/products/asf-0024.jpg",
    "images": [
      "assets/products/asf-0024.jpg",
      "assets/products/asf-0024-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0025",
    "name": "Weft & Warp Flat 50% Off",
    "brand": "Weft & Warp",
    "categoryId": "sale-flat-50-off",
    "gender": "unisex",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "Maroon",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 2237,
    "image": "assets/products/asf-0025.jpg",
    "images": [
      "assets/products/asf-0025.jpg",
      "assets/products/asf-0025-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0026",
    "name": "Petal Row Casual Shoes",
    "brand": "Petal Row",
    "categoryId": "footwear-kids-casual-shoes",
    "gender": "unisex",
    "mrp": 3499,
    "price": 3499,
    "discountPct": 0,
    "colors": [
      "Maroon",
      "White"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.7,
    "ratingCount": 562,
    "image": "assets/products/asf-0026.jpg",
    "images": [
      "assets/products/asf-0026.jpg",
      "assets/products/asf-0026-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0027",
    "name": "Vantage Casual Shoes",
    "brand": "Vantage",
    "categoryId": "footwear-kids-casual-shoes",
    "gender": "unisex",
    "mrp": 3499,
    "price": 3499,
    "discountPct": 0,
    "colors": [
      "Maroon",
      "Beige"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.5,
    "ratingCount": 845,
    "image": "assets/products/asf-0027.jpg",
    "images": [
      "assets/products/asf-0027.jpg",
      "assets/products/asf-0027-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0028",
    "name": "Studio AS Ethnic Dresses",
    "brand": "Studio AS",
    "categoryId": "women-indian-wear-ethnic-dresses",
    "gender": "women",
    "mrp": 2999,
    "price": 2699,
    "discountPct": 10,
    "colors": [
      "White",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 192,
    "image": "assets/products/asf-0028.jpg",
    "images": [
      "assets/products/asf-0028.jpg",
      "assets/products/asf-0028-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0029",
    "name": "Northline Ethnic Dresses",
    "brand": "Northline",
    "categoryId": "women-indian-wear-ethnic-dresses",
    "gender": "women",
    "mrp": 4999,
    "price": 4499,
    "discountPct": 10,
    "colors": [
      "Grey",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 2309,
    "image": "assets/products/asf-0029.jpg",
    "images": [
      "assets/products/asf-0029.jpg",
      "assets/products/asf-0029-2.jpg"
    ],
    "isNew": true,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0030",
    "name": "Studio AS Wallets",
    "brand": "Studio AS",
    "categoryId": "bags-men-wallets",
    "gender": "unisex",
    "mrp": 1199,
    "price": 839,
    "discountPct": 30,
    "colors": [
      "Mustard",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 534,
    "image": "assets/products/asf-0030.jpg",
    "images": [
      "assets/products/asf-0030.jpg",
      "assets/products/asf-0030-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0031",
    "name": "Kalankari House Wallets",
    "brand": "Kalankari House",
    "categoryId": "bags-men-wallets",
    "gender": "unisex",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Beige",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 2305,
    "image": "assets/products/asf-0031.jpg",
    "images": [
      "assets/products/asf-0031.jpg",
      "assets/products/asf-0031-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0032",
    "name": "Northline Wallets",
    "brand": "Northline",
    "categoryId": "women-bags-wallets",
    "gender": "women",
    "mrp": 1199,
    "price": 1199,
    "discountPct": 0,
    "colors": [
      "Navy",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.6,
    "ratingCount": 1372,
    "image": "assets/products/asf-0032.jpg",
    "images": [
      "assets/products/asf-0032.jpg",
      "assets/products/asf-0032-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0033",
    "name": "Kalankari House Wallets",
    "brand": "Kalankari House",
    "categoryId": "women-bags-wallets",
    "gender": "women",
    "mrp": 4999,
    "price": 2500,
    "discountPct": 50,
    "colors": [
      "Maroon",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 454,
    "image": "assets/products/asf-0033.jpg",
    "images": [
      "assets/products/asf-0033.jpg",
      "assets/products/asf-0033-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0034",
    "name": "Ironloom Oversized",
    "brand": "Ironloom",
    "categoryId": "men-clothing-t-shirts-oversized",
    "gender": "men",
    "mrp": 1499,
    "price": 1499,
    "discountPct": 0,
    "colors": [
      "Mustard",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 944,
    "image": "assets/products/asf-0034.jpg",
    "images": [
      "assets/products/asf-0034.jpg",
      "assets/products/asf-0034-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0035",
    "name": "Marigold & Co Midi Dresses",
    "brand": "Marigold & Co",
    "categoryId": "women-western-wear-dresses-midi-dresses",
    "gender": "women",
    "mrp": 2199,
    "price": 1979,
    "discountPct": 10,
    "colors": [
      "Maroon",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1649,
    "image": "assets/products/asf-0035.jpg",
    "images": [
      "assets/products/asf-0035.jpg",
      "assets/products/asf-0035-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0036",
    "name": "Vantage Essentials",
    "brand": "Vantage",
    "categoryId": "collections-essentials",
    "gender": "unisex",
    "mrp": 799,
    "price": 799,
    "discountPct": 0,
    "colors": [
      "Navy",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.6,
    "ratingCount": 1791,
    "image": "assets/products/asf-0036.jpg",
    "images": [
      "assets/products/asf-0036.jpg",
      "assets/products/asf-0036-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0037",
    "name": "Marigold & Co Onesies",
    "brand": "Marigold & Co",
    "categoryId": "kids-baby-onesies",
    "gender": "kids",
    "mrp": 3999,
    "price": 2799,
    "discountPct": 30,
    "colors": [
      "Olive",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 1798,
    "image": "assets/products/asf-0037.jpg",
    "images": [
      "assets/products/asf-0037.jpg",
      "assets/products/asf-0037-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0038",
    "name": "Kalankari House New Arrivals",
    "brand": "Kalankari House",
    "categoryId": "collections-new-arrivals",
    "gender": "unisex",
    "mrp": 4999,
    "price": 2999,
    "discountPct": 40,
    "colors": [
      "Mustard",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 1364,
    "image": "assets/products/asf-0038.jpg",
    "images": [
      "assets/products/asf-0038.jpg",
      "assets/products/asf-0038-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0039",
    "name": "Vantage New Arrivals",
    "brand": "Vantage",
    "categoryId": "collections-new-arrivals",
    "gender": "unisex",
    "mrp": 999,
    "price": 599,
    "discountPct": 40,
    "colors": [
      "Rust",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1348,
    "image": "assets/products/asf-0039.jpg",
    "images": [
      "assets/products/asf-0039.jpg",
      "assets/products/asf-0039-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0040",
    "name": "Bloomstreet Party Dresses",
    "brand": "Bloomstreet",
    "categoryId": "women-western-wear-dresses-party-dresses",
    "gender": "women",
    "mrp": 1499,
    "price": 1199,
    "discountPct": 20,
    "colors": [
      "Navy",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 13,
    "image": "assets/products/asf-0040.jpg",
    "images": [
      "assets/products/asf-0040.jpg",
      "assets/products/asf-0040-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0041",
    "name": "Weft & Warp Sharara Sets",
    "brand": "Weft & Warp",
    "categoryId": "women-indian-wear-sharara-sets",
    "gender": "women",
    "mrp": 3999,
    "price": 2399,
    "discountPct": 40,
    "colors": [
      "Grey",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 887,
    "image": "assets/products/asf-0041.jpg",
    "images": [
      "assets/products/asf-0041.jpg",
      "assets/products/asf-0041-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0042",
    "name": "Marigold & Co Sharara Sets",
    "brand": "Marigold & Co",
    "categoryId": "women-indian-wear-sharara-sets",
    "gender": "women",
    "mrp": 1199,
    "price": 719,
    "discountPct": 40,
    "colors": [
      "Maroon",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1384,
    "image": "assets/products/asf-0042.jpg",
    "images": [
      "assets/products/asf-0042.jpg",
      "assets/products/asf-0042-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0043",
    "name": "Kalankari House Jumpsuits",
    "brand": "Kalankari House",
    "categoryId": "kids-girls-jumpsuits",
    "gender": "kids",
    "mrp": 4999,
    "price": 4499,
    "discountPct": 10,
    "colors": [
      "Beige",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.6,
    "ratingCount": 1014,
    "image": "assets/products/asf-0043.jpg",
    "images": [
      "assets/products/asf-0043.jpg",
      "assets/products/asf-0043-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0044",
    "name": "Urban Dhaaga Flat 60% Off",
    "brand": "Urban Dhaaga",
    "categoryId": "sale-flat-60-off",
    "gender": "unisex",
    "mrp": 2999,
    "price": 2399,
    "discountPct": 20,
    "colors": [
      "Beige",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 1011,
    "image": "assets/products/asf-0044.jpg",
    "images": [
      "assets/products/asf-0044.jpg",
      "assets/products/asf-0044-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0045",
    "name": "Northline Winter Edit",
    "brand": "Northline",
    "categoryId": "collections-winter-edit",
    "gender": "unisex",
    "mrp": 2499,
    "price": 2499,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 1032,
    "image": "assets/products/asf-0045.jpg",
    "images": [
      "assets/products/asf-0045.jpg",
      "assets/products/asf-0045-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0046",
    "name": "Petal Row 13-16 Years",
    "brand": "Petal Row",
    "categoryId": "kids-shop-by-age-13-16-years",
    "gender": "kids",
    "mrp": 2999,
    "price": 1799,
    "discountPct": 40,
    "colors": [
      "Rust",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.7,
    "ratingCount": 1824,
    "image": "assets/products/asf-0046.jpg",
    "images": [
      "assets/products/asf-0046.jpg",
      "assets/products/asf-0046-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0047",
    "name": "Petal Row Sneakers",
    "brand": "Petal Row",
    "categoryId": "men-footwear-sneakers",
    "gender": "men",
    "mrp": 2499,
    "price": 1250,
    "discountPct": 50,
    "colors": [
      "Grey",
      "Navy"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.5,
    "ratingCount": 1956,
    "image": "assets/products/asf-0047.jpg",
    "images": [
      "assets/products/asf-0047.jpg",
      "assets/products/asf-0047-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0048",
    "name": "Petal Row Sneakers",
    "brand": "Petal Row",
    "categoryId": "men-footwear-sneakers",
    "gender": "men",
    "mrp": 4999,
    "price": 4499,
    "discountPct": 10,
    "colors": [
      "Grey",
      "Beige"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.9,
    "ratingCount": 329,
    "image": "assets/products/asf-0048.jpg",
    "images": [
      "assets/products/asf-0048.jpg",
      "assets/products/asf-0048-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0049",
    "name": "Marigold & Co Sandals",
    "brand": "Marigold & Co",
    "categoryId": "kids-kids-footwear-sandals",
    "gender": "kids",
    "mrp": 2199,
    "price": 1539,
    "discountPct": 30,
    "colors": [
      "Navy",
      "Ivory"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.9,
    "ratingCount": 637,
    "image": "assets/products/asf-0049.jpg",
    "images": [
      "assets/products/asf-0049.jpg",
      "assets/products/asf-0049-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0050",
    "name": "Ironloom Baby Sets",
    "brand": "Ironloom",
    "categoryId": "kids-baby-baby-sets",
    "gender": "kids",
    "mrp": 2199,
    "price": 1539,
    "discountPct": 30,
    "colors": [
      "Olive",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 1732,
    "image": "assets/products/asf-0050.jpg",
    "images": [
      "assets/products/asf-0050.jpg",
      "assets/products/asf-0050-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0051",
    "name": "Urban Dhaaga Slippers",
    "brand": "Urban Dhaaga",
    "categoryId": "women-footwear-slippers",
    "gender": "women",
    "mrp": 799,
    "price": 400,
    "discountPct": 50,
    "colors": [
      "Olive",
      "Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.6,
    "ratingCount": 1452,
    "image": "assets/products/asf-0051.jpg",
    "images": [
      "assets/products/asf-0051.jpg",
      "assets/products/asf-0051-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0052",
    "name": "Petal Row Slippers",
    "brand": "Petal Row",
    "categoryId": "women-footwear-slippers",
    "gender": "women",
    "mrp": 2499,
    "price": 1749,
    "discountPct": 30,
    "colors": [
      "Ivory",
      "Beige"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.2,
    "ratingCount": 1129,
    "image": "assets/products/asf-0052.jpg",
    "images": [
      "assets/products/asf-0052.jpg",
      "assets/products/asf-0052-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0053",
    "name": "Bloomstreet Shorts",
    "brand": "Bloomstreet",
    "categoryId": "men-clothing-shorts",
    "gender": "men",
    "mrp": 4999,
    "price": 2999,
    "discountPct": 40,
    "colors": [
      "Navy",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.7,
    "ratingCount": 2199,
    "image": "assets/products/asf-0053.jpg",
    "images": [
      "assets/products/asf-0053.jpg",
      "assets/products/asf-0053-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0054",
    "name": "Marigold & Co Sunglasses",
    "brand": "Marigold & Co",
    "categoryId": "accessories-sunglasses",
    "gender": "unisex",
    "mrp": 4999,
    "price": 4999,
    "discountPct": 0,
    "colors": [
      "Olive",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 756,
    "image": "assets/products/asf-0054.jpg",
    "images": [
      "assets/products/asf-0054.jpg",
      "assets/products/asf-0054-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0055",
    "name": "Weft & Warp Sunglasses",
    "brand": "Weft & Warp",
    "categoryId": "accessories-sunglasses",
    "gender": "unisex",
    "mrp": 1499,
    "price": 1199,
    "discountPct": 20,
    "colors": [
      "Mustard",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 1738,
    "image": "assets/products/asf-0055.jpg",
    "images": [
      "assets/products/asf-0055.jpg",
      "assets/products/asf-0055-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0056",
    "name": "Weft & Warp Backpacks",
    "brand": "Weft & Warp",
    "categoryId": "men-accessories-backpacks",
    "gender": "men",
    "mrp": 3499,
    "price": 3499,
    "discountPct": 0,
    "colors": [
      "Beige",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 176,
    "image": "assets/products/asf-0056.jpg",
    "images": [
      "assets/products/asf-0056.jpg",
      "assets/products/asf-0056-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0057",
    "name": "Northline 9-12 Years",
    "brand": "Northline",
    "categoryId": "kids-shop-by-age-9-12-years",
    "gender": "kids",
    "mrp": 799,
    "price": 559,
    "discountPct": 30,
    "colors": [
      "Beige",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 480,
    "image": "assets/products/asf-0057.jpg",
    "images": [
      "assets/products/asf-0057.jpg",
      "assets/products/asf-0057-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0058",
    "name": "Weft & Warp Dhotis",
    "brand": "Weft & Warp",
    "categoryId": "men-ethnic-wear-dhotis",
    "gender": "men",
    "mrp": 1799,
    "price": 900,
    "discountPct": 50,
    "colors": [
      "Navy",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 682,
    "image": "assets/products/asf-0058.jpg",
    "images": [
      "assets/products/asf-0058.jpg",
      "assets/products/asf-0058-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0059",
    "name": "Urban Dhaaga Dhotis",
    "brand": "Urban Dhaaga",
    "categoryId": "men-ethnic-wear-dhotis",
    "gender": "men",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Olive",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.7,
    "ratingCount": 824,
    "image": "assets/products/asf-0059.jpg",
    "images": [
      "assets/products/asf-0059.jpg",
      "assets/products/asf-0059-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0060",
    "name": "Vantage Sunglasses",
    "brand": "Vantage",
    "categoryId": "women-accessories-sunglasses",
    "gender": "women",
    "mrp": 1499,
    "price": 1499,
    "discountPct": 0,
    "colors": [
      "Ivory",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 2330,
    "image": "assets/products/asf-0060.jpg",
    "images": [
      "assets/products/asf-0060.jpg",
      "assets/products/asf-0060-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0061",
    "name": "Weft & Warp Sunglasses",
    "brand": "Weft & Warp",
    "categoryId": "women-accessories-sunglasses",
    "gender": "women",
    "mrp": 2499,
    "price": 1499,
    "discountPct": 40,
    "colors": [
      "White",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 63,
    "image": "assets/products/asf-0061.jpg",
    "images": [
      "assets/products/asf-0061.jpg",
      "assets/products/asf-0061-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0062",
    "name": "Ironloom Backpacks",
    "brand": "Ironloom",
    "categoryId": "kids-kids-accessories-backpacks",
    "gender": "kids",
    "mrp": 2499,
    "price": 2249,
    "discountPct": 10,
    "colors": [
      "Navy",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 2149,
    "image": "assets/products/asf-0062.jpg",
    "images": [
      "assets/products/asf-0062.jpg",
      "assets/products/asf-0062-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0063",
    "name": "Bloomstreet Anarkali Kurta Sets",
    "brand": "Bloomstreet",
    "categoryId": "women-indian-wear-kurta-sets-anarkali-kurta-sets",
    "gender": "women",
    "mrp": 2999,
    "price": 2399,
    "discountPct": 20,
    "colors": [
      "Ivory",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 1017,
    "image": "assets/products/asf-0063.jpg",
    "images": [
      "assets/products/asf-0063.jpg",
      "assets/products/asf-0063-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0064",
    "name": "Ironloom Anarkali Kurta Sets",
    "brand": "Ironloom",
    "categoryId": "women-indian-wear-kurta-sets-anarkali-kurta-sets",
    "gender": "women",
    "mrp": 2999,
    "price": 2999,
    "discountPct": 0,
    "colors": [
      "Ivory",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 2036,
    "image": "assets/products/asf-0064.jpg",
    "images": [
      "assets/products/asf-0064.jpg",
      "assets/products/asf-0064-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0065",
    "name": "Vantage Silk Kurta Sets",
    "brand": "Vantage",
    "categoryId": "men-ethnic-wear-kurta-sets-silk-kurta-sets",
    "gender": "men",
    "mrp": 2199,
    "price": 1100,
    "discountPct": 50,
    "colors": [
      "Mustard",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.7,
    "ratingCount": 1143,
    "image": "assets/products/asf-0065.jpg",
    "images": [
      "assets/products/asf-0065.jpg",
      "assets/products/asf-0065-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0066",
    "name": "Bloomstreet Blazers",
    "brand": "Bloomstreet",
    "categoryId": "men-clothing-blazers",
    "gender": "men",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "Grey",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 1962,
    "image": "assets/products/asf-0066.jpg",
    "images": [
      "assets/products/asf-0066.jpg",
      "assets/products/asf-0066-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0067",
    "name": "Kalankari House Shapewear",
    "brand": "Kalankari House",
    "categoryId": "women-lingerie-and-innerwear-shapewear",
    "gender": "women",
    "mrp": 999,
    "price": 899,
    "discountPct": 10,
    "colors": [
      "Olive",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 2394,
    "image": "assets/products/asf-0067.jpg",
    "images": [
      "assets/products/asf-0067.jpg",
      "assets/products/asf-0067-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0068",
    "name": "Petal Row Formal Shoes",
    "brand": "Petal Row",
    "categoryId": "footwear-men-formal-shoes",
    "gender": "unisex",
    "mrp": 2499,
    "price": 1499,
    "discountPct": 40,
    "colors": [
      "Mustard",
      "Ivory"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.4,
    "ratingCount": 1121,
    "image": "assets/products/asf-0068.jpg",
    "images": [
      "assets/products/asf-0068.jpg",
      "assets/products/asf-0068-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0069",
    "name": "Marigold & Co Sports Jackets",
    "brand": "Marigold & Co",
    "categoryId": "men-sportswear-sports-jackets",
    "gender": "men",
    "mrp": 1499,
    "price": 1349,
    "discountPct": 10,
    "colors": [
      "Rust",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 1995,
    "image": "assets/products/asf-0069.jpg",
    "images": [
      "assets/products/asf-0069.jpg",
      "assets/products/asf-0069-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0070",
    "name": "Vantage Sports Jackets",
    "brand": "Vantage",
    "categoryId": "men-sportswear-sports-jackets",
    "gender": "men",
    "mrp": 3499,
    "price": 2449,
    "discountPct": 30,
    "colors": [
      "White",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 1490,
    "image": "assets/products/asf-0070.jpg",
    "images": [
      "assets/products/asf-0070.jpg",
      "assets/products/asf-0070-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0071",
    "name": "Studio AS Kids Sportswear",
    "brand": "Studio AS",
    "categoryId": "sports-kids-sportswear",
    "gender": "unisex",
    "mrp": 1199,
    "price": 1079,
    "discountPct": 10,
    "colors": [
      "Black",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 529,
    "image": "assets/products/asf-0071.jpg",
    "images": [
      "assets/products/asf-0071.jpg",
      "assets/products/asf-0071-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0072",
    "name": "Studio AS Kids Sportswear",
    "brand": "Studio AS",
    "categoryId": "sports-kids-sportswear",
    "gender": "unisex",
    "mrp": 999,
    "price": 500,
    "discountPct": 50,
    "colors": [
      "Ivory",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 1816,
    "image": "assets/products/asf-0072.jpg",
    "images": [
      "assets/products/asf-0072.jpg",
      "assets/products/asf-0072-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0073",
    "name": "Marigold & Co Track Pants",
    "brand": "Marigold & Co",
    "categoryId": "men-clothing-track-pants",
    "gender": "men",
    "mrp": 2999,
    "price": 2999,
    "discountPct": 0,
    "colors": [
      "Olive",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 231,
    "image": "assets/products/asf-0073.jpg",
    "images": [
      "assets/products/asf-0073.jpg",
      "assets/products/asf-0073-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0074",
    "name": "Marigold & Co Handbags",
    "brand": "Marigold & Co",
    "categoryId": "bags-women-handbags",
    "gender": "unisex",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 936,
    "image": "assets/products/asf-0074.jpg",
    "images": [
      "assets/products/asf-0074.jpg",
      "assets/products/asf-0074-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0075",
    "name": "Urban Dhaaga Sunglasses",
    "brand": "Urban Dhaaga",
    "categoryId": "men-accessories-sunglasses",
    "gender": "men",
    "mrp": 1799,
    "price": 900,
    "discountPct": 50,
    "colors": [
      "Olive",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 258,
    "image": "assets/products/asf-0075.jpg",
    "images": [
      "assets/products/asf-0075.jpg",
      "assets/products/asf-0075-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0076",
    "name": "Vantage Tote Bags",
    "brand": "Vantage",
    "categoryId": "bags-women-tote-bags",
    "gender": "unisex",
    "mrp": 4999,
    "price": 4999,
    "discountPct": 0,
    "colors": [
      "White",
      "Navy"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 2272,
    "image": "assets/products/asf-0076.jpg",
    "images": [
      "assets/products/asf-0076.jpg",
      "assets/products/asf-0076-2.jpg"
    ],
    "isNew": true,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0077",
    "name": "Vantage Jackets",
    "brand": "Vantage",
    "categoryId": "men-clothing-jackets",
    "gender": "men",
    "mrp": 3999,
    "price": 3199,
    "discountPct": 20,
    "colors": [
      "Black",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 1170,
    "image": "assets/products/asf-0077.jpg",
    "images": [
      "assets/products/asf-0077.jpg",
      "assets/products/asf-0077-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0078",
    "name": "Urban Dhaaga Straight Kurta Sets",
    "brand": "Urban Dhaaga",
    "categoryId": "women-indian-wear-kurta-sets-straight-kurta-sets",
    "gender": "women",
    "mrp": 1499,
    "price": 1349,
    "discountPct": 10,
    "colors": [
      "Beige",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 932,
    "image": "assets/products/asf-0078.jpg",
    "images": [
      "assets/products/asf-0078.jpg",
      "assets/products/asf-0078-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0079",
    "name": "Studio AS Straight Kurta Sets",
    "brand": "Studio AS",
    "categoryId": "women-indian-wear-kurta-sets-straight-kurta-sets",
    "gender": "women",
    "mrp": 1199,
    "price": 1199,
    "discountPct": 0,
    "colors": [
      "Navy",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 2343,
    "image": "assets/products/asf-0079.jpg",
    "images": [
      "assets/products/asf-0079.jpg",
      "assets/products/asf-0079-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0080",
    "name": "Bloomstreet Flat 70% Off",
    "brand": "Bloomstreet",
    "categoryId": "sale-flat-70-off",
    "gender": "unisex",
    "mrp": 1799,
    "price": 1079,
    "discountPct": 40,
    "colors": [
      "Maroon",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 1805,
    "image": "assets/products/asf-0080.jpg",
    "images": [
      "assets/products/asf-0080.jpg",
      "assets/products/asf-0080-2.jpg"
    ],
    "isNew": true,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0081",
    "name": "Vantage Running Pants",
    "brand": "Vantage",
    "categoryId": "sports-running-running-pants",
    "gender": "unisex",
    "mrp": 2199,
    "price": 1539,
    "discountPct": 30,
    "colors": [
      "Black",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 2368,
    "image": "assets/products/asf-0081.jpg",
    "images": [
      "assets/products/asf-0081.jpg",
      "assets/products/asf-0081-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0082",
    "name": "Studio AS Ethnic Wear",
    "brand": "Studio AS",
    "categoryId": "kids-boys-ethnic-wear",
    "gender": "kids",
    "mrp": 1799,
    "price": 1259,
    "discountPct": 30,
    "colors": [
      "Navy",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 1823,
    "image": "assets/products/asf-0082.jpg",
    "images": [
      "assets/products/asf-0082.jpg",
      "assets/products/asf-0082-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0083",
    "name": "Ironloom Ethnic Wear",
    "brand": "Ironloom",
    "categoryId": "kids-boys-ethnic-wear",
    "gender": "kids",
    "mrp": 3999,
    "price": 3199,
    "discountPct": 20,
    "colors": [
      "White",
      "Grey"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 1377,
    "image": "assets/products/asf-0083.jpg",
    "images": [
      "assets/products/asf-0083.jpg",
      "assets/products/asf-0083-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0084",
    "name": "Ironloom Sports Shoes",
    "brand": "Ironloom",
    "categoryId": "footwear-kids-sports-shoes",
    "gender": "unisex",
    "mrp": 2199,
    "price": 1759,
    "discountPct": 20,
    "colors": [
      "Maroon",
      "Olive"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.6,
    "ratingCount": 2265,
    "image": "assets/products/asf-0084.jpg",
    "images": [
      "assets/products/asf-0084.jpg",
      "assets/products/asf-0084-2.jpg"
    ],
    "isNew": true,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0085",
    "name": "Bloomstreet Blazers",
    "brand": "Bloomstreet",
    "categoryId": "women-western-wear-blazers",
    "gender": "women",
    "mrp": 2199,
    "price": 2199,
    "discountPct": 0,
    "colors": [
      "Rust",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 2234,
    "image": "assets/products/asf-0085.jpg",
    "images": [
      "assets/products/asf-0085.jpg",
      "assets/products/asf-0085-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0086",
    "name": "Ironloom Ethnic Bottomwear",
    "brand": "Ironloom",
    "categoryId": "men-ethnic-wear-ethnic-bottomwear",
    "gender": "men",
    "mrp": 2199,
    "price": 1539,
    "discountPct": 30,
    "colors": [
      "Grey",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.8,
    "ratingCount": 2261,
    "image": "assets/products/asf-0086.jpg",
    "images": [
      "assets/products/asf-0086.jpg",
      "assets/products/asf-0086-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0087",
    "name": "Studio AS Ethnic Bottomwear",
    "brand": "Studio AS",
    "categoryId": "men-ethnic-wear-ethnic-bottomwear",
    "gender": "men",
    "mrp": 2999,
    "price": 2999,
    "discountPct": 0,
    "colors": [
      "Ivory",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 1284,
    "image": "assets/products/asf-0087.jpg",
    "images": [
      "assets/products/asf-0087.jpg",
      "assets/products/asf-0087-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0088",
    "name": "Marigold & Co Kurtas",
    "brand": "Marigold & Co",
    "categoryId": "women-indian-wear-kurtas",
    "gender": "women",
    "mrp": 1499,
    "price": 750,
    "discountPct": 50,
    "colors": [
      "Grey",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 642,
    "image": "assets/products/asf-0088.jpg",
    "images": [
      "assets/products/asf-0088.jpg",
      "assets/products/asf-0088-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0089",
    "name": "Ironloom Co-ord Sets",
    "brand": "Ironloom",
    "categoryId": "women-western-wear-co-ord-sets",
    "gender": "women",
    "mrp": 1799,
    "price": 1439,
    "discountPct": 20,
    "colors": [
      "Grey",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 604,
    "image": "assets/products/asf-0089.jpg",
    "images": [
      "assets/products/asf-0089.jpg",
      "assets/products/asf-0089-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0090",
    "name": "Northline Co-ord Sets",
    "brand": "Northline",
    "categoryId": "women-western-wear-co-ord-sets",
    "gender": "women",
    "mrp": 3499,
    "price": 2099,
    "discountPct": 40,
    "colors": [
      "White",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 1711,
    "image": "assets/products/asf-0090.jpg",
    "images": [
      "assets/products/asf-0090.jpg",
      "assets/products/asf-0090-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0091",
    "name": "Vantage Boots",
    "brand": "Vantage",
    "categoryId": "men-footwear-boots",
    "gender": "men",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Ivory",
      "Grey"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.6,
    "ratingCount": 1841,
    "image": "assets/products/asf-0091.jpg",
    "images": [
      "assets/products/asf-0091.jpg",
      "assets/products/asf-0091-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0092",
    "name": "Ironloom Ethnic Wear",
    "brand": "Ironloom",
    "categoryId": "kids-girls-ethnic-wear",
    "gender": "kids",
    "mrp": 3499,
    "price": 2799,
    "discountPct": 20,
    "colors": [
      "Mustard",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.8,
    "ratingCount": 990,
    "image": "assets/products/asf-0092.jpg",
    "images": [
      "assets/products/asf-0092.jpg",
      "assets/products/asf-0092-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0093",
    "name": "Weft & Warp Ethnic Wear",
    "brand": "Weft & Warp",
    "categoryId": "kids-girls-ethnic-wear",
    "gender": "kids",
    "mrp": 2499,
    "price": 2499,
    "discountPct": 0,
    "colors": [
      "Grey",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 635,
    "image": "assets/products/asf-0093.jpg",
    "images": [
      "assets/products/asf-0093.jpg",
      "assets/products/asf-0093-2.jpg"
    ],
    "isNew": false,
    "isBestseller": true,
    "tags": []
  },
  {
    "id": "asf-0094",
    "name": "Marigold & Co Scarves",
    "brand": "Marigold & Co",
    "categoryId": "men-accessories-scarves",
    "gender": "men",
    "mrp": 3999,
    "price": 3599,
    "discountPct": 10,
    "colors": [
      "Grey",
      "White"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "ratingCount": 1883,
    "image": "assets/products/asf-0094.jpg",
    "images": [
      "assets/products/asf-0094.jpg",
      "assets/products/asf-0094-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0095",
    "name": "Marigold & Co Scarves",
    "brand": "Marigold & Co",
    "categoryId": "men-accessories-scarves",
    "gender": "men",
    "mrp": 4999,
    "price": 4999,
    "discountPct": 0,
    "colors": [
      "Grey",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 1640,
    "image": "assets/products/asf-0095.jpg",
    "images": [
      "assets/products/asf-0095.jpg",
      "assets/products/asf-0095-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0096",
    "name": "Weft & Warp Sneakers",
    "brand": "Weft & Warp",
    "categoryId": "kids-kids-footwear-sneakers",
    "gender": "kids",
    "mrp": 3499,
    "price": 2799,
    "discountPct": 20,
    "colors": [
      "Grey",
      "Rust"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.6,
    "ratingCount": 292,
    "image": "assets/products/asf-0096.jpg",
    "images": [
      "assets/products/asf-0096.jpg",
      "assets/products/asf-0096-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0097",
    "name": "Marigold & Co Sneakers",
    "brand": "Marigold & Co",
    "categoryId": "kids-kids-footwear-sneakers",
    "gender": "kids",
    "mrp": 1799,
    "price": 1799,
    "discountPct": 0,
    "colors": [
      "Olive",
      "White"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.5,
    "ratingCount": 423,
    "image": "assets/products/asf-0097.jpg",
    "images": [
      "assets/products/asf-0097.jpg",
      "assets/products/asf-0097-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0098",
    "name": "Studio AS Sweaters",
    "brand": "Studio AS",
    "categoryId": "winter-wear-kids-sweaters",
    "gender": "unisex",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Maroon",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.0,
    "ratingCount": 608,
    "image": "assets/products/asf-0098.jpg",
    "images": [
      "assets/products/asf-0098.jpg",
      "assets/products/asf-0098-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0099",
    "name": "Northline Dresses",
    "brand": "Northline",
    "categoryId": "kids-girls-dresses",
    "gender": "kids",
    "mrp": 1199,
    "price": 1199,
    "discountPct": 0,
    "colors": [
      "White",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 998,
    "image": "assets/products/asf-0099.jpg",
    "images": [
      "assets/products/asf-0099.jpg",
      "assets/products/asf-0099-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0100",
    "name": "Vantage Dresses",
    "brand": "Vantage",
    "categoryId": "kids-girls-dresses",
    "gender": "kids",
    "mrp": 1499,
    "price": 1199,
    "discountPct": 20,
    "colors": [
      "Grey",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1917,
    "image": "assets/products/asf-0100.jpg",
    "images": [
      "assets/products/asf-0100.jpg",
      "assets/products/asf-0100-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0101",
    "name": "Weft & Warp Chinos",
    "brand": "Weft & Warp",
    "categoryId": "men-clothing-chinos",
    "gender": "men",
    "mrp": 999,
    "price": 799,
    "discountPct": 20,
    "colors": [
      "Ivory",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1749,
    "image": "assets/products/asf-0101.jpg",
    "images": [
      "assets/products/asf-0101.jpg",
      "assets/products/asf-0101-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0102",
    "name": "Ironloom Hair Accessories",
    "brand": "Ironloom",
    "categoryId": "women-accessories-hair-accessories",
    "gender": "women",
    "mrp": 1499,
    "price": 1199,
    "discountPct": 20,
    "colors": [
      "White",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 1482,
    "image": "assets/products/asf-0102.jpg",
    "images": [
      "assets/products/asf-0102.jpg",
      "assets/products/asf-0102-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0103",
    "name": "Bloomstreet Cufflinks",
    "brand": "Bloomstreet",
    "categoryId": "accessories-cufflinks",
    "gender": "unisex",
    "mrp": 799,
    "price": 400,
    "discountPct": 50,
    "colors": [
      "Maroon",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 212,
    "image": "assets/products/asf-0103.jpg",
    "images": [
      "assets/products/asf-0103.jpg",
      "assets/products/asf-0103-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0104",
    "name": "Weft & Warp Boxers",
    "brand": "Weft & Warp",
    "categoryId": "men-innerwear-and-loungewear-boxers",
    "gender": "men",
    "mrp": 1499,
    "price": 1049,
    "discountPct": 30,
    "colors": [
      "Beige",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 572,
    "image": "assets/products/asf-0104.jpg",
    "images": [
      "assets/products/asf-0104.jpg",
      "assets/products/asf-0104-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0105",
    "name": "Ironloom Handbags",
    "brand": "Ironloom",
    "categoryId": "women-bags-handbags",
    "gender": "women",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Black",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 381,
    "image": "assets/products/asf-0105.jpg",
    "images": [
      "assets/products/asf-0105.jpg",
      "assets/products/asf-0105-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0106",
    "name": "Kalankari House Handbags",
    "brand": "Kalankari House",
    "categoryId": "women-bags-handbags",
    "gender": "women",
    "mrp": 2499,
    "price": 2499,
    "discountPct": 0,
    "colors": [
      "Navy",
      "Rust"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.7,
    "ratingCount": 1510,
    "image": "assets/products/asf-0106.jpg",
    "images": [
      "assets/products/asf-0106.jpg",
      "assets/products/asf-0106-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0107",
    "name": "Ironloom Caps",
    "brand": "Ironloom",
    "categoryId": "kids-kids-accessories-caps",
    "gender": "kids",
    "mrp": 1799,
    "price": 900,
    "discountPct": 50,
    "colors": [
      "Maroon",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 1930,
    "image": "assets/products/asf-0107.jpg",
    "images": [
      "assets/products/asf-0107.jpg",
      "assets/products/asf-0107-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0108",
    "name": "Bloomstreet Caps",
    "brand": "Bloomstreet",
    "categoryId": "men-accessories-caps",
    "gender": "men",
    "mrp": 4999,
    "price": 2999,
    "discountPct": 40,
    "colors": [
      "Rust",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 1628,
    "image": "assets/products/asf-0108.jpg",
    "images": [
      "assets/products/asf-0108.jpg",
      "assets/products/asf-0108-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0109",
    "name": "Vantage Scarves",
    "brand": "Vantage",
    "categoryId": "accessories-scarves",
    "gender": "unisex",
    "mrp": 2199,
    "price": 1319,
    "discountPct": 40,
    "colors": [
      "Ivory",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.6,
    "ratingCount": 1533,
    "image": "assets/products/asf-0109.jpg",
    "images": [
      "assets/products/asf-0109.jpg",
      "assets/products/asf-0109-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0110",
    "name": "Weft & Warp Thermals",
    "brand": "Weft & Warp",
    "categoryId": "women-lingerie-and-innerwear-thermals",
    "gender": "women",
    "mrp": 3999,
    "price": 2799,
    "discountPct": 30,
    "colors": [
      "Ivory",
      "Beige"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "ratingCount": 1913,
    "image": "assets/products/asf-0110.jpg",
    "images": [
      "assets/products/asf-0110.jpg",
      "assets/products/asf-0110-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0111",
    "name": "Studio AS Necklaces",
    "brand": "Studio AS",
    "categoryId": "accessories-jewellery-necklaces",
    "gender": "unisex",
    "mrp": 999,
    "price": 999,
    "discountPct": 0,
    "colors": [
      "Black",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.8,
    "ratingCount": 487,
    "image": "assets/products/asf-0111.jpg",
    "images": [
      "assets/products/asf-0111.jpg",
      "assets/products/asf-0111-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0112",
    "name": "Weft & Warp Sports T-Shirts",
    "brand": "Weft & Warp",
    "categoryId": "men-sportswear-sports-t-shirts",
    "gender": "men",
    "mrp": 2499,
    "price": 1999,
    "discountPct": 20,
    "colors": [
      "Rust",
      "Olive"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.3,
    "ratingCount": 644,
    "image": "assets/products/asf-0112.jpg",
    "images": [
      "assets/products/asf-0112.jpg",
      "assets/products/asf-0112-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0113",
    "name": "Vantage Jackets",
    "brand": "Vantage",
    "categoryId": "kids-boys-jackets",
    "gender": "kids",
    "mrp": 3999,
    "price": 3199,
    "discountPct": 20,
    "colors": [
      "Black",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.9,
    "ratingCount": 1833,
    "image": "assets/products/asf-0113.jpg",
    "images": [
      "assets/products/asf-0113.jpg",
      "assets/products/asf-0113-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0114",
    "name": "Petal Row Sweaters",
    "brand": "Petal Row",
    "categoryId": "winter-wear-men-sweaters",
    "gender": "unisex",
    "mrp": 4999,
    "price": 4499,
    "discountPct": 10,
    "colors": [
      "Mustard",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 789,
    "image": "assets/products/asf-0114.jpg",
    "images": [
      "assets/products/asf-0114.jpg",
      "assets/products/asf-0114-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0115",
    "name": "Kalankari House Jackets",
    "brand": "Kalankari House",
    "categoryId": "winter-wear-kids-jackets",
    "gender": "unisex",
    "mrp": 999,
    "price": 599,
    "discountPct": 40,
    "colors": [
      "Ivory",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.7,
    "ratingCount": 1378,
    "image": "assets/products/asf-0115.jpg",
    "images": [
      "assets/products/asf-0115.jpg",
      "assets/products/asf-0115-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0116",
    "name": "Petal Row Flip Flops",
    "brand": "Petal Row",
    "categoryId": "men-footwear-flip-flops",
    "gender": "men",
    "mrp": 1499,
    "price": 1499,
    "discountPct": 0,
    "colors": [
      "Beige",
      "Ivory"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.6,
    "ratingCount": 966,
    "image": "assets/products/asf-0116.jpg",
    "images": [
      "assets/products/asf-0116.jpg",
      "assets/products/asf-0116-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0117",
    "name": "Vantage Flip Flops",
    "brand": "Vantage",
    "categoryId": "men-footwear-flip-flops",
    "gender": "men",
    "mrp": 3999,
    "price": 3999,
    "discountPct": 0,
    "colors": [
      "Navy",
      "Ivory"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 4.2,
    "ratingCount": 726,
    "image": "assets/products/asf-0117.jpg",
    "images": [
      "assets/products/asf-0117.jpg",
      "assets/products/asf-0117-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0118",
    "name": "Kalankari House Bodysuits",
    "brand": "Kalankari House",
    "categoryId": "kids-baby-bodysuits",
    "gender": "kids",
    "mrp": 799,
    "price": 719,
    "discountPct": 10,
    "colors": [
      "Ivory",
      "Mustard"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 3.6,
    "ratingCount": 1098,
    "image": "assets/products/asf-0118.jpg",
    "images": [
      "assets/products/asf-0118.jpg",
      "assets/products/asf-0118-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": []
  },
  {
    "id": "asf-0119",
    "name": "Marigold & Co Jeans",
    "brand": "Marigold & Co",
    "categoryId": "women-western-wear-jeans",
    "gender": "women",
    "mrp": 999,
    "price": 599,
    "discountPct": 40,
    "colors": [
      "Grey",
      "Ivory"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "ratingCount": 2114,
    "image": "assets/products/asf-0119.jpg",
    "images": [
      "assets/products/asf-0119.jpg",
      "assets/products/asf-0119-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0120",
    "name": "Studio AS Jeans",
    "brand": "Studio AS",
    "categoryId": "women-western-wear-jeans",
    "gender": "women",
    "mrp": 1499,
    "price": 1049,
    "discountPct": 30,
    "colors": [
      "Rust",
      "Maroon"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "ratingCount": 139,
    "image": "assets/products/asf-0120.jpg",
    "images": [
      "assets/products/asf-0120.jpg",
      "assets/products/asf-0120-2.jpg"
    ],
    "isNew": true,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  },
  {
    "id": "asf-0121",
    "name": "Marigold & Co Casual Shoes",
    "brand": "Marigold & Co",
    "categoryId": "footwear-men-casual-shoes",
    "gender": "unisex",
    "mrp": 2499,
    "price": 1499,
    "discountPct": 40,
    "colors": [
      "Grey",
      "Ivory"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ],
    "rating": 3.7,
    "ratingCount": 342,
    "image": "assets/products/asf-0121.jpg",
    "images": [
      "assets/products/asf-0121.jpg",
      "assets/products/asf-0121-2.jpg"
    ],
    "isNew": false,
    "isBestseller": false,
    "tags": [
      "sale"
    ]
  }
];

  /* ---------------------------------------------------------------
   * Admin overrides (localStorage-backed draft layer)
   * admin.html never edits PRODUCTS above directly — it stores
   * adds/edits/deletes here, and getEffectiveProducts() merges them in.
   * This means admin changes preview live on the storefront immediately
   * (same browser), without needing a backend. To make changes permanent
   * for every visitor, use admin.html's "Export products.js" button and
   * replace this file in the repo.
   * --------------------------------------------------------------- */
  var OVERRIDES_KEY = 'asf_admin_overrides';

  function readOverrides() {
    try {
      var raw = localStorage.getItem(OVERRIDES_KEY);
      return raw ? JSON.parse(raw) : { added: [], edited: {}, deleted: [] };
    } catch (e) {
      return { added: [], edited: {}, deleted: [] };
    }
  }

  function writeOverrides(overrides) {
    try {
      localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
    } catch (e) {
      console.error('Could not save admin overrides (localStorage full?)', e);
    }
    global.dispatchEvent(new CustomEvent('asf:products-updated', {}));
  }

  function addOverrideProduct(product) {
    var overrides = readOverrides();
    overrides.added.push(product);
    writeOverrides(overrides);
  }

  function updateOverrideProduct(id, patch) {
    var overrides = readOverrides();
    var addedIdx = overrides.added.findIndex(function (p) { return p.id === id; });
    if (addedIdx !== -1) {
      overrides.added[addedIdx] = Object.assign({}, overrides.added[addedIdx], patch);
    } else {
      overrides.edited[id] = Object.assign({}, overrides.edited[id] || {}, patch);
    }
    writeOverrides(overrides);
  }

  function deleteOverrideProduct(id) {
    var overrides = readOverrides();
    overrides.added = overrides.added.filter(function (p) { return p.id !== id; });
    delete overrides.edited[id];
    if (PRODUCTS.some(function (p) { return p.id === id; }) && overrides.deleted.indexOf(id) === -1) {
      overrides.deleted.push(id);
    }
    writeOverrides(overrides);
  }

  function clearOverrides() {
    writeOverrides({ added: [], edited: {}, deleted: [] });
  }

  function getEffectiveProducts() {
    var overrides = readOverrides();
    var base = PRODUCTS
      .filter(function (p) { return overrides.deleted.indexOf(p.id) === -1; })
      .map(function (p) { return overrides.edited[p.id] ? Object.assign({}, p, overrides.edited[p.id]) : p; });
    return base.concat(overrides.added);
  }

  function getNextProductId() {
    var all = getEffectiveProducts();
    var maxNum = 0;
    all.forEach(function (p) {
      var m = /asf-(\d+)/.exec(p.id || '');
      if (m) maxNum = Math.max(maxNum, parseInt(m[1], 10));
    });
    return 'asf-' + String(maxNum + 1).padStart(4, '0');
  }

  function getAllProducts() { return getEffectiveProducts(); }

  function getProductById(id) {
    return getEffectiveProducts().find(function (p) { return p.id === id; }) || null;
  }

  function getProductsByCategory(categoryId) {
    var all = getEffectiveProducts();
    var catApi = global.ASF && global.ASF.categories;
    if (!catApi) return all.filter(function (p) { return p.categoryId === categoryId; });
    var index = catApi.CATEGORY_INDEX;
    return all.filter(function (p) {
      if (p.categoryId === categoryId) return true;
      var entry = index[p.categoryId];
      return entry && entry.ancestors && entry.ancestors.indexOf(categoryId) !== -1;
    });
  }

  function getProductsByGender(gender) {
    return getEffectiveProducts().filter(function (p) { return p.gender === gender; });
  }

  function searchProducts(query) {
    var q = (query || '').trim().toLowerCase();
    if (!q) return [];
    return getEffectiveProducts().filter(function (p) {
      return p.name.toLowerCase().indexOf(q) !== -1 ||
             p.brand.toLowerCase().indexOf(q) !== -1;
    });
  }

  function getNewArrivals() { return getEffectiveProducts().filter(function (p) { return p.isNew; }); }
  function getBestsellers() { return getEffectiveProducts().filter(function (p) { return p.isBestseller; }); }
  function getSaleProducts() { return getEffectiveProducts().filter(function (p) { return p.discountPct >= 30; }); }

  // Builds ready-to-commit file text for js/products.js with all current
  // overrides baked permanently into the PRODUCTS array. Used by
  // admin.html's "Export products.js" download button.
  function exportProductsFileText() {
    var merged = getEffectiveProducts();
    var json = JSON.stringify(merged, null, 2);
    var lines = [];
    lines.push("/**");
    lines.push(" * AS FASHIONS \u2014 Product Catalog");
    lines.push(" * Exported from the admin panel. Replace js/products.js in your repo");
    lines.push(" * with this file, commit, and push to make these changes permanent");
    lines.push(" * for every visitor.");
    lines.push(" */");
    lines.push("(function (global) {");
    lines.push("  'use strict';");
    lines.push("");
    lines.push("  var PRODUCTS = " + json + ";");
    lines.push("");
    lines.push("  function getAllProducts() { return PRODUCTS; }");
    lines.push("  function getProductById(id) { return PRODUCTS.find(function (p) { return p.id === id; }) || null; }");
    lines.push("  function getProductsByCategory(categoryId) {");
    lines.push("    var catApi = global.ASF && global.ASF.categories;");
    lines.push("    if (!catApi) return PRODUCTS.filter(function (p) { return p.categoryId === categoryId; });");
    lines.push("    var index = catApi.CATEGORY_INDEX;");
    lines.push("    return PRODUCTS.filter(function (p) {");
    lines.push("      if (p.categoryId === categoryId) return true;");
    lines.push("      var entry = index[p.categoryId];");
    lines.push("      return entry && entry.ancestors && entry.ancestors.indexOf(categoryId) !== -1;");
    lines.push("    });");
    lines.push("  }");
    lines.push("  function getProductsByGender(gender) { return PRODUCTS.filter(function (p) { return p.gender === gender; }); }");
    lines.push("  function searchProducts(query) {");
    lines.push("    var q = (query || '').trim().toLowerCase();");
    lines.push("    if (!q) return [];");
    lines.push("    return PRODUCTS.filter(function (p) { return p.name.toLowerCase().indexOf(q) !== -1 || p.brand.toLowerCase().indexOf(q) !== -1; });");
    lines.push("  }");
    lines.push("  function getNewArrivals() { return PRODUCTS.filter(function (p) { return p.isNew; }); }");
    lines.push("  function getBestsellers() { return PRODUCTS.filter(function (p) { return p.isBestseller; }); }");
    lines.push("  function getSaleProducts() { return PRODUCTS.filter(function (p) { return p.discountPct >= 30; }); }");
    lines.push("");
    lines.push("  global.ASF = global.ASF || {};");
    lines.push("  global.ASF.products = {");
    lines.push("    getAllProducts: getAllProducts,");
    lines.push("    getProductById: getProductById,");
    lines.push("    getProductsByCategory: getProductsByCategory,");
    lines.push("    getProductsByGender: getProductsByGender,");
    lines.push("    searchProducts: searchProducts,");
    lines.push("    getNewArrivals: getNewArrivals,");
    lines.push("    getBestsellers: getBestsellers,");
    lines.push("    getSaleProducts: getSaleProducts");
    lines.push("  };");
    lines.push("})(window);");
    return lines.join("\n");
  }

  global.ASF = global.ASF || {};
  global.ASF.products = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    getProductsByCategory: getProductsByCategory,
    getProductsByGender: getProductsByGender,
    searchProducts: searchProducts,
    getNewArrivals: getNewArrivals,
    getBestsellers: getBestsellers,
    getSaleProducts: getSaleProducts,
    admin: {
      addProduct: addOverrideProduct,
      updateProduct: updateOverrideProduct,
      deleteProduct: deleteOverrideProduct,
      clearOverrides: clearOverrides,
      getOverrides: readOverrides,
      getNextProductId: getNextProductId,
      exportProductsFileText: exportProductsFileText
    }
  };
})(window);
