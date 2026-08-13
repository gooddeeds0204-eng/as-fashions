/* =========================================================
   AS FASHIONS
   MAIN APPLICATION JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL STATE
   ========================================================= */

const AS_STATE = {
    cart: JSON.parse(localStorage.getItem("asf_cart") || "[]"),
    wishlist: JSON.parse(localStorage.getItem("asf_wishlist") || "[]"),
    recentlyViewed: JSON.parse(
        localStorage.getItem("asf_recently_viewed") || "[]"
    ),

    currentProducts: [],
    currentCategory: "all",
    currentSubcategory: null,

    searchQuery: "",
    sortBy: "recommended",

    filters: {
        gender: [],
        category: null,
        subcategory: null,
        type: [],
        sizes: [],
        footwearSizes: [],
        colors: [],
        minPrice: null,
        maxPrice: null,
        minDiscount: null,
        minRating: null
    },

    selectedProduct: null,
    selectedSize: null,
    selectedColor: null,

    coupon: null
};


/* =========================================================
   DOM HELPERS
   ========================================================= */

function $(selector, parent = document) {
    return parent.querySelector(selector);
}

function $$(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

function getElement(...selectors) {

    for (const selector of selectors) {

        const element = document.querySelector(selector);

        if (element) {
            return element;
        }
    }

    return null;
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveState() {

    localStorage.setItem(
        "asf_cart",
        JSON.stringify(AS_STATE.cart)
    );

    localStorage.setItem(
        "asf_wishlist",
        JSON.stringify(AS_STATE.wishlist)
    );

    localStorage.setItem(
        "asf_recently_viewed",
        JSON.stringify(AS_STATE.recentlyViewed)
    );
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeASFashion();

});


function initializeASFashion() {

    AS_STATE.currentProducts =
        typeof products !== "undefined"
            ? [...products]
            : [];

    setupNavigation();
    setupSearch();
    setupCart();
    setupWishlist();
    setupProductModal();
    setupMobileMenu();
    setupFilters();
    setupSorting();
    setupGlobalClicks();
    setupCountdowns();
    setupScratchCard();

    renderInitialProducts();
    updateCartUI();
    updateWishlistUI();
    updateHeaderCounters();

}


/* =========================================================
   PRODUCT DATABASE ACCESS
   ========================================================= */

function allProducts() {

    if (typeof products !== "undefined") {
        return products;
    }

    if (
        window.ASFashionProducts &&
        window.ASFashionProducts.products
    ) {
        return window.ASFashionProducts.products;
    }

    return [];
}


/* =========================================================
   PRODUCT RENDERING
   ========================================================= */

function renderInitialProducts() {

    const list = allProducts();

    if (!list.length) {
        return;
    }

    AS_STATE.currentProducts = list;

    renderProducts(list);

}


function renderProducts(productList, container = null) {

    const target =
        container ||
        getElement(
            "#productGrid",
            ".product-grid",
            "[data-product-grid]"
        );

    if (!target) {
        return;
    }

    if (!productList.length) {

        target.innerHTML = `
            <div class="as-empty-products">
                <div class="as-empty-icon">🛍️</div>
                <h3>No products found</h3>
                <p>Try changing your filters or search.</p>
                <button
                    type="button"
                    class="as-btn as-btn-primary"
                    data-action="clear-filters"
                >
                    Clear Filters
                </button>
            </div>
        `;

        return;
    }


    target.innerHTML = productList
        .map(product => createProductCard(product))
        .join("");

    updateProductCount(productList.length);

}


function createProductCard(product) {

    const isWishlisted =
        AS_STATE.wishlist.includes(product.id);

    const discount =
        product.discount ||
        calculateDiscount(product.price, product.mrp);

    const badge =
        product.badge ||
        (discount >= 60
            ? "HOT DEAL"
            : discount >= 50
                ? `${discount}% OFF`
                : "");

    const lowStock =
        product.stock > 0 &&
        product.stock <= 5;

    return `

        <article
            class="product-card"
            data-product-id="${escapeHTML(product.id)}"
        >

            <div class="product-image-wrap">

                <img
                    class="product-image"
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/600x800?text=AS+FASHIONS'"
                >

                ${
                    badge
                        ? `
                            <span class="product-badge">
                                ${escapeHTML(badge)}
                            </span>
                        `
                        : ""
                }

                ${
                    lowStock
                        ? `
                            <span class="low-stock-badge">
                                Only ${product.stock} left
                            </span>
                        `
                        : ""
                }

                <button
                    type="button"
                    class="wishlist-btn ${
                        isWishlisted ? "active" : ""
                    }"
                    data-action="wishlist"
                    data-product-id="${escapeHTML(product.id)}"
                    aria-label="Add to wishlist"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

                <button
                    type="button"
                    class="quick-view-btn"
                    data-action="quick-view"
                    data-product-id="${escapeHTML(product.id)}"
                >
                    QUICK VIEW
                </button>

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${escapeHTML(product.brand || "AS FASHIONS")}
                </div>

                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>

                <div class="product-rating">

                    <span class="rating-box">
                        ${product.rating || 0} ★
                    </span>

                    <span class="review-count">
                        (${formatNumber(product.reviews || 0)})
                    </span>

                </div>


                <div class="product-price">

                    <strong>
                        ${formatCurrency(product.price)}
                    </strong>

                    ${
                        product.mrp
                            ? `
                                <del>
                                    ${formatCurrency(product.mrp)}
                                </del>
                            `
                            : ""
                    }

                    ${
                        discount
                            ? `
                                <span class="discount">
                                    ${discount}% OFF
                                </span>
                            `
                            : ""
                    }

                </div>


                ${
                    product.tags?.length
                        ? `
                            <div class="product-tags">
                                ${product.tags
                                    .slice(0, 2)
                                    .map(
                                        tag =>
                                            `<span>${escapeHTML(tag)}</span>`
                                    )
                                    .join("")}
                            </div>
                        `
                        : ""
                }

            </div>

        </article>
    `;
}


/* =========================================================
   PRODUCT CLICK
   ========================================================= */

function openProduct(productId) {

    const product = findProduct(productId);

    if (!product) {
        return;
    }

    AS_STATE.selectedProduct = product;
    AS_STATE.selectedSize = null;
    AS_STATE.selectedColor = product.color || null;

    addRecentlyViewed(product.id);

    const modal =
        getElement(
            "#productModal",
            ".product-modal",
            "[data-product-modal]"
        );

    if (!modal) {

        window.location.hash =
            `product/${encodeURIComponent(product.id)}`;

        return;
    }

    renderProductModal(product, modal);

    modal.classList.add("active");
    document.body.classList.add("modal-open");

}


function renderProductModal(product, modal) {

    const discount =
        product.discount ||
        calculateDiscount(product.price, product.mrp);

    modal.innerHTML = `

        <div class="product-modal-overlay"
             data-action="close-modal"></div>

        <div class="product-modal-content">

            <button
                class="modal-close"
                type="button"
                data-action="close-modal"
                aria-label="Close"
            >
                ×
            </button>

            <div class="product-detail">

                <div class="product-detail-image">

                    <img
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                    >

                </div>


                <div class="product-detail-info">

                    <div class="detail-brand">
                        ${escapeHTML(product.brand)}
                    </div>

                    <h2>
                        ${escapeHTML(product.name)}
                    </h2>

                    <div class="detail-rating">
                        <span>
                            ${product.rating} ★
                        </span>

                        <span>
                            ${formatNumber(product.reviews)} Reviews
                        </span>
                    </div>


                    <div class="detail-price">

                        <strong>
                            ${formatCurrency(product.price)}
                        </strong>

                        <del>
                            ${formatCurrency(product.mrp)}
                        </del>

                        <span>
                            ${discount}% OFF
                        </span>

                    </div>


                    <div class="sale-message">

                        🔥 Limited time offer

                        ${
                            product.stock <= 5
                                ? `<b>Only ${product.stock} left!</b>`
                                : "Grab it before it sells out."
                        }

                    </div>


                    ${
                        product.colors?.length
                            ? `
                                <div class="detail-section">

                                    <h4>
                                        Select Color
                                    </h4>

                                    <div class="color-options">

                                        ${product.colors
                                            .map(
                                                color => `
                                                    <button
                                                        type="button"
                                                        class="color-option ${
                                                            AS_STATE.selectedColor === color
                                                                ? "active"
                                                                : ""
                                                        }"
                                                        data-color="${escapeHTML(color)}"
                                                    >
                                                        ${escapeHTML(color)}
                                                    </button>
                                                `
                                            )
                                            .join("")}

                                    </div>

                                </div>
                            `
                            : ""
                    }


                    ${
                        product.sizes?.length
                            ? `
                                <div class="detail-section">

                                    <div class="size-heading">

                                        <h4>
                                            Select Size
                                        </h4>

                                        <button
                                            type="button"
                                            data-action="size-guide"
                                        >
                                            Size Guide
                                        </button>

                                    </div>

                                    <div class="size-options">

                                        ${product.sizes
                                            .map(
                                                size => `
                                                    <button
                                                        type="button"
                                                        class="size-option"
                                                        data-size="${escapeHTML(size)}"
                                                    >
                                                        ${escapeHTML(size)}
                                                    </button>
                                                `
                                            )
                                            .join("")}

                                    </div>

                                </div>
                            `
                            : ""
                    }


                    <div class="detail-actions">

                        <button
                            type="button"
                            class="add-cart-btn"
                            data-action="modal-add-cart"
                        >
                            🛒 ADD TO BAG
                        </button>

                        <button
                            type="button"
                            class="buy-now-btn"
                            data-action="modal-buy-now"
                        >
                            BUY NOW
                        </button>

                    </div>


                    <div class="product-services">

                        <div>
                            🚚 Free Delivery
                        </div>

                        <div>
                            ↩️ Easy 7 Days Returns
                        </div>

                        <div>
                            🔒 Secure Payments
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

}


/* =========================================================
   PRODUCT HELPERS
   ========================================================= */

function findProduct(productId) {

    return allProducts().find(
        product => product.id === productId
    );

}


function calculateDiscount(price, mrp) {

    if (!mrp || !price || mrp <= price) {
        return 0;
    }

    return Math.round(
        ((mrp - price) / mrp) * 100
    );

}


/* =========================================================
   RECENTLY VIEWED
   ========================================================= */

function addRecentlyViewed(productId) {

    AS_STATE.recentlyViewed =
        AS_STATE.recentlyViewed.filter(
            id => id !== productId
        );

    AS_STATE.recentlyViewed.unshift(productId);

    AS_STATE.recentlyViewed =
        AS_STATE.recentlyViewed.slice(0, 12);

    saveState();

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const inputs = $$(
        'input[type="search"], input[name="search"], .search-input, #searchInput'
    );

    inputs.forEach(input => {

        input.addEventListener("input", event => {

            const query =
                event.target.value.trim();

            AS_STATE.searchQuery = query;

            showSearchSuggestions(query);

        });


        input.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch(
                    event.target.value
                );
            }

        });

    });


    const searchButtons = $$(
        '[data-action="search"], .search-button'
    );

    searchButtons.forEach(button => {

        button.addEventListener("click", () => {

            const input =
                getElement(
                    "#searchInput",
                    ".search-input",
                    'input[name="search"]'
                );

            if (input) {
                performSearch(input.value);
            }

        });

    });

}


function performSearch(query) {

    query =
        String(query || "")
            .trim();

    AS_STATE.searchQuery = query;

    closeSearchSuggestions();

    if (!query) {

        renderInitialProducts();

        return;
    }


    const results =
        typeof searchProducts === "function"
            ? searchProducts(query)
            : allProducts().filter(product =>
                `${product.name} ${product.brand}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );


    AS_STATE.currentProducts = results;

    renderProducts(
        sortProductsSafe(
            results,
            AS_STATE.sortBy
        )
    );


    updatePageTitle(
        `Search results for "${query}"`
    );

    scrollToProducts();

}


