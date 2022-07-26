import axios from "@/api";

export default {
  name: "products",
  namespaced: true,
  state: {
    cart: [1, 2],
    products: null,
  },
  getters: {
    cartCount(state) {
      return state.cart.length;
    },
    products(state) {
      return state.products?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
          category: item.attributes.category.data.attributes,
          imgSrc: item.attributes.images.data[0].attributes.url,
        };
      });
    },
  },
  mutations: {
    addToCart(state, id) {
      state.cart.push(id);
    },
    setProducts(state, val) {
      state.products = val;
    },
  },
  actions: {
    getProducts(store) {
      axios
        .get("/products/?populate[0]=images&populate[1]=category")
        .then((resp) => store.commit("setProducts", resp.data?.data))
        .catch((e) => console.log(e));
    },
  },
};
