/* =========================================================
   AS FASHIONS - PRODUCTS.JS
   Product Listing + Filters + Sorting + Wishlist + Cart
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Women Floral Printed Kurti",
    category: "women",
    subcategory: "girl",
    type: "kurti",
    price: 499,
    oldPrice: 999,
    discount: 50,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80",
    badge: "🔥 Hot Deal"
  },
  {
    id: 2,
    name: "Women Premium Casual Dress",
    category: "women",
    subcategory: "girl",
    type: "dress",
    price: 799,
    oldPrice: 1499,
    discount: 47,
    rating: 4.6,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    badge: "⚡ Trending"
  },
  {
    id: 3,
    name: "Women Elegant Saree",
    category: "women",
    subcategory: "girl",
    type: "saree",
    price: 999,
    oldPrice: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 216,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
    badge: "Best Seller"
  },
  {
    id: 4,
    name: "Women Oversized T-Shirt",
    category: "women",
    subcategory: "girl",
    type: "tops",
    price: 399,
    oldPrice: 799,
    discount: 50,
    rating: 4.3,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
    badge: "Under ₹499"
  },

  {
    id: 5,
    name: "Men Slim Fit Casual Shirt",
    category: "men",
    subcategory: "boy",
    type: "shirts",
    price: 599,
    oldPrice: 1199,
    discount: 50,
    rating: 4.4,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    badge: "🔥 Hot Deal"
  },
  {
    id: 6,
    name: "Men Premium Denim Jeans",
    category: "men",
    subcategory: "boy",
    type: "jeans",
    price: 899,
    oldPrice: 1799,
    discount: 50,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    badge: "Best Seller"
  },
  {
    id: 7,
    name: "Men Oversized Streetwear T-Shirt",
    category: "men",
    subcategory: "boy",
    type: "tshirts",
    price: 449,
    oldPrice: 899,
    discount: 50,
    rating: 4.5,
    reviews: 132,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    badge: "Under ₹499"
  },
  {
    id: 8,
    name: "Men Casual Cotton Trousers",
    category: "men",
    subcategory: "boy",
    type: "trousers",
    price: 699,
    oldPrice: 1299,
    discount: 46,
    rating: 4.2,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    badge: "Trending"
  },

  {
    id: 9,
    name: "Girls Printed Summer Dress",
    category: "kids",
    subcategory: "girl",
    type: "dress",
    price: 399,
    oldPrice: 799,
    discount: 50,
    rating: 4.6,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
    badge: "👧 Girls"
  },
  {
    id: 10,
    name: "Girls Cute Party Frock",
    category: "kids",
    subcategory: "girl",
    type: "frock",
    price: 599,
    oldPrice: 1199,
    discount: 50,
    rating: 4.7,
    reviews: 114,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
    badge: "✨ New"
  },
  {
    id: 11,
    name: "Boys Casual Printed T-Shirt",
    category: "kids",
    subcategory: "boy",
    type: "tshirts",
    price: 349,
    oldPrice: 699,
    discount: 50,
    rating: 4.4,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
    badge: "👦 Boys"
  },
  {
    id: 12,
    name: "Boys Denim Casual Set",
    category: "kids",
    subcategory: "boy",
    type: "sets",
    price: 699,
    oldPrice: 1399,
    discount: 50,
    rating: 4.5,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
    badge: "🔥 Hot Deal"
  }
];


/* =========================================================
   STORAGE
   ========================================================= */

let wishlist = JSON.parse(localStorage.getItem("asWishlist")) || [];
let cart = JSON.parse(localStorage.getItem("asCart")) || [];


/* =========================================================
   CURRENT FILTER STATE
   ========================================================= */

