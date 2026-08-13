/* =========================================================
   AS FASHIONS
   PRODUCT FILTER & SORT ENGINE
   js/filters.js
   ========================================================= */

const FILTER_STORAGE_KEY = "as_fashions_filters";


/* =========================================================
   FILTER STATE
   ========================================================= */

let FILTER_STATE = {

    category: null,

    subcategory: null,

    categories: [],

    subcategories: [],

    sizes: [],

    colors: [],

    ratings: [],

    discounts: [],

    minPrice: null,

    maxPrice: null,

    availability: "all",

    sort: "recommended"

};


/* =========================================================
   FILTER CONFIG
   ========================================================= */

const FILTER_CONFIG = {

    priceRanges: [
        {
            id: "under-499",
            label: "Under ₹499",
            min: 0,
            max: 499
        },
        {
            id: "500-999",
            label: "₹500 - ₹999",
            min: 500,
            max: 999
        },
        {
            id: "1000-1999",
            label: "₹1,000 - ₹1,999",
            min: 1000,
            max: 1999
        },
        {
            id: "2000-2999",
            label: "₹2,000 - ₹2,999",
            min: 2000,
            max: 2999
        },
        {
            id: "3000-4999",
            label: "₹3,000 - ₹4,999",
            min: 3000,
            max: 4999
        },
        {
            id: "5000-plus",
            label: "₹5,000 & Above",
            min: 5000,
            max: Infinity
        }
    ],

    discountRanges: [
        {
            id: "10",
            label: "10% and above",
            min: 10
        },
        {
            id: "20",
            label: "20% and above",
            min: 20
        },
        {
            id: "30",
            label: "30% and above",
            min: 30
        },
        {
            id: "40",
            label: "40% and above",
            min: 40
        },
        {
            id: "50",
            label: "50% and above",
            min: 50
        },
        {
            id: "60",
            label: "60% and above",
            min: 60
        }
    ],

    ratings: [
        {
            id: "4",
            label: "4★ & above",
            min: 4
        },
        {
            id: "3",
            label: "3★ & above",
            min: 3
        },
        {
            id: "2",
            label: "2★ & above",
            min: 2
        }
    ],

    availability: [
        {
            id: "all",
            label: "All Products"
        },
        {
            id: "in-stock",
            label: "In Stock"
        }
    ]

};


/* =========================================================
   SORT OPTIONS
   ========================================================= */

const SORT_OPTIONS = {

    recommended: {
        label: "Recommended"
    },

    popularity: {
        label: "Popularity"
    },

    newest: {
        label: "What's New"
    },

    priceLowHigh: {
        label: "Price: Low to High"
    },

    priceHighLow: {
        label: "Price: High to Low"
    },

    discount: {
        label: "Better Discount"
    },

    rating: {
        label: "Customer Rating"
    }

};


/* =========================================================
   GET PRODUCTS
   ========================================================= */

function getFilterProducts() {

    if (
        typeof PRODUCTS ===
        "undefined"
    ) {

        return [];

    }

    return Array.isArray(PRODUCTS)
        ? PRODUCTS
        : [];

}


/* =========================================================
   NORMALIZE VALUE
   ========================================================= */

function normalizeFilterValue(value) {

    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

}


/* =========================================================
   ARRAY CHECK
   ========================================================= */

function asFilterArray(value) {

    if (Array.isArray(value)) {
        return value;
    }

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return [];

    }

    return [value];

}


/* =========================================================
   PRODUCT FIELD HELPERS
   ========================================================= */

function getProductCategoryValue(product) {

    return normalizeFilterValue(
        product.categoryId ||
        product.category ||
        ""
    );

}


function getProductSubcategoryValue(product) {

    return normalizeFilterValue(
        product.subcategoryId ||
        product.subcategory ||
        ""
    );

}


function getProductSizes(product) {

    return asFilterArray(
        product.sizes
    ).map(size =>
        normalizeFilterValue(size)
    );

}


function getProductColors(product) {

    if (
        Array.isArray(product.colors)
    ) {

        return product.colors.map(color => {

            if (
                typeof color ===
                "object"
            ) {

                return normalizeFilterValue(
                    color.name
                );

            }

            return normalizeFilterValue(
                color
            );

        });

    }

    return [];

}


