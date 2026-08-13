/* =========================================================
   AS FASHIONS
   OFFERS & PROMOTIONS ENGINE
   js/offers.js
   ========================================================= */

"use strict";


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const OFFER_STORAGE_KEYS = {

    CLAIMED_COUPONS:
        "as_fashions_claimed_coupons",

    APPLIED_COUPON:
        "as_fashions_applied_coupon",

    SCRATCH_REWARD:
        "as_fashions_scratch_reward",

    OFFER_SEEN:
        "as_fashions_offer_seen"

};


/* =========================================================
   OFFER DATABASE
   ========================================================= */

const OFFERS = [

    {
        id: "welcome-10",

        type: "coupon",

        code: "WELCOME10",

        title: "Welcome Offer",

        subtitle:
            "Get 10% OFF on your first order",

        discountType: "percentage",

        discountValue: 10,

        minimumOrder: 999,

        maximumDiscount: 500,

        active: true
    },


    {
        id: "fashion-20",

        type: "coupon",

        code: "STYLE20",

        title: "Style Upgrade",

        subtitle:
            "Flat 20% OFF on selected styles",

        discountType: "percentage",

        discountValue: 20,

        minimumOrder: 1499,

        maximumDiscount: 1000,

        active: true
    },


    {
        id: "flat-500",

        type: "coupon",

        code: "SAVE500",

        title: "Big Savings",

        subtitle:
            "₹500 OFF on orders above ₹2999",

        discountType: "fixed",

        discountValue: 500,

        minimumOrder: 2999,

        maximumDiscount: 500,

        active: true
    }

];


/* =========================================================
   FLASH SALES
   ========================================================= */

const FLASH_SALES = [

    {
        id: "flash-01",

        title: "FLASH SALE",

        subtitle:
            "Limited-time fashion deals",

        discountText:
            "UP TO 70% OFF",

        startTime:
            "2026-08-14T09:00:00+05:30",

        endTime:
            "2026-08-14T23:59:59+05:30",

        active: true
    },


    {
        id: "midnight-01",

        title: "MIDNIGHT SALE",

        subtitle:
            "Tonight's biggest fashion deals",

        discountText:
            "UP TO 80% OFF",

        startTime:
            "2026-08-14T21:00:00+05:30",

        endTime:
            "2026-08-15T02:00:00+05:30",

        active: true
    }

];


/* =========================================================
   SALE CAMPAIGNS
   ========================================================= */

const SALE_CAMPAIGNS = [

    {
        id: "eors",

        name:
            "END OF REASON SALE",

        shortName:
            "EORS",

        headline:
            "THE BIGGEST FASHION SALE",

        subheadline:
            "Up to 80% OFF",

        badge:
            "LIMITED TIME",

        active: true,

        endTime:
            "2026-08-20T23:59:59+05:30"
    },


    {
        id: "season-end",

        name:
            "SEASON END SALE",

        shortName:
            "SEASON END",

        headline:
            "LAST CHANCE TO SAVE",

        subheadline:
            "Up to 60% OFF",

        badge:
            "HURRY",

        active: true,

        endTime:
            "2026-08-31T23:59:59+05:30"
    }

];


/* =========================================================
   OFFER STATE
   ========================================================= */

let OFFER_STATE = {

    activeCampaign: null,

    activeFlashSale: null,

    claimedCoupons: [],

    appliedCoupon: null,

    scratchReward: null,

    countdownTimers: {},

    initialized: false

};


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function loadOfferStorage(
    key,
    fallback = []
) {

    try {

        const value =
            localStorage.getItem(
                key
            );


        if (!value) {
            return fallback;
        }


        return JSON.parse(
            value
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Offer storage error",
            error
        );

        return fallback;

    }

}


function saveOfferStorage(
    key,
    value
) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.error(
            "AS FASHIONS: Offer save error",
            error
        );

    }

}


/* =========================================================
   INITIALIZE OFFER STATE
   ========================================================= */

