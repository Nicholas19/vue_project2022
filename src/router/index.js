import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome";
import ProductPage from "@/views/ProductPage";

const routes = [
  {
    name: "home",
    path: "/",
    component: ViewHome,
  },
  {
    path: "/product/:productId",
    name: "product",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