function showSearchSuggestions(query) {

    const box =
        getElement(
            "#searchSuggestions",
            ".search-suggestions",
            "[data-search-suggestions]"
        );

    if (!box || !query) {

        closeSearchSuggestions();

        return;
    }


    const results =
        searchProductsSafe(query)
            .slice(0, 6);


    if (!results.length) {

        box.innerHTML = `
            <div class="search-empty">
                No products found
            </div>
        `;

        box.classList.add("active");

        return;
    }


    box.innerHTML = results
        .map(
            product => `

                <button
                    type="button"
                    class="search-suggestion"
                    data-action="quick-view"
                    data-product-id="${escapeHTML(product.id)}"
                >

                    <img
                        src="${escapeHTML(product.image)}"
                        alt=""
                    >

                    <span>

                        <strong>
                            ${escapeHTML(product.name)}
                        </strong>

                        <small>
                            ${escapeHTML(product.brand)}
                        </small>

                    </span>

                    <b>
                        ${formatCurrency(product.price)}
                    </b>

                </button>
            `
        )
        .join("");


    box.classList.add("active");

}


function closeSearchSuggestions() {

    const box =
        getElement(
            "#searchSuggestions",
            ".search-suggestions",
            "[data-search-suggestions]"
        );

    if (box) {
        box.classList.remove("active");
    }

}