function initializeOfferState() {

    OFFER_STATE.claimedCoupons =
        loadOfferStorage(
            OFFER_STORAGE_KEYS.CLAIMED_COUPONS,
            []
        );


    OFFER_STATE.appliedCoupon =
        loadOfferStorage(
            OFFER_STORAGE_KEYS.APPLIED_COUPON,
            null
        );


    OFFER_STATE.scratchReward =
        loadOfferStorage(
            OFFER_STORAGE_KEYS.SCRATCH_REWARD,
            null
        );


    OFFER_STATE.activeCampaign =
        getActiveCampaign();


    OFFER_STATE.activeFlashSale =
        getActiveFlashSale();

}


/* =========================================================
   DATE HELPERS
   ========================================================= */

function getOfferDate(
    value
) {

    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return null;

    }


    return date;

}


function isOfferCurrentlyActive(
    startTime,
    endTime
) {

    const now =
        Date.now();


    const start =
        getOfferDate(
            startTime
        );


    const end =
        getOfferDate(
            endTime
        );


    if (!start || !end) {
        return false;
    }


    return (
        now >= start.getTime() &&
        now <= end.getTime()
    );

}


/* =========================================================
   ACTIVE CAMPAIGN
   ========================================================= */

function getActiveCampaign() {

    return SALE_CAMPAIGNS.find(
        campaign =>
            campaign.active &&
            isOfferCurrentlyActive(
                getCampaignStartTime(
                    campaign
                ),
                campaign.endTime
            )
    ) || null;

}


/*
 * Campaigns without explicit start
 * are considered active from now.
 */

function getCampaignStartTime(
    campaign
) {

    return campaign.startTime ||
        new Date(
            Date.now() -
            24 * 60 * 60 * 1000
        ).toISOString();

}


/* =========================================================
   ACTIVE FLASH SALE
   ========================================================= */

function getActiveFlashSale() {

    return FLASH_SALES.find(
        sale =>
            sale.active &&
            isOfferCurrentlyActive(
                sale.startTime,
                sale.endTime
            )
    ) || null;

}


/* =========================================================
   COUNTDOWN
   ========================================================= */

function calculateCountdown(
    endTime
) {

    const end =
        getOfferDate(
            endTime
        );


    if (!end) {

        return {

            total: 0,

            days: 0,

            hours: 0,

            minutes: 0,

            seconds: 0,

            expired: true

        };

    }


    const difference =
        end.getTime() -
        Date.now();


    if (
        difference <= 0
    ) {

        return {

            total: 0,

            days: 0,

            hours: 0,

            minutes: 0,

            seconds: 0,

            expired: true

        };

    }


    const second =
        1000;

    const minute =
        second * 60;

    const hour =
        minute * 60;

    const day =
        hour * 24;


    const days =
        Math.floor(
            difference / day
        );


    const hours =
        Math.floor(
            (difference % day) /
            hour
        );


    const minutes =
        Math.floor(
            (difference % hour) /
            minute
        );


    const seconds =
        Math.floor(
            (difference % minute) /
            second
        );


    return {

        total: difference,

        days,

        hours,

        minutes,

        seconds,

        expired: false

    };

}


/* =========================================================
   FORMAT COUNTDOWN
   ========================================================= */

function padOfferNumber(
    number
) {

    return String(
        number
    ).padStart(
        2,
        "0"
    );

}


function formatOfferCountdown(
    countdown
) {

    if (
        !countdown ||
        countdown.expired
    ) {

        return "00 : 00 : 00";

    }


    if (
        countdown.days > 0
    ) {

        return [

            `${padOfferNumber(countdown.days)}d`,

            `${padOfferNumber(countdown.hours)}h`,

            `${padOfferNumber(countdown.minutes)}m`

        ].join(" : ");

    }


    return [

        padOfferNumber(
            countdown.hours
        ),

        padOfferNumber(
            countdown.minutes
        ),

        padOfferNumber(
            countdown.seconds
        )

    ].join(" : ");

}


