import axios from "@/api";

export default {
  name: "products",
  namespaced: true,
  state: {
    cart: [1, 2],
    products: null,
    pagination: null,
    filter: {
      brand: null,
      colors: [],
      rangeMin: null,
      rangeMax: null,
    },
    prices: {
      min: null,
      max: null,
    },
    oneProduct: null,
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
    getOneProduct: (state) => {
      return state.oneProduct;
    },
    specification(state) {
      const obj = state.oneProduct?.attributes?.specification;
      if (obj) {
        return Object.keys(obj).map((key) => {
          return {
            title: key,
            features: Object.keys(obj[key]).map((subkey) => {
              return {
                title: subkey,
                value: obj[key][subkey],
              };
            }),
          };
        });
      } else {
        return null;
      }
    },
    description: (state) => state.oneProduct?.attributes?.description,
    descriptionShort: (state) =>
      state.oneProduct?.attributes?.description.substr(0, 150),
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
      state.filter.brand = null;
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
      state.prices[payload.field] = payload.val;
    },
    setMinPrice(state, value) {
      state.filter.rangeMin = value;
    },
    setMaxPrice(state, value) {
      state.filter.rangeMax = value;
    },
    oneProduct(state, product) {
      state.oneProduct = product;
    },
  },
  actions: {
    getProducts(
      store,
      {
        category,
        sort = { field: "id", direction: "asc" },
        page = 1,
        brand = null,
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
            "filters[price][$gte]": store.state.filter.rangeMin,
            "filters[price][$lte]": store.state.filter.rangeMax,
            ...additionalParams,
            sort: `${sort?.field}:${sort?.direction}`,
            "pagination[page]": page,
          },
        })
        .then((resp) => {
          store.commit("setProducts", resp.data?.data);
          store.commit("setPagination", resp?.data?.meta?.pagination);
          console.log(resp);
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
    async loadMaxMinPrice({ commit }, direction) {
      const resp = await axios
        .get("/products", {
          params: {
            "pagination[limit]": 1,
            "fields[1]": "price",
            sort: `price:${direction}`,
          },
        })
        .then((data) => {
          commit("setPrices", {
            field: direction === "desc" ? "max" : "min",
            val: data?.data?.data?.[0]?.attributes?.price,
          });
        });
      return resp;
    },
    productsActive(store, id) {
      axios
        .get(`/products/${id}`, {
          params: {
            "populate[0]": "images",
            "populate[1]": "category",
          },
        })
        .then((response) => {
          store.commit("oneProduct", response?.data?.data);
        });
    },
  },
};
