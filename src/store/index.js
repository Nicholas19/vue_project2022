import { createStore } from "vuex";
import Products from "./modules/products";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Products,
  },
});