function searchProductsSafe(query) {

    if (typeof searchProducts === "function") {
        return searchProducts(query);
    }

    return allProducts().filter(product => {

        const text = [
            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.type,
            ...(product.tags || [])
        ]
            .join(" ")
            .toLowerCase();

        return text.includes(
            query.toLowerCase()
        );
    });

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    $$("[data-category]").forEach(element => {

        element.addEventListener("click", event => {

            event.preventDefault();

            const category =
                element.dataset.category;

            if (category) {
                loadCategory(category);
            }

        });

    });


    $$("[data-subcategory]").forEach(element => {

        element.addEventListener("click", event => {

            event.preventDefault();

            const subcategory =
                element.dataset.subcategory;

            if (subcategory) {
                loadSubcategory(subcategory);
            }

        });

    });

}


function loadCategory(category) {

    AS_STATE.currentCategory = category;
    AS_STATE.currentSubcategory = null;

    resetFilters(false);

    AS_STATE.filters.category =
        category === "all"
            ? null
            : category;


    let result = allProducts();

    if (category !== "all") {

        result = result.filter(
            product =>
                product.category === category
        );
    }


    AS_STATE.currentProducts = result;

    renderProducts(
        sortProductsSafe(
            result,
            AS_STATE.sortBy
        )
    );

    updatePageTitle(
        getCategoryName(category)
    );

    closeMobileMenu();
    scrollToProducts();

}


function loadSubcategory(subcategory) {

    AS_STATE.currentSubcategory =
        subcategory;

    resetFilters(false);

    AS_STATE.filters.subcategory =
        subcategory;


    let result = allProducts().filter(
        product =>
            product.subcategory === subcategory
    );


    AS_STATE.currentProducts = result;

    renderProducts(
        sortProductsSafe(
            result,
            AS_STATE.sortBy
        )
    );

    updatePageTitle(
        formatLabel(subcategory)
    );

    closeMobileMenu();
    scrollToProducts();

}


/* =========================================================
   SORTING
   ========================================================= */

function setupSorting() {

    const selects = $$(
        "select[data-sort], #sortSelect, .sort-select"
    );

    selects.forEach(select => {

        select.addEventListener("change", () => {

            AS_STATE.sortBy =
                select.value || "recommended";

            const sorted =
                sortProductsSafe(
                    AS_STATE.currentProducts,
                    AS_STATE.sortBy
                );

            renderProducts(sorted);

        });

    });

}


