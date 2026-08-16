(function () {
  'use strict';
  var ordersApi = window.ASF.orders;
  var selectedOrderId = null;

  function render() {
    var orders = ordersApi.getOrders().filter(function (o) { return o.status === 'Delivered'; });
    var el = document.getElementById('returnOrdersList');
    if (!orders.length) {
      el.innerHTML = '<p style="font-size:13px; color:var(--ink-soft);">No delivered orders available for return yet.</p>';
      return;
    }
    el.innerHTML = orders.map(function (o) {
      var names = o.items.map(function (i) { return i.product ? i.product.name : ''; }).filter(Boolean).join(', ');
      return '<div class="return-order" data-id="' + o.id + '"><p><strong>Order #' + o.id + '</strong></p><p style="color:var(--ink-soft); margin-top:4px;">' + names + '</p></div>';
    }).join('');
    el.querySelectorAll('.return-order').forEach(function (opt) {
      opt.addEventListener('click', function () {
        el.querySelectorAll('.return-order').forEach(function (o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        selectedOrderId = opt.dataset.id;
        document.getElementById('returnForm').classList.add('open');
      });
    });
  }

  document.getElementById('submitReturnBtn').addEventListener('click', function () {
    if (!selectedOrderId) { alert('Select an order first.'); return; }
    document.getElementById('returnForm').classList.remove('open');
    document.getElementById('returnOrdersList').style.display = 'none';
    document.getElementById('returnSuccess').style.display = 'block';
  });

  render();
})();
