import { fetchAllCategories } from "@/api/categories";

export default {
  name: "categories",
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    categories(state) {
      return state.categories?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    },
  },
  mutations: {
    setCategories(state, val) {
      state.categories = val;
    },
  },
  actions: {
    getCategories(store) {
      fetchAllCategories().then((resp) =>
        store.commit("setCategories", resp.data?.data)
      );
    },
  },
};
