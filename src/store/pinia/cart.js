import { defineStore } from "pinia";
import axios from "@/api";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    productsDetailed: [],
  }),
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
    totalSum(state) {
      return state.items?.reduce((acc, item) => {
        return (
          acc +
          item?.quantity *
            state.productsDetailed?.find((obj) => obj.id === item.id)?.price
        );
      }, 0);
    },
  },
  actions: {
    setCartItems(items) {
      this.items = items;
    },
    pushToCart(item) {
      this.items.push(item);
    },
    removeFromCart(id) {
      this.items.splice(
        this.items?.findIndex((obj) => obj.id === id),
        1
      );
    },
    setProductsDetailed(products) {
      this.productsDetailed = products;
    },
    increaseProductQuantity(id) {
      const product = this.items?.find((obj) => obj.id === id);
      const amount = this.productsDetailed?.find((obj) => obj.id === id).amount;
      if (product.quantity < amount) {
        product.quantity++;
      }
    },
    decreaseProductQuantity(id) {
      const product = this.items?.find((obj) => obj.id === id);
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    //actions
    getCartItems() {
      axios
        .get("/cart")
        .then((resp) => {
          this.setCartItems(resp.data?.productsList);
        })
        .catch((e) => console.log(e));
    },
    updateCart() {
      let data = JSON.stringify({
        data: {
          products: this.items,
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
          this.getCartItems();
          this.getProductByCart();
          console.log("Product added successfully", resp);
        })
        .catch((e) => console.log(e));
    },
    getProductByCart() {
      axios
        .get("/cart", {
          params: {
            populate: "products",
          },
        })
        .then((resp) => {
          this.setProductsDetailed(resp.data?.products);
        })
        .catch((e) => console.log(e));
    },
    makeOrder(info) {
      let data = JSON.stringify({
        data: {
          firstName: info.firstName,
          lastName: info.lastName,
          email: info.email,
          mobile: info.phone,
          addres: info.address,
          country: info.country,
          postcode: info.zip,
          city: info.city,
          payment: info.payment,
          products: this.items,
        },
      });

      let config = {
        method: "post",
        url: "/orders",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      return new Promise((resolve) => {
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            resolve(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    },
  },
});