/* =========================================================
   COUNTDOWN TIMER
   ========================================================= */

function startOfferCountdown(
    element,
    endTime,
    options = {}
) {

    if (!element) {
        return;
    }


    const timerId =
        `${Date.now()}-${Math.random()}`;


    function update() {

        const countdown =
            calculateCountdown(
                endTime
            );


        if (
            countdown.expired
        ) {

            element.textContent =
                options.expiredText ||
                "SALE ENDED";


            if (
                typeof options.onExpire ===
                "function"
            ) {

                options.onExpire();

            }


            clearInterval(
                OFFER_STATE.countdownTimers[
                    timerId
                ]
            );


            return;

        }


        if (
            options.format ===
            "full"
        ) {

            element.innerHTML = `

                <span class="offer-time-unit">

                    <strong>
                        ${padOfferNumber(countdown.days)}
                    </strong>

                    <small>
                        Days
                    </small>

                </span>

                <span>:</span>

                <span class="offer-time-unit">

                    <strong>
                        ${padOfferNumber(countdown.hours)}
                    </strong>

                    <small>
                        Hrs
                    </small>

                </span>

                <span>:</span>

                <span class="offer-time-unit">

                    <strong>
                        ${padOfferNumber(countdown.minutes)}
                    </strong>

                    <small>
                        Min
                    </small>

                </span>

                <span>:</span>

                <span class="offer-time-unit">

                    <strong>
                        ${padOfferNumber(countdown.seconds)}
                    </strong>

                    <small>
                        Sec
                    </small>

                </span>

            `;

        } else {

            element.textContent =
                formatOfferCountdown(
                    countdown
                );

        }

    }


    update();


    OFFER_STATE.countdownTimers[
        timerId
    ] = setInterval(
        update,
        1000
    );


    return timerId;

}


/* =========================================================
   INITIALIZE COUNTDOWNS
   ========================================================= */

function initializeOfferCountdowns() {

    document
        .querySelectorAll(
            "[data-offer-countdown]"
        )
        .forEach(element => {

            const endTime =
                element.dataset
                    .offerCountdown;


            if (!endTime) {
                return;
            }


            startOfferCountdown(
                element,
                endTime,
                {
                    format:
                        element.dataset
                            .countdownFormat ||
                        "simple"
                }
            );

        });

}


/* =========================================================
   OFFER BANNER
   ========================================================= */

function renderOfferBanner() {

    const containers =
        document.querySelectorAll(
            "[data-offer-banner]"
        );


    containers.forEach(
        container => {

            const campaign =
                OFFER_STATE.activeCampaign;


            const flashSale =
                OFFER_STATE.activeFlashSale;


            const offer =
                campaign ||
                flashSale;


            if (!offer) {

                container.innerHTML = "";

                container.classList.remove(
                    "offer-active"
                );

                return;

            }


            const title =
                campaign
                    ? campaign.headline
                    : flashSale.title;


            const subtitle =
                campaign
                    ? campaign.subheadline
                    : flashSale.discountText;


            const endTime =
                campaign
                    ? campaign.endTime
                    : flashSale.endTime;


            container.innerHTML = `

                <div class="premium-offer-banner">

                    <div class="offer-banner-content">

                        <span class="offer-badge">

                            ${
                                escapeOfferHTML(
                                    campaign
                                        ? campaign.badge
                                        : "FLASH SALE"
                                )
                            }

                        </span>


                        <h2>
                            ${escapeOfferHTML(title)}
                        </h2>


                        <p>
                            ${escapeOfferHTML(subtitle)}
                        </p>


                        <div
                            class="offer-countdown"
                            data-offer-countdown="${escapeOfferHTML(endTime)}"
                            data-countdown-format="full"
                        ></div>


                        <button
                            type="button"
                            class="offer-shop-button"
                            onclick="handleOfferShopClick()"
                        >
                            SHOP NOW
                        </button>

                    </div>

                </div>

            `;


            container.classList.add(
                "offer-active"
            );


            const countdown =
                container.querySelector(
                    "[data-offer-countdown]"
                );


            if (countdown) {

                startOfferCountdown(
                    countdown,
                    endTime,
                    {
                        format: "full"
                    }
                );

            }

        }
    );

}


