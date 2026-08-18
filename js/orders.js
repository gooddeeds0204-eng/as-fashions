/**
 * AS FASHIONS — Orders Engine
 * Persists to localStorage under 'asf_orders'.
 */
(function (global) {
  'use strict';

  var ORDERS_KEY = 'asf_orders';
  var STATUS_STEPS = ['Placed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
  var STEP_INTERVAL_MS = 90 * 1000;

  function readOrders() {
    try {
      var raw = localStorage.getItem(ORDERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function writeOrders(orders) {
    try { localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); return true; }
    catch (e) { console.error('Could not save orders', e); return false; }
  }

  function computeStatus(order) {
    var elapsed = Date.now() - new Date(order.placedAt).getTime();
    var stepsElapsed = Math.floor(elapsed / STEP_INTERVAL_MS);
    var idx = Math.min(STATUS_STEPS.length - 1, stepsElapsed);
    return STATUS_STEPS[idx];
  }

  function withComputedStatus(order) {
    return Object.assign({}, order, { status: order.status === 'Cancelled' ? 'Cancelled' : computeStatus(order) });
  }

  function createOrder(details) {
    var user = global.ASF.auth ? global.ASF.auth.getCurrentUser() : null;
    var order = {
      id: 'ASF' + Date.now().toString().slice(-8),
      userId: user ? user.userId : 'guest',
      items: details.items,
      subtotal: details.subtotal,
      discount: details.discount || 0,
      shipping: details.shipping || 0,
      total: details.total,
      address: details.address,
      paymentMethod: details.paymentMethod,
      placedAt: new Date().toISOString(),
      status: 'Placed'
    };
    var orders = readOrders();
    orders.unshift(order);
    if (!writeOrders(orders)) return { success: false, message: 'Could not save order (storage full).' };
    return { success: true, order: order };
  }

  function getOrders() {
    var user = global.ASF.auth ? global.ASF.auth.getCurrentUser() : null;
    var all = readOrders().map(withComputedStatus);
    if (!user) return all;
    return all.filter(function (o) { return o.userId === user.userId || o.userId === 'guest'; });
  }

  function getOrderById(id) {
    var order = readOrders().find(function (o) { return o.id === id; });
    return order ? withComputedStatus(order) : null;
  }

  function cancelOrder(id) {
    var orders = readOrders();
    var idx = orders.findIndex(function (o) { return o.id === id; });
    if (idx === -1) return { success: false, message: 'Order not found.' };
    orders[idx].status = 'Cancelled';
    writeOrders(orders);
    return { success: true };
  }

  function updateOrderStatus(id, status) {
    var orders = readOrders();
    var idx = orders.findIndex(function (o) { return o.id === id; });
    if (idx === -1) return { success: false, message: 'Order not found.' };
    orders[idx].status = status;
    writeOrders(orders);
    return { success: true };
  }

  global.ASF = global.ASF || {};
  global.ASF.orders = {
    STATUS_STEPS: STATUS_STEPS,
    createOrder: createOrder,
    getOrders: getOrders,
    getOrderById: getOrderById,
    cancelOrder: cancelOrder,
    admin: {
      getAllOrders: function () { return readOrders().map(withComputedStatus); },
      updateOrderStatus: updateOrderStatus
    }
  };
})(window);
