// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/layouts/Navbar.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Dashboard from "../views/user/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: { navbar: Navbar },
  },
  {
    path: "/doctors",
    name: "doctors",
    component: () => import("../views/user/Doctors.vue"),
    meta: { navbar: Navbar },
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/user/History.vue"),
    meta: { navbar: Navbar },
  },
  {
    path: "/availability",
    name: "availability",
    component: () => import("../views/user/Availability.vue"),
    meta: { navbar: Navbar },
  },
  {
    path: "/appointment",
    name: "appointment",
    component: () => import("../views/user/Appointment.vue"),
    meta: { navbar: Navbar },
  },
  {
    path: "/login",
    name: "login-page",
    component: Login,
  },
  {
    path: "/register",
    name: "register-page",
    component: Register,
  },

  // Admin only
  {
    path: "/admin",
    name: "admin-dashboard",
    component: () => import("../views/admin/Dashboard.vue"), // Import Admin Dashboard component
    meta: { requiresAuth: true, requiresRole: "admin" }, // Add meta field for role-based access
  },
];

export const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Route guard to check user's role before accessing admin routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresRole = to.matched.some((record) => record.meta.requiresRole);
  const userRole = localStorage.getItem("role"); // Function to get user role from storage
  console.log(userRole);
  if (requiresAuth && userRole == null) {
    next({ name: "login-page" });
  } else if (requiresRole && userRole !== "admin") {
    next({ name: "dashboard" }); // Redirect to dashboard if user does not have admin role
  } else {
    next();
  }
});