/* =========================================================
   SHOP OFFER
   ========================================================= */

function handleOfferShopClick() {

    if (
        typeof window.showOfferProducts ===
        "function"
    ) {

        window.showOfferProducts();

        return;

    }


    window.location.href =
        "index.html?offer=active";

}


/* =========================================================
   COUPON HELPERS
   ========================================================= */

function getAllCoupons() {

    return OFFERS.filter(
        offer =>
            offer.type === "coupon" &&
            offer.active
    );

}


function getCouponByCode(
    code
) {

    const normalized =
        String(code || "")
            .trim()
            .toUpperCase();


    return getAllCoupons().find(
        coupon =>
            coupon.code ===
            normalized
    ) || null;

}


/* =========================================================
   COUPON VALIDATION
   ========================================================= */

function validateCoupon(
    code,
    cartTotal = null
) {

    const coupon =
        getCouponByCode(
            code
        );


    if (!coupon) {

        return {

            valid: false,

            message:
                "Invalid coupon code.",

            coupon: null

        };

    }


    if (
        cartTotal !== null &&
        Number(cartTotal) <
        Number(coupon.minimumOrder || 0)
    ) {

        return {

            valid: false,

            message:
                `Add items worth ₹${Number(coupon.minimumOrder).toLocaleString("en-IN")} to use this coupon.`,

            coupon

        };

    }


    return {

        valid: true,

        message:
            `${coupon.code} applied successfully.`,

        coupon

    };

}


/* =========================================================
   CALCULATE COUPON DISCOUNT
   ========================================================= */

function calculateCouponDiscount(
    coupon,
    cartTotal
) {

    if (!coupon) {
        return 0;
    }


    const total =
        Number(
            cartTotal || 0
        );


    if (
        total <
        Number(
            coupon.minimumOrder || 0
        )
    ) {

        return 0;

    }


    let discount = 0;


    if (
        coupon.discountType ===
        "percentage"
    ) {

        discount =
            total *
            (
                Number(
                    coupon.discountValue
                ) / 100
            );

    }


    if (
        coupon.discountType ===
        "fixed"
    ) {

        discount =
            Number(
                coupon.discountValue
            );

    }


    if (
        coupon.maximumDiscount
    ) {

        discount =
            Math.min(
                discount,
                Number(
                    coupon.maximumDiscount
                )
            );

    }


    return Math.max(
        0,
        Math.round(
            discount
        )
    );

}


/* =========================================================
   APPLY COUPON
   ========================================================= */

function applyCoupon(
    code,
    cartTotal = null
) {

    const validation =
        validateCoupon(
            code,
            cartTotal
        );


    if (
        !validation.valid
    ) {

        showOfferMessage(
            validation.message,
            "error"
        );


        return validation;

    }


    const coupon =
        validation.coupon;


    OFFER_STATE.appliedCoupon =
        coupon;


    saveOfferStorage(
        OFFER_STORAGE_KEYS.APPLIED_COUPON,
        coupon
    );


    if (
        !OFFER_STATE.claimedCoupons.includes(
            coupon.code
        )
    ) {

        OFFER_STATE.claimedCoupons.push(
            coupon.code
        );


        saveOfferStorage(
            OFFER_STORAGE_KEYS.CLAIMED_COUPONS,
            OFFER_STATE.claimedCoupons
        );

    }


    updateCouponUI(
        coupon,
        cartTotal
    );


    showOfferMessage(
        validation.message,
        "success"
    );


    return {

        ...validation,

        discount:
            calculateCouponDiscount(
                coupon,
                cartTotal
            )

    };

}


