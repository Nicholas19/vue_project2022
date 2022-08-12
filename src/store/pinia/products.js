import { defineStore } from "pinia";
import axios from "@/api";

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProductsStore = defineStore("products", {
  state: () => ({
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
  }),
  getters: {
    cartCount(state) {
      return state.cart.length;
    },
    productsGetter(state) {
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
  actions: {
    addToCart(id) {
      this.cart.push(id);
    },
    setProducts(val) {
      this.products = val;
    },
    setPagination(data) {
      this.pagination = data;
    },
    chooseBrand(val) {
      this.filter.brand = val;
    },
    resetFilter() {
      this.filter.brand = null;
      this.filter.colors = [];
      this.filter.rangeMin = null;
      this.filter.rangeMax = null;
    },
    chooseColor(e) {
      if (this.filter.colors.includes(e)) {
        let i = this.filter.colors.indexOf(e);
        this.filter.colors.splice(i, 1);
      } else {
        this.filter.colors.push(e);
      }
    },
    selectAll(arr) {
      arr.forEach((element) => {
        if (!this.filter.colors.includes(element)) {
          this.filter.colors.push(element);
        }
      });
    },
    resetColors() {
      this.filter.colors = [];
    },
    setPrices(payload) {
      this.prices[payload.field] = payload.val;
    },
    setMinPrice(value) {
      this.filter.rangeMin = value;
    },
    setMaxPrice(value) {
      this.filter.rangeMax = value;
    },
    oneProduct(product) {
      this.oneProduct = product;
    },
    /////////ACTIONS
    getProducts({
      category,
      sort = { field: "id", direction: "asc" },
      page = 1,
      brand = null,
      colors,
    }) {
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
            "filters[price][$gte]": this.filter.rangeMin,
            "filters[price][$lte]": this.filter.rangeMax,
            ...additionalParams,
            sort: `${sort?.field}:${sort?.direction}`,
            "pagination[page]": page,
          },
        })
        .then((resp) => {
          this.setProducts(resp.data?.data);
          this.setPagination(resp?.data?.meta?.pagination);
          console.log(resp);
        })
        .catch((e) => console.log(e));
    },
    productsSearch(query) {
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
              this.setProducts(response.data?.data);
            });
        })
        .catch((e) => console.log(e));
    },
    async loadMaxMinPrice(direction) {
      const resp = await axios
        .get("/products", {
          params: {
            "pagination[limit]": 1,
            "fields[1]": "price",
            sort: `price:${direction}`,
          },
        })
        .then((data) => {
          this.setPrices({
            field: direction === "desc" ? "max" : "min",
            val: data?.data?.data?.[0]?.attributes?.price,
          });
        });
      return resp;
    },
    productsActive(id) {
      axios
        .get(`/products/${id}`, {
          params: {
            "populate[0]": "images",
            "populate[1]": "category",
          },
        })
        .then((response) => {
          this.oneProduct(response?.data?.data);
        });
    },
  },
});
