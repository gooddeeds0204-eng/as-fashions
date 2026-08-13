/* =========================================================
   AS FASHIONS
   WISHLIST ENGINE
   js/wishlist.js
   ========================================================= */

const WISHLIST_STORAGE_KEY = "as_fashions_wishlist";

let WISHLIST = loadWishlist();


/* =========================================================
   STORAGE
   ========================================================= */

function loadWishlist() {

    try {

        const saved =
            localStorage.getItem(
                WISHLIST_STORAGE_KEY
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
            "AS FASHIONS: Wishlist load failed.",
            error
        );

        return [];

    }

}


function saveWishlist() {

    try {

        localStorage.setItem(
            WISHLIST_STORAGE_KEY,
            JSON.stringify(WISHLIST)
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Wishlist save failed.",
            error
        );

    }

}


/* =========================================================
   PRODUCT LOOKUP
   ========================================================= */

function getWishlistProduct(productId) {

    if (
        typeof getProductById ===
        "function"
    ) {

        return getProductById(productId);

    }

    if (
        typeof PRODUCTS !==
        "undefined"
    ) {

        return PRODUCTS.find(
            product =>
                product.id === productId
        ) || null;

    }

    return null;

}


/* =========================================================
   CHECK WISHLIST
   ========================================================= */

function isInWishlist(productId) {

    return WISHLIST.some(
        item =>
            item.productId === productId
    );

}


/* =========================================================
   ADD TO WISHLIST
   ========================================================= */

function addToWishlist(productId) {

    const product =
        getWishlistProduct(productId);


    if (!product) {

        console.error(
            "Wishlist product not found:",
            productId
        );

        return false;

    }


    if (isInWishlist(productId)) {

        return false;

    }


    WISHLIST.push({

        productId: product.id,

        addedAt:
            new Date().toISOString()

    });


    saveWishlist();

    updateWishlistUI();


    showWishlistMessage(
        `${product.name} added to wishlist.`,
        "success"
    );


    return true;

}


/* =========================================================
   REMOVE FROM WISHLIST
   ========================================================= */

function removeFromWishlist(productId) {

    const oldLength =
        WISHLIST.length;


    WISHLIST =
        WISHLIST.filter(
            item =>
                item.productId !==
                productId
        );


    if (
        WISHLIST.length !==
        oldLength
    ) {

        saveWishlist();

        updateWishlistUI();

        return true;

    }


    return false;

}


/* =========================================================
   TOGGLE WISHLIST
   ========================================================= */

function toggleWishlist(productId) {

    if (
        isInWishlist(productId)
    ) {

        removeFromWishlist(
            productId
        );

        showWishlistMessage(
            "Removed from wishlist.",
            "success"
        );

        return false;

    }


    addToWishlist(productId);

    return true;

}


/* =========================================================
   GET WISHLIST
   ========================================================= */

function getWishlistItems() {

    return WISHLIST.map(
        item =>
            getWishlistProduct(
                item.productId
            )
    ).filter(Boolean);

}


function getWishlistCount() {

    return WISHLIST.length;

}


/* =========================================================
   WISHLIST BUTTON UI
   ========================================================= */

function updateWishlistButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-wishlist-id]"
        );


    buttons.forEach(button => {

        const productId =
            button.dataset.wishlistId;


        const active =
            isInWishlist(productId);


        button.classList.toggle(
            "active",
            active
        );


        button.classList.toggle(
            "is-wishlisted",
            active
        );


        button.setAttribute(
            "aria-pressed",
            active
                ? "true"
                : "false"
        );


        const icon =
            button.querySelector(
                "[data-wishlist-icon]"
            );


        if (icon) {

            icon.textContent =
                active
                    ? "♥"
                    : "♡";

        } else {

            /*
             * Only update simple icon buttons.
             * Avoid destroying custom button content.
             */

            if (
                button.children.length === 0
            ) {

                button.textContent =
                    active
                        ? "♥"
                        : "♡";

            }

        }

    });

}


/* =========================================================
   WISHLIST BADGE
   ========================================================= */

function updateWishlistBadge() {

    const count =
        getWishlistCount();


    const badges =
        document.querySelectorAll(
            "[data-wishlist-count], .wishlist-count, #wishlistCount"
        );


    badges.forEach(badge => {

        badge.textContent =
            count;


        badge.style.display =
            count > 0
                ? ""
                : "none";

    });

}


/* =========================================================
   WISHLIST RENDER
   ========================================================= */