/* =========================================================
   REMOVE COUPON
   ========================================================= */

function removeCoupon() {

    OFFER_STATE.appliedCoupon =
        null;


    saveOfferStorage(
        OFFER_STORAGE_KEYS.APPLIED_COUPON,
        null
    );


    updateCouponUI(
        null,
        0
    );


    showOfferMessage(
        "Coupon removed.",
        "info"
    );

}


/* =========================================================
   COUPON UI
   ========================================================= */

function updateCouponUI(
    coupon,
    cartTotal
) {

    document
        .querySelectorAll(
            "[data-applied-coupon]"
        )
        .forEach(element => {

            if (!coupon) {

                element.innerHTML = "";

                return;

            }


            const discount =
                calculateCouponDiscount(
                    coupon,
                    cartTotal
                );


            element.innerHTML = `

                <div class="applied-coupon">

                    <div>

                        <strong>
                            ${escapeOfferHTML(coupon.code)}
                        </strong>

                        <span>
                            ${discount
                                ? `You save ₹${discount.toLocaleString("en-IN")}`
                                : coupon.subtitle}
                        </span>

                    </div>


                    <button
                        type="button"
                        onclick="removeCoupon()"
                    >
                        Remove
                    </button>

                </div>

            `;

        });

}


/* =========================================================
   RENDER COUPON LIST
   ========================================================= */

function renderCoupons() {

    const containers =
        document.querySelectorAll(
            "[data-coupon-list]"
        );


    containers.forEach(
        container => {

            const coupons =
                getAllCoupons();


            container.innerHTML =
                coupons.map(
                    coupon => `

                        <article
                            class="coupon-card"
                            data-coupon="${escapeOfferHTML(coupon.code)}"
                        >

                            <div class="coupon-card-main">

                                <span class="coupon-badge">
                                    OFFER
                                </span>

                                <h3>
                                    ${escapeOfferHTML(coupon.title)}
                                </h3>

                                <p>
                                    ${escapeOfferHTML(coupon.subtitle)}
                                </p>

                                <small>
                                    Min. order ₹${Number(
                                        coupon.minimumOrder
                                    ).toLocaleString("en-IN")}
                                </small>

                            </div>


                            <div class="coupon-card-action">

                                <strong>
                                    ${escapeOfferHTML(coupon.code)}
                                </strong>

                                <button
                                    type="button"
                                    onclick="copyCouponCode('${escapeOfferHTML(coupon.code)}')"
                                >
                                    COPY
                                </button>

                            </div>

                        </article>

                    `
                ).join("");

        }
    );

}


/* =========================================================
   COPY COUPON
   ========================================================= */

async function copyCouponCode(
    code
) {

    try {

        await navigator.clipboard.writeText(
            code
        );


        showOfferMessage(
            `${code} copied.`,
            "success"
        );


    } catch (error) {

        showOfferMessage(
            `Coupon code: ${code}`,
            "info"
        );

    }

}


/* =========================================================
   SCRATCH CARD
   ========================================================= */

const SCRATCH_REWARDS = [

    {
        id: "reward-10",
        text: "10% OFF",
        code: "SCRATCH10"
    },

    {
        id: "reward-15",
        text: "15% OFF",
        code: "SCRATCH15"
    },

    {
        id: "reward-200",
        text: "₹200 OFF",
        code: "SCRATCH200"
    },

    {
        id: "reward-free",
        text: "FREE SHIPPING",
        code: "FREESHIP"
    }

];


function getScratchReward() {

    if (
        OFFER_STATE.scratchReward
    ) {

        return OFFER_STATE.scratchReward;

    }


    const reward =
        SCRATCH_REWARDS[
            Math.floor(
                Math.random() *
                SCRATCH_REWARDS.length
            )
        ];


    OFFER_STATE.scratchReward =
        reward;


    saveOfferStorage(
        OFFER_STORAGE_KEYS.SCRATCH_REWARD,
        reward
    );


    return reward;

}


