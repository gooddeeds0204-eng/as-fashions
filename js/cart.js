/* =========================================================
   AS FASHIONS
   SHOPPING CART ENGINE
   js/cart.js
   ========================================================= */

const CART_STORAGE_KEY = "as_fashions_cart";


/* =========================================================
   CART STATE
   ========================================================= */

let CART = loadCart();


/* =========================================================
   STORAGE
   ========================================================= */

/**
 * Load cart from localStorage.
 */
function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(CART_STORAGE_KEY);

        if (!savedCart) {
            return [];
        }

        const parsedCart = JSON.parse(savedCart);

        return Array.isArray(parsedCart)
            ? parsedCart
            : [];

    } catch (error) {

        console.error(
            "AS FASHIONS: Unable to load cart.",
            error
        );

        return [];

    }

}


/**
 * Save current cart.
 */
function saveCart() {

    try {

        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(CART)
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Unable to save cart.",
            error
        );

    }

}


/* =========================================================
   PRODUCT LOOKUP
   ========================================================= */

/**
 * Get product from PRODUCTS database.
 */
function getCartProduct(productId) {

    if (typeof getProductById === "function") {
        return getProductById(productId);
    }

    if (typeof PRODUCTS !== "undefined") {

        return PRODUCTS.find(
            product => product.id === productId
        ) || null;

    }

    return null;

}


/* =========================================================
   ADD TO CART
   ========================================================= */

/**
 * Add product to cart.
 *
 * Example:
 * addToCart("AF-MEN-001")
 *
 * Or:
 * addToCart("AF-MEN-001", 2, "M", "Black")
 */
function addToCart(
    productId,
    quantity = 1,
    size = null,
    color = null
) {

    const product = getCartProduct(productId);

    if (!product) {

        console.error(
            "Product not found:",
            productId
        );

        return false;

    }


    /* ---------------------------------------------
       Validate quantity
       --------------------------------------------- */

    quantity = Number(quantity);

    if (!Number.isFinite(quantity) || quantity < 1) {
        quantity = 1;
    }

    quantity = Math.floor(quantity);


    /* ---------------------------------------------
       Validate stock
       --------------------------------------------- */

    if (product.stock <= 0) {

        showCartMessage(
            "Sorry, this product is out of stock.",
            "error"
        );

        return false;

    }


    /* ---------------------------------------------
       Find existing item
       --------------------------------------------- */

    const existingItem = CART.find(item =>

        item.productId === productId &&
        item.size === size &&
        item.color === color

    );


    if (existingItem) {

        const newQuantity =
            existingItem.quantity + quantity;


        if (newQuantity > product.stock) {

            existingItem.quantity =
                product.stock;

            showCartMessage(
                `Only ${product.stock} item(s) available.`,
                "warning"
            );

        } else {

            existingItem.quantity =
                newQuantity;

        }

    } else {

        const safeQuantity =
            Math.min(quantity, product.stock);


        CART.push({

            productId: product.id,

            name: product.name,

            brand: product.brand,

            price: product.price,

            mrp: product.mrp,

            image:
                product.images &&
                product.images.length
                    ? product.images[0]
                    : "",

            size: size,

            color: color,

            quantity: safeQuantity

        });

    }


    saveCart();

    updateCartUI();

    showCartMessage(
        `${product.name} added to cart.`,
        "success"
    );

    return true;

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

/**
 * Remove item using cart item index.
 */
function removeFromCart(cartIndex) {

    cartIndex = Number(cartIndex);

    if (
        !Number.isInteger(cartIndex) ||
        cartIndex < 0 ||
        cartIndex >= CART.length
    ) {
        return false;
    }

    CART.splice(cartIndex, 1);

    saveCart();

    updateCartUI();

    return true;

}


/**
 * Remove using product + selected variant.
 */
function removeProductFromCart(
    productId,
    size = null,
    color = null
) {

    const oldLength = CART.length;

    CART = CART.filter(item => !(
        item.productId === productId &&
        item.size === size &&
        item.color === color
    ));

    if (CART.length !== oldLength) {

        saveCart();

        updateCartUI();

        return true;

    }

    return false;

}


/* =========================================================
   UPDATE QUANTITY
   ========================================================= */

/**
 * Set exact quantity.
 */
function updateCartQuantity(
    cartIndex,
    quantity
) {

    cartIndex = Number(cartIndex);
    quantity = Number(quantity);


    if (
        !Number.isInteger(cartIndex) ||
        cartIndex < 0 ||
        cartIndex >= CART.length
    ) {
        return false;
    }


    if (
        !Number.isFinite(quantity) ||
        quantity <= 0
    ) {

        removeFromCart(cartIndex);

        return true;

    }


    quantity = Math.floor(quantity);


    const cartItem = CART[cartIndex];

    const product =
        getCartProduct(cartItem.productId);


    if (!product) {

        removeFromCart(cartIndex);

        return false;

    }


    if (quantity > product.stock) {

        quantity = product.stock;

        showCartMessage(
            `Only ${product.stock} item(s) available.`,
            "warning"
        );

    }


    cartItem.quantity = quantity;

    saveCart();

    updateCartUI();

    return true;

}


/**
 * Increase quantity.
 */
function increaseCartQuantity(cartIndex) {

    const item = CART[cartIndex];

    if (!item) {
        return false;
    }

    return updateCartQuantity(
        cartIndex,
        item.quantity + 1
    );

}


/**
 * Decrease quantity.
 */
function decreaseCartQuantity(cartIndex) {

    const item = CART[cartIndex];

    if (!item) {
        return false;
    }

    return updateCartQuantity(
        cartIndex,
        item.quantity - 1
    );

}


/* =========================================================
   CLEAR CART
   ========================================================= */

/**
 * Remove everything from cart.
 */
function clearCart() {

    CART = [];

    saveCart();

    updateCartUI();

    return true;

}


/* =========================================================
   CART INFORMATION
   ========================================================= */

/**
 * Get all cart items.
 */
function getCartItems() {

    return [...CART];

}


/**
 * Get total quantity.
 */
function getCartCount() {

    return CART.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );

}