function renderWishlist() {

    const containers =
        document.querySelectorAll(
            "[data-wishlist-items]"
        );


    containers.forEach(container => {

        const products =
            getWishlistItems();


        if (!products.length) {

            container.innerHTML = `

                <div class="wishlist-empty">

                    <div class="wishlist-empty-icon">
                        ♡
                    </div>

                    <h3>
                        Your wishlist is empty
                    </h3>

                    <p>
                        Save your favourite styles
                        and find them here anytime.
                    </p>

                    <button
                        type="button"
                        onclick="continueShopping()"
                    >
                        Explore Products
                    </button>

                </div>

            `;

            return;

        }


        container.innerHTML =
            products.map(product => {

                const image =
                    product.images &&
                    product.images.length
                        ? product.images[0]
                        : "";


                return `

                    <article
                        class="wishlist-item"
                        data-product-id="${escapeWishlistHTML(product.id)}"
                    >

                        <div class="wishlist-product-image">

                            <img
                                src="${escapeWishlistHTML(image)}"
                                alt="${escapeWishlistHTML(product.name)}"
                                loading="lazy"
                            >

                            <button
                                type="button"
                                class="wishlist-remove"
                                data-wishlist-id="${escapeWishlistHTML(product.id)}"
                                onclick="toggleWishlist('${escapeWishlistHTML(product.id)}')"
                                aria-label="Remove from wishlist"
                            >
                                ♥
                            </button>

                        </div>


                        <div class="wishlist-product-info">

                            <div class="wishlist-brand">
                                ${escapeWishlistHTML(product.brand)}
                            </div>

                            <h3>
                                ${escapeWishlistHTML(product.name)}
                            </h3>


                            <div class="wishlist-rating">

                                <span>
                                    ★ ${product.rating}
                                </span>

                                <small>
                                    (${product.reviews})
                                </small>

                            </div>


                            <div class="wishlist-price">

                                <strong>
                                    ${formatWishlistPrice(product.price)}
                                </strong>

                                <del>
                                    ${formatWishlistPrice(product.mrp)}
                                </del>

                                <span>
                                    ${product.discount}% OFF
                                </span>

                            </div>


                            <div class="wishlist-actions">

                                <button
                                    type="button"
                                    onclick="moveWishlistItemToCart('${escapeWishlistHTML(product.id)}')"
                                >
                                    Add to Bag
                                </button>

                            </div>

                        </div>

                    </article>

                `;

            }).join("");

    });

}


/* =========================================================
   MOVE WISHLIST ITEM TO CART
   ========================================================= */

function moveWishlistItemToCart(productId) {

    const product =
        getWishlistProduct(productId);


    if (!product) {
        return false;
    }


    /*
     * If product has multiple sizes/colors,
     * the product page can later ask the user
     * to select the variant.
     *
     * For now, single-value variants are selected
     * automatically.
     */

    let size = null;
    let color = null;


    if (
        product.sizes &&
        product.sizes.length === 1
    ) {

        size =
            product.sizes[0];

    }


    if (
        product.colors &&
        product.colors.length === 1
    ) {

        color =
            product.colors[0].name;

    }


    if (
        typeof addToCart !==
        "function"
    ) {

        showWishlistMessage(
            "Cart system is not available yet.",
            "error"
        );

        return false;

    }


    const added =
        addToCart(
            productId,
            1,
            size,
            color
        );


    if (added) {

        showWishlistMessage(
            "Product added to your bag.",
            "success"
        );

        return true;

    }


    return false;

}


/* =========================================================
   CLEAR WISHLIST
   ========================================================= */

function clearWishlist() {

    WISHLIST = [];

    saveWishlist();

    updateWishlistUI();

}


/* =========================================================
   UI UPDATE
   ========================================================= */

function updateWishlistUI() {

    updateWishlistBadge();

    updateWishlistButtons();

    renderWishlist();

}


/* =========================================================
   MESSAGE
   ========================================================= */

function showWishlistMessage(
    message,
    type = "success"
) {

    let container =
        document.querySelector(
            "#wishlistMessageContainer"
        );


    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.id =
            "wishlistMessageContainer";

        container.className =
            "wishlist-message-container";

        document.body.appendChild(
            container
        );

    }


    const element =
        document.createElement(
            "div"
        );


    element.className =
        `wishlist-message wishlist-message-${type}`;


    element.textContent =
        message;


    container.appendChild(
        element
    );


    setTimeout(() => {

        element.classList.add(
            "hide"
        );


        setTimeout(() => {

            element.remove();

        }, 300);

    }, 2500);

}


/* =========================================================
   MONEY FORMAT
   ========================================================= */

function formatWishlistPrice(amount) {

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

function escapeWishlistHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   PRODUCT CARD HELPER
   ========================================================= */

/*
 * Creates a wishlist button for product cards.
 *
 * HTML:
 *
 * ${createWishlistButton(product.id)}
 */

function createWishlistButton(productId) {

    const active =
        isInWishlist(productId);


    return `

        <button
            type="button"
            class="product-wishlist-btn ${
                active ? "active" : ""
            }"
            data-wishlist-id="${escapeWishlistHTML(productId)}"
            onclick="toggleWishlist('${escapeWishlistHTML(productId)}')"
            aria-label="${
                active
                    ? "Remove from wishlist"
                    : "Add to wishlist"
            }"
            aria-pressed="${
                active
                    ? "true"
                    : "false"
            }"
        >

            <span data-wishlist-icon>
                ${active ? "♥" : "♡"}
            </span>

        </button>

    `;

}


/* =========================================================
   WISHLIST PAGE NAVIGATION
   ========================================================= */

function openWishlist() {

    /*
     * app.js can override this later.
     */

    if (
        typeof window.showWishlistPage ===
        "function"
    ) {

        window.showWishlistPage();

        return;

    }


    const wishlistSection =
        document.querySelector(
            "#wishlist"
        );


    if (wishlistSection) {

        wishlistSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;

    }


    /*
     * Fallback.
     */

    window.location.href =
        "wishlist.html";

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeWishlist() {

    /*
     * Remove products which no longer
     * exist in products.js.
     */

    WISHLIST =
        WISHLIST.filter(item => {

            return Boolean(
                getWishlistProduct(
                    item.productId
                )
            );

        });


    saveWishlist();

    updateWishlistUI();

}


/* =========================================================
   AUTO INITIALIZATION
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWishlist
    );

} else {

    initializeWishlist();

}
