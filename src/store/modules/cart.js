import axios from "@/api";

export default {
  name: "cart",
  namespaced: true,
  state: {
    items: [],
    productsDetailed: [],
  },
  getters: {},
  mutations: {
    setCartItems(state, items) {
      state.items = items;
    },
    pushToCart(state, item) {
      state.items.push(item);
    },
    setProductsDetailed(state, products) {
      state.productsDetailed = products;
    },
  },
  actions: {
    getCartItems(store) {
      axios
        .get("/cart")
        .then((resp) => {
          store.commit("setCartItems", resp.data?.productsList);
        })
        .catch((e) => console.log(e));
    },
    updateCart(store) {
      let data = JSON.stringify({
        data: {
          products: store.state.items,
        },
      });
      let config = {
        method: "put",
        url: "/cart",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((resp) => {
          store.dispatch("getCartItems");
          console.log("Product added successfully", resp);
        })
        .catch((e) => console.log(e));
    },
    getProductByCart(store) {
      axios
        .get("/cart", {
          params: {
            populate: "products",
          },
        })
        .then((resp) => {
          console.log(resp);
          store.commit("setProductsDetailed", resp.data?.products);
        })
        .catch((e) => console.log(e));
    },
  },
};
