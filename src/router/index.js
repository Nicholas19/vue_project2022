import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome";
import ProductPage from "@/views/ProductPage";
import ChildrenView from "@/views/ChildrenView";

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
  {
    path: "/user/",
    component: ChildrenView,
    children: [
      {
        // при совпадении пути с шаблоном /uer/:id/profile
        // в <router-view> компонента User будет показан UserProfile
        path: "profile",
        component: ProductPage,
      },
      {
        // при совпадении пути с шаблоном /user/:id/posts
        // в <router-view> компонента User будет показан UserPosts
        path: "posts",
        component: ViewHome,
      },
    ],
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
  routes,
});

export default router;
