import axios from "@/api";

export default {
  name: "products",
  namespaced: true,
  state: {
    cart: [1, 2],
    products: null,
    pagination: null,
    prices: {
      min: null,
      max: null,
    },
    filter: {
      brand: "",
      colors: [],
      rangeMin: null,
      rangeMax: null,
    },
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
    getPrices: (state) => state.prices,
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
    chooseBrand(state, val) {
      state.filter.brand = val;
    },
    resetFilter(state) {
      state.filter.brand = "";
      state.filter.colors = [];
      state.filter.rangeMin = null;
      state.filter.rangeMax = null;
    },
    chooseColor(state, e) {
      if (state.filter.colors.includes(e)) {
        let i = state.filter.colors.indexOf(e);
        state.filter.colors.splice(i, 1);
      } else {
        state.filter.colors.push(e);
      }
    },
    selectAll(state, arr) {
      arr.forEach((element) => {
        if (!state.filter.colors.includes(element)) {
          state.filter.colors.push(element);
        }
      });
    },
    resetColors(state) {
      state.filter.colors = [];
    },
    setPrices(state, payload) {
      let res = payload.map((item) => item.attributes.price);
      state.prices = {
        min: Math.min.apply(null, res),
        max: Math.max.apply(null, res),
      };
    },
    setMinPrice(state, value) {
      state.filter.rangeMin = value;
    },
    setMaxPrice(state, value) {
      state.filter.rangeMax = value;
    },
  },
  actions: {
    getProducts(
      store,
      {
        category,
        sort = { field: "id", direction: "asc" },
        page = 1,
        brand,
        colors,
      }
    ) {
      let additionalParams = {};
      if (colors?.length > 0) {
        colors?.forEach((el, i) => {
          additionalParams[`filters[color][$in][${i}]`] = el.name;
        });
      }
      axios
        .get("/products", {
          params: {
            "populate[0]": "images",
            "populate[1]": "category",
            "filters[category][code][$eq]": category,
            "filters[brand][name][$eq]": brand,
            ...additionalParams,
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
          let products = response.data.products;
          let params = {
            "populate[0]": "images",
            "populate[1]": "category",
          };

          if (products.length > 0) {
            products?.forEach((el, i) => {
              params[`filters[id][$in][${i}]`] = el.id;
            });
          }

          axios
            .get("/products", {
              params,
            })
            .then((response) => {
              store.commit("setProducts", response.data?.data);
            });
        })
        .catch((e) => console.log(e));
    },
    loadMaxMinPrice({ commit }, { category }) {
      axios
        .get("/products", {
          params: {
            "filters[category][code][$eq]": category,
            "pagination[limit]": 200,
            "fields[1]": "price",
          },
        })
        .then((data) => commit("setPrices", data?.data?.data));
    },
  },
};
