import axios from "@/api";

export default {
  name: "colors",
  namespaced: true,
  state: {
    colors: null,
  },
  getters: {
    colors(state) {
      return state.colors?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    },
  },
  mutations: {
    setColors(state, val) {
      state.colors = val;
    },
  },
  actions: {
    getColors(store) {
      axios
        .get("/colors")
        .then((resp) => store.commit("setColors", resp.data?.data))
        .catch((e) => console.log(e));
    },
  },
};
