import axios from "@/api";
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getProducts() {
      axios.get("/products/?populate[0]=images");
    },
  },
  modules: {},
};
