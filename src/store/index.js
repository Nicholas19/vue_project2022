import { createStore } from "vuex";
import Products from "./modules/products";
import Brands from "./modules/brands";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Products,
    Brands,
  },
});
