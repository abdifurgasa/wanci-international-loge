// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQOT84qzCDIk5YrgrUD-SeXaNV5HwpBVE",
  authDomain: "lelo-international-hotel-2254a.firebaseapp.com",
  projectId: "lelo-international-hotel-2254a",
  storageBucket: "lelo-international-hotel-2254a.firebasestorage.app",
  messagingSenderId: "889193332993",
  appId: "1:889193332993:web:6ca3745ebbb05a75939b00",
  measurementId: "G-C1M5H8T741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
