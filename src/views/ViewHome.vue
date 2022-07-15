<template>
  <div class="wrapper">
    <app-cards-grid></app-cards-grid>
  </div>
</template>

<script>
import AppCardsGrid from "@/components/AppCardsGrid.vue";

export default {
  name: "ViewHome",
  components: {
    AppCardsGrid,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
