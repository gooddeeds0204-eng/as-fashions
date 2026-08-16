(function () {
  'use strict';
  var cartApi = window.ASF.cart;
  var ordersApi = window.ASF.orders;
  var notifApi = window.ASF.notifications;
  var ui = window.ASF.ui;
  var selectedMethod = 'COD';
  var address = null;

  try {
    var raw = sessionStorage.getItem('asf_checkout_address');
    address = raw ? JSON.parse(raw) : null;
  } catch (e) { address = null; }

  if (!address) {
    window.location.href = 'checkout.html';
    return;
  }

  document.getElementById('addrPreview').innerHTML =
    '<strong>Delivering to:</strong> ' + address.name + ', ' + address.line + ', ' + address.city + ' - ' + address.pin + ' &middot; ' + address.phone +
    ' &nbsp; <a href="checkout.html" style="color:var(--marigold-deep); font-weight:600;">Change</a>';

  var summary = cartApi.getSummary();
  if (!summary.lines.length) {
    window.location.href = 'cart.html';
    return;
  }
  var shipping = summary.subtotal >= 999 ? 0 : 79;

  document.getElementById('paymentLines').innerHTML = summary.lines.map(function (line) {
    if (!line.product) return '';
    return '<div class="summary-row"><span>' + line.product.name + ' x' + line.qty + '</span><span>' + ui.money(line.lineTotal) + '</span></div>';
  }).join('');
  document.getElementById('paymentShipping').textContent = shipping === 0 ? 'Free' : ui.money(shipping);
  document.getElementById('paymentTotal').textContent = ui.money(summary.subtotal + shipping);

  document.querySelectorAll('.pay-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.pay-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      selectedMethod = opt.dataset.method;
      document.getElementById('upiFields').classList.toggle('open', selectedMethod === 'UPI');
      document.getElementById('cardFields').classList.toggle('open', selectedMethod === 'Card');
    });
  });

  document.getElementById('payNowBtn').addEventListener('click', function () {
    var result = ordersApi.createOrder({
      items: summary.lines,
      subtotal: summary.subtotal,
      shipping: shipping,
      total: summary.subtotal + shipping,
      address: address,
      paymentMethod: selectedMethod
    });
    if (!result.success) {
      alert('\u26A0 ' + result.message);
      return;
    }
    if (notifApi) notifApi.push({ title: 'Order placed!', body: 'Order #' + result.order.id + ' has been placed successfully.' });
    cartApi.clearCart();
    try { sessionStorage.removeItem('asf_checkout_address'); } catch (e) {}
    window.location.href = 'order-success.html?id=' + encodeURIComponent(result.order.id);
  });
})();
