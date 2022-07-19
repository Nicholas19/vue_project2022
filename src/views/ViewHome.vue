<template>
  <div class="content">
    <app-aside></app-aside>
    <div class="wrapper">
      <app-cards-grid></app-cards-grid>
    </div>
  </div>
</template>

<script>
import AppCardsGrid from "@/components/AppCardsGrid.vue";
import AppAside from "@/components/AppAside.vue";

export default {
  name: "ViewHome",
  components: {
    AppCardsGrid,
    AppAside,
  },
};
</script>

<style scoped>
.content {
  max-width: 1620px;
  margin: 80px auto 0;
  display: flex;
}
.wrapper {
  width: 100vw;
  max-width: 1210px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