let filters = {
  category: "all",
  subcategory: "all",
  minPrice: 0,
  maxPrice: Infinity,
  minDiscount: 0,
  sort: "featured"
};


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderProducts();

  setupCategoryFilters();
  setupSubcategoryFilters();
  setupPriceFilters();
  setupDiscountFilters();
  setupSorting();

  updateWishlistCount();
  updateCartCount();

  handleURLFilters();

  setupMobileFilter();
});


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

  const container =
    document.querySelector("#productsGrid") ||
    document.querySelector(".products-grid") ||
    document.querySelector("#productGrid");

  if (!container) {
    console.warn("Products grid not found.");
    return;
  }

  let filtered = PRODUCTS.filter(product => {

    const categoryMatch =
      filters.category === "all" ||
      product.category === filters.category;

    const subcategoryMatch =
      filters.subcategory === "all" ||
      product.subcategory === filters.subcategory;

    const priceMatch =
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice;

    const discountMatch =
      product.discount >= filters.minDiscount;

    return (
      categoryMatch &&
      subcategoryMatch &&
      priceMatch &&
      discountMatch
    );
  });


  /* SORT */

  if (filters.sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filters.sort === "discount") {
    filtered.sort((a, b) => b.discount - a.discount);
  }

  if (filters.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }


  /* EMPTY */

  if (filtered.length === 0) {

    container.innerHTML = `
      <div class="no-products">
        <div style="font-size:50px;">🛍️</div>
        <h2>No products found</h2>
        <p>Try changing your filters.</p>
        <button onclick="clearAllFilters()">
          Clear Filters
        </button>
      </div>
    `;

    updateProductCount(0);
    return;
  }


  container.innerHTML = filtered
    .map(product => createProductCard(product))
    .join("");

  updateProductCount(filtered.length);
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product) {

  const isWishlisted =
    wishlist.includes(product.id);

  const discountAmount =
    product.oldPrice - product.price;

  return `
    <article class="product-card">

      <div
        class="product-image-wrap"
        onclick="openProduct(${product.id})"
      >

        <img
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          class="product-image"
          loading="lazy"
        >

        ${
          product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : ""
        }

        <button
          class="wishlist-btn ${isWishlisted ? "active" : ""}"
          onclick="event.stopPropagation(); toggleWishlist(${product.id})"
          aria-label="Wishlist"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

      </div>


      <div class="product-info">

        <div class="product-category">
          ${capitalize(product.category)}
          ${
            product.category === "kids"
              ? ` · ${capitalize(product.subcategory)}`
              : ""
          }
        </div>

        <h3
          class="product-name"
          onclick="openProduct(${product.id})"
        >
          ${escapeHTML(product.name)}
        </h3>


        <div class="rating">
          <span>★ ${product.rating}</span>
          <small>(${product.reviews})</small>
        </div>


        <div class="price-row">

          <strong>
            ₹${product.price.toLocaleString("en-IN")}
          </strong>

          <del>
            ₹${product.oldPrice.toLocaleString("en-IN")}
          </del>

          <span class="discount">
            ${product.discount}% OFF
          </span>

        </div>


        <div class="save-text">
          You save ₹${discountAmount.toLocaleString("en-IN")}
        </div>


        <button
          class="add-cart-btn"
          onclick="addToCart(${product.id})"
        >
          🛒 Add to Cart
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function setupCategoryFilters() {

  const buttons = document.querySelectorAll(
    "[data-category], .category-filter"
  );

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category ||
        button.value;

      filters.category =
        category || "all";

      filters.subcategory = "all";

      updateActiveButton(
        buttons,
        button
      );

      renderProducts();
    });
  });
}


/* =========================================================
   GIRL / BOY FILTER
   ========================================================= */

function setupSubcategoryFilters() {

  const buttons = document.querySelectorAll(
    "[data-subcategory], .subcategory-filter"
  );

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      filters.subcategory =
        button.dataset.subcategory ||
        button.value ||
        "all";

      updateActiveButton(
        buttons,
        button
      );

      renderProducts();
    });
  });
}


/* =========================================================
   PRICE FILTER
   ========================================================= */

function setupPriceFilters() {

  const buttons = document.querySelectorAll(
    "[data-price], .price-filter"
  );

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const value =
        button.dataset.price ||
        button.value;

      if (value === "499") {
        filters.minPrice = 0;
        filters.maxPrice = 499;
      }

      else if (value === "999") {
        filters.minPrice = 500;
        filters.maxPrice = 999;
      }

      else if (value === "1000") {
        filters.minPrice = 1000;
        filters.maxPrice = Infinity;
      }

      else if (value === "all") {
        filters.minPrice = 0;
        filters.maxPrice = Infinity;
      }

      updateActiveButton(buttons, button);

      renderProducts();
    });
  });
}


/* =========================================================
   DISCOUNT FILTER
   ========================================================= */

function setupDiscountFilters() {

  const buttons = document.querySelectorAll(
    "[data-discount], .discount-filter"
  );

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const value =
        Number(
          button.dataset.discount ||
          button.value ||
          0
        );

      filters.minDiscount = value;

      updateActiveButton(buttons, button);

      renderProducts();
    });
  });
}


/* =========================================================
   SORTING
   ========================================================= */

function setupSorting() {

  const sortElements = document.querySelectorAll(
    "#sortSelect, .sort-select, [data-sort]"
  );

  sortElements.forEach(element => {

    element.addEventListener("change", () => {

      filters.sort =
        element.value ||
        element.dataset.sort ||
        "featured";

      renderProducts();
    });
  });
}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(productId) {

  const index =
    wishlist.indexOf(productId);

  if (index === -1) {

    wishlist.push(productId);

    showToast("❤️ Wishlist లో add అయింది");

  } else {

    wishlist.splice(index, 1);

    showToast("Wishlist నుంచి remove అయింది");
  }

  localStorage.setItem(
    "asWishlist",
    JSON.stringify(wishlist)
  );

  updateWishlistCount();

  renderProducts();
}


function updateWishlistCount() {

  const elements = document.querySelectorAll(
    "#wishlistCount, .wishlist-count"
  );

  elements.forEach(element => {
    element.textContent = wishlist.length;
  });
}


/* =========================================================
   CART
   ========================================================= */

function addToCart(productId) {

  const product =
    PRODUCTS.find(p => p.id === productId);

  if (!product) return;


  const existing =
    cart.find(item => item.id === productId);


  if (existing) {

    existing.quantity =
      (existing.quantity || 1) + 1;

  } else {

    cart.push({
      id: product.id,
      quantity: 1
    });
  }


  localStorage.setItem(
    "asCart",
    JSON.stringify(cart)
  );

  updateCartCount();

  showToast("🛒 Cart లో add అయింది");
}


function updateCartCount() {

  const count =
    cart.reduce(
      (total, item) =>
        total + (item.quantity || 1),
      0
    );

  const elements = document.querySelectorAll(
    "#cartCount, .cart-count"
  );

  elements.forEach(element => {
    element.textContent = count;
  });
}


/* =========================================================
   PRODUCT DETAILS NAVIGATION
   ========================================================= */

function openProduct(productId) {

  const product =
    PRODUCTS.find(p => p.id === productId);

  if (!product) return;


  /*
    Product details page కోసం ID పంపుతున్నాం.
    Example:
    product.html?id=1
  */

  window.location.href =
    `product.html?id=${product.id}`;
}


/* =========================================================
   CATEGORY NAVIGATION
   ========================================================= */

function goToCategory(category) {

  if (!category) return;

  window.location.href =
    `products.html?category=${encodeURIComponent(category)}`;
}


/* =========================================================
   URL FILTER SUPPORT
   ========================================================= */

function handleURLFilters() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const category =
    params.get("category");

  const subcategory =
    params.get("subcategory");

  const price =
    params.get("price");

  const discount =
    params.get("discount");


  if (category) {
    filters.category = category;
  }

  if (subcategory) {
    filters.subcategory = subcategory;
  }

  if (price === "499") {
    filters.minPrice = 0;
    filters.maxPrice = 499;
  }

  if (price === "999") {
    filters.minPrice = 500;
    filters.maxPrice = 999;
  }

  if (discount) {
    filters.minDiscount =
      Number(discount);
  }

  renderProducts();
}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearAllFilters() {

  filters = {
    category: "all",
    subcategory: "all",
    minPrice: 0,
    maxPrice: Infinity,
    minDiscount: 0,
    sort: "featured"
  };


  document.querySelectorAll(
    ".filter-btn.active, .category-filter.active, .subcategory-filter.active"
  ).forEach(button => {
    button.classList.remove("active");
  });


  const sort =
    document.querySelector("#sortSelect");

  if (sort) {
    sort.value = "featured";
  }


  renderProducts();
}


/* =========================================================
   ACTIVE BUTTON
   ========================================================= */

function updateActiveButton(
  buttons,
  selected
) {

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  if (selected) {
    selected.classList.add("active");
  }
}


/* =========================================================
   PRODUCT COUNT
   ========================================================= */

function updateProductCount(count) {

  document.querySelectorAll(
    "#productCount, .product-count"
  ).forEach(element => {

    element.textContent =
      `${count} Products`;
  });
}


/* =========================================================
   MOBILE FILTER
   ========================================================= */

function setupMobileFilter() {

  const openButton =
    document.querySelector(
      "#mobileFilterBtn, .mobile-filter-btn"
    );

  const closeButton =
    document.querySelector(
      "#closeFilter, .close-filter"
    );

  const sidebar =
    document.querySelector(
      "#filterSidebar, .filter-sidebar"
    );


  if (!sidebar) return;


  if (openButton) {

    openButton.addEventListener(
      "click",
      () => {
        sidebar.classList.add("open");
        document.body.classList.add(
          "filter-open"
        );
      }
    );
  }


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      () => {
        sidebar.classList.remove("open");
        document.body.classList.remove(
          "filter-open"
        );
      }
    );
  }
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  let toast =
    document.querySelector("#asToast");


  if (!toast) {

    toast =
      document.createElement("div");

    toast.id = "asToast";

    toast.style.position = "fixed";
    toast.style.bottom = "25px";
    toast.style.left = "50%";
    toast.style.transform =
      "translateX(-50%)";
    toast.style.background =
      "#111";
    toast.style.color =
      "#fff";
    toast.style.padding =
      "12px 20px";
    toast.style.borderRadius =
      "30px";
    toast.style.zIndex =
      "99999";
    toast.style.fontSize =
      "14px";
    toast.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.2)";

    document.body.appendChild(toast);
  }


  toast.textContent = message;

  toast.style.opacity = "1";


  clearTimeout(
    window.asToastTimer
  );


  window.asToastTimer =
    setTimeout(() => {

      toast.style.opacity = "0";

    }, 2200);
}


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function capitalize(text) {

  if (!text) return "";

  return text.charAt(0).toUpperCase() +
    text.slice(1);
}


function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.PRODUCTS = PRODUCTS;

window.toggleWishlist =
  toggleWishlist;

window.addToCart =
  addToCart;

window.openProduct =
  openProduct;

window.goToCategory =
  goToCategory;

window.clearAllFilters =
  clearAllFilters;
