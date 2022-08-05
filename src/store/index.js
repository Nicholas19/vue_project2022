import { createStore } from "vuex";
import Products from "./modules/products";
import categories from "@/store/modules/categories";
import Brands from "./modules/brands";
import Colors from "./modules/colors";
import Cart from "./modules/cart";
import Comments from "./modules/comments";
import Reviews from "@/store/modules/reviews";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    Products,
    categories,
    Brands,
    Colors,
    Cart,
    Comments,
    Reviews,
  },
});