/**
 * Get subtotal.
 */
function getCartSubtotal() {

    return CART.reduce(
        (total, item) => {

            return total +
                (
                    Number(item.price || 0) *
                    Number(item.quantity || 0)
                );

        },
        0
    );

}


/**
 * Get MRP total.
 */
function getCartMRPTotal() {

    return CART.reduce(
        (total, item) => {

            return total +
                (
                    Number(item.mrp || item.price || 0) *
                    Number(item.quantity || 0)
                );

        },
        0
    );

}


/**
 * Total product discount.
 */
function getCartProductDiscount() {

    return Math.max(
        0,
        getCartMRPTotal() -
        getCartSubtotal()
    );

}


/* =========================================================
   COUPON SYSTEM
   ========================================================= */

let CART_COUPON = null;


/**
 * Available demo coupons.
 */
const CART_COUPONS = {

    AS10: {
        code: "AS10",
        type: "percentage",
        value: 10,
        minimum: 999,
        maximumDiscount: 500
    },

    AS200: {
        code: "AS200",
        type: "flat",
        value: 200,
        minimum: 1499
    },

    FIRST15: {
        code: "FIRST15",
        type: "percentage",
        value: 15,
        minimum: 1299,
        maximumDiscount: 750
    }

};


/**
 * Apply coupon.
 */
function applyCartCoupon(code) {

    code = String(code || "")
        .trim()
        .toUpperCase();


    if (!code) {

        showCartMessage(
            "Please enter a coupon code.",
            "error"
        );

        return {
            success: false
        };

    }


    const coupon =
        CART_COUPONS[code];


    if (!coupon) {

        showCartMessage(
            "Invalid coupon code.",
            "error"
        );

        return {
            success: false
        };

    }


    const subtotal =
        getCartSubtotal();


    if (subtotal < coupon.minimum) {

        showCartMessage(
            `Minimum order value is ₹${coupon.minimum}.`,
            "warning"
        );

        return {
            success: false
        };

    }


    CART_COUPON = coupon;

    updateCartUI();


    showCartMessage(
        `${coupon.code} applied successfully.`,
        "success"
    );


    return {
        success: true,
        coupon: coupon
    };

}


/**
 * Remove coupon.
 */
function removeCartCoupon() {

    CART_COUPON = null;

    updateCartUI();

}


/**
 * Calculate coupon discount.
 */
function getCartCouponDiscount() {

    if (!CART_COUPON) {
        return 0;
    }


    const subtotal =
        getCartSubtotal();


    if (
        subtotal <
        CART_COUPON.minimum
    ) {
        return 0;
    }


    let discount = 0;


    if (
        CART_COUPON.type ===
        "percentage"
    ) {

        discount =
            subtotal *
            (
                CART_COUPON.value /
                100
            );


        if (
            CART_COUPON.maximumDiscount
        ) {

            discount =
                Math.min(
                    discount,
                    CART_COUPON.maximumDiscount
                );

        }

    }


    if (
        CART_COUPON.type ===
        "flat"
    ) {

        discount =
            CART_COUPON.value;

    }


    return Math.min(
        discount,
        subtotal
    );

}


