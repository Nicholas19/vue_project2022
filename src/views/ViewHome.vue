<template>
  <!--  <app-aside></app-aside>-->
  <div class="main">
    <!--    <app-cards-grid></app-cards-grid>-->
    <AppMain></AppMain>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
// import AppCardsGrid from "@/components/AppCardsGrid.vue";
import AppMain from "@/components/AppMain.vue";
// import AppAside from "@/components/AppAside.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "ViewHome",
  components: {
    // AppCardsGrid,
    // AppAside,
    AppMain,
    AppFooter,
  },
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  overflow: hidden;
  flex: 1 0 auto;
}

.container {
  width: 100%;
  max-width: 1650px;
  padding: 0 15px;
  margin: 0 auto;
}

.title {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-bottom: 43px;
}
</style>
