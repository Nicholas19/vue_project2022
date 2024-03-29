import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome";
import ProductPage from "@/views/ProductPage";
import CartPage from "@/views/CartPage";
import CheckoutPage from "@/views/CheckoutPage";

const routes = [
  {
    name: "home",
    path: "/",
    component: ViewHome,
  },
  {
    path: "/:categoryCode",
    name: "category",
    component: ViewHome,
  },
  {
    path: "/:categoryCode/:productId",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes,
});

export default router;
