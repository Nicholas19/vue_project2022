<template>
  <div class="grid">
    <app-card
      v-for="(card, index) in goodsData"
      :key="index"
      :name="card.name"
      :price="card.price"
      :amount="card.amount"
      :picture="card.picture"
      :raiting="card.raiting"
    ></app-card>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard.vue";

export default {
  name: "AppCardsGrid",
  components: {
    AppCard,
  },
  data: () => ({
    goodsData: [
      {
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 4,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
      {
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 2,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 3,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 1,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 3,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 4,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
