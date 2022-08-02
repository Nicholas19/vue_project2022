<template>
  <div class="rating-block">
    <div class="rating">
      <span class="average-rating">{{ rating }}</span>
      <span class="max-rating">5</span>
    </div>
    <div class="average-stars">
      <app-rating :rating="4" fill-star-color="#EBFF00" star-size="30" />
    </div>
    <div class="reviews">
      <span class="reviews-count">{{ reviewsQuantity }}</span>
      <span>Reviews</span>
    </div>
    <div class="statistic" v-if="reviews">
      <div
        v-for="review in reviews"
        :key="review.starsCount"
        class="statistic-item"
      >
        <app-rating
          :rating="review.starsCount"
          fill-star-color="#EBFF00"
          :show-empty-star="false"
        />
        <div class="reviews-count">{{ review.reviewsCount }}</div>
        <progress
          class="progress"
          :max="reviewsQuantity"
          :value="review.reviewsCount"
        ></progress>
      </div>
    </div>
  </div>
</template>

<script>
import AppRating from "@/components/AppRating";

export default {
  name: "RatingBlock",
  components: {
    AppRating,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
    },
  },
  computed: {
    reviewsQuantity() {
      return this.reviews?.reduce((acm, val) => acm + val.reviewsCount, 0);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
.rating-block {
  background-color: $accent-color;
  width: 375px;
  padding: 60px 40px;
  color: white;
  border-radius: 8px;
}

.rating {
  text-align: center;
}

.average-rating {
  font-size: 100px;
  font-weight: 600;
}

.max-rating {
  font-size: 24px;
}

.max-rating::before {
  content: "/";
}

.average-stars {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.reviews {
  margin-top: 10px;
  font-size: 20px;
  display: flex;
  gap: 5px;
  justify-content: center;

  &__count {
    margin-left: 5px;
  }
}

.statistic {
  margin-top: 70px;
}

.statistic-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  margin-top: 35px;
}

.progress {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}
</style>