/* =========================================================
   DELIVERY
   ========================================================= */

const CART_CONFIG = {

    freeDeliveryMinimum: 999,

    standardDeliveryCharge: 49

};


/**
 * Calculate delivery charge.
 */
function getCartDeliveryCharge() {

    const subtotal =
        getCartSubtotal();


    if (subtotal <= 0) {
        return 0;
    }


    if (
        subtotal >=
        CART_CONFIG.freeDeliveryMinimum
    ) {
        return 0;
    }


    return CART_CONFIG.standardDeliveryCharge;

}


/* =========================================================
   FINAL TOTAL
   ========================================================= */

/**
 * Complete cart summary.
 */
function getCartSummary() {

    const subtotal =
        getCartSubtotal();


    const mrpTotal =
        getCartMRPTotal();


    const productDiscount =
        getCartProductDiscount();


    const couponDiscount =
        getCartCouponDiscount();


    const deliveryCharge =
        getCartDeliveryCharge();


    const total =
        Math.max(
            0,
            subtotal -
            couponDiscount +
            deliveryCharge
        );


    return {

        itemCount:
            getCartCount(),

        mrpTotal:
            mrpTotal,

        subtotal:
            subtotal,

        productDiscount:
            productDiscount,

        couponDiscount:
            couponDiscount,

        deliveryCharge:
            deliveryCharge,

        total:
            total,

        totalSavings:
            productDiscount +
            couponDiscount

    };

}


/* =========================================================
   FORMAT MONEY
   ========================================================= */

