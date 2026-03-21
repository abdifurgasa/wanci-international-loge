// dashboard.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const sidebarMenu = document.getElementById("sidebarMenu");
const logoutBtn = document.getElementById("logoutBtn");

// Authentication watcher
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.replace("login.html");
    return;
  }

  // Get user role from Firestore
  let role = "guest";
  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      role = snap.data().role || "guest";
    }
  } catch (error) {
    console.error("Dashboard Auth Error:", error);
  }

  localStorage.setItem("userRole", role); // optional
  loadMenu(role);
});

// Load sidebar menu based on role
function loadMenu(role) {
  if (!sidebarMenu) return;

  let menus = [];
  if (role === "admin") {
    menus = [
      { name: "Dashboard", link: "dashboard.html" },
      { name: "Rooms", link: "pages/rooms.html" },
      { name: "Booking", link: "pages/booking.html" },
      { name: "Food", link: "pages/restaurant.html" },
      { name: "Drink", link: "pages/drinks.html" },
      { name: "Finance", link: "pages/finance.html" }
    ];
  } else if (role === "manager") {
    menus = [
      { name: "Dashboard", link: "dashboard.html" },
      { name: "Rooms", link: "pages/rooms.html" },
      { name: "Booking", link: "pages/booking.html" },
      { name: "Food", link: "pages/restaurant.html" }
    ];
  } else if (role === "receptionist") {
    menus = [
      { name: "Dashboard", link: "dashboard.html" },
      { name: "Booking", link: "pages/booking.html" }
    ];
  } else {
    menus = [{ name: "Dashboard", link: "dashboard.html" }];
  }

  sidebarMenu.innerHTML = "";
  menus.forEach(menu => {
    sidebarMenu.innerHTML += `<li><a href="${menu.link}">${menu.name}</a></li>`;
  });
}

// Logout button
if (logoutBtn) {
  logoutBtn.onclick = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      window.location.replace("login.html");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
}
