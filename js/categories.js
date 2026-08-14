/**
 * AS FASHIONS — Category Master Database (browser-global build, no ES modules)
 * Loaded as a plain <script> so it works when index.html is opened directly
 * (file://) without a local server. Everything hangs off window.ASF.categories
 */
(function (global) {
  'use strict';

  var CATEGORY_TREE = [
  {
    "id": "men",
    "name": "Men",
    "slug": "men",
    "children": [
      {
        "id": "men-clothing",
        "name": "Clothing",
        "slug": "clothing",
        "children": [
          {
            "id": "men-clothing-t-shirts",
            "name": "T-Shirts",
            "slug": "t-shirts",
            "children": [
              {
                "id": "men-clothing-t-shirts-solid",
                "name": "Solid",
                "slug": "solid"
              },
              {
                "id": "men-clothing-t-shirts-printed",
                "name": "Printed",
                "slug": "printed"
              },
              {
                "id": "men-clothing-t-shirts-graphic",
                "name": "Graphic",
                "slug": "graphic"
              },
              {
                "id": "men-clothing-t-shirts-oversized",
                "name": "Oversized",
                "slug": "oversized"
              },
              {
                "id": "men-clothing-t-shirts-polo",
                "name": "Polo",
                "slug": "polo"
              },
              {
                "id": "men-clothing-t-shirts-henley",
                "name": "Henley",
                "slug": "henley"
              }
            ]
          },
          {
            "id": "men-clothing-shirts",
            "name": "Shirts",
            "slug": "shirts",
            "children": [
              {
                "id": "men-clothing-shirts-casual-shirts",
                "name": "Casual Shirts",
                "slug": "casual-shirts"
              },
              {
                "id": "men-clothing-shirts-formal-shirts",
                "name": "Formal Shirts",
                "slug": "formal-shirts"
              },
              {
                "id": "men-clothing-shirts-checked-shirts",
                "name": "Checked Shirts",
                "slug": "checked-shirts"
              },
              {
                "id": "men-clothing-shirts-printed-shirts",
                "name": "Printed Shirts",
                "slug": "printed-shirts"
              },
              {
                "id": "men-clothing-shirts-linen-shirts",
                "name": "Linen Shirts",
                "slug": "linen-shirts"
              },
              {
                "id": "men-clothing-shirts-oversized-shirts",
                "name": "Oversized Shirts",
                "slug": "oversized-shirts"
              }
            ]
          },
          {
            "id": "men-clothing-jeans",
            "name": "Jeans",
            "slug": "jeans",
            "children": [
              {
                "id": "men-clothing-jeans-slim-fit",
                "name": "Slim Fit",
                "slug": "slim-fit"
              },
              {
                "id": "men-clothing-jeans-skinny-fit",
                "name": "Skinny Fit",
                "slug": "skinny-fit"
              },
              {
                "id": "men-clothing-jeans-straight-fit",
                "name": "Straight Fit",
                "slug": "straight-fit"
              },
              {
                "id": "men-clothing-jeans-relaxed-fit",
                "name": "Relaxed Fit",
                "slug": "relaxed-fit"
              },
              {
                "id": "men-clothing-jeans-baggy-fit",
                "name": "Baggy Fit",
                "slug": "baggy-fit"
              }
            ]
          },
          {
            "id": "men-clothing-trousers",
            "name": "Trousers",
            "slug": "trousers"
          },
          {
            "id": "men-clothing-chinos",
            "name": "Chinos",
            "slug": "chinos"
          },
          {
            "id": "men-clothing-cargo",
            "name": "Cargo",
            "slug": "cargo"
          },
          {
            "id": "men-clothing-track-pants",
            "name": "Track Pants",
            "slug": "track-pants"
          },
          {
            "id": "men-clothing-joggers",
            "name": "Joggers",
            "slug": "joggers"
          },
          {
            "id": "men-clothing-shorts",
            "name": "Shorts",
            "slug": "shorts"
          },
          {
            "id": "men-clothing-blazers",
            "name": "Blazers",
            "slug": "blazers"
          },
          {
            "id": "men-clothing-suits",
            "name": "Suits",
            "slug": "suits"
          },
          {
            "id": "men-clothing-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "men-clothing-sweaters",
            "name": "Sweaters",
            "slug": "sweaters"
          },
          {
            "id": "men-clothing-sweatshirts",
            "name": "Sweatshirts",
            "slug": "sweatshirts"
          },
          {
            "id": "men-clothing-hoodies",
            "name": "Hoodies",
            "slug": "hoodies"
          },
          {
            "id": "men-clothing-coats",
            "name": "Coats",
            "slug": "coats"
          }
        ]
      },
      {
        "id": "men-ethnic-wear",
        "name": "Ethnic Wear",
        "slug": "ethnic-wear",
        "children": [
          {
            "id": "men-ethnic-wear-kurtas",
            "name": "Kurtas",
            "slug": "kurtas"
          },
          {
            "id": "men-ethnic-wear-kurta-sets",
            "name": "Kurta Sets",
            "slug": "kurta-sets",
            "children": [
              {
                "id": "men-ethnic-wear-kurta-sets-nehru-jacket-sets",
                "name": "Nehru Jacket Sets",
                "slug": "nehru-jacket-sets"
              },
              {
                "id": "men-ethnic-wear-kurta-sets-pathani-sets",
                "name": "Pathani Sets",
                "slug": "pathani-sets"
              },
              {
                "id": "men-ethnic-wear-kurta-sets-printed-kurta-sets",
                "name": "Printed Kurta Sets",
                "slug": "printed-kurta-sets"
              },
              {
                "id": "men-ethnic-wear-kurta-sets-embroidered-kurta-sets",
                "name": "Embroidered Kurta Sets",
                "slug": "embroidered-kurta-sets"
              },
              {
                "id": "men-ethnic-wear-kurta-sets-silk-kurta-sets",
                "name": "Silk Kurta Sets",
                "slug": "silk-kurta-sets"
              },
              {
                "id": "men-ethnic-wear-kurta-sets-cotton-kurta-sets",
                "name": "Cotton Kurta Sets",
                "slug": "cotton-kurta-sets"
              }
            ]
          },
          {
            "id": "men-ethnic-wear-nehru-jackets",
            "name": "Nehru Jackets",
            "slug": "nehru-jackets"
          },
          {
            "id": "men-ethnic-wear-sherwanis",
            "name": "Sherwanis",
            "slug": "sherwanis"
          },
          {
            "id": "men-ethnic-wear-indo-western",
            "name": "Indo-Western",
            "slug": "indo-western"
          },
          {
            "id": "men-ethnic-wear-dhotis",
            "name": "Dhotis",
            "slug": "dhotis"
          },
          {
            "id": "men-ethnic-wear-ethnic-bottomwear",
            "name": "Ethnic Bottomwear",
            "slug": "ethnic-bottomwear"
          }
        ]
      },
      {
        "id": "men-innerwear-and-loungewear",
        "name": "Innerwear & Loungewear",
        "slug": "innerwear-and-loungewear",
        "children": [
          {
            "id": "men-innerwear-and-loungewear-briefs",
            "name": "Briefs",
            "slug": "briefs"
          },
          {
            "id": "men-innerwear-and-loungewear-boxers",
            "name": "Boxers",
            "slug": "boxers"
          },
          {
            "id": "men-innerwear-and-loungewear-trunks",
            "name": "Trunks",
            "slug": "trunks"
          },
          {
            "id": "men-innerwear-and-loungewear-vests",
            "name": "Vests",
            "slug": "vests"
          },
          {
            "id": "men-innerwear-and-loungewear-thermal-wear",
            "name": "Thermal Wear",
            "slug": "thermal-wear"
          },
          {
            "id": "men-innerwear-and-loungewear-nightwear",
            "name": "Nightwear",
            "slug": "nightwear"
          },
          {
            "id": "men-innerwear-and-loungewear-loungewear",
            "name": "Loungewear",
            "slug": "loungewear"
          }
        ]
      },
      {
        "id": "men-footwear",
        "name": "Footwear",
        "slug": "footwear",
        "children": [
          {
            "id": "men-footwear-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "men-footwear-casual-shoes",
            "name": "Casual Shoes",
            "slug": "casual-shoes"
          },
          {
            "id": "men-footwear-formal-shoes",
            "name": "Formal Shoes",
            "slug": "formal-shoes"
          },
          {
            "id": "men-footwear-loafers",
            "name": "Loafers",
            "slug": "loafers"
          },
          {
            "id": "men-footwear-boots",
            "name": "Boots",
            "slug": "boots"
          },
          {
            "id": "men-footwear-sports-shoes",
            "name": "Sports Shoes",
            "slug": "sports-shoes"
          },
          {
            "id": "men-footwear-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "men-footwear-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          },
          {
            "id": "men-footwear-slippers",
            "name": "Slippers",
            "slug": "slippers"
          }
        ]
      },
      {
        "id": "men-accessories",
        "name": "Accessories",
        "slug": "accessories",
        "children": [
          {
            "id": "men-accessories-watches",
            "name": "Watches",
            "slug": "watches"
          },
          {
            "id": "men-accessories-sunglasses",
            "name": "Sunglasses",
            "slug": "sunglasses"
          },
          {
            "id": "men-accessories-wallets",
            "name": "Wallets",
            "slug": "wallets"
          },
          {
            "id": "men-accessories-belts",
            "name": "Belts",
            "slug": "belts"
          },
          {
            "id": "men-accessories-caps",
            "name": "Caps",
            "slug": "caps"
          },
          {
            "id": "men-accessories-backpacks",
            "name": "Backpacks",
            "slug": "backpacks"
          },
          {
            "id": "men-accessories-bags",
            "name": "Bags",
            "slug": "bags"
          },
          {
            "id": "men-accessories-socks",
            "name": "Socks",
            "slug": "socks"
          },
          {
            "id": "men-accessories-ties",
            "name": "Ties",
            "slug": "ties"
          },
          {
            "id": "men-accessories-cufflinks",
            "name": "Cufflinks",
            "slug": "cufflinks"
          },
          {
            "id": "men-accessories-scarves",
            "name": "Scarves",
            "slug": "scarves"
          }
        ]
      },
      {
        "id": "men-sportswear",
        "name": "Sportswear",
        "slug": "sportswear",
        "children": [
          {
            "id": "men-sportswear-sports-t-shirts",
            "name": "Sports T-Shirts",
            "slug": "sports-t-shirts"
          },
          {
            "id": "men-sportswear-track-pants",
            "name": "Track Pants",
            "slug": "track-pants"
          },
          {
            "id": "men-sportswear-shorts",
            "name": "Shorts",
            "slug": "shorts"
          },
          {
            "id": "men-sportswear-training-wear",
            "name": "Training Wear",
            "slug": "training-wear"
          },
          {
            "id": "men-sportswear-running-wear",
            "name": "Running Wear",
            "slug": "running-wear"
          },
          {
            "id": "men-sportswear-sports-jackets",
            "name": "Sports Jackets",
            "slug": "sports-jackets"
          }
        ]
      }
    ]
  },
  {
    "id": "women",
    "name": "Women",
    "slug": "women",
    "children": [
      {
        "id": "women-western-wear",
        "name": "Western Wear",
        "slug": "western-wear",
        "children": [
          {
            "id": "women-western-wear-tops",
            "name": "Tops",
            "slug": "tops"
          },
          {
            "id": "women-western-wear-t-shirts",
            "name": "T-Shirts",
            "slug": "t-shirts"
          },
          {
            "id": "women-western-wear-shirts",
            "name": "Shirts",
            "slug": "shirts"
          },
          {
            "id": "women-western-wear-dresses",
            "name": "Dresses",
            "slug": "dresses",
            "children": [
              {
                "id": "women-western-wear-dresses-casual-dresses",
                "name": "Casual Dresses",
                "slug": "casual-dresses"
              },
              {
                "id": "women-western-wear-dresses-party-dresses",
                "name": "Party Dresses",
                "slug": "party-dresses"
              },
              {
                "id": "women-western-wear-dresses-maxi-dresses",
                "name": "Maxi Dresses",
                "slug": "maxi-dresses"
              },
              {
                "id": "women-western-wear-dresses-midi-dresses",
                "name": "Midi Dresses",
                "slug": "midi-dresses"
              },
              {
                "id": "women-western-wear-dresses-mini-dresses",
                "name": "Mini Dresses",
                "slug": "mini-dresses"
              }
            ]
          },
          {
            "id": "women-western-wear-jeans",
            "name": "Jeans",
            "slug": "jeans"
          },
          {
            "id": "women-western-wear-jeggings",
            "name": "Jeggings",
            "slug": "jeggings"
          },
          {
            "id": "women-western-wear-trousers",
            "name": "Trousers",
            "slug": "trousers"
          },
          {
            "id": "women-western-wear-pants",
            "name": "Pants",
            "slug": "pants"
          },
          {
            "id": "women-western-wear-shorts",
            "name": "Shorts",
            "slug": "shorts"
          },
          {
            "id": "women-western-wear-skirts",
            "name": "Skirts",
            "slug": "skirts"
          },
          {
            "id": "women-western-wear-jumpsuits",
            "name": "Jumpsuits",
            "slug": "jumpsuits"
          },
          {
            "id": "women-western-wear-co-ord-sets",
            "name": "Co-ord Sets",
            "slug": "co-ord-sets"
          },
          {
            "id": "women-western-wear-shrugs",
            "name": "Shrugs",
            "slug": "shrugs"
          },
          {
            "id": "women-western-wear-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "women-western-wear-blazers",
            "name": "Blazers",
            "slug": "blazers"
          }
        ]
      },
      {
        "id": "women-indian-wear",
        "name": "Indian Wear",
        "slug": "indian-wear",
        "children": [
          {
            "id": "women-indian-wear-kurtas",
            "name": "Kurtas",
            "slug": "kurtas"
          },
          {
            "id": "women-indian-wear-kurtis",
            "name": "Kurtis",
            "slug": "kurtis"
          },
          {
            "id": "women-indian-wear-tunics",
            "name": "Tunics",
            "slug": "tunics"
          },
          {
            "id": "women-indian-wear-kurta-sets",
            "name": "Kurta Sets",
            "slug": "kurta-sets",
            "children": [
              {
                "id": "women-indian-wear-kurta-sets-straight-kurta-sets",
                "name": "Straight Kurta Sets",
                "slug": "straight-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-anarkali-kurta-sets",
                "name": "Anarkali Kurta Sets",
                "slug": "anarkali-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-a-line-kurta-sets",
                "name": "A-Line Kurta Sets",
                "slug": "a-line-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-palazzo-kurta-sets",
                "name": "Palazzo Kurta Sets",
                "slug": "palazzo-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-printed-kurta-sets",
                "name": "Printed Kurta Sets",
                "slug": "printed-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-embroidered-kurta-sets",
                "name": "Embroidered Kurta Sets",
                "slug": "embroidered-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-silk-kurta-sets",
                "name": "Silk Kurta Sets",
                "slug": "silk-kurta-sets"
              },
              {
                "id": "women-indian-wear-kurta-sets-cotton-kurta-sets",
                "name": "Cotton Kurta Sets",
                "slug": "cotton-kurta-sets"
              }
            ]
          },
          {
            "id": "women-indian-wear-salwar-suits",
            "name": "Salwar Suits",
            "slug": "salwar-suits"
          },
          {
            "id": "women-indian-wear-anarkali",
            "name": "Anarkali",
            "slug": "anarkali"
          },
          {
            "id": "women-indian-wear-sarees",
            "name": "Sarees",
            "slug": "sarees"
          },
          {
            "id": "women-indian-wear-saree-blouses",
            "name": "Saree Blouses",
            "slug": "saree-blouses"
          },
          {
            "id": "women-indian-wear-lehenga-choli",
            "name": "Lehenga Choli",
            "slug": "lehenga-choli"
          },
          {
            "id": "women-indian-wear-sharara-sets",
            "name": "Sharara Sets",
            "slug": "sharara-sets"
          },
          {
            "id": "women-indian-wear-palazzo-sets",
            "name": "Palazzo Sets",
            "slug": "palazzo-sets"
          },
          {
            "id": "women-indian-wear-ethnic-dresses",
            "name": "Ethnic Dresses",
            "slug": "ethnic-dresses"
          }
        ]
      },
      {
        "id": "women-lingerie-and-innerwear",
        "name": "Lingerie & Innerwear",
        "slug": "lingerie-and-innerwear",
        "children": [
          {
            "id": "women-lingerie-and-innerwear-bras",
            "name": "Bras",
            "slug": "bras"
          },
          {
            "id": "women-lingerie-and-innerwear-panties",
            "name": "Panties",
            "slug": "panties"
          },
          {
            "id": "women-lingerie-and-innerwear-bralettes",
            "name": "Bralettes",
            "slug": "bralettes"
          },
          {
            "id": "women-lingerie-and-innerwear-shapewear",
            "name": "Shapewear",
            "slug": "shapewear"
          },
          {
            "id": "women-lingerie-and-innerwear-camisoles",
            "name": "Camisoles",
            "slug": "camisoles"
          },
          {
            "id": "women-lingerie-and-innerwear-thermals",
            "name": "Thermals",
            "slug": "thermals"
          },
          {
            "id": "women-lingerie-and-innerwear-innerwear-sets",
            "name": "Innerwear Sets",
            "slug": "innerwear-sets"
          }
        ]
      },
      {
        "id": "women-sleep-and-lounge",
        "name": "Sleep & Lounge",
        "slug": "sleep-and-lounge",
        "children": [
          {
            "id": "women-sleep-and-lounge-night-suits",
            "name": "Night Suits",
            "slug": "night-suits"
          },
          {
            "id": "women-sleep-and-lounge-night-dresses",
            "name": "Night Dresses",
            "slug": "night-dresses"
          },
          {
            "id": "women-sleep-and-lounge-pyjamas",
            "name": "Pyjamas",
            "slug": "pyjamas"
          },
          {
            "id": "women-sleep-and-lounge-lounge-sets",
            "name": "Lounge Sets",
            "slug": "lounge-sets"
          },
          {
            "id": "women-sleep-and-lounge-robes",
            "name": "Robes",
            "slug": "robes"
          }
        ]
      },
      {
        "id": "women-footwear",
        "name": "Footwear",
        "slug": "footwear",
        "children": [
          {
            "id": "women-footwear-heels",
            "name": "Heels",
            "slug": "heels"
          },
          {
            "id": "women-footwear-block-heels",
            "name": "Block Heels",
            "slug": "block-heels"
          },
          {
            "id": "women-footwear-stiletto",
            "name": "Stiletto",
            "slug": "stiletto"
          },
          {
            "id": "women-footwear-wedges",
            "name": "Wedges",
            "slug": "wedges"
          },
          {
            "id": "women-footwear-flats",
            "name": "Flats",
            "slug": "flats"
          },
          {
            "id": "women-footwear-ballerinas",
            "name": "Ballerinas",
            "slug": "ballerinas"
          },
          {
            "id": "women-footwear-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "women-footwear-boots",
            "name": "Boots",
            "slug": "boots"
          },
          {
            "id": "women-footwear-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "women-footwear-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          },
          {
            "id": "women-footwear-slippers",
            "name": "Slippers",
            "slug": "slippers"
          }
        ]
      },
      {
        "id": "women-bags",
        "name": "Bags",
        "slug": "bags",
        "children": [
          {
            "id": "women-bags-handbags",
            "name": "Handbags",
            "slug": "handbags"
          },
          {
            "id": "women-bags-shoulder-bags",
            "name": "Shoulder Bags",
            "slug": "shoulder-bags"
          },
          {
            "id": "women-bags-sling-bags",
            "name": "Sling Bags",
            "slug": "sling-bags"
          },
          {
            "id": "women-bags-tote-bags",
            "name": "Tote Bags",
            "slug": "tote-bags"
          },
          {
            "id": "women-bags-clutches",
            "name": "Clutches",
            "slug": "clutches"
          },
          {
            "id": "women-bags-backpacks",
            "name": "Backpacks",
            "slug": "backpacks"
          },
          {
            "id": "women-bags-wallets",
            "name": "Wallets",
            "slug": "wallets"
          }
        ]
      },
      {
        "id": "women-jewellery",
        "name": "Jewellery",
        "slug": "jewellery",
        "children": [
          {
            "id": "women-jewellery-earrings",
            "name": "Earrings",
            "slug": "earrings"
          },
          {
            "id": "women-jewellery-necklaces",
            "name": "Necklaces",
            "slug": "necklaces"
          },
          {
            "id": "women-jewellery-rings",
            "name": "Rings",
            "slug": "rings"
          },
          {
            "id": "women-jewellery-bracelets",
            "name": "Bracelets",
            "slug": "bracelets"
          },
          {
            "id": "women-jewellery-anklets",
            "name": "Anklets",
            "slug": "anklets"
          },
          {
            "id": "women-jewellery-jewellery-sets",
            "name": "Jewellery Sets",
            "slug": "jewellery-sets"
          }
        ]
      },
      {
        "id": "women-accessories",
        "name": "Accessories",
        "slug": "accessories",
        "children": [
          {
            "id": "women-accessories-watches",
            "name": "Watches",
            "slug": "watches"
          },
          {
            "id": "women-accessories-sunglasses",
            "name": "Sunglasses",
            "slug": "sunglasses"
          },
          {
            "id": "women-accessories-belts",
            "name": "Belts",
            "slug": "belts"
          },
          {
            "id": "women-accessories-caps",
            "name": "Caps",
            "slug": "caps"
          },
          {
            "id": "women-accessories-scarves",
            "name": "Scarves",
            "slug": "scarves"
          },
          {
            "id": "women-accessories-stoles",
            "name": "Stoles",
            "slug": "stoles"
          },
          {
            "id": "women-accessories-hair-accessories",
            "name": "Hair Accessories",
            "slug": "hair-accessories"
          }
        ]
      }
    ]
  },
  {
    "id": "kids",
    "name": "Kids",
    "slug": "kids",
    "children": [
      {
        "id": "kids-boys",
        "name": "Boys",
        "slug": "boys",
        "children": [
          {
            "id": "kids-boys-t-shirts",
            "name": "T-Shirts",
            "slug": "t-shirts"
          },
          {
            "id": "kids-boys-shirts",
            "name": "Shirts",
            "slug": "shirts"
          },
          {
            "id": "kids-boys-jeans",
            "name": "Jeans",
            "slug": "jeans"
          },
          {
            "id": "kids-boys-trousers",
            "name": "Trousers",
            "slug": "trousers"
          },
          {
            "id": "kids-boys-shorts",
            "name": "Shorts",
            "slug": "shorts"
          },
          {
            "id": "kids-boys-joggers",
            "name": "Joggers",
            "slug": "joggers"
          },
          {
            "id": "kids-boys-ethnic-wear",
            "name": "Ethnic Wear",
            "slug": "ethnic-wear"
          },
          {
            "id": "kids-boys-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "kids-boys-sweatshirts",
            "name": "Sweatshirts",
            "slug": "sweatshirts"
          }
        ]
      },
      {
        "id": "kids-girls",
        "name": "Girls",
        "slug": "girls",
        "children": [
          {
            "id": "kids-girls-dresses",
            "name": "Dresses",
            "slug": "dresses"
          },
          {
            "id": "kids-girls-tops",
            "name": "Tops",
            "slug": "tops"
          },
          {
            "id": "kids-girls-t-shirts",
            "name": "T-Shirts",
            "slug": "t-shirts"
          },
          {
            "id": "kids-girls-jeans",
            "name": "Jeans",
            "slug": "jeans"
          },
          {
            "id": "kids-girls-leggings",
            "name": "Leggings",
            "slug": "leggings"
          },
          {
            "id": "kids-girls-skirts",
            "name": "Skirts",
            "slug": "skirts"
          },
          {
            "id": "kids-girls-ethnic-wear",
            "name": "Ethnic Wear",
            "slug": "ethnic-wear"
          },
          {
            "id": "kids-girls-jumpsuits",
            "name": "Jumpsuits",
            "slug": "jumpsuits"
          }
        ]
      },
      {
        "id": "kids-baby",
        "name": "Baby",
        "slug": "baby",
        "children": [
          {
            "id": "kids-baby-rompers",
            "name": "Rompers",
            "slug": "rompers"
          },
          {
            "id": "kids-baby-onesies",
            "name": "Onesies",
            "slug": "onesies"
          },
          {
            "id": "kids-baby-bodysuits",
            "name": "Bodysuits",
            "slug": "bodysuits"
          },
          {
            "id": "kids-baby-baby-sets",
            "name": "Baby Sets",
            "slug": "baby-sets"
          },
          {
            "id": "kids-baby-dungarees",
            "name": "Dungarees",
            "slug": "dungarees"
          },
          {
            "id": "kids-baby-baby-dresses",
            "name": "Baby Dresses",
            "slug": "baby-dresses"
          }
        ]
      },
      {
        "id": "kids-kids-footwear",
        "name": "Kids Footwear",
        "slug": "kids-footwear",
        "children": [
          {
            "id": "kids-kids-footwear-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "kids-kids-footwear-sports-shoes",
            "name": "Sports Shoes",
            "slug": "sports-shoes"
          },
          {
            "id": "kids-kids-footwear-casual-shoes",
            "name": "Casual Shoes",
            "slug": "casual-shoes"
          },
          {
            "id": "kids-kids-footwear-school-shoes",
            "name": "School Shoes",
            "slug": "school-shoes"
          },
          {
            "id": "kids-kids-footwear-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "kids-kids-footwear-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          }
        ]
      },
      {
        "id": "kids-kids-accessories",
        "name": "Kids Accessories",
        "slug": "kids-accessories",
        "children": [
          {
            "id": "kids-kids-accessories-backpacks",
            "name": "Backpacks",
            "slug": "backpacks"
          },
          {
            "id": "kids-kids-accessories-caps",
            "name": "Caps",
            "slug": "caps"
          },
          {
            "id": "kids-kids-accessories-socks",
            "name": "Socks",
            "slug": "socks"
          },
          {
            "id": "kids-kids-accessories-watches",
            "name": "Watches",
            "slug": "watches"
          },
          {
            "id": "kids-kids-accessories-sunglasses",
            "name": "Sunglasses",
            "slug": "sunglasses"
          }
        ]
      },
      {
        "id": "kids-shop-by-age",
        "name": "Shop By Age",
        "slug": "shop-by-age",
        "children": [
          {
            "id": "kids-shop-by-age-0-2-years",
            "name": "0-2 Years",
            "slug": "0-2-years"
          },
          {
            "id": "kids-shop-by-age-3-5-years",
            "name": "3-5 Years",
            "slug": "3-5-years"
          },
          {
            "id": "kids-shop-by-age-6-8-years",
            "name": "6-8 Years",
            "slug": "6-8-years"
          },
          {
            "id": "kids-shop-by-age-9-12-years",
            "name": "9-12 Years",
            "slug": "9-12-years"
          },
          {
            "id": "kids-shop-by-age-13-16-years",
            "name": "13-16 Years",
            "slug": "13-16-years"
          }
        ]
      }
    ]
  },
  {
    "id": "footwear",
    "name": "Footwear",
    "slug": "footwear",
    "children": [
      {
        "id": "footwear-men",
        "name": "Men",
        "slug": "men",
        "children": [
          {
            "id": "footwear-men-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "footwear-men-casual-shoes",
            "name": "Casual Shoes",
            "slug": "casual-shoes"
          },
          {
            "id": "footwear-men-formal-shoes",
            "name": "Formal Shoes",
            "slug": "formal-shoes"
          },
          {
            "id": "footwear-men-sports-shoes",
            "name": "Sports Shoes",
            "slug": "sports-shoes"
          },
          {
            "id": "footwear-men-loafers",
            "name": "Loafers",
            "slug": "loafers"
          },
          {
            "id": "footwear-men-boots",
            "name": "Boots",
            "slug": "boots"
          },
          {
            "id": "footwear-men-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "footwear-men-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          },
          {
            "id": "footwear-men-slippers",
            "name": "Slippers",
            "slug": "slippers"
          }
        ]
      },
      {
        "id": "footwear-women",
        "name": "Women",
        "slug": "women",
        "children": [
          {
            "id": "footwear-women-heels",
            "name": "Heels",
            "slug": "heels"
          },
          {
            "id": "footwear-women-flats",
            "name": "Flats",
            "slug": "flats"
          },
          {
            "id": "footwear-women-ballerinas",
            "name": "Ballerinas",
            "slug": "ballerinas"
          },
          {
            "id": "footwear-women-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "footwear-women-boots",
            "name": "Boots",
            "slug": "boots"
          },
          {
            "id": "footwear-women-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "footwear-women-wedges",
            "name": "Wedges",
            "slug": "wedges"
          },
          {
            "id": "footwear-women-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          }
        ]
      },
      {
        "id": "footwear-kids",
        "name": "Kids",
        "slug": "kids",
        "children": [
          {
            "id": "footwear-kids-sneakers",
            "name": "Sneakers",
            "slug": "sneakers"
          },
          {
            "id": "footwear-kids-sports-shoes",
            "name": "Sports Shoes",
            "slug": "sports-shoes"
          },
          {
            "id": "footwear-kids-casual-shoes",
            "name": "Casual Shoes",
            "slug": "casual-shoes"
          },
          {
            "id": "footwear-kids-school-shoes",
            "name": "School Shoes",
            "slug": "school-shoes"
          },
          {
            "id": "footwear-kids-sandals",
            "name": "Sandals",
            "slug": "sandals"
          },
          {
            "id": "footwear-kids-flip-flops",
            "name": "Flip Flops",
            "slug": "flip-flops"
          }
        ]
      }
    ]
  },
  {
    "id": "bags",
    "name": "Bags",
    "slug": "bags",
    "children": [
      {
        "id": "bags-women",
        "name": "Women",
        "slug": "women",
        "children": [
          {
            "id": "bags-women-handbags",
            "name": "Handbags",
            "slug": "handbags"
          },
          {
            "id": "bags-women-shoulder-bags",
            "name": "Shoulder Bags",
            "slug": "shoulder-bags"
          },
          {
            "id": "bags-women-sling-bags",
            "name": "Sling Bags",
            "slug": "sling-bags"
          },
          {
            "id": "bags-women-tote-bags",
            "name": "Tote Bags",
            "slug": "tote-bags"
          },
          {
            "id": "bags-women-clutches",
            "name": "Clutches",
            "slug": "clutches"
          },
          {
            "id": "bags-women-backpacks",
            "name": "Backpacks",
            "slug": "backpacks"
          }
        ]
      },
      {
        "id": "bags-men",
        "name": "Men",
        "slug": "men",
        "children": [
          {
            "id": "bags-men-backpacks",
            "name": "Backpacks",
            "slug": "backpacks"
          },
          {
            "id": "bags-men-laptop-bags",
            "name": "Laptop Bags",
            "slug": "laptop-bags"
          },
          {
            "id": "bags-men-sling-bags",
            "name": "Sling Bags",
            "slug": "sling-bags"
          },
          {
            "id": "bags-men-messenger-bags",
            "name": "Messenger Bags",
            "slug": "messenger-bags"
          },
          {
            "id": "bags-men-travel-bags",
            "name": "Travel Bags",
            "slug": "travel-bags"
          },
          {
            "id": "bags-men-wallets",
            "name": "Wallets",
            "slug": "wallets"
          }
        ]
      },
      {
        "id": "bags-travel",
        "name": "Travel",
        "slug": "travel",
        "children": [
          {
            "id": "bags-travel-trolley-bags",
            "name": "Trolley Bags",
            "slug": "trolley-bags"
          },
          {
            "id": "bags-travel-duffle-bags",
            "name": "Duffle Bags",
            "slug": "duffle-bags"
          },
          {
            "id": "bags-travel-travel-backpacks",
            "name": "Travel Backpacks",
            "slug": "travel-backpacks"
          },
          {
            "id": "bags-travel-luggage",
            "name": "Luggage",
            "slug": "luggage"
          }
        ]
      }
    ]
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "slug": "accessories",
    "children": [
      {
        "id": "accessories-watches",
        "name": "Watches",
        "slug": "watches"
      },
      {
        "id": "accessories-sunglasses",
        "name": "Sunglasses",
        "slug": "sunglasses"
      },
      {
        "id": "accessories-wallets",
        "name": "Wallets",
        "slug": "wallets"
      },
      {
        "id": "accessories-belts",
        "name": "Belts",
        "slug": "belts"
      },
      {
        "id": "accessories-caps-and-hats",
        "name": "Caps & Hats",
        "slug": "caps-and-hats"
      },
      {
        "id": "accessories-socks",
        "name": "Socks",
        "slug": "socks"
      },
      {
        "id": "accessories-scarves",
        "name": "Scarves",
        "slug": "scarves"
      },
      {
        "id": "accessories-stoles",
        "name": "Stoles",
        "slug": "stoles"
      },
      {
        "id": "accessories-ties",
        "name": "Ties",
        "slug": "ties"
      },
      {
        "id": "accessories-cufflinks",
        "name": "Cufflinks",
        "slug": "cufflinks"
      },
      {
        "id": "accessories-jewellery",
        "name": "Jewellery",
        "slug": "jewellery",
        "children": [
          {
            "id": "accessories-jewellery-earrings",
            "name": "Earrings",
            "slug": "earrings"
          },
          {
            "id": "accessories-jewellery-rings",
            "name": "Rings",
            "slug": "rings"
          },
          {
            "id": "accessories-jewellery-necklaces",
            "name": "Necklaces",
            "slug": "necklaces"
          },
          {
            "id": "accessories-jewellery-bracelets",
            "name": "Bracelets",
            "slug": "bracelets"
          },
          {
            "id": "accessories-jewellery-anklets",
            "name": "Anklets",
            "slug": "anklets"
          }
        ]
      },
      {
        "id": "accessories-fashion-accessories",
        "name": "Fashion Accessories",
        "slug": "fashion-accessories"
      }
    ]
  },
  {
    "id": "sports",
    "name": "Sports",
    "slug": "sports",
    "children": [
      {
        "id": "sports-men-sportswear",
        "name": "Men Sportswear",
        "slug": "men-sportswear"
      },
      {
        "id": "sports-women-sportswear",
        "name": "Women Sportswear",
        "slug": "women-sportswear"
      },
      {
        "id": "sports-kids-sportswear",
        "name": "Kids Sportswear",
        "slug": "kids-sportswear"
      },
      {
        "id": "sports-running",
        "name": "Running",
        "slug": "running",
        "children": [
          {
            "id": "sports-running-running-t-shirts",
            "name": "Running T-Shirts",
            "slug": "running-t-shirts"
          },
          {
            "id": "sports-running-running-shorts",
            "name": "Running Shorts",
            "slug": "running-shorts"
          },
          {
            "id": "sports-running-running-pants",
            "name": "Running Pants",
            "slug": "running-pants"
          },
          {
            "id": "sports-running-running-shoes",
            "name": "Running Shoes",
            "slug": "running-shoes"
          }
        ]
      },
      {
        "id": "sports-training",
        "name": "Training",
        "slug": "training"
      },
      {
        "id": "sports-gym-wear",
        "name": "Gym Wear",
        "slug": "gym-wear"
      },
      {
        "id": "sports-yoga-wear",
        "name": "Yoga Wear",
        "slug": "yoga-wear"
      },
      {
        "id": "sports-track-pants",
        "name": "Track Pants",
        "slug": "track-pants"
      },
      {
        "id": "sports-sports-shorts",
        "name": "Sports Shorts",
        "slug": "sports-shorts"
      },
      {
        "id": "sports-sports-jackets",
        "name": "Sports Jackets",
        "slug": "sports-jackets"
      },
      {
        "id": "sports-sports-shoes",
        "name": "Sports Shoes",
        "slug": "sports-shoes"
      }
    ]
  },
  {
    "id": "winter-wear",
    "name": "Winter Wear",
    "slug": "winter-wear",
    "children": [
      {
        "id": "winter-wear-men",
        "name": "Men",
        "slug": "men",
        "children": [
          {
            "id": "winter-wear-men-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "winter-wear-men-sweatshirts",
            "name": "Sweatshirts",
            "slug": "sweatshirts"
          },
          {
            "id": "winter-wear-men-hoodies",
            "name": "Hoodies",
            "slug": "hoodies"
          },
          {
            "id": "winter-wear-men-sweaters",
            "name": "Sweaters",
            "slug": "sweaters"
          },
          {
            "id": "winter-wear-men-coats",
            "name": "Coats",
            "slug": "coats"
          },
          {
            "id": "winter-wear-men-thermals",
            "name": "Thermals",
            "slug": "thermals"
          }
        ]
      },
      {
        "id": "winter-wear-women",
        "name": "Women",
        "slug": "women",
        "children": [
          {
            "id": "winter-wear-women-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "winter-wear-women-sweaters",
            "name": "Sweaters",
            "slug": "sweaters"
          },
          {
            "id": "winter-wear-women-cardigans",
            "name": "Cardigans",
            "slug": "cardigans"
          },
          {
            "id": "winter-wear-women-coats",
            "name": "Coats",
            "slug": "coats"
          },
          {
            "id": "winter-wear-women-sweatshirts",
            "name": "Sweatshirts",
            "slug": "sweatshirts"
          },
          {
            "id": "winter-wear-women-thermals",
            "name": "Thermals",
            "slug": "thermals"
          }
        ]
      },
      {
        "id": "winter-wear-kids",
        "name": "Kids",
        "slug": "kids",
        "children": [
          {
            "id": "winter-wear-kids-jackets",
            "name": "Jackets",
            "slug": "jackets"
          },
          {
            "id": "winter-wear-kids-sweaters",
            "name": "Sweaters",
            "slug": "sweaters"
          },
          {
            "id": "winter-wear-kids-hoodies",
            "name": "Hoodies",
            "slug": "hoodies"
          },
          {
            "id": "winter-wear-kids-sweatshirts",
            "name": "Sweatshirts",
            "slug": "sweatshirts"
          },
          {
            "id": "winter-wear-kids-thermals",
            "name": "Thermals",
            "slug": "thermals"
          }
        ]
      }
    ]
  },
  {
    "id": "collections",
    "name": "Collections",
    "slug": "collections",
    "children": [
      {
        "id": "collections-new-arrivals",
        "name": "New Arrivals",
        "slug": "new-arrivals"
      },
      {
        "id": "collections-trending-now",
        "name": "Trending Now",
        "slug": "trending-now"
      },
      {
        "id": "collections-bestsellers",
        "name": "Bestsellers",
        "slug": "bestsellers"
      },
      {
        "id": "collections-premium-collection",
        "name": "Premium Collection",
        "slug": "premium-collection"
      },
      {
        "id": "collections-festive-collection",
        "name": "Festive Collection",
        "slug": "festive-collection"
      },
      {
        "id": "collections-casual-collection",
        "name": "Casual Collection",
        "slug": "casual-collection"
      },
      {
        "id": "collections-party-wear",
        "name": "Party Wear",
        "slug": "party-wear"
      },
      {
        "id": "collections-workwear",
        "name": "Workwear",
        "slug": "workwear"
      },
      {
        "id": "collections-streetwear",
        "name": "Streetwear",
        "slug": "streetwear"
      },
      {
        "id": "collections-activewear",
        "name": "Activewear",
        "slug": "activewear"
      },
      {
        "id": "collections-winter-edit",
        "name": "Winter Edit",
        "slug": "winter-edit"
      },
      {
        "id": "collections-summer-edit",
        "name": "Summer Edit",
        "slug": "summer-edit"
      },
      {
        "id": "collections-wedding-edit",
        "name": "Wedding Edit",
        "slug": "wedding-edit"
      },
      {
        "id": "collections-essentials",
        "name": "Essentials",
        "slug": "essentials"
      }
    ]
  },
  {
    "id": "sale",
    "name": "Sale",
    "slug": "sale",
    "children": [
      {
        "id": "sale-flat-30-off",
        "name": "Flat 30% Off",
        "slug": "flat-30-off"
      },
      {
        "id": "sale-flat-50-off",
        "name": "Flat 50% Off",
        "slug": "flat-50-off"
      },
      {
        "id": "sale-flat-60-off",
        "name": "Flat 60% Off",
        "slug": "flat-60-off"
      },
      {
        "id": "sale-flat-70-off",
        "name": "Flat 70% Off",
        "slug": "flat-70-off"
      },
      {
        "id": "sale-flat-80-off",
        "name": "Flat 80% Off",
        "slug": "flat-80-off"
      },
      {
        "id": "sale-under-rs499",
        "name": "Under Rs499",
        "slug": "under-rs499"
      },
      {
        "id": "sale-under-rs999",
        "name": "Under Rs999",
        "slug": "under-rs999"
      },
      {
        "id": "sale-clearance",
        "name": "Clearance",
        "slug": "clearance"
      },
      {
        "id": "sale-last-chance",
        "name": "Last Chance",
        "slug": "last-chance"
      }
    ]
  }
];

  var TOP_NAVIGATION = CATEGORY_TREE.map(function (c) { return c.id; });

  function buildFlatIndex(tree) {
    tree = tree || CATEGORY_TREE;
    var index = {};
    function walk(nodes, parentId, depth, ancestors) {
      parentId = parentId || null;
      depth = depth || 0;
      ancestors = ancestors || [];
      nodes.forEach(function (node) {
        var children = node.children;
        var rest = {};
        Object.keys(node).forEach(function (k) { if (k !== 'children') rest[k] = node[k]; });
        index[node.id] = Object.assign({}, rest, {
          parentId: parentId,
          depth: depth,
          ancestors: ancestors,
          hasChildren: Boolean(children && children.length)
        });
        if (children && children.length) {
          walk(children, node.id, depth + 1, ancestors.concat([node.id]));
        }
      });
    }
    walk(tree);
    return index;
  }

  var CATEGORY_INDEX = buildFlatIndex();

  function getCategoryById(id) { return CATEGORY_INDEX[id] || null; }

  function findNode(nodes, targetId) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.id === targetId) return node;
      if (node.children) {
        var found = findNode(node.children, targetId);
        if (found) return found;
      }
    }
    return null;
  }

  function getChildren(id) {
    var node = findNode(CATEGORY_TREE, id);
    return node && node.children ? node.children : [];
  }

  function getBreadcrumbs(id) {
    var entry = CATEGORY_INDEX[id];
    if (!entry) return [];
    var trail = entry.ancestors.map(function (ancestorId) {
      var a = CATEGORY_INDEX[ancestorId];
      return { id: a.id, name: a.name, slug: a.slug };
    });
    trail.push({ id: entry.id, name: entry.name, slug: entry.slug });
    return trail;
  }

  function getCategoryPath(id) {
    var crumbs = getBreadcrumbs(id);
    return '/' + crumbs.map(function (c) { return c.slug; }).join('/');
  }

  function getAllLeafIds(tree) {
    tree = tree || CATEGORY_TREE;
    var leaves = [];
    function walk(nodes) {
      nodes.forEach(function (node) {
        if (node.children && node.children.length) {
          walk(node.children);
        } else {
          leaves.push(node.id);
        }
      });
    }
    walk(tree);
    return leaves;
  }

  function searchCategories(query) {
    var q = (query || '').trim().toLowerCase();
    if (!q) return [];
    return Object.keys(CATEGORY_INDEX)
      .map(function (k) { return CATEGORY_INDEX[k]; })
      .filter(function (c) { return c.name.toLowerCase().indexOf(q) !== -1; });
  }

  global.ASF = global.ASF || {};
  global.ASF.categories = {
    CATEGORY_TREE: CATEGORY_TREE,
    TOP_NAVIGATION: TOP_NAVIGATION,
    CATEGORY_INDEX: CATEGORY_INDEX,
    getCategoryById: getCategoryById,
    getChildren: getChildren,
    getBreadcrumbs: getBreadcrumbs,
    getCategoryPath: getCategoryPath,
    getAllLeafIds: getAllLeafIds,
    searchCategories: searchCategories
  };
})(window);