function formatCartPrice(amount) {

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
   CART UI
   ========================================================= */

/**
 * Update cart badge.
 */
function updateCartBadge() {

    const count =
        getCartCount();


    const badges =
        document.querySelectorAll(
            "[data-cart-count], .cart-count, #cartCount"
        );


    badges.forEach(badge => {

        badge.textContent = count;

        badge.style.display =
            count > 0
                ? ""
                : "none";

    });

}


/**
 * Update all basic cart UI.
 */
function updateCartUI() {

    updateCartBadge();

    renderCartItems();

    updateCartSummary();

}


/**
 * Render cart items.
 */
function renderCartItems() {

    const containers =
        document.querySelectorAll(
            "[data-cart-items]"
        );


    containers.forEach(container => {

        if (!CART.length) {

            container.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty-icon">🛍️</div>
                    <h3>Your bag is empty</h3>
                    <p>Add something you love.</p>
                    <button
                        type="button"
                        onclick="continueShopping()"
                    >
                        Continue Shopping
                    </button>
                </div>
            `;

            return;

        }


        container.innerHTML =
            CART.map(
                (item, index) => {

                    const product =
                        getCartProduct(
                            item.productId
                        );


                    const image =
                        item.image || "";


                    return `
                        <article
                            class="cart-item"
                            data-cart-index="${index}"
                        >

                            <div class="cart-item-image">

                                <img
                                    src="${escapeCartHTML(image)}"
                                    alt="${escapeCartHTML(item.name)}"
                                    loading="lazy"
                                >

                            </div>


                            <div class="cart-item-details">

                                <div class="cart-item-brand">
                                    ${escapeCartHTML(item.brand)}
                                </div>

                                <h3>
                                    ${escapeCartHTML(item.name)}
                                </h3>

                                ${
                                    item.size
                                        ? `<p>Size: ${escapeCartHTML(item.size)}</p>`
                                        : ""
                                }

                                ${
                                    item.color
                                        ? `<p>Color: ${escapeCartHTML(item.color)}</p>`
                                        : ""
                                }


                                <div class="cart-item-price">

                                    <strong>
                                        ${formatCartPrice(item.price)}
                                    </strong>

                                    ${
                                        item.mrp
                                            ? `
                                                <del>
                                                    ${formatCartPrice(item.mrp)}
                                                </del>
                                            `
                                            : ""
                                    }

                                </div>


                                <div class="cart-item-actions">

                                    <button
                                        type="button"
                                        onclick="decreaseCartQuantity(${index})"
                                    >
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onclick="increaseCartQuantity(${index})"
                                    >
                                        +
                                    </button>

                                </div>


                                <button
                                    type="button"
                                    class="cart-remove"
                                    onclick="removeFromCart(${index})"
                                >
                                    Remove
                                </button>

                            </div>

                        </article>
                    `;

                }
            ).join("");

    });

}


/**
 * Update summary elements.
 */
function updateCartSummary() {

    const summary =
        getCartSummary();


    setCartText(
        "[data-cart-mrp]",
        formatCartPrice(summary.mrpTotal)
    );


    setCartText(
        "[data-cart-subtotal]",
        formatCartPrice(summary.subtotal)
    );


    setCartText(
        "[data-cart-product-discount]",
        formatCartPrice(
            summary.productDiscount
        )
    );


    setCartText(
        "[data-cart-coupon-discount]",
        formatCartPrice(
            summary.couponDiscount
        )
    );


    setCartText(
        "[data-cart-delivery]",
        summary.deliveryCharge === 0
            ? "FREE"
            : formatCartPrice(
                summary.deliveryCharge
            )
    );


    setCartText(
        "[data-cart-total]",
        formatCartPrice(summary.total)
    );


    setCartText(
        "[data-cart-savings]",
        formatCartPrice(
            summary.totalSavings
        )
    );


    setCartText(
        "[data-cart-item-count]",
        summary.itemCount
    );


    const couponElement =
        document.querySelector(
            "[data-cart-coupon]"
        );


    if (couponElement) {

        couponElement.textContent =
            CART_COUPON
                ? CART_COUPON.code
                : "";

    }

}


/* =========================================================
   DOM HELPERS
   ========================================================= */

function setCartText(
    selector,
    value
) {

    document
        .querySelectorAll(selector)
        .forEach(element => {

            element.textContent = value;

        });

}


/**
 * Basic HTML escaping.
 */
function escapeCartHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CART MESSAGE
   ========================================================= */

function showCartMessage(
    message,
    type = "success"
) {

    let container =
        document.querySelector(
            "#cartMessageContainer"
        );


    if (!container) {

        container =
            document.createElement("div");

        container.id =
            "cartMessageContainer";

        container.className =
            "cart-message-container";

        document.body.appendChild(
            container
        );

    }


    const messageElement =
        document.createElement("div");


    messageElement.className =
        `cart-message cart-message-${type}`;


    messageElement.textContent =
        message;


    container.appendChild(
        messageElement
    );


    setTimeout(() => {

        messageElement.classList.add(
            "hide"
        );

        setTimeout(() => {

            messageElement.remove();

        }, 300);

    }, 2500);

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function getCheckoutData() {

    return {

        items: getCartItems(),

        summary: getCartSummary(),

        coupon: CART_COUPON

    };

}


/**
 * Check whether checkout can proceed.
 */
function canProceedToCheckout() {

    if (!CART.length) {

        showCartMessage(
            "Your bag is empty.",
            "warning"
        );

        return false;

    }


    for (const item of CART) {

        const product =
            getCartProduct(
                item.productId
            );


        if (!product) {

            showCartMessage(
                "One of the products is no longer available.",
                "error"
            );

            return false;

        }


        if (
            product.stock <
            item.quantity
        ) {

            showCartMessage(
                `${product.name} has only ${product.stock} left.`,
                "warning"
            );

            return false;

        }

    }


    return true;

}


/**
 * Continue to checkout.
 */
function proceedToCheckout() {

    if (!canProceedToCheckout()) {
        return false;
    }


    /*
     * app.js can replace this behaviour
     * with the actual checkout route.
     */

    if (
        typeof window.openCheckout ===
        "function"
    ) {

        window.openCheckout();

        return true;

    }


    window.location.href =
        "checkout.html";


    return true;

}


/**
 * Continue shopping.
 */
function continueShopping() {

    if (
        typeof window.showHome ===
        "function"
    ) {

        window.showHome();

        return;

    }


    window.location.href =
        "index.html";

}


/* =========================================================
   PRODUCT QUICK ADD
   ========================================================= */

/**
 * Add product directly without variant.
 */
function quickAddToCart(productId) {

    const product =
        getCartProduct(productId);


    if (!product) {
        return false;
    }


    let defaultSize = null;
    let defaultColor = null;


    if (
        product.sizes &&
        product.sizes.length === 1
    ) {

        defaultSize =
            product.sizes[0];

    }


    if (
        product.colors &&
        product.colors.length === 1
    ) {

        defaultColor =
            product.colors[0].name;

    }


    return addToCart(
        productId,
        1,
        defaultSize,
        defaultColor
    );

}


/* =========================================================
   CART INITIALIZATION
   ========================================================= */

function initializeCart() {

    /*
     * Remove invalid products from old storage.
     */

    CART =
        CART.filter(item => {

            const product =
                getCartProduct(
                    item.productId
                );

            return Boolean(product);

        });


    saveCart();

    updateCartUI();

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
        initializeCart
    );

} else {

    initializeCart();

      }