function sortProductsSafe(list, sortBy) {

    if (typeof sortProducts === "function") {
        return sortProducts(list, sortBy);
    }

    const result = [...list];

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

        default:
            return result;
    }

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

    document.addEventListener(
        "change",
        event => {

            const element =
                event.target;

            if (
                !element.matches(
                    "[data-filter]"
                )
            ) {
                return;
            }

            applyFilterElement(element);

        }
    );


    $$(
        '[data-action="clear-filters"]'
    ).forEach(button => {

        button.addEventListener(
            "click",
            resetFilters
        );

    });

}


function applyFilterElement(element) {

    const filter =
        element.dataset.filter;

    const value =
        element.value ||
        element.dataset.value;

    if (!filter) {
        return;
    }


    if (element.type === "checkbox") {

        if (!Array.isArray(
            AS_STATE.filters[filter]
        )) {
            AS_STATE.filters[filter] = [];
        }


        if (element.checked) {

            if (
                !AS_STATE.filters[filter]
                    .includes(value)
            ) {

                AS_STATE.filters[filter]
                    .push(value);
            }

        } else {

            AS_STATE.filters[filter] =
                AS_STATE.filters[filter]
                    .filter(
                        item => item !== value
                    );
        }

    } else {

        AS_STATE.filters[filter] =
            value || null;

    }


    applyAllFilters();

}


function applyAllFilters() {

    let result = allProducts();

    const filters = AS_STATE.filters;


    if (typeof filterProducts === "function") {

        result =
            filterProducts(
                result,
                filters
            );

    } else {

        result =
            fallbackFilter(
                result,
                filters
            );

    }


    if (AS_STATE.searchQuery) {

        result =
            searchProductsSafe(
                AS_STATE.searchQuery
            ).filter(
                product =>
                    result.includes(product)
            );

    }


    AS_STATE.currentProducts =
        result;


    renderProducts(
        sortProductsSafe(
            result,
            AS_STATE.sortBy
        )
    );

    updateActiveFilterCount();

}


function fallbackFilter(list, filters) {

    return list.filter(product => {

        if (
            filters.category &&
            product.category !== filters.category
        ) {
            return false;
        }


        if (
            filters.subcategory &&
            product.subcategory !== filters.subcategory
        ) {
            return false;
        }


        if (
            filters.gender?.length &&
            !filters.gender.includes(product.gender)
        ) {
            return false;
        }


        if (
            filters.type?.length &&
            !filters.type.includes(product.type)
        ) {
            return false;
        }


        if (
            filters.minPrice !== null &&
            product.price < filters.minPrice
        ) {
            return false;
        }


        if (
            filters.maxPrice !== null &&
            product.price > filters.maxPrice
        ) {
            return false;
        }


        if (
            filters.minDiscount &&
            product.discount < filters.minDiscount
        ) {
            return false;
        }


        if (
            filters.minRating &&
            product.rating < filters.minRating
        ) {
            return false;
        }


        return true;

    });

}


function resetFilters(render = true) {

    AS_STATE.filters = {

        gender: [],
        category: null,
        subcategory: null,
        type: [],
        sizes: [],
        footwearSizes: [],
        colors: [],
        minPrice: null,
        maxPrice: null,
        minDiscount: null,
        minRating: null

    };


    $$(

        '[data-filter]'

    ).forEach(element => {

        if (
            element.type === "checkbox" ||
            element.type === "radio"
        ) {
            element.checked = false;
        }

        if (element.tagName === "SELECT") {
            element.selectedIndex = 0;
        }

    });


    if (render) {

        AS_STATE.currentProducts =
            allProducts();

        renderProducts(
            AS_STATE.currentProducts
        );

        updateActiveFilterCount();

    }

}


function updateActiveFilterCount() {

    const filters =
        AS_STATE.filters;

    let count = 0;

    Object.values(filters)
        .forEach(value => {

            if (Array.isArray(value)) {
                count += value.length;
            } else if (
                value !== null &&
                value !== undefined &&
                value !== ""
            ) {
                count++;
            }

        });


    $$(
        "[data-filter-count]"
    ).forEach(element => {

        element.textContent =
            count;

        element.hidden =
            count === 0;

    });

}


/* =========================================================
   CART
   ========================================================= */

function setupCart() {

    $$(
        '[data-action="cart"]'
    ).forEach(button => {

        button.addEventListener(
            "click",
            openCart
        );

    });

}


function addToCart(
    productId,
    size = null,
    color = null,
    quantity = 1
) {

    const product =
        findProduct(productId);

    if (!product) {
        return;
    }


    if (
        product.sizes?.length &&
        !size
    ) {

        showToast(
            "Please select a size",
            "warning"
        );

        return;

    }


    const existing =
        AS_STATE.cart.find(item =>
            item.productId === productId &&
            item.size === size &&
            item.color === color
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        AS_STATE.cart.push({

            productId,
            size,
            color:
                color ||
                product.color ||
                null,

            quantity

        });

    }


    saveState();
    updateCartUI();
    updateHeaderCounters();

    showToast(
        "Added to Bag ✓",
        "success"
    );

}


function removeFromCart(index) {

    if (
        index < 0 ||
        index >= AS_STATE.cart.length
    ) {
        return;
    }

    AS_STATE.cart.splice(index, 1);

    saveState();

    updateCartUI();
    updateHeaderCounters();

    renderCartDrawer();

}


function changeCartQuantity(index, amount) {

    const item =
        AS_STATE.cart[index];

    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        AS_STATE.cart.splice(index, 1);

    }


    saveState();

    updateCartUI();
    updateHeaderCounters();

    renderCartDrawer();

}


