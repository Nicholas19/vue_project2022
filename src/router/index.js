import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: ViewHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
