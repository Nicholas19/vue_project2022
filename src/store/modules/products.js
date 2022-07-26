import axios from "@/api";

export default {
  name: "products",
  namespaced: true,
  state: {
    cart: [1, 2],
    products: null,
    pagination: null,
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
          category: item.attributes?.category.data.attributes,
          imgSrc: item.attributes?.images.data[0].attributes.url,
        };
      });
    },
    pagesCount: (state) => state.pagination?.pageCount,
  },
  mutations: {
    addToCart(state, id) {
      state.cart.push(id);
    },
    setProducts(state, val) {
      state.products = val;
    },
    setPagination(state, data) {
      state.pagination = data;
    },
  },
  actions: {
    getProducts(
      store,
      { category, sort = { field: "id", direction: "asc" }, page = 1 }
    ) {
      axios
        .get("/products", {
          params: {
            "populate[0]": "images",
            "populate[1]": "category",
            "filters[category][code][$eq]": category,
            sort: `${sort?.field}:${sort?.direction}`,
            "pagination[page]": page,
          },
        })
        .then((resp) => {
          store.commit("setProducts", resp.data?.data);
          store.commit("setPagination", resp?.data?.meta?.pagination);
        })
        .catch((e) => console.log(e));
    },
    productsSearch(store, query) {
      axios
        .get("/fuzzy-search/search", {
          params: {
            query,
          },
        })
        .then((response) => {
          console.log(response);
          store.commit("setProducts", response.data?.products);
          store.commit("setPagination", null);
        })
        .catch((e) => console.log(e));
    },
  },
};