function getCartDetails() {

    return AS_STATE.cart
        .map(item => {

            const product =
                findProduct(item.productId);

            if (!product) {
                return null;
            }

            return {
                ...item,
                product
            };

        })
        .filter(Boolean);

}


function getCartSubtotal() {

    return getCartDetails()
        .reduce(
            (total, item) =>
                total +
                item.product.price *
                item.quantity,
            0
        );

}


function getCartDiscount() {

    if (!AS_STATE.coupon) {
        return 0;
    }


    const subtotal =
        getCartSubtotal();


    if (
        AS_STATE.coupon.type === "percent"
    ) {

        return Math.round(
            subtotal *
            (AS_STATE.coupon.value / 100)
        );

    }


    if (
        AS_STATE.coupon.type === "flat"
    ) {

        return Math.min(
            AS_STATE.coupon.value,
            subtotal
        );

    }


    return 0;

}


function getCartTotal() {

    return Math.max(
        0,
        getCartSubtotal() -
        getCartDiscount()
    );

}


function updateCartUI() {

    const count =
        AS_STATE.cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    $$(
        "[data-cart-count], .cart-count"
    ).forEach(element => {

        element.textContent =
            count;

    });


    $$(
        "[data-cart-total]"
    ).forEach(element => {

        element.textContent =
            formatCurrency(
                getCartTotal()
            );

    });

}


function openCart() {

    const drawer =
        getElement(
            "#cartDrawer",
            ".cart-drawer",
            "[data-cart-drawer]"
        );

    if (!drawer) {

        window.location.hash = "cart";

        return;
    }


    renderCartDrawer();

    drawer.classList.add("active");

    document.body.classList.add(
        "drawer-open"
    );

}


function closeCart() {

    const drawer =
        getElement(
            "#cartDrawer",
            ".cart-drawer",
            "[data-cart-drawer]"
        );

    if (drawer) {
        drawer.classList.remove("active");
    }

    document.body.classList.remove(
        "drawer-open"
    );

}


function renderCartDrawer() {

    const drawer =
        getElement(
            "#cartDrawer",
            ".cart-drawer",
            "[data-cart-drawer]"
        );

    if (!drawer) {
        return;
    }


    const items =
        getCartDetails();


    drawer.innerHTML = `

        <div class="cart-overlay"
             data-action="close-cart"></div>

        <div class="cart-panel">

            <div class="cart-header">

                <h2>
                    Shopping Bag
                </h2>

                <button
                    type="button"
                    data-action="close-cart"
                >
                    ×
                </button>

            </div>


            <div class="cart-items">

                ${
                    items.length
                        ? items
                            .map(
                                (item, index) =>
                                    createCartItem(
                                        item,
                                        index
                                    )
                            )
                            .join("")
                        : `
                            <div class="empty-cart">

                                <div>
                                    🛍️
                                </div>

                                <h3>
                                    Your bag is empty
                                </h3>

                                <p>
                                    Add something you love.
                                </p>

                                <button
                                    type="button"
                                    data-action="close-cart"
                                >
                                    Continue Shopping
                                </button>

                            </div>
                        `
                }

            </div>


            ${
                items.length
                    ? createCartSummary()
                    : ""
            }

        </div>
    `;


}


function createCartItem(item, index) {

    const product =
        item.product;


    return `

        <div class="cart-item">

            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
            >


            <div class="cart-item-info">

                <strong>
                    ${escapeHTML(product.brand)}
                </strong>

                <h4>
                    ${escapeHTML(product.name)}
                </h4>

                ${
                    item.size
                        ? `<span>Size: ${escapeHTML(item.size)}</span>`
                        : ""
                }

                ${
                    item.color
                        ? `<span>Color: ${escapeHTML(item.color)}</span>`
                        : ""
                }


                <div class="cart-item-price">

                    ${formatCurrency(product.price)}

                </div>


                <div class="cart-quantity">

                    <button
                        type="button"
                        data-action="cart-minus"
                        data-index="${index}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        data-action="cart-plus"
                        data-index="${index}"
                    >
                        +
                    </button>

                </div>


                <button
                    type="button"
                    class="remove-cart-item"
                    data-action="remove-cart"
                    data-index="${index}"
                >
                    Remove
                </button>

            </div>

        </div>
    `;

}


function createCartSummary() {

    const subtotal =
        getCartSubtotal();

    const discount =
        getCartDiscount();

    const total =
        getCartTotal();


    return `

        <div class="cart-summary">

            <div>
                <span>
                    Subtotal
                </span>

                <strong>
                    ${formatCurrency(subtotal)}
                </strong>
            </div>


            ${
                discount
                    ? `
                        <div class="cart-discount">

                            <span>
                                Coupon Discount
                            </span>

                            <strong>
                                -${formatCurrency(discount)}
                            </strong>

                        </div>
                    `
                    : ""
            }


            <div class="cart-total">

                <span>
                    Total
                </span>

                <strong>
                    ${formatCurrency(total)}
                </strong>

            </div>


            <button
                type="button"
                class="checkout-btn"
                data-action="checkout"
            >
                PROCEED TO CHECKOUT
            </button>

        </div>
    `;

}


/* =========================================================
   WISHLIST
   ========================================================= */

