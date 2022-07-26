<template>
  <div class="card">
    <div class="card__img-wrapper">
      <img class="card__img" :src="picture" alt="laptop" />
    </div>
    <div class="card__block">
      <h3 class="card__name">{{ name }}</h3>
      <div class="card__info">
        <div class="card__price-wrapper">
          <p class="card__price">{{ "$" + price }}</p>
          <app-rating :amount="amount" :rating="rating"></app-rating>
        </div>
        <button class="btn" @click.stop="handleClick">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppRating from "@/components/AppRating.vue";

export default {
  name: "AppCard",
  components: {
    AppRating,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      default: 0,
    },
    picture: {
      type: String,
      default: require("@/assets/img/card-default.jpg"),
    },
  },
  methods: {
    handleClick() {
      this.$emit("add-to-cart");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 412px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 16px 22px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  &__img-wrapper {
    width: 100%;
    min-height: 160px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 24px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__name {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: #000;

    max-width: 213px;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__price {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    color: #ff7020;
  }
}

.btn {
  width: 100%;
  height: 57px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #ff7020;
  background-color: #fff;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  color: #ff7020;
}
</style>
