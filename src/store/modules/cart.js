import axios from "@/api";

export default {
  name: "cart",
  namespaced: true,
  state: {
    items: [],
    productsDetailed: [],
  },
  getters: {
    inCart(state) {
      return function (id) {
        return state.items?.findIndex((obj) => obj.id === id) !== -1;
      };
    },
    quantityById(state) {
      return function (id) {
        return state.items?.find((obj) => obj.id === id)?.quantity;
      };
    },
    cartCount: (state) => state.items.length,
  },
  mutations: {
    setCartItems(state, items) {
      state.items = items;
    },
    pushToCart(state, item) {
      state.items.push(item);
    },
    removeFromCart(state, id) {
      state.items.splice(
        state.items?.findIndex((obj) => obj.id === id),
        1
      );
    },
    setProductsDetailed(state, products) {
      state.productsDetailed = products;
    },
    increaseProductQuantity(state, id) {
      const product = state.items?.find((obj) => obj.id === id);
      const amount = state.productsDetailed?.find(
        (obj) => obj.id === id
      ).amount;
      if (product.quantity < amount) {
        product.quantity++;
      }
    },
    decreaseProductQuantity(state, id) {
      const product = state.items?.find((obj) => obj.id === id);
      if (product.quantity > 1) {
        product.quantity--;
      }
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
          store.dispatch("getProductByCart");
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
          store.commit("setProductsDetailed", resp.data?.products);
        })
        .catch((e) => console.log(e));
    },
  },
};