function setupWishlist() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    '[data-action="wishlist"]'
                );

            if (!button) {
                return;
            }

            event.stopPropagation();

            toggleWishlist(
                button.dataset.productId
            );

        }
    );

}


function toggleWishlist(productId) {

    const index =
        AS_STATE.wishlist.indexOf(
            productId
        );


    if (index >= 0) {

        AS_STATE.wishlist.splice(
            index,
            1
        );

        showToast(
            "Removed from Wishlist",
            "info"
        );

    } else {

        AS_STATE.wishlist.push(
            productId
        );

        showToast(
            "Added to Wishlist ♥",
            "success"
        );

    }


    saveState();

    updateWishlistUI();
    updateHeaderCounters();

    if (AS_STATE.currentProducts.length) {

        renderProducts(
            AS_STATE.currentProducts
        );

    }

}


function updateWishlistUI() {

    $$(
        '[data-product-id][data-action="wishlist"]'
    ).forEach(button => {

        const id =
            button.dataset.productId;

        const active =
            AS_STATE.wishlist.includes(id);

        button.classList.toggle(
            "active",
            active
        );

        button.textContent =
            active ? "♥" : "♡";

    });

}


function openWishlist() {

    const list =
        AS_STATE.wishlist
            .map(findProduct)
            .filter(Boolean);

    AS_STATE.currentProducts =
        list;

    renderProducts(list);

    updatePageTitle(
        "My Wishlist"
    );

    scrollToProducts();

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    $$(
        '[data-action="mobile-menu"], .menu-toggle, .hamburger'
    ).forEach(button => {

        button.addEventListener(
            "click",
            openMobileMenu
        );

    });


    $$(
        '[data-action="close-mobile-menu"]'
    ).forEach(button => {

        button.addEventListener(
            "click",
            closeMobileMenu
        );

    });

}


function openMobileMenu() {

    const menu =
        getElement(
            "#mobileMenu",
            ".mobile-menu",
            "[data-mobile-menu]"
        );

    if (!menu) {
        return;
    }

    menu.classList.add("active");

    document.body.classList.add(
        "menu-open"
    );

}


function closeMobileMenu() {

    const menu =
        getElement(
            "#mobileMenu",
            ".mobile-menu",
            "[data-mobile-menu]"
        );

    if (menu) {
        menu.classList.remove("active");
    }

    document.body.classList.remove(
        "menu-open"
    );

}


/* =========================================================
   MODAL
   ========================================================= */

function setupProductModal() {

    document.addEventListener(
        "click",
        event => {

            const quickView =
                event.target.closest(
                    '[data-action="quick-view"]'
                );

            if (quickView) {

                event.stopPropagation();

                openProduct(
                    quickView.dataset.productId
                );

                return;
            }


            const card =
                event.target.closest(
                    ".product-card"
                );

            if (
                card &&
                !event.target.closest("button")
            ) {

                openProduct(
                    card.dataset.productId
                );

            }

        }
    );

}


function closeProductModal() {

    const modal =
        getElement(
            "#productModal",
            ".product-modal",
            "[data-product-modal]"
        );

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   GLOBAL CLICK HANDLER
   ========================================================= */

function setupGlobalClicks() {

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-action]"
                );

            if (!target) {
                return;
            }


            const action =
                target.dataset.action;


            switch (action) {

                case "close-modal":

                    closeProductModal();

                    break;


                case "close-cart":

                    closeCart();

                    break;


                case "cart":

                    openCart();

                    break;


                case "cart-plus":

                    changeCartQuantity(
                        Number(target.dataset.index),
                        1
                    );

                    break;


                case "cart-minus":

                    changeCartQuantity(
                        Number(target.dataset.index),
                        -1
                    );

                    break;


                case "remove-cart":

                    removeFromCart(
                        Number(target.dataset.index)
                    );

                    break;


                case "modal-add-cart":

                    handleModalAddToCart();

                    break;


                case "modal-buy-now":

                    handleBuyNow();

                    break;


                case "checkout":

                    checkout();

                    break;


                case "wishlist-page":

                    openWishlist();

                    break;


                case "clear-filters":

                    resetFilters();

                    break;


                case "size-guide":

                    showSizeGuide();

                    break;

            }

        }
    );


    document.addEventListener(
        "click",
        event => {

            const size =
                event.target.closest(
                    ".size-option"
                );

            if (size) {

                $$(".size-option")
                    .forEach(
                        button =>
                            button.classList.remove(
                                "active"
                            )
                    );

                size.classList.add(
                    "active"
                );

                AS_STATE.selectedSize =
                    size.dataset.size;

            }


            const color =
                event.target.closest(
                    ".color-option"
                );

            if (color) {

                $$(".color-option")
                    .forEach(
                        button =>
                            button.classList.remove(
                                "active"
                            )
                    );

                color.classList.add(
                    "active"
                );

                AS_STATE.selectedColor =
                    color.dataset.color;

            }

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    ".search-area, .search-container, .search-suggestions"
                )
            ) {

                closeSearchSuggestions();

            }

        }
    );

}


/* =========================================================
   MODAL CART ACTIONS
   ========================================================= */

function handleModalAddToCart() {

    const product =
        AS_STATE.selectedProduct;

    if (!product) {
        return;
    }


    if (
        product.sizes?.length &&
        !AS_STATE.selectedSize
    ) {

        showToast(
            "Please select a size",
            "warning"
        );

        return;
    }


    addToCart(
        product.id,
        AS_STATE.selectedSize,
        AS_STATE.selectedColor,
        1
    );

}