function getProductPrice(product) {

    return Number(
        product.price || 0
    );

}


function getProductRating(product) {

    return Number(
        product.rating || 0
    );

}


function getProductDiscount(product) {

    if (
        product.discount !==
        undefined
    ) {

        return Number(
            product.discount || 0
        );

    }


    const mrp =
        Number(product.mrp || 0);

    const price =
        Number(product.price || 0);


    if (
        mrp > 0 &&
        price < mrp
    ) {

        return Math.round(
            ((mrp - price) / mrp) *
            100
        );

    }


    return 0;

}


function getProductStock(product) {

    return Number(
        product.stock || 0
    );

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterByCategory(
    categoryId,
    subcategoryId = null
) {

    FILTER_STATE.category =
        normalizeFilterValue(
            categoryId
        );


    FILTER_STATE.subcategory =
        subcategoryId
            ? normalizeFilterValue(
                subcategoryId
            )
            : null;


    /*
     * Clear conflicting category arrays.
     */

    FILTER_STATE.categories = [];

    FILTER_STATE.subcategories = [];


    FILTER_STATE.categories.push(
        FILTER_STATE.category
    );


    if (
        FILTER_STATE.subcategory
    ) {

        FILTER_STATE.subcategories.push(
            FILTER_STATE.subcategory
        );

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   MULTI CATEGORY FILTER
   ========================================================= */

function setCategoryFilters(
    categories
) {

    FILTER_STATE.categories =
        asFilterArray(categories)
            .map(
                normalizeFilterValue
            );


    FILTER_STATE.category =
        FILTER_STATE.categories.length
            ? FILTER_STATE.categories[0]
            : null;


    saveFilterState();

    applyFilters();

}


/* =========================================================
   SUBCATEGORY FILTER
   ========================================================= */

function setSubcategoryFilters(
    subcategories
) {

    FILTER_STATE.subcategories =
        asFilterArray(
            subcategories
        ).map(
            normalizeFilterValue
        );


    FILTER_STATE.subcategory =
        FILTER_STATE.subcategories.length
            ? FILTER_STATE.subcategories[0]
            : null;


    saveFilterState();

    applyFilters();

}


/* =========================================================
   SIZE FILTER
   ========================================================= */

function setSizeFilters(
    sizes
) {

    FILTER_STATE.sizes =
        asFilterArray(sizes)
            .map(
                normalizeFilterValue
            );


    saveFilterState();

    applyFilters();

}


function toggleSizeFilter(
    size
) {

    const value =
        normalizeFilterValue(size);


    if (
        FILTER_STATE.sizes.includes(
            value
        )
    ) {

        FILTER_STATE.sizes =
            FILTER_STATE.sizes.filter(
                item =>
                    item !== value
            );

    } else {

        FILTER_STATE.sizes.push(
            value
        );

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   COLOR FILTER
   ========================================================= */

function setColorFilters(
    colors
) {

    FILTER_STATE.colors =
        asFilterArray(colors)
            .map(
                normalizeFilterValue
            );


    saveFilterState();

    applyFilters();

}


function toggleColorFilter(
    color
) {

    const value =
        normalizeFilterValue(color);


    if (
        FILTER_STATE.colors.includes(
            value
        )
    ) {

        FILTER_STATE.colors =
            FILTER_STATE.colors.filter(
                item =>
                    item !== value
            );

    } else {

        FILTER_STATE.colors.push(
            value
        );

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   RATING FILTER
   ========================================================= */

function setRatingFilters(
    ratings
) {

    FILTER_STATE.ratings =
        asFilterArray(ratings)
            .map(Number)
            .filter(
                value =>
                    Number.isFinite(value)
            );


    saveFilterState();

    applyFilters();

}


function toggleRatingFilter(
    rating
) {

    rating =
        Number(rating);


    if (
        FILTER_STATE.ratings.includes(
            rating
        )
    ) {

        FILTER_STATE.ratings =
            FILTER_STATE.ratings.filter(
                item =>
                    item !== rating
            );

    } else {

        FILTER_STATE.ratings.push(
            rating
        );

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   PRICE FILTER
   ========================================================= */

function setPriceRange(
    minPrice,
    maxPrice
) {

    FILTER_STATE.minPrice =
        minPrice !== null &&
        minPrice !== undefined &&
        minPrice !== ""
            ? Number(minPrice)
            : null;


    FILTER_STATE.maxPrice =
        maxPrice !== null &&
        maxPrice !== undefined &&
        maxPrice !== ""
            ? Number(maxPrice)
            : null;


    saveFilterState();

    applyFilters();

}


function applyPricePreset(
    presetId
) {

    const preset =
        FILTER_CONFIG.priceRanges.find(
            range =>
                range.id ===
                presetId
        );


    if (!preset) {
        return;
    }


    setPriceRange(
        preset.min,
        preset.max === Infinity
            ? null
            : preset.max
    );

}


/* =========================================================
   DISCOUNT FILTER
   ========================================================= */

function setDiscountFilters(
    discounts
) {

    FILTER_STATE.discounts =
        asFilterArray(discounts)
            .map(Number)
            .filter(
                value =>
                    Number.isFinite(value)
            );


    saveFilterState();

    applyFilters();

}


function toggleDiscountFilter(
    discount
) {

    discount =
        Number(discount);


    if (
        FILTER_STATE.discounts.includes(
            discount
        )
    ) {

        FILTER_STATE.discounts =
            FILTER_STATE.discounts.filter(
                item =>
                    item !== discount
            );

    } else {

        FILTER_STATE.discounts.push(
            discount
        );

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   AVAILABILITY
   ========================================================= */

function setAvailability(
    availability
) {

    availability =
        normalizeFilterValue(
            availability
        );


    FILTER_STATE.availability =
        availability === "in-stock"
            ? "in-stock"
            : "all";


    saveFilterState();

    applyFilters();

}


/* =========================================================
   SORT
   ========================================================= */

function setSort(sortValue) {

    if (
        !SORT_OPTIONS[sortValue]
    ) {

        sortValue =
            "recommended";

    }


    FILTER_STATE.sort =
        sortValue;


    saveFilterState();

    applyFilters();

}


/* =========================================================
   PRODUCT MATCHING
   ========================================================= */

function productMatchesFilters(
    product
) {

    /*
     * CATEGORY
     */

    const productCategory =
        getProductCategoryValue(
            product
        );


    if (
        FILTER_STATE.categories.length
    ) {

        if (
            !FILTER_STATE.categories.includes(
                productCategory
            )
        ) {

            return false;

        }

    }


    /*
     * SUBCATEGORY
     */

    const productSubcategory =
        getProductSubcategoryValue(
            product
        );


    if (
        FILTER_STATE.subcategories.length
    ) {

        if (
            !FILTER_STATE.subcategories.includes(
                productSubcategory
            )
        ) {

            return false;

        }

    }


    /*
     * PRICE
     */

    const price =
        getProductPrice(product);


    if (
        FILTER_STATE.minPrice !== null &&
        price <
        FILTER_STATE.minPrice
    ) {

        return false;

    }


    if (
        FILTER_STATE.maxPrice !== null &&
        price >
        FILTER_STATE.maxPrice
    ) {

        return false;

    }


    /*
     * SIZE
     */

    if (
        FILTER_STATE.sizes.length
    ) {

        const productSizes =
            getProductSizes(product);


        const hasMatchingSize =
            FILTER_STATE.sizes.some(
                size =>
                    productSizes.includes(
                        size
                    )
            );


        if (!hasMatchingSize) {
            return false;
        }

    }


    /*
     * COLOR
     */

    if (
        FILTER_STATE.colors.length
    ) {

        const productColors =
            getProductColors(product);


        const hasMatchingColor =
            FILTER_STATE.colors.some(
                color =>
                    productColors.includes(
                        color
                    )
            );


        if (!hasMatchingColor) {
            return false;
        }

    }


    /*
     * RATING
     */

    if (
        FILTER_STATE.ratings.length
    ) {

        const rating =
            getProductRating(product);


        const minimumRating =
            Math.min(
                ...FILTER_STATE.ratings
            );


        if (
            rating <
            minimumRating
        ) {

            return false;

        }

    }


    /*
     * DISCOUNT
     */

    if (
        FILTER_STATE.discounts.length
    ) {

        const discount =
            getProductDiscount(product);


        const minimumDiscount =
            Math.min(
                ...FILTER_STATE.discounts
            );


        if (
            discount <
            minimumDiscount
        ) {

            return false;

        }

    }


    /*
     * STOCK
     */

    if (
        FILTER_STATE.availability ===
        "in-stock"
    ) {

        if (
            getProductStock(product) <=
            0
        ) {

            return false;

        }

    }


    return true;

}


/* =========================================================
   APPLY FILTERS
   ========================================================= */

function getFilteredProducts() {

    const products =
        getFilterProducts();


    return products.filter(
        product =>
            productMatchesFilters(
                product
            )
    );

}


/* =========================================================
   SORT PRODUCTS
   ========================================================= */

function sortFilteredProducts(
    products
) {

    const sorted =
        [...products];


    switch (
        FILTER_STATE.sort
    ) {

        case "priceLowHigh":

            sorted.sort(
                (a, b) =>
                    getProductPrice(a) -
                    getProductPrice(b)
            );

            break;


        case "priceHighLow":

            sorted.sort(
                (a, b) =>
                    getProductPrice(b) -
                    getProductPrice(a)
            );

            break;


        case "discount":

            sorted.sort(
                (a, b) =>
                    getProductDiscount(b) -
                    getProductDiscount(a)
            );

            break;


        case "rating":

            sorted.sort(
                (a, b) =>
                    getProductRating(b) -
                    getProductRating(a)
            );

            break;


        case "popularity":

            sorted.sort(
                (a, b) =>
                    Number(
                        b.sales ||
                        b.orders ||
                        b.popularity ||
                        0
                    ) -
                    Number(
                        a.sales ||
                        a.orders ||
                        a.popularity ||
                        0
                    )
            );

            break;


        case "newest":

            sorted.sort(
                (a, b) => {

                    const dateA =
                        new Date(
                            a.createdAt ||
                            a.dateAdded ||
                            0
                        );

                    const dateB =
                        new Date(
                            b.createdAt ||
                            b.dateAdded ||
                            0
                        );


                    return dateB - dateA;

                }
            );

            break;


        case "recommended":

        default:

            /*
             * Keep original product database order.
             * If product has a recommendation score,
             * use it.
             */

            if (
                products.some(
                    product =>
                        product.recommendationScore !==
                        undefined
                )
            ) {

                sorted.sort(
                    (a, b) =>
                        Number(
                            b.recommendationScore ||
                            0
                        ) -
                        Number(
                            a.recommendationScore ||
                            0
                        )
                );

            }

            break;

    }


    return sorted;

}


/* =========================================================
   MAIN FILTER FUNCTION
   ========================================================= */

function applyFilters() {

    let products =
        getFilteredProducts();


    products =
        sortFilteredProducts(
            products
        );


    FILTER_STATE.results =
        products;


    renderFilteredProducts(
        products
    );


    updateFilterUI(
        products
    );


    updateFilterCount();


    return products;

}


/* =========================================================
   RENDER FILTERED PRODUCTS
   ========================================================= */

function renderFilteredProducts(
    products
) {

    const containers =
        document.querySelectorAll(
            "[data-product-grid], #productGrid, .product-grid"
        );


    containers.forEach(container => {

        /*
         * Prefer existing product card renderer.
         */

        if (
            typeof renderProductCard ===
            "function"
        ) {

            container.innerHTML =
                products
                    .map(
                        product =>
                            renderProductCard(
                                product
                            )
                    )
                    .join("");

            return;

        }


        /*
         * Fallback renderer.
         */

        if (!products.length) {

            container.innerHTML = `

                <div class="filter-no-results">

                    <div class="filter-no-results-icon">
                        🔍
                    </div>

                    <h3>
                        No products found
                    </h3>

                    <p>
                        Try changing your filters
                        or search criteria.
                    </p>

                    <button
                        type="button"
                        onclick="clearAllFilters()"
                    >
                        Clear All Filters
                    </button>

                </div>

            `;

            return;

        }


        container.innerHTML =
            products
                .map(
                    product =>
                        createFallbackProductCard(
                            product
                        )
                )
                .join("");

    });

}


/* =========================================================
   FALLBACK PRODUCT CARD
   ========================================================= */

function createFallbackProductCard(
    product
) {

    const image =
        product.images &&
        product.images.length
            ? product.images[0]
            : "";


    return `

        <article
            class="product-card"
            data-product-id="${escapeFilterHTML(product.id)}"
        >

            <div class="product-card-image">

                <img
                    src="${escapeFilterHTML(image)}"
                    alt="${escapeFilterHTML(product.name)}"
                    loading="lazy"
                >

                ${
                    typeof createWishlistButton ===
                    "function"
                        ? createWishlistButton(
                            product.id
                        )
                        : ""
                }

            </div>


            <div class="product-card-info">

                <div class="product-brand">
                    ${escapeFilterHTML(product.brand)}
                </div>

                <h3>
                    ${escapeFilterHTML(product.name)}
                </h3>


                <div class="product-rating">

                    ★ ${getProductRating(product)}

                </div>


                <div class="product-price">

                    <strong>
                        ${formatFilterPrice(product.price)}
                    </strong>

                    ${
                        product.mrp
                            ? `
                                <del>
                                    ${formatFilterPrice(product.mrp)}
                                </del>
                            `
                            : ""
                    }

                    ${
                        getProductDiscount(product)
                            ? `
                                <span>
                                    ${getProductDiscount(product)}% OFF
                                </span>
                            `
                            : ""
                    }

                </div>


                <button
                    type="button"
                    onclick="quickFilterAddToCart('${escapeFilterHTML(product.id)}')"
                >
                    Add to Bag
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   QUICK ADD TO CART
   ========================================================= */

function quickFilterAddToCart(
    productId
) {

    if (
        typeof quickAddToCart ===
        "function"
    ) {

        return quickAddToCart(
            productId
        );

    }


    if (
        typeof addToCart ===
        "function"
    ) {

        return addToCart(
            productId
        );

    }


    return false;

}


/* =========================================================
   FILTER COUNT
   ========================================================= */

function getActiveFilterCount() {

    let count = 0;


    if (
        FILTER_STATE.category
    ) {
        count++;
    }


    if (
        FILTER_STATE.subcategory
    ) {
        count++;
    }


    count +=
        FILTER_STATE.categories.length;


    count +=
        FILTER_STATE.subcategories.length;


    count +=
        FILTER_STATE.sizes.length;


    count +=
        FILTER_STATE.colors.length;


    count +=
        FILTER_STATE.ratings.length;


    count +=
        FILTER_STATE.discounts.length;


    if (
        FILTER_STATE.minPrice !== null ||
        FILTER_STATE.maxPrice !== null
    ) {
        count++;
    }


    if (
        FILTER_STATE.availability !==
        "all"
    ) {
        count++;
    }


    return count;

}


function updateFilterCount() {

    const count =
        getActiveFilterCount();


    document
        .querySelectorAll(
            "[data-filter-count], #filterCount"
        )
        .forEach(element => {

            element.textContent =
                count;

            element.style.display =
                count > 0
                    ? ""
                    : "none";

        });

}


/* =========================================================
   FILTER UI
   ========================================================= */

function updateFilterUI(
    products
) {

    /*
     * Result count.
     */

    document
        .querySelectorAll(
            "[data-result-count]"
        )
        .forEach(element => {

            element.textContent =
                products.length;

        });


    /*
     * Sort select.
     */

    document
        .querySelectorAll(
            "[data-sort-select]"
        )
        .forEach(select => {

            select.value =
                FILTER_STATE.sort;

        });


    /*
     * Price inputs.
     */

    document
        .querySelectorAll(
            "[data-min-price]"
        )
        .forEach(input => {

            input.value =
                FILTER_STATE.minPrice ??
                "";

        });


    document
        .querySelectorAll(
            "[data-max-price]"
        )
        .forEach(input => {

            input.value =
                FILTER_STATE.maxPrice ??
                "";

        });


    /*
     * Checkbox states.
     */

    document
        .querySelectorAll(
            "[data-filter-size]"
        )
        .forEach(input => {

            input.checked =
                FILTER_STATE.sizes.includes(
                    normalizeFilterValue(
                        input.dataset.filterSize
                    )
                );

        });


    document
        .querySelectorAll(
            "[data-filter-color]"
        )
        .forEach(input => {

            input.checked =
                FILTER_STATE.colors.includes(
                    normalizeFilterValue(
                        input.dataset.filterColor
                    )
                );

        });


    document
        .querySelectorAll(
            "[data-filter-rating]"
        )
        .forEach(input => {

            input.checked =
                FILTER_STATE.ratings.includes(
                    Number(
                        input.dataset.filterRating
                    )
                );

        });


    document
        .querySelectorAll(
            "[data-filter-discount]"
        )
        .forEach(input => {

            input.checked =
                FILTER_STATE.discounts.includes(
                    Number(
                        input.dataset.filterDiscount
                    )
                );

        });

}


/* =========================================================
   SORT UI BINDING
   ========================================================= */

function initializeSortControls() {

    document
        .querySelectorAll(
            "[data-sort-select]"
        )
        .forEach(select => {

            select.value =
                FILTER_STATE.sort;


            select.addEventListener(
                "change",
                event => {

                    setSort(
                        event.target.value
                    );

                }
            );

        });


    document
        .querySelectorAll(
            "[data-sort-option]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    setSort(
                        button.dataset.sortOption
                    );

                }
            );

        });

}


/* =========================================================
   CHECKBOX BINDING
   ========================================================= */

function initializeFilterControls() {

    /*
     * SIZE
     */

    document
        .querySelectorAll(
            "[data-filter-size]"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    toggleSizeFilter(
                        input.dataset.filterSize
                    );

                }
            );

        });


    /*
     * COLOR
     */

    document
        .querySelectorAll(
            "[data-filter-color]"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    toggleColorFilter(
                        input.dataset.filterColor
                    );

                }
            );

        });


    /*
     * RATING
     */

    document
        .querySelectorAll(
            "[data-filter-rating]"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    toggleRatingFilter(
                        input.dataset.filterRating
                    );

                }
            );

        });


    /*
     * DISCOUNT
     */

    document
        .querySelectorAll(
            "[data-filter-discount]"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    toggleDiscountFilter(
                        input.dataset.filterDiscount
                    );

                }
            );

        });


    /*
     * PRICE
     */

    document
        .querySelectorAll(
            "[data-price-preset]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    applyPricePreset(
                        button.dataset.pricePreset
                    );

                }
            );

        });


    /*
     * CUSTOM PRICE
     */

    document
        .querySelectorAll(
            "[data-price-apply]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const minInput =
                        document.querySelector(
                            "[data-min-price]"
                        );


                    const maxInput =
                        document.querySelector(
                            "[data-max-price]"
                        );


                    setPriceRange(
                        minInput
                            ? minInput.value
                            : null,

                        maxInput
                            ? maxInput.value
                            : null
                    );

                }
            );

        });


    /*
     * AVAILABILITY
     */

    document
        .querySelectorAll(
            "[data-availability]"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    setAvailability(
                        input.value ||
                        input.dataset.availability
                    );

                }
            );

        });

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearAllFilters() {

    FILTER_STATE = {

        category: null,

        subcategory: null,

        categories: [],

        subcategories: [],

        sizes: [],

        colors: [],

        ratings: [],

        discounts: [],

        minPrice: null,

        maxPrice: null,

        availability: "all",

        sort: "recommended"

    };


    saveFilterState();

    applyFilters();

}


/* =========================================================
   REMOVE INDIVIDUAL FILTER
   ========================================================= */

function removeFilter(
    type,
    value = null
) {

    switch (type) {

        case "category":

            FILTER_STATE.category =
                null;

            FILTER_STATE.categories =
                [];

            break;


        case "subcategory":

            FILTER_STATE.subcategory =
                null;

            FILTER_STATE.subcategories =
                [];

            break;


        case "size":

            FILTER_STATE.sizes =
                FILTER_STATE.sizes.filter(
                    item =>
                        item !==
                        normalizeFilterValue(
                            value
                        )
                );

            break;


        case "color":

            FILTER_STATE.colors =
                FILTER_STATE.colors.filter(
                    item =>
                        item !==
                        normalizeFilterValue(
                            value
                        )
                );

            break;


        case "rating":

            FILTER_STATE.ratings =
                FILTER_STATE.ratings.filter(
                    item =>
                        item !==
                        Number(value)
                );

            break;


        case "discount":

            FILTER_STATE.discounts =
                FILTER_STATE.discounts.filter(
                    item =>
                        item !==
                        Number(value)
                );

            break;


        case "price":

            FILTER_STATE.minPrice =
                null;

            FILTER_STATE.maxPrice =
                null;

            break;


        case "availability":

            FILTER_STATE.availability =
                "all";

            break;

    }


    saveFilterState();

    applyFilters();

}


/* =========================================================
   ACTIVE FILTER CHIPS
   ========================================================= */

function renderActiveFilterChips() {

    const containers =
        document.querySelectorAll(
            "[data-active-filters]"
        );


    containers.forEach(container => {

        const chips = [];


        if (
            FILTER_STATE.category
        ) {

            chips.push({

                type: "category",

                value:
                    FILTER_STATE.category,

                label:
                    getReadableFilterLabel(
                        FILTER_STATE.category
                    )

            });

        }


        if (
            FILTER_STATE.subcategory
        ) {

            chips.push({

                type: "subcategory",

                value:
                    FILTER_STATE.subcategory,

                label:
                    getReadableFilterLabel(
                        FILTER_STATE.subcategory
                    )

            });

        }


        FILTER_STATE.sizes
            .forEach(size => {

                chips.push({

                    type: "size",

                    value: size,

                    label:
                        getReadableFilterLabel(
                            size
                        )

                });

            });


        FILTER_STATE.colors
            .forEach(color => {

                chips.push({

                    type: "color",

                    value: color,

                    label:
                        getReadableFilterLabel(
                            color
                        )

                });

            });


        FILTER_STATE.ratings
            .forEach(rating => {

                chips.push({

                    type: "rating",

                    value: rating,

                    label:
                        `${rating}★ & above`

                });

            });


        FILTER_STATE.discounts
            .forEach(discount => {

                chips.push({

                    type: "discount",

                    value: discount,

                    label:
                        `${discount}% & above`

                });

            });


        if (
            FILTER_STATE.minPrice !== null ||
            FILTER_STATE.maxPrice !== null
        ) {

            chips.push({

                type: "price",

                value: "price",

                label:
                    formatPriceFilterLabel()

            });

        }


        if (
            FILTER_STATE.availability !==
            "all"
        ) {

            chips.push({

                type: "availability",

                value: "in-stock",

                label: "In Stock"

            });

        }


        container.innerHTML =
            chips
                .map(
                    chip => `

                        <button
                            type="button"
                            class="active-filter-chip"
                            onclick="removeFilter('${escapeFilterHTML(chip.type)}', '${escapeFilterHTML(chip.value)}')"
                        >

                            ${escapeFilterHTML(chip.label)}

                            <span>
                                ×
                            </span>

                        </button>

                    `
                )
                .join("");

    });

}


/* =========================================================
   READABLE LABEL
   ========================================================= */

function getReadableFilterLabel(
    value
) {

    return String(value || "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );

}


function formatPriceFilterLabel() {

    const min =
        FILTER_STATE.minPrice;


    const max =
        FILTER_STATE.maxPrice;


    if (
        min !== null &&
        max !== null
    ) {

        return `₹${min.toLocaleString("en-IN")} - ₹${max.toLocaleString("en-IN")}`;

    }


    if (min !== null) {

        return `₹${min.toLocaleString("en-IN")}+`;

    }


    if (max !== null) {

        return `Under ₹${max.toLocaleString("en-IN")}`;

    }


    return "Price";

}


/* =========================================================
   FILTER PANEL
   ========================================================= */

function openFilterPanel() {

    document
        .querySelectorAll(
            "[data-filter-panel]"
        )
        .forEach(panel => {

            panel.classList.add(
                "open"
            );

        });


    document.body.classList.add(
        "filter-panel-open"
    );

}


function closeFilterPanel() {

    document
        .querySelectorAll(
            "[data-filter-panel]"
        )
        .forEach(panel => {

            panel.classList.remove(
                "open"
            );

        });


    document.body.classList.remove(
        "filter-panel-open"
    );

}


function toggleFilterPanel() {

    const panel =
        document.querySelector(
            "[data-filter-panel]"
        );


    if (!panel) {
        return;
    }


    if (
        panel.classList.contains(
            "open"
        )
    ) {

        closeFilterPanel();

    } else {

        openFilterPanel();

    }

}


/* =========================================================
   SAVE FILTER STATE
   ========================================================= */

function saveFilterState() {

    try {

        localStorage.setItem(
            FILTER_STORAGE_KEY,
            JSON.stringify(
                FILTER_STATE
            )
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Filter state save failed.",
            error
        );

    }

}


/* =========================================================
   LOAD FILTER STATE
   ========================================================= */

function loadFilterState() {

    try {

        const saved =
            localStorage.getItem(
                FILTER_STORAGE_KEY
            );


        if (!saved) {
            return;
        }


        const parsed =
            JSON.parse(saved);


        if (
            parsed &&
            typeof parsed ===
            "object"
        ) {

            FILTER_STATE = {

                ...FILTER_STATE,

                ...parsed,

                categories:
                    asFilterArray(
                        parsed.categories
                    ),

                subcategories:
                    asFilterArray(
                        parsed.subcategories
                    ),

                sizes:
                    asFilterArray(
                        parsed.sizes
                    ),

                colors:
                    asFilterArray(
                        parsed.colors
                    ),

                ratings:
                    asFilterArray(
                        parsed.ratings
                    ).map(Number),

                discounts:
                    asFilterArray(
                        parsed.discounts
                    ).map(Number)

            };

        }

    } catch (error) {

        console.error(
            "AS FASHIONS: Filter state load failed.",
            error
        );

    }

}


/* =========================================================
   URL FILTER SUPPORT
   ========================================================= */

function initializeURLFilters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get(
            "category"
        );


    const subcategory =
        params.get(
            "subcategory"
        );


    const minPrice =
        params.get(
            "minPrice"
        );


    const maxPrice =
        params.get(
            "maxPrice"
        );


    const sort =
        params.get(
            "sort"
        );


    if (category) {

        FILTER_STATE.category =
            normalizeFilterValue(
                category
            );

        FILTER_STATE.categories =
            [
                FILTER_STATE.category
            ];

    }


    if (subcategory) {

        FILTER_STATE.subcategory =
            normalizeFilterValue(
                subcategory
            );

        FILTER_STATE.subcategories =
            [
                FILTER_STATE.subcategory
            ];

    }


    if (minPrice) {

        FILTER_STATE.minPrice =
            Number(minPrice);

    }


    if (maxPrice) {

        FILTER_STATE.maxPrice =
            Number(maxPrice);

    }


    if (
        sort &&
        SORT_OPTIONS[sort]
    ) {

        FILTER_STATE.sort =
            sort;

    }

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeFilterHTML(
    value
) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatFilterPrice(
    amount
) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(
        Number(amount || 0)
    );

}


/* =========================================================
   FILTER INITIALIZATION
   ========================================================= */

function initializeFilters() {

    loadFilterState();

    initializeURLFilters();

    initializeSortControls();

    initializeFilterControls();

    applyFilters();

    renderActiveFilterChips();

}


/* =========================================================
   KEEP ACTIVE CHIPS UPDATED
   ========================================================= */

const originalApplyFilters =
    applyFilters;


applyFilters = function () {

    const result =
        originalApplyFilters();


    renderActiveFilterChips();

    return result;

};


/* =========================================================
   AUTO START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeFilters
    );

} else {

    initializeFilters();

}
