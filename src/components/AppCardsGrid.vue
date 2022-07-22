<template>
  <div class="grid">
    <app-card
      v-for="card in products"
      :key="card.id"
      :name="card.name"
      :price="card.price"
      :amount="card.amount"
      :picture="'http://strapi.elextra.pp.ua' + card.imgSrc"
      :raiting="card.raiting"
      @click="handleCardClick(card.id)"
    ></app-card>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppCardsGrid",
  components: {
    AppCard,
  },
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters("Products", ["products"]),
  },
  methods: {
    ...mapActions("Products", ["getProducts"]),
    handleCardClick(id) {
      this.$router.push({
        name: "product",
        params: { productId: id },
      });
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
