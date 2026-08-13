/* =========================================================
   AS FASHIONS
   SEARCH ENGINE
   js/search.js
   ========================================================= */

const SEARCH_STORAGE_KEY = "as_fashions_recent_searches";
const MAX_RECENT_SEARCHES = 8;

let RECENT_SEARCHES = loadRecentSearches();
let SEARCH_STATE = {
    query: "",
    results: [],
    isOpen: false
};


/* =========================================================
   STORAGE
   ========================================================= */

function loadRecentSearches() {

    try {

        const saved =
            localStorage.getItem(
                SEARCH_STORAGE_KEY
            );

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "AS FASHIONS: Recent search load failed.",
            error
        );

        return [];

    }

}


function saveRecentSearches() {

    try {

        localStorage.setItem(
            SEARCH_STORAGE_KEY,
            JSON.stringify(RECENT_SEARCHES)
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Recent search save failed.",
            error
        );

    }

}


/* =========================================================
   NORMALIZE QUERY
   ========================================================= */

function normalizeSearchQuery(query) {

    return String(query || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

}


/* =========================================================
   SAVE SEARCH
   ========================================================= */

function saveSearchQuery(query) {

    const normalized =
        normalizeSearchQuery(query);


    if (!normalized) {
        return;
    }


    RECENT_SEARCHES =
        RECENT_SEARCHES.filter(
            item => item !== normalized
        );


    RECENT_SEARCHES.unshift(
        normalized
    );


    RECENT_SEARCHES =
        RECENT_SEARCHES.slice(
            0,
            MAX_RECENT_SEARCHES
        );


    saveRecentSearches();

}


/* =========================================================
   REMOVE RECENT SEARCH
   ========================================================= */

function removeRecentSearch(query) {

    const normalized =
        normalizeSearchQuery(query);


    RECENT_SEARCHES =
        RECENT_SEARCHES.filter(
            item => item !== normalized
        );


    saveRecentSearches();

    renderSearchSuggestions();

}


/* =========================================================
   CLEAR RECENT SEARCHES
   ========================================================= */

function clearRecentSearches() {

    RECENT_SEARCHES = [];

    saveRecentSearches();

    renderSearchSuggestions();

}


/* =========================================================
   SEARCH PRODUCTS
   ========================================================= */

function performProductSearch(query) {

    const normalized =
        normalizeSearchQuery(query);


    if (!normalized) {
        return [];
    }


    /*
     * Use products.js search helper
     * whenever available.
     */

    if (
        typeof searchProducts ===
        "function"
    ) {

        return searchProducts(
            normalized
        );

    }


    /*
     * Fallback search.
     */

    if (
        typeof PRODUCTS ===
        "undefined"
    ) {

        return [];

    }


    return PRODUCTS.filter(product => {

        const searchableText = [

            product.name,
            product.brand,
            product.category,
            product.subcategory,
            product.type,

            ...(product.tags || [])

        ]
            .join(" ")
            .toLowerCase();


        return searchableText.includes(
            normalized
        );

    });

}


/* =========================================================
   CATEGORY SEARCH
   ========================================================= */

function performCategorySearch(query) {

    const normalized =
        normalizeSearchQuery(query);


    if (!normalized) {
        return [];
    }


    if (
        typeof searchCategories ===
        "function"
    ) {

        return searchCategories(
            normalized
        );

    }


    return [];

}


/* =========================================================
   LIVE SEARCH
   ========================================================= */

function handleSearchInput(query) {

    const normalized =
        normalizeSearchQuery(query);


    SEARCH_STATE.query =
        normalized;


    if (!normalized) {

        SEARCH_STATE.results = [];

        SEARCH_STATE.isOpen = true;

        renderSearchSuggestions();

        return;

    }


    const products =
        performProductSearch(
            normalized
        );


    const categories =
        performCategorySearch(
            normalized
        );


    SEARCH_STATE.results = {

        products,
        categories

    };


    SEARCH_STATE.isOpen = true;


    renderSearchSuggestions();

}


/* =========================================================
   SEARCH SUGGESTIONS
   ========================================================= */

function renderSearchSuggestions() {

    const containers =
        document.querySelectorAll(
            "[data-search-suggestions]"
        );


    containers.forEach(container => {

        const query =
            SEARCH_STATE.query;


        /*
         * Empty query → recent searches.
         */

        if (!query) {

            if (!RECENT_SEARCHES.length) {

                container.innerHTML = `

                    <div class="search-suggestions-empty">

                        <span>🔍</span>

                        <p>
                            Search for products,
                            categories or styles
                        </p>

                    </div>

                `;

                return;

            }


            container.innerHTML = `

                <div class="search-section-header">

                    <strong>
                        Recent Searches
                    </strong>

                    <button
                        type="button"
                        onclick="clearRecentSearches()"
                    >
                        Clear
                    </button>

                </div>


                <div class="recent-search-list">

                    ${RECENT_SEARCHES.map(
                        search => `

                            <div class="recent-search-item">

                                <button
                                    type="button"
                                    onclick="selectSearchSuggestion('${escapeSearchHTML(search)}')"
                                >

                                    <span>
                                        🕘
                                    </span>

                                    ${escapeSearchHTML(search)}

                                </button>


                                <button
                                    type="button"
                                    onclick="removeRecentSearch('${escapeSearchHTML(search)}')"
                                    aria-label="Remove recent search"
                                >
                                    ×
                                </button>

                            </div>

                        `
                    ).join("")}

                </div>

            `;

            return;

        }


        const results =
            SEARCH_STATE.results || {
                products: [],
                categories: []
            };


        const products =
            results.products || [];


        const categories =
            results.categories || [];


        /*
         * No results.
         */

        if (
            !products.length &&
            !categories.length
        ) {

            container.innerHTML = `

                <div class="search-no-results">

                    <div class="search-no-results-icon">
                        🔍
                    </div>

                    <h3>
                        No results found
                    </h3>

                    <p>
                        Try another keyword,
                        category or style.
                    </p>

                </div>

            `;

            return;

        }


        /*
         * Limit suggestions for performance.
         */

        const productSuggestions =
            products.slice(0, 6);


        const categorySuggestions =
            categories.slice(0, 5);


        container.innerHTML = `

            ${
                categorySuggestions.length
                    ? `

                        <div class="search-section">

                            <div class="search-section-title">
                                Categories
                            </div>

                            <div class="search-category-results">

                                ${categorySuggestions
                                    .map(
                                        result => `

                                            <button
                                                type="button"
                                                class="search-category-result"
                                                onclick="selectCategorySearchResult('${escapeSearchHTML(result.categoryId)}', '${escapeSearchHTML(result.name)}')"
                                            >

                                                <span>
                                                    📂
                                                </span>

                                                <span>

                                                    <strong>
                                                        ${escapeSearchHTML(result.name)}
                                                    </strong>

                                                    ${
                                                        result.categoryName
                                                            ? `
                                                                <small>
                                                                    ${escapeSearchHTML(result.categoryName)}
                                                                </small>
                                                            `
                                                            : ""
                                                    }

                                                </span>

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
                productSuggestions.length
                    ? `

                        <div class="search-section">

                            <div class="search-section-title">

                                Products

                                ${
                                    products.length > 6
                                        ? `
                                            <span>
                                                ${products.length} results
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            <div class="search-product-results">

                                ${productSuggestions
                                    .map(
                                        product =>
                                            createSearchProductSuggestion(
                                                product
                                            )
                                    )
                                    .join("")}

                            </div>


                            ${
                                products.length > 6
                                    ? `

                                        <button
                                            type="button"
                                            class="search-view-all"
                                            onclick="submitSearch('${escapeSearchHTML(query)}')"
                                        >
                                            View all results for
                                            “${escapeSearchHTML(query)}”
                                        </button>

                                    `
                                    : ""
                            }

                        </div>

                    `
                    : ""
            }

        `;

    });

}


/* =========================================================
   PRODUCT SUGGESTION CARD
   ========================================================= */

function createSearchProductSuggestion(
    product
) {

    const image =
        product.images &&
        product.images.length
            ? product.images[0]
            : "";


    return `

        <button
            type="button"
            class="search-product-result"
            onclick="openSearchProduct('${escapeSearchHTML(product.id)}')"
        >

            <div class="search-product-image">

                <img
                    src="${escapeSearchHTML(image)}"
                    alt="${escapeSearchHTML(product.name)}"
                    loading="lazy"
                >

            </div>


            <div class="search-product-info">

                <strong>
                    ${escapeSearchHTML(product.name)}
                </strong>

                <small>
                    ${escapeSearchHTML(product.brand)}
                </small>


                <div class="search-product-price">

                    <span>
                        ${formatSearchPrice(product.price)}
                    </span>

                    ${
                        product.mrp
                            ? `
                                <del>
                                    ${formatSearchPrice(product.mrp)}
                                </del>
                            `
                            : ""
                    }

                    ${
                        product.discount
                            ? `
                                <em>
                                    ${product.discount}% OFF
                                </em>
                            `
                            : ""
                    }

                </div>

            </div>

        </button>

    `;

}


/* =========================================================
   SELECT SEARCH SUGGESTION
   ========================================================= */

function selectSearchSuggestion(query) {

    const input =
        getSearchInputs()[0];


    if (input) {

        input.value =
            query;

    }


    submitSearch(query);

}


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openSearchProduct(productId) {

    const product =
        typeof getProductById ===
        "function"
            ? getProductById(productId)
            : null;


    if (!product) {
        return;
    }


    saveSearchQuery(
        SEARCH_STATE.query
    );


    closeSearch();


    /*
     * app.js can override this.
     */

    if (
        typeof window.openProductDetails ===
        "function"
    ) {

        window.openProductDetails(
            productId
        );

        return;

    }


    /*
     * Fallback.
     */

    window.location.href =
        `index.html?product=${encodeURIComponent(productId)}`;

}


/* =========================================================
   CATEGORY RESULT
   ========================================================= */

function selectCategorySearchResult(
    categoryId,
    categoryName
) {

    saveSearchQuery(
        SEARCH_STATE.query
    );


    closeSearch();


    if (
        typeof window.filterByCategory ===
        "function"
    ) {

        window.filterByCategory(
            categoryId
        );

        return;

    }


    window.location.href =
        `index.html?category=${encodeURIComponent(categoryId)}`;

}


/* =========================================================
   SUBMIT SEARCH
   ========================================================= */

function submitSearch(query = null) {

    const input =
        getSearchInputs()[0];


    if (
        query === null &&
        input
    ) {

        query =
            input.value;

    }


    const normalized =
        normalizeSearchQuery(query);


    if (!normalized) {

        return false;

    }


    saveSearchQuery(
        normalized
    );


    SEARCH_STATE.query =
        normalized;


    SEARCH_STATE.results =
        performProductSearch(
            normalized
        );


    SEARCH_STATE.isOpen =
        false;


    closeSearch();


    /*
     * app.js can handle search navigation.
     */

    if (
        typeof window.showSearchResults ===
        "function"
    ) {

        window.showSearchResults(
            normalized
        );

        return true;

    }


    /*
     * Fallback URL.
     */

    window.location.href =
        `index.html?search=${encodeURIComponent(normalized)}`;


    return true;

}


/* =========================================================
   SEARCH INPUTS
   ========================================================= */

function getSearchInputs() {

    return Array.from(
        document.querySelectorAll(
            "[data-search-input], #searchInput, .search-input"
        )
    );

}


/* =========================================================
   OPEN SEARCH
   ========================================================= */

function openSearch() {

    SEARCH_STATE.isOpen =
        true;


    const inputs =
        getSearchInputs();


    inputs.forEach(input => {

        input.closest(
            ".search-container, .search-box, header"
        )?.classList.add(
            "search-active"
        );

    });


    renderSearchSuggestions();

}


/* =========================================================
   CLOSE SEARCH
   ========================================================= */

function closeSearch() {

    SEARCH_STATE.isOpen =
        false;


    document
        .querySelectorAll(
            ".search-active"
        )
        .forEach(element => {

            element.classList.remove(
                "search-active"
            );

        });


    document
        .querySelectorAll(
            "[data-search-suggestions]"
        )
        .forEach(container => {

            container.classList.remove(
                "show"
            );

        });

}


/* =========================================================
   CLEAR SEARCH INPUT
   ========================================================= */

function clearSearchInput() {

    getSearchInputs()
        .forEach(input => {

            input.value = "";

        });


    SEARCH_STATE.query = "";

    SEARCH_STATE.results = [];

    openSearch();

}


/* =========================================================
   ESC KEY
   ========================================================= */

function handleSearchKeydown(event) {

    if (
        event.key ===
        "Enter"
    ) {

        event.preventDefault();

        submitSearch();

        return;

    }


    if (
        event.key ===
        "Escape"
    ) {

        closeSearch();

        return;

    }

}


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatSearchPrice(
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
   HTML ESCAPE
   ========================================================= */

function escapeSearchHTML(
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
   SEARCH EVENT BINDING
   ========================================================= */

function initializeSearch() {

    const inputs =
        getSearchInputs();


    inputs.forEach(input => {

        input.addEventListener(
            "input",
            event => {

                handleSearchInput(
                    event.target.value
                );

            }
        );


        input.addEventListener(
            "focus",
            () => {

                openSearch();

            }
        );


        input.addEventListener(
            "keydown",
            handleSearchKeydown
        );

    });


    /*
     * Search submit buttons.
     */

    document
        .querySelectorAll(
            "[data-search-submit]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    submitSearch();

                }
            );

        });


    /*
     * Search close buttons.
     */

    document
        .querySelectorAll(
            "[data-search-close]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                closeSearch
            );

        });


    /*
     * Clear buttons.
     */

    document
        .querySelectorAll(
            "[data-search-clear]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                clearSearchInput
            );

        });


    /*
     * Click outside search.
     */

    document.addEventListener(
        "click",
        event => {

            const searchArea =
                event.target.closest(
                    ".search-container, .search-box, [data-search-area]"
                );


            if (
                !searchArea &&
                SEARCH_STATE.isOpen
            ) {

                closeSearch();

            }

        }
    );

}


/* =========================================================
   URL SEARCH INITIALIZATION
   ========================================================= */

function initializeURLSearch() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const query =
        params.get("search");


    if (!query) {
        return;
    }


    const inputs =
        getSearchInputs();


    inputs.forEach(input => {

        input.value =
            query;

    });


    SEARCH_STATE.query =
        normalizeSearchQuery(query);


    SEARCH_STATE.results =
        performProductSearch(query);


    /*
     * app.js can render complete
     * search results page.
     */

    if (
        typeof window.showSearchResults ===
        "function"
    ) {

        window.showSearchResults(
            query
        );

    }

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeSearchEngine() {

    initializeSearch();

    initializeURLSearch();

}


/* =========================================================
   AUTO START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeSearchEngine
    );

} else {

    initializeSearchEngine();

                               }