function handleBuyNow() {

    const product =
        AS_STATE.selectedProduct;

    if (!product) {
        return;
    }


    if (
        product.sizes?.length &&
        !AS_STATE.selectedSize
    ) {

        showToast(
            "Please select a size",
            "warning"
        );

        return;
    }


    addToCart(
        product.id,
        AS_STATE.selectedSize,
        AS_STATE.selectedColor,
        1
    );


    closeProductModal();

    setTimeout(
        checkout,
        250
    );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

    if (!AS_STATE.cart.length) {

        showToast(
            "Your bag is empty",
            "warning"
        );

        return;
    }


    const total =
        getCartTotal();


    showToast(
        `Checkout started • ${formatCurrency(total)}`,
        "success"
    );


    /*
       Real payment gateway can later be connected here.

       Example:
       Razorpay
       Stripe
       PayU
       Cashfree
    */


    window.location.hash =
        "checkout";

}


/* =========================================================
   COUPONS
   ========================================================= */

function applyCoupon(code) {

    const coupons = {

        AS100: {
            code: "AS100",
            type: "flat",
            value: 100
        },

        AS200: {
            code: "AS200",
            type: "flat",
            value: 200
        },

        AS10: {
            code: "AS10",
            type: "percent",
            value: 10
        },

        AS20: {
            code: "AS20",
            type: "percent",
            value: 20
        }

    };


    const coupon =
        coupons[
            String(code)
                .trim()
                .toUpperCase()
        ];


    if (!coupon) {

        showToast(
            "Invalid coupon code",
            "error"
        );

        return false;
    }


    AS_STATE.coupon =
        coupon;

    showToast(
        `${coupon.code} applied ✓`,
        "success"
    );

    updateCartUI();

    return true;

}


/* =========================================================
   COUNTDOWN
   ========================================================= */

function setupCountdowns() {

    $$(
        "[data-countdown]"
    ).forEach(element => {

        startCountdown(
            element,
            element.dataset.countdown
        );

    });


    const saleEnd =
        localStorage.getItem(
            "asf_sale_end"
        );


    if (!saleEnd) {

        const end =
            Date.now() +
            (
                8 *
                60 *
                60 *
                1000
            );

        localStorage.setItem(
            "asf_sale_end",
            String(end)
        );

    }

}


