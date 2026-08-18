(function () {
  'use strict';
  var cartApi = window.ASF.cart;
  var authApi = window.ASF.auth;
  var ui = window.ASF.ui;
  var selectedAddressId = null;

  function renderSummary() {
    var summary = cartApi.getSummary();
    if (!summary.lines.length) {
      document.querySelector('.checkout-page').innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px;"><p>Your bag is empty.</p><a href="index.html" class="btn btn-primary" style="display:inline-block; margin-top:12px;">Continue Shopping</a></div>';
      return;
    }
    var linesEl = document.getElementById('checkoutLines');
    linesEl.innerHTML = summary.lines.map(function (line) {
      if (!line.product) return '';
      return '<div class="summary-row"><span>' + line.product.name + ' x' + line.qty + '</span><span>' + ui.money(line.lineTotal) + '</span></div>';
    }).join('');
    var shipping = summary.subtotal >= 999 ? 0 : 79;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Free' : ui.money(shipping);
    document.getElementById('checkoutTotal').textContent = ui.money(summary.subtotal + shipping);
  }

  function renderSavedAddresses() {
    if (!authApi.isLoggedIn()) return;
    var list = authApi.getAddresses();
    if (!list.length) return;
    var el = document.getElementById('savedAddresses');
    el.innerHTML = '<p style="font-size:12px; text-transform:uppercase; letter-spacing:0.04em; color:var(--ink-soft); margin-bottom:10px;">Saved addresses</p>' +
      list.map(function (a) {
        return '<div class="saved-addr-option" data-id="' + a.id + '"><input type="radio" name="savedAddr"><p><strong>' + a.name + '</strong><br>' + a.line + ', ' + a.city + ' - ' + a.pin + '<br>Phone: ' + a.phone + '</p></div>';
      }).join('');
    el.querySelectorAll('.saved-addr-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        el.querySelectorAll('.saved-addr-option').forEach(function (o) { o.classList.remove('selected'); o.querySelector('input').checked = false; });
        opt.classList.add('selected');
        opt.querySelector('input').checked = true;
        var addr = list.find(function (a) { return a.id === opt.dataset.id; });
        selectedAddressId = addr.id;
        document.getElementById('ckName').value = addr.name;
        document.getElementById('ckLine').value = addr.line;
        document.getElementById('ckCity').value = addr.city;
        document.getElementById('ckPin').value = addr.pin;
        document.getElementById('ckPhone').value = addr.phone;
      });
    });
  }

  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var address = {
      name: document.getElementById('ckName').value.trim(),
      line: document.getElementById('ckLine').value.trim(),
      city: document.getElementById('ckCity').value.trim(),
      pin: document.getElementById('ckPin').value.trim(),
      phone: document.getElementById('ckPhone').value.trim()
    };
    try {
      sessionStorage.setItem('asf_checkout_address', JSON.stringify(address));
    } catch (err) { console.error(err); }
    window.location.href = 'payment.html';
  });

  renderSummary();
  renderSavedAddresses();
  window.addEventListener('asf:cart-updated', renderSummary);
})();
