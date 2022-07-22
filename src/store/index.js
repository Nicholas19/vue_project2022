import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [1, 2],
    brands: ["Apple", "HP", "Dell"],
    brand: "",
  },
  getters: {
    cartCount(state) {
      return state.cart.length;
    },
  },
  mutations: {
    addToCart(state, id) {
      state.cart.push(id);
    },
    chooseBrand(state, val) {
      state.brand = val;
    },
  },
  actions: {
    addToCart({ commit }, id) {
      setTimeout(() => {
        console.log("ACTION");
      });

      commit("addToCart", id);
    },
  },
  modules: {},
});
