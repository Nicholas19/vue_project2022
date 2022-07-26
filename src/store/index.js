import { createStore } from "vuex";
import Products from "./modules/products";
import categories from "@/store/modules/categories";
import Brands from "./modules/brands";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Products,
    categories,
    Brands,
  },
});
