/**
 * AS FASHIONS — Auth Engine
 */
(function (global) {
  'use strict';

  var USERS_KEY = 'asf_users';
  var SESSION_KEY = 'asf_session';
  var PENDING_OTP_KEY = 'asf_pending_otp';

  function readUsers() {
    try {
      var raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function writeUsers(users) {
    try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); return true; }
    catch (e) { console.error('Could not save users', e); return false; }
  }

  function isCustomerBlocked(userId) {
    try {
      var blocked = JSON.parse(localStorage.getItem('asf_admin_blocked_customers') || '[]');
      return blocked.indexOf(userId) !== -1;
    } catch (e) { return false; }
  }

  function findUserByPhoneOrEmail(value) {
    var v = (value || '').trim().toLowerCase();
    return readUsers().find(function (u) {
      return (u.email && u.email.toLowerCase() === v) || (u.phone && u.phone === value);
    }) || null;
  }

  function generateOtp() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  function requestOtp(identifier) {
    var otp = generateOtp();
    try {
      localStorage.setItem(PENDING_OTP_KEY, JSON.stringify({ identifier: identifier, otp: otp, expiresAt: Date.now() + 5 * 60 * 1000 }));
    } catch (e) { console.error('Could not store OTP', e); }
    return otp;
  }

  function verifyOtp(identifier, code) {
    try {
      var raw = localStorage.getItem(PENDING_OTP_KEY);
      if (!raw) return { valid: false, message: 'No OTP requested. Please request a new code.' };
      var pending = JSON.parse(raw);
      if (pending.identifier !== identifier) return { valid: false, message: 'OTP does not match this account.' };
      if (Date.now() > pending.expiresAt) return { valid: false, message: 'OTP expired. Please request a new code.' };
      if (pending.otp !== code) return { valid: false, message: 'Incorrect OTP entered.' };
      localStorage.removeItem(PENDING_OTP_KEY);
      return { valid: true };
    } catch (e) {
      return { valid: false, message: 'Could not verify OTP.' };
    }
  }

  function register(data) {
    var users = readUsers();
    if (findUserByPhoneOrEmail(data.email) || findUserByPhoneOrEmail(data.phone)) {
      return { success: false, message: 'An account with this email or phone already exists.' };
    }
    var user = {
      id: 'user-' + Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    if (!writeUsers(users)) return { success: false, message: 'Could not create account.' };
    return { success: true, user: user };
  }

  function login(identifier, password) {
    var user = findUserByPhoneOrEmail(identifier);
    if (!user) return { success: false, message: 'No account found with this email/phone.' };
    if (isCustomerBlocked(user.id)) return { success: false, message: 'Account is temporarily suspended. Contact support.' };
    if (user.password !== password) return { success: false, message: 'Incorrect password.' };
    setSession(user);
    return { success: true, user: user };
  }

  function loginWithOtpOnly(identifier) {
    var user = findUserByPhoneOrEmail(identifier);
    if (!user) return { success: false, message: 'No account found with this email/phone.' };
    if (isCustomerBlocked(user.id)) return { success: false, message: 'Account is temporarily suspended.' };
    setSession(user);
    return { success: true, user: user };
  }

  function setSession(user) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id, name: user.name, email: user.email, phone: user.phone }));
    } catch (e) { console.error('Could not save session', e); }
    global.dispatchEvent(new CustomEvent('asf:auth-updated'));
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    global.dispatchEvent(new CustomEvent('asf:auth-updated'));
  }

  function getCurrentUser() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function isLoggedIn() { return Boolean(getCurrentUser()); }

  function updateProfile(patch) {
    var session = getCurrentUser();
    if (!session) return { success: false, message: 'Please login first.' };
    var users = readUsers();
    var idx = users.findIndex(function (u) { return u.id === session.userId; });
    if (idx === -1) return { success: false, message: 'Account not found.' };
    users[idx] = Object.assign({}, users[idx], patch);
    if (!writeUsers(users)) return { success: false, message: 'Could not save profile changes.' };
    setSession(users[idx]);
    return { success: true, user: users[idx] };
  }

  var ADDRESSES_KEY = 'asf_addresses';

  function getAddresses() {
    var user = getCurrentUser();
    if (!user) return [];
    try {
      var raw = localStorage.getItem(ADDRESSES_KEY);
      var all = raw ? JSON.parse(raw) : {};
      return all[user.userId] || [];
    } catch (e) { return []; }
  }

  function saveAddresses(list) {
    var user = getCurrentUser();
    if (!user) return false;
    try {
      var raw = localStorage.getItem(ADDRESSES_KEY);
      var all = raw ? JSON.parse(raw) : {};
      all[user.userId] = list;
      localStorage.setItem(ADDRESSES_KEY, JSON.stringify(all));
      return true;
    } catch (e) { return false; }
  }

  function addAddress(address) {
    var list = getAddresses();
    address.id = 'addr-' + Date.now();
    list.push(address);
    saveAddresses(list);
    return list;
  }

  function updateAddress(id, patch) {
    var list = getAddresses().map(function (a) { return a.id === id ? Object.assign({}, a, patch) : a; });
    saveAddresses(list);
    return list;
  }

  function deleteAddress(id) {
    var list = getAddresses().filter(function (a) { return a.id !== id; });
    saveAddresses(list);
    return list;
  }

  global.ASF = global.ASF || {};
  global.ASF.auth = {
    register: register,
    login: login,
    loginWithOtpOnly: loginWithOtpOnly,
    logout: logout,
    getCurrentUser: getCurrentUser,
    isLoggedIn: isLoggedIn,
    updateProfile: updateProfile,
    requestOtp: requestOtp,
    verifyOtp: verifyOtp,
    findUserByPhoneOrEmail: findUserByPhoneOrEmail,
    getAddresses: getAddresses,
    addAddress: addAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress
  };
})(window);
