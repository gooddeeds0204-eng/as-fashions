// =====================================================
// AS FASHIONS — Firebase Configuration
// =====================================================
// 1. Go to https://console.firebase.google.com
// 2. Create a free project (takes ~1 minute)
// 3. In Project Settings > General > Your apps, add a "Web app"
// 4. Copy the config object Firebase gives you and paste the values below
// 5. Enable these products in the Firebase console:
//      - Firestore Database (start in "test mode" for now, lock down later)
//      - Storage (for product images)
//      - Authentication > Sign-in method > Email/Password (enable it)
// 6. Create your admin login: Authentication > Users > Add user
//      (use that email + password to log into admin.html)
// =====================================================

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// This flag is used by index.html / admin.html to show a setup banner
// until you've filled in real values above.
export const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";