function startCountdown(element, endValue) {

    let end =
        parseInt(endValue, 10);


    if (Number.isNaN(end)) {

        end =
            Date.now() +
            (
                8 *
                60 *
                60 *
                1000
            );

    }


    const update = () => {

        let remaining =
            end - Date.now();


        if (remaining <= 0) {

            remaining = 0;

        }


        const hours =
            Math.floor(
                remaining /
                3600000
            );

        const minutes =
            Math.floor(
                (
                    remaining %
                    3600000
                ) /
                60000
            );

        const seconds =
            Math.floor(
                (
                    remaining %
                    60000
                ) /
                1000
            );


        element.textContent =
            `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;

    };


    update();

    setInterval(
        update,
        1000
    );

}


/* =========================================================
   SCRATCH CARD
   ========================================================= */

function setupScratchCard() {

    const card =
        getElement(
            "#scratchCard",
            ".scratch-card",
            "[data-scratch-card]"
        );

    if (!card) {
        return;
    }


    let scratched = false;


    card.addEventListener(
        "click",
        () => {

            if (scratched) {
                return;
            }

            scratched = true;

            const coupons = [
                "AS100",
                "AS10",
                "AS200",
                "AS20"
            ];

            const coupon =
                coupons[
                    Math.floor(
                        Math.random() *
                        coupons.length
                    )
                ];


            card.classList.add(
                "scratched"
            );


            const result =
                card.querySelector(
                    "[data-scratch-result]"
                );


            if (result) {

                result.textContent =
                    `🎉 You won ${coupon}!`;

            }


            setTimeout(
                () => {

                    applyCoupon(
                        coupon
                    );

                },
                500
            );

        }
    );

}


/* =========================================================
   SIZE GUIDE
   ========================================================= */

function showSizeGuide() {

    let modal =
        document.querySelector(
            "#sizeGuideModal"
        );


    if (!modal) {

        modal =
            document.createElement(
                "div"
            );

        modal.id =
            "sizeGuideModal";

        modal.className =
            "size-guide-modal";

        document.body.appendChild(
            modal
        );

    }


    modal.innerHTML = `

        <div class="size-guide-overlay"
             data-size-close></div>

        <div class="size-guide-content">

            <button
                type="button"
                class="size-guide-close"
                data-size-close
            >
                ×
            </button>

            <h2>
                Size Guide
            </h2>

            <div class="size-table">

                <table>

                    <thead>

                        <tr>
                            <th>Size</th>
                            <th>Chest</th>
                            <th>Waist</th>
                            <th>Length</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>S</td>
                            <td>36"</td>
                            <td>30"</td>
                            <td>27"</td>
                        </tr>

                        <tr>
                            <td>M</td>
                            <td>38"</td>
                            <td>32"</td>
                            <td>28"</td>
                        </tr>

                        <tr>
                            <td>L</td>
                            <td>40"</td>
                            <td>34"</td>
                            <td>29"</td>
                        </tr>

                        <tr>
                            <td>XL</td>
                            <td>42"</td>
                            <td>36"</td>
                            <td>30"</td>
                        </tr>

                        <tr>
                            <td>XXL</td>
                            <td>44"</td>
                            <td>38"</td>
                            <td>31"</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    `;


    modal.classList.add(
        "active"
    );


    $$(
        "[data-size-close]",
        modal
    ).forEach(element => {

        element.addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================================
   TOAST NOTIFICATIONS
   ========================================================= */

function showToast(
    message,
    type = "info"
) {

    let container =
        document.querySelector(
            "#toastContainer"
        );


    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.id =
            "toastContainer";

        container.className =
            "toast-container";

        document.body.appendChild(
            container
        );

    }


    const toast =
        document.createElement(
            "div"
        );

    toast.className =
        `as-toast as-toast-${type}`;

    toast.innerHTML = `
        <span>
            ${escapeHTML(message)}
        </span>
    `;


    container.appendChild(
        toast
    );


    requestAnimationFrame(
        () => {

            toast.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

            setTimeout(
                () => toast.remove(),
                300
            );

        },
        2800
    );

}


/* =========================================================
   HEADER COUNTERS
   ========================================================= */

function updateHeaderCounters() {

    const cartCount =
        AS_STATE.cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    const wishlistCount =
        AS_STATE.wishlist.length;


    $$(
        "[data-cart-count], .cart-count"
    ).forEach(element => {

        element.textContent =
            cartCount;

    });


    $$(
        "[data-wishlist-count], .wishlist-count"
    ).forEach(element => {

        element.textContent =
            wishlistCount;

    });

}


/* =========================================================
   PRODUCT COUNT
   ========================================================= */

function updateProductCount(count) {

    $$(
        "[data-product-count], .product-count"
    ).forEach(element => {

        element.textContent =
            `${count} Products`;

    });

}


/* =========================================================
   PAGE TITLE
   ========================================================= */

function updatePageTitle(title) {

    $$(
        "[data-page-title], .page-title"
    ).forEach(element => {

        element.textContent =
            title;

    });

}


/* =========================================================
   CATEGORY NAME
   ========================================================= */

function getCategoryName(category) {

    if (
        category === "all" ||
        !category
    ) {
        return "All Products";
    }


    const names = {

        men: "Men",
        women: "Women",
        kids: "Kids",
        footwear: "Footwear",
        bags: "Bags",
        accessories: "Accessories",
        sports: "Sports",
        winter: "Winter Wear",
        innerwear: "Innerwear & Lounge",
        "new-arrivals": "New Arrivals",
        trending: "Trending",
        sale: "Sale"

    };


    return (
        names[category] ||
        formatLabel(category)
    );

}


/* =========================================================
   UTILITIES
   ========================================================= */

function formatCurrency(value) {

    const amount =
        Number(value || 0);


    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


function formatNumber(value) {

    return new Intl.NumberFormat(
        "en-IN"
    ).format(
        Number(value || 0)
    );

}


function formatLabel(value) {

    return String(value || "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );

}


function pad(value) {

    return String(value)
        .padStart(2, "0");

}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(
            /[&<>"']/g,
            char => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            })[char]
        );

}


function scrollToProducts() {

    const element =
        getElement(
            "#products",
            "#productGrid",
            ".products-section",
            ".product-grid"
        );

    if (!element) {
        return;
    }


    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductModal();
            closeCart();
            closeMobileMenu();
            closeSearchSuggestions();

        }


        if (
            (
                event.ctrlKey ||
                event.metaKey
            ) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            const search =
                getElement(
                    "#searchInput",
                    ".search-input",
                    'input[name="search"]'
                );

            if (search) {
                search.focus();
            }

        }

    }
);


/* =========================================================
   WINDOW EVENTS
   ========================================================= */

window.addEventListener(
    "hashchange",
    () => {

        handleRoute();

    }
);


function handleRoute() {

    const hash =
        window.location.hash
            .replace("#", "")
            .trim();


    if (!hash) {
        return;
    }


    if (
        hash === "cart"
    ) {

        openCart();

        return;
    }


    if (
        hash.startsWith(
            "product/"
        )
    ) {

        const id =
            decodeURIComponent(
                hash.split("/")[1]
            );

        openProduct(id);

    }

}


/* =========================================================
   PERFORMANCE — LAZY IMAGE FALLBACK
   ========================================================= */

document.addEventListener(
    "error",
    event => {

        const image =
            event.target;

        if (
            image.tagName === "IMG" &&
            !image.dataset.fallback
        ) {

            image.dataset.fallback =
                "true";

            image.src =
                "https://via.placeholder.com/600x800?text=AS+FASHIONS";

        }

    },
    true
);


/* =========================================================
   EXPOSE PUBLIC API
========================================================= */

window.ASFashion = {

    state: AS_STATE,

    products: allProducts,

    openProduct,
    loadCategory,
    loadSubcategory,

    search: performSearch,

    addToCart,
    removeFromCart,
    changeCartQuantity,

    openCart,
    closeCart,

    toggleWishlist,
    openWishlist,

    applyCoupon,

    checkout,

    showToast

};


/* =========================================================
   FINAL BOOT MESSAGE
========================================================= */

console.log(
    "%c AS FASHIONS ",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "AS FASHIONS website engine initialized."
);

console.log(
    `Products loaded: ${allProducts().length}`
);