/* =========================================================
   SHOW SCRATCH CARD
   ========================================================= */

function showScratchCard() {

    const containers =
        document.querySelectorAll(
            "[data-scratch-card]"
        );


    containers.forEach(
        container => {

            const reward =
                getScratchReward();


            container.innerHTML = `

                <div class="scratch-card">

                    <div class="scratch-card-cover">

                        <span>
                            ✨
                        </span>

                        <strong>
                            SCRATCH & WIN
                        </strong>

                        <small>
                            Reveal your exclusive offer
                        </small>

                    </div>


                    <div class="scratch-card-reward">

                        <span>
                            YOU WON
                        </span>

                        <strong>
                            ${escapeOfferHTML(reward.text)}
                        </strong>

                        <code>
                            ${escapeOfferHTML(reward.code)}
                        </code>

                        <button
                            type="button"
                            onclick="claimScratchReward()"
                        >
                            CLAIM OFFER
                        </button>

                    </div>

                </div>

            `;

        }
    );

}


/* =========================================================
   CLAIM SCRATCH REWARD
   ========================================================= */

function claimScratchReward() {

    const reward =
        getScratchReward();


    showOfferMessage(
        `You won ${reward.text}! Code: ${reward.code}`,
        "success"
    );


    copyCouponCode(
        reward.code
    );

}


/* =========================================================
   OFFER POPUP
   ========================================================= */

function showOfferPopup() {

    const popup =
        document.querySelector(
            "[data-offer-popup]"
        );


    if (!popup) {
        return;
    }


    const campaign =
        OFFER_STATE.activeCampaign;


    const flashSale =
        OFFER_STATE.activeFlashSale;


    const offer =
        campaign ||
        flashSale;


    if (!offer) {
        return;
    }


    const title =
        campaign
            ? campaign.headline
            : flashSale.title;


    const subtitle =
        campaign
            ? campaign.subheadline
            : flashSale.discountText;


    const endTime =
        campaign
            ? campaign.endTime
            : flashSale.endTime;


    popup.innerHTML = `

        <div class="offer-popup-backdrop">

            <div class="offer-popup-content">

                <button
                    type="button"
                    class="offer-popup-close"
                    data-offer-popup-close
                >
                    ×
                </button>


                <span class="offer-popup-badge">
                    LIMITED TIME
                </span>


                <h2>
                    ${escapeOfferHTML(title)}
                </h2>


                <p>
                    ${escapeOfferHTML(subtitle)}
                </p>


                <div
                    class="offer-popup-countdown"
                    data-offer-countdown="${escapeOfferHTML(endTime)}"
                    data-countdown-format="full"
                ></div>


                <button
                    type="button"
                    class="offer-popup-cta"
                    onclick="handleOfferShopClick()"
                >
                    SHOP SALE
                </button>

            </div>

        </div>

    `;


    popup.classList.add(
        "show"
    );


    const closeButton =
        popup.querySelector(
            "[data-offer-popup-close]"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeOfferPopup
        );

    }


    const countdown =
        popup.querySelector(
            "[data-offer-countdown]"
        );


    if (countdown) {

        startOfferCountdown(
            countdown,
            endTime,
            {
                format: "full"
            }
        );

    }

}


/* =========================================================
   CLOSE OFFER POPUP
   ========================================================= */

function closeOfferPopup() {

    document
        .querySelectorAll(
            "[data-offer-popup]"
        )
        .forEach(
            popup =>
                popup.classList.remove(
                    "show"
                )
        );

}


/* =========================================================
   OFFER MESSAGE
   ========================================================= */

function showOfferMessage(
    message,
    type = "info"
) {

    let container =
        document.querySelector(
            "[data-offer-message]"
        );


    if (!container) {

        container =
            document.createElement(
                "div"
            );


        container.setAttribute(
            "data-offer-message",
            ""
        );


        document.body.appendChild(
            container
        );

    }


    container.className =
        `offer-message offer-message-${type}`;


    container.textContent =
        message;


    container.classList.add(
        "show"
    );


    setTimeout(
        () => {

            container.classList.remove(
                "show"
            );

        },
        3000
    );

}


