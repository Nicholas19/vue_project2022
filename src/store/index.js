import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [1, 2],
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
