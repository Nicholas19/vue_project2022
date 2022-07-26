import axios from "@/api";

export default {
  name: "brands",
  namespaced: true,
  state: {
    brands: null,
  },
  getters: {
    brands(state) {
      return state.brands?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
          name: item.attributes.name,
        };
      });
    },
  },
  mutations: {
    setBrands(state, val) {
      state.brands = val;
    },
  },
  actions: {
    getBrands(store) {
      axios
        .get("/brands")
        .then((resp) => store.commit("setBrands", resp.data?.data))
        .catch((e) => console.log(e));
    },
  },
};
