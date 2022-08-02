import axios from "@/api";
import qs from "qs";

export default {
  name: "reviews",
  namespaced: true,
  state: {
    reviews: [],
    reviewsStat: null,
  },
  getters: {
    reviews(state) {
      return state.reviews?.map((item) => {
        return {
          id: item.id,
          ...item.attributes,
        };
      });
    },
    reviewsStat(state) {
      return state.reviewsStat;
    },
  },
  mutations: {
    setReviews(state, val) {
      console.log(val);
      state.reviews = val;
    },
    setReviewsStat(state, val) {
      state.reviewsStat = val;
    },
  },
  actions: {
    getReviews(store, productId) {
      const query = qs.stringify(
        {
          filters: {
            product: {
              id: {
                $eq: productId,
              },
            },
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      axios
        .get(`/reviews?${query}`)
        .then((resp) => store.commit("setReviews", resp.data?.data))
        .catch((e) => console.log(e));
    },
    getReviewsStat(store, productId) {
      const query = qs.stringify(
        {
          // sort: ["price:asc"],
          fields: ["id"],
          populate: "reviews",
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      axios
        .get(`/products/${productId}?${query}`)
        .then((resp) => {
          let reviews = resp.data.data.attributes.reviews.data;
          let reviewsStat = [
            {
              starsCount: 5,
              reviewsCount: 0,
            },
            {
              starsCount: 4,
              reviewsCount: 0,
            },
            {
              starsCount: 3,
              reviewsCount: 0,
            },
            {
              starsCount: 2,
              reviewsCount: 0,
            },
            {
              starsCount: 1,
              reviewsCount: 0,
            },
          ];

          console.log(reviews);
          reviews?.forEach((review) => {
            reviewsStat.forEach((stat) => {
              if (review.attributes.rating == stat.starsCount) {
                stat.reviewsCount++;
              }
            });
          });
          store.commit("setReviewsStat", reviewsStat);
        })
        .catch((e) => console.log(e));
    },
  },
};
