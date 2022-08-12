import axios from "@/api";

export default {
  name: "comments",
  namespaced: true,
  state: {
    comments: [],
    pagination: null,
  },
  getters: {
    comments(state) {
      return state.comments?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    },
    pagesCount: (state) => state.pagination?.pageCount,
    pagesSize: (state) => state.pagination?.pageSize,
    total: (state) => state.pagination?.total,
  },
  mutations: {
    setComments(state, val) {
      state.comments = val;
    },
    setPagination(state, val) {
      state.pagination = val;
    },
  },
  actions: {
    getComments(store, { productId, page = 1 }) {
      axios
        .get("/reviews", {
          params: {
            "filters[product][id][$eq]": productId,
            "pagination[pageSize]": 5,
            "pagination[page]": page,
          },
        })
        .then((resp) => {
          store.commit("setComments", resp.data?.data);
          store.commit("setPagination", resp.data?.meta?.pagination);
        })
        .catch((e) => console.log(e));
    },
    createComment(store, { productId, fullName, email, text }) {
      let data = JSON.stringify({
        data: {
          text: text,
          rating: "4",
          product: productId,
          fullName: fullName,
          email: email,
        },
      });

      let config = {
        method: "post",
        url: "/reviews",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((resp) => {
          store.commit("setComments", resp.data?.data);
          store.dispatch("getComments", productId);
        })
        .catch((e) => console.log(e));
    },
  },
};
