import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Products.vue";
import PastOrders from "../views/PastOrders.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Product",
    component: Product,
  },
  {
    path: "/pastorders",
    name: "PastOrders",
    component: PastOrders,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
