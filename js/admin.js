  function printInvoice(orderId) {
    var o = ordersApi.getOrderById(orderId);
    if (!o) return;
    var win = window.open('', '_blank');
    var rows = (o.items || []).map(function (l) {
      var name = l.product ? l.product.name : (l.productId || 'Item');
      var price = l.product ? l.product.price : 0;
      return '<tr><td>' + name + '</td><td>' + (l.size || '-') + '</td><td>' + (l.qty || 1) + '</td><td>' + money(price) + '</td></tr>';
    }).join('');
    
    var shipAddress = o.address 
      ? o.address.name + ', ' + o.address.line + ', ' + o.address.city + ' - ' + o.address.pin + ' (Ph: ' + o.address.phone + ')' 
      : '—';

    win.document.write(
      '<html><head><title>Invoice ' + o.id + '</title><style>' +
      'body{font-family:Arial,sans-serif;padding:32px;color:#16181d;} h1{font-size:20px;} table{width:100%;border-collapse:collapse;margin-top:16px;} ' +
      'th,td{border-bottom:1px solid #ddd;padding:8px;text-align:left;font-size:13px;} .total-row{font-weight:700;}' +
      '</style></head><body>' +
      '<h1>AS FASHIONS — Tax Invoice</h1>' +
      '<p><strong>Order ID:</strong> ' + o.id + ' &nbsp; <strong>Date:</strong> ' + new Date(o.placedAt).toLocaleDateString() + '</p>' +
      '<p><strong>Delivered to:</strong> ' + shipAddress + '</p>' +
      '<table><thead><tr><th>Item</th><th>Size</th><th>Qty</th><th>Price</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p style="margin-top:16px;">Subtotal: ' + money(o.subtotal) + '<br>Shipping: ' + money(o.shipping) + '<br>' +
      '<span class="total-row">Total Paid: ' + money(o.total) + '</span></p>' +
      '<script>window.print();<\/script></body></html>'
    );
    win.document.close();
  }
