// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '../components/layouts/Navbar.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/user/Dashboard.vue'),
    meta: { navbar: Navbar },
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('../views/user/Doctors.vue'),
    meta: { navbar: Navbar },
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/user/History.vue'),
    meta: { navbar: Navbar },
  },
  {
    path: '/availability',
    name: 'availability',
    component: () => import('../views/user/Availability.vue'),
    meta: { navbar: Navbar },
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../views/user/Appointment.vue'),
    meta: { navbar: Navbar },
  },
  {
    path: '/login',
    name: 'login-page',
    component: Login,
  },
  {
    path: '/register',
    name: 'register-page',
    component: Register,
  },
];

export const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});
