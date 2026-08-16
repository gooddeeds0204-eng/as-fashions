(function () {
  'use strict';
  var ordersApi = window.ASF.orders;
  var ui = window.ASF.ui;

  function render() {
    var id = ui.getQueryParam('id');
    var order = id ? ordersApi.getOrderById(id) : null;
    var card = document.getElementById('trackCard');
    if (!order) {
      card.innerHTML = '<p>Order not found.</p><a href="orders.html" class="btn btn-primary" style="display:inline-block; margin-top:10px;">Back to Orders</a>';
      return;
    }
    var currentIdx = ordersApi.STATUS_STEPS.indexOf(order.status);
    var date = new Date(order.placedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    var timelineHtml = ordersApi.STATUS_STEPS.map(function (step, i) {
      var done = order.status !== 'Cancelled' && i <= currentIdx;
      return '<li class="' + (done ? 'done' : '') + '"><p class="step-label">' + step + '</p></li>';
    }).join('');

    card.innerHTML =
      '<h1>Order #' + order.id + '</h1>' +
      '<p class="track-sub">Placed on ' + date + '</p>' +
      '<div class="order-meta-row"><span>Status</span><strong>' + order.status + '</strong></div>' +
      '<div class="order-meta-row"><span>Total</span><strong>' + ui.money(order.total) + '</strong></div>' +
      '<div class="order-meta-row"><span>Payment method</span><strong>' + (order.paymentMethod || '\u2014') + '</strong></div>' +
      '<hr style="border:none; border-top:1px solid var(--line); margin:20px 0;">' +
      (order.status === 'Cancelled'
        ? '<p style="color:var(--maroon); font-weight:700;">This order was cancelled.</p>'
        : '<ul class="timeline">' + timelineHtml + '</ul>') +
      '<a href="orders.html" style="display:inline-block; margin-top:20px; font-size:13px; color:var(--marigold-deep); font-weight:600;">&larr; Back to all orders</a>';
  }

  render();
})();
