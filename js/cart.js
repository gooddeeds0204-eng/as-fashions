/**
 * AS FASHIONS — Cart
 * Persists to localStorage under 'asf_cart'. Fires 'asf:cart-updated' on
 * window whenever the cart changes so app.js can re-render badges/drawers.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'asf_cart';

  function readCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var items = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(items)) return [];
      // Defensive: drop/repair any malformed entries (e.g. from an older
      // cart schema or manual localStorage edits) so counts never go NaN.
      return items
        .filter(function (i) { return i && i.productId; })
        .map(function (i) {
          var qty = Number(i.qty);
          return {
            productId: i.productId,
            size: i.size || null,
            color: i.color || null,
            qty: Number.isFinite(qty) && qty > 0 ? qty : 1
          };
        });
    } catch (e) {
      console.error('Cart read failed', e);
      return [];
    }
  }

  function writeCart(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Cart write failed', e);
    }
    global.dispatchEvent(new CustomEvent('asf:cart-updated', { detail: { items: items } }));
  }

  function lineKey(productId, size, color) {
    return [productId, size || '', color || ''].join('::');
  }

  function addItem(productId, opts) {
    opts = opts || {};
    var size = opts.size || null;
    var color = opts.color || null;
    var qty = opts.qty || 1;

    var items = readCart();
    var key = lineKey(productId, size, color);
    var existing = items.find(function (i) { return lineKey(i.productId, i.size, i.color) === key; });

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ productId: productId, size: size, color: color, qty: qty });
    }
    writeCart(items);
    return items;
  }

  function removeItem(productId, size, color) {
    var key = lineKey(productId, size, color);
    var items = readCart().filter(function (i) { return lineKey(i.productId, i.size, i.color) !== key; });
    writeCart(items);
    return items;
  }

  function updateQty(productId, size, color, qty) {
    var items = readCart();
    var key = lineKey(productId, size, color);
    var line = items.find(function (i) { return lineKey(i.productId, i.size, i.color) === key; });
    if (line) {
      if (qty <= 0) {
        items = items.filter(function (i) { return lineKey(i.productId, i.size, i.color) !== key; });
      } else {
        line.qty = qty;
      }
    }
    writeCart(items);
    return items;
  }

  function clearCart() {
    writeCart([]);
  }

  function getItems() {
    return readCart();
  }

  function getItemCount() {
    return readCart().reduce(function (sum, i) { return sum + (Number(i.qty) || 0); }, 0);
  }

  function getSummary() {
    var items = readCart();
    var productsApi = global.ASF && global.ASF.products;
    var lines = items.map(function (i) {
      var product = productsApi ? productsApi.getProductById(i.productId) : null;
      var price = product ? product.price : 0;
      return {
        product: product,
        size: i.size,
        color: i.color,
        qty: i.qty,
        lineTotal: price * i.qty
      };
    });
    var subtotal = lines.reduce(function (sum, l) { return sum + l.lineTotal; }, 0);
    return { lines: lines, subtotal: subtotal, itemCount: getItemCount() };
  }

  global.ASF = global.ASF || {};
  global.ASF.cart = {
    addItem: addItem,
    removeItem: removeItem,
    updateQty: updateQty,
    clearCart: clearCart,
    getItems: getItems,
    getItemCount: getItemCount,
    getSummary: getSummary
  };
})(window);

/* AS FASHIONS — cart badge sync */
(function () {
  function count() {
    try {
      const raw = JSON.parse(localStorage.getItem("cart") || localStorage.getItem("asf_cart") || "[]");
      if (!Array.isArray(raw)) return 0;
      return raw.reduce((n, x) => n + Number(x.quantity || x.qty || 1), 0);
    } catch (_) { return 0; }
  }
  function render() {
    const n = count();
    document.querySelectorAll("[data-cart-count], .cart-count, .cart-badge").forEach(el => {
      el.textContent = n;
      el.hidden = n === 0;
    });
  }
  render();
  window.addEventListener("storage", render);
  document.addEventListener("asf:cart-updated", render);
})();
