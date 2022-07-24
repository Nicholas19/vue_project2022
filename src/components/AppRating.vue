<template>
  <div class="rating">
    <ul class="rating__stars">
      <li v-for="(star, i) in 5" :key="i">
        <svg
          v-if="showEmptyStar || star <= rating"
          :height="starSize"
          :width="starSize"
          viewBox="0 0 15 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.73489 0.472097L4.91277 3.98115L0.83602 4.54567C0.10494 4.64639 -0.188051 5.50245 0.342122 5.99276L3.29156 8.72261L2.59396 12.5789C2.46839 13.2759 3.24133 13.798 3.8887 13.472L7.53573 11.6512L11.1828 13.472C11.8301 13.7954 12.6031 13.2759 12.4775 12.5789L11.7799 8.72261L14.7293 5.99276C15.2595 5.50245 14.9665 4.64639 14.2354 4.54567L10.1587 3.98115L8.33657 0.472097C8.01009 -0.153384 7.06415 -0.161335 6.73489 0.472097Z"
            :fill="star <= rating ? fillStarColor : starColor"
          />
        </svg>
      </li>
    </ul>
    <p v-if="!amount === false" class="rating__amount">({{ amount }})</p>
  </div>
</template>

<script>
export default {
  name: "AppRaiting",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number || Boolean,
      default: 0,
    },
    fillStarColor: {
      type: String,
      default: "#FF7020",
    },
    starColor: {
      type: String,
      default: "#D2D2D2",
    },
    starSize: {
      type: String,
      default: "15",
    },
    showEmptyStar: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  gap: 0 6px;

  &__stars {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 5px;

    & svg {
      fill: #bababa;
    }
  }

  &__current-stars {
    display: flex;
    align-items: center;
    gap: 0 5px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    & svg {
      fill: #ff7020;
    }
  }

  &__amount {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #bababa;
  }
}
</style>
