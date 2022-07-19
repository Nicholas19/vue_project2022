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
      @click="handleCardClick(card.id)"
      @add-to-cart="addToCart(card.id)"
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
        id: 100,
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 4,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        id: 101,
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
      {
        id: 102,
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 2,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        id: 103,
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 3,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        id: 104,
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 1,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        id: 105,
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 3,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        id: 106,
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 4,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        id: 107,
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
    ],
  }),
  methods: {
    handleCardClick(id) {
      this.$router.push({
        name: "product",
        params: { productId: id },
      });
    },
    addToCart(id) {
      // this.$store.state.cart.push(id);
      // this.$store.commit("addToCart", id);
      this.$store.dispatch("addToCart", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
