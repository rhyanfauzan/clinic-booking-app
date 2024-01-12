// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/Dashboard.vue';
import Navbar from '../components/layouts/Navbar.vue';
import Login from '../views/Login.vue';
import Doctors from '../views/user/Doctors.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { navbar: Navbar },
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: Doctors,
    meta: { navbar: Navbar },
  },
  {
    path: '/login',
    name: 'login-page',
    component: Login,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
