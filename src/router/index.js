import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomePage.vue") },
  { path: "/about", component: () => import("../views/AboutPage.vue") },
  {
    path: "/products",
    component: () => import("../views/ProductPage.vue"),
  },
  {
    path: "/services",
    component: () => import("../views/ServicePage.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/store",
    component: () => import("@/views/StorePage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/M",
    component: () => import("@/views/M.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
