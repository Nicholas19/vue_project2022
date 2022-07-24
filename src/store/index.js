import { createStore } from "vuex";
import Products from "./modules/products";
import categories from "@/store/modules/categories";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Products,
    categories,
  },
});
