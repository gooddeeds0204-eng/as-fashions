document.addEventListener("DOMContentLoaded", () => {

    const navItems = {
        men: {
            button: document.querySelector(".men"),
            menu: document.querySelector(".men-section-items")
        },

        women: {
            button: document.querySelector(".women"),
            menu: document.querySelector(".women-section-items")
        },

        kids: {
            button: document.querySelector(".kids"),
            menu: document.querySelector(".kids-section-items")
        },

        footwear: {
            button: document.querySelector(".footwear"),
            menu: document.querySelector(".footwear-section-items")
        },

        accessories: {
            button: document.querySelector(".accessories"),
            menu: document.querySelector(".accessories-section-items")
        }
    };


    /* ==========================================
       CLOSE ALL MEGA MENUS
       ========================================== */

    function closeAllMenus() {
        Object.values(navItems).forEach(item => {
            if (item.menu) {
                item.menu.classList.add("visibility");
            }

            if (item.button) {
                item.button.classList.remove("active");
            }
        });
    }


    /* ==========================================
       OPEN MENU
       ========================================== */

    function openMenu(key) {

        const item = navItems[key];

        if (!item || !item.menu) return;

        Object.values(navItems).forEach(other => {

            if (other.menu && other.menu !== item.menu) {
                other.menu.classList.add("visibility");
            }

            if (other.button && other.button !== item.button) {
                other.button.classList.remove("active");
            }

        });

        item.menu.classList.remove("visibility");

        if (item.button) {
            item.button.classList.add("active");
        }
    }


    /* ==========================================
       DESKTOP HOVER
       ========================================== */

    Object.entries(navItems).forEach(([key, item]) => {

        if (!item.button || !item.menu) return;

        item.button.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                openMenu(key);
            }
        });

        item.menu.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                item.menu.classList.remove("visibility");
            }
        });

        item.menu.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                item.menu.classList.add("visibility");

                if (item.button) {
                    item.button.classList.remove("active");
                }
            }
        });


        /* ======================================
           MOBILE TAP
           ====================================== */

        item.button.addEventListener("click", event => {

            if (window.innerWidth <= 768) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    !item.menu.classList.contains("visibility");

                closeAllMenus();

                if (!isOpen) {
                    openMenu(key);
                }
            }

        });

    });


    /* ==========================================
       CLICK OUTSIDE
       ========================================== */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            event.target.closest(
                ".men-section-items, .women-section-items, .kids-section-items, .footwear-section-items, .accessories-section-items"
            );

        const clickedNav =
            event.target.closest(
                ".men, .women, .kids, .footwear, .accessories"
            );

        if (!clickedInsideMenu && !clickedNav) {
            closeAllMenus();
        }

    });


    /* ==========================================
       ESC KEY
       ========================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeAllMenus();
        }

    });


    /* ==========================================
       WINDOW RESIZE
       ========================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeAllMenus();
        }

    });

});
