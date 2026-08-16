/**
 * AS FASHIONS — Notifications (demo)
 * A lightweight, localStorage-backed notification list shown from the
 * bell icon in the header. Auto-generates entries when order status
 * changes (via orders.js) and lets pages push their own (e.g. "item back
 * in stock"). Not a real push-notification system — that needs a backend
 * + service worker.
 */
(function (global) {
  'use strict';

  var NOTIF_KEY = 'asf_notifications';

  function readAll() {
    try {
      var raw = localStorage.getItem(NOTIF_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function writeAll(list) {
    try { localStorage.setItem(NOTIF_KEY, JSON.stringify(list)); } catch (e) { console.error('Could not save notifications', e); }
    global.dispatchEvent(new CustomEvent('asf:notifications-updated'));
  }

  function push(notification) {
    var list = readAll();
    list.unshift({
      id: 'notif-' + Date.now() + Math.random().toString(36).slice(2, 6),
      title: notification.title,
      body: notification.body || '',
      read: false,
      createdAt: new Date().toISOString()
    });
    writeAll(list.slice(0, 30)); // cap history
  }

  function getAll() {
    return readAll();
  }

  function getUnreadCount() {
    return readAll().filter(function (n) { return !n.read; }).length;
  }

  function markAllRead() {
    var list = readAll().map(function (n) { return Object.assign({}, n, { read: true }); });
    writeAll(list);
  }

  function clearAll() {
    writeAll([]);
  }

  // Seed a couple of demo notifications the first time this loads on a
  // fresh browser, so the bell isn't empty on first visit.
  function seedIfEmpty() {
    if (readAll().length === 0) {
      push({ title: 'Welcome to AS Fashions!', body: 'Explore the new season edit and enjoy free shipping above ₹999.' });
      push({ title: 'Sale is live', body: 'Up to 70% off — shop before it ends.' });
    }
  }

  global.ASF = global.ASF || {};
  global.ASF.notifications = {
    push: push,
    getAll: getAll,
    getUnreadCount: getUnreadCount,
    markAllRead: markAllRead,
    clearAll: clearAll,
    seedIfEmpty: seedIfEmpty
  };
})(window);