/* =========================================================
   URGENCY MESSAGE
   ========================================================= */

function generateUrgencyMessage(
    product
) {

    if (!product) {

        return "Limited stock available";

    }


    const stock =
        Number(
            product.stock || 0
        );


    if (
        stock > 0 &&
        stock <= 3
    ) {

        return `Only ${stock} left in stock`;

    }


    if (
        product.orders &&
        Number(product.orders) > 20
    ) {

        return "Selling fast";

    }


    if (
        product.popularity &&
        Number(product.popularity) > 80
    ) {

        return "Trending now";

    }


    return "Limited-time offer";

}


/* =========================================================
   PRODUCT OFFER BADGE
   ========================================================= */

function renderProductOfferBadge(
    product
) {

    if (!product) {
        return "";
    }


    const discount =
        Number(
            product.discount ||
            0
        );


    if (
        discount >= 50
    ) {

        return `

            <span class="product-offer-badge">
                ${discount}% OFF
            </span>

        `;

    }


    if (
        product.flashSale
    ) {

        return `

            <span class="product-offer-badge flash">
                ⚡ FLASH SALE
            </span>

        `;

    }


    return "";

}


/* =========================================================
   OFFER ELIGIBILITY
   ========================================================= */

function isProductOnOffer(
    product
) {

    if (!product) {
        return false;
    }


    return Boolean(

        product.flashSale ||

        product.offer ||

        Number(
            product.discount ||
            0
        ) >= 20

    );

}


/* =========================================================
   OFFER PRICE
   ========================================================= */

function getOfferPrice(
    product
) {

    if (!product) {
        return 0;
    }


    const price =
        Number(
            product.price || 0
        );


    const discount =
        Number(
            product.discount || 0
        );


    if (
        discount <= 0
    ) {

        return price;

    }


    return Math.round(
        price *
        (
            1 -
            discount / 100
        )
    );

}


/* =========================================================
   OFFER SHARE
   ========================================================= */

async function shareOffer(
    offer = null
) {

    const active =
        offer ||
        OFFER_STATE.activeCampaign ||
        OFFER_STATE.activeFlashSale;


    if (!active) {
        return;
    }


    const shareData = {

        title:
            active.name ||
            active.title ||
            "AS FASHIONS SALE",

        text:
            active.headline ||
            active.subtitle ||
            "Shop the latest fashion deals on AS FASHIONS.",

        url:
            window.location.href

    };


    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                shareData
            );

            return;

        }


        await navigator.clipboard.writeText(
            window.location.href
        );


        showOfferMessage(
            "Sale link copied.",
            "success"
        );

    } catch (error) {

        /*
         * User cancelled share.
         */

    }

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeOfferHTML(
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
   INITIALIZATION
   ========================================================= */

function initializeOffers() {

    initializeOfferState();

    renderOfferBanner();

    renderCoupons();

    initializeOfferCountdowns();


    /*
     * Scratch card only when explicitly
     * requested by markup.
     */

    if (
        document.querySelector(
            "[data-scratch-card]"
        )
    ) {

        showScratchCard();

    }


    OFFER_STATE.initialized =
        true;

}


/* =========================================================
   CLEANUP COUNTDOWNS
   ========================================================= */

function destroyOfferTimers() {

    Object.values(
        OFFER_STATE.countdownTimers
    )
    .forEach(
        timerId =>
            clearInterval(
                timerId
            )
    );


    OFFER_STATE.countdownTimers = {};

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
        initializeOffers
    );

} else {

    initializeOffers();

}


/* =========================================================
   PAGE CLEANUP
   ========================================================= */

window.addEventListener(
    "beforeunload",
    destroyOfferTimers
);
