<template>
  <div class="home">Home</div>
  <v-header />

  <div class="main">
    <v-products></v-products>
  </div>

  <AppFooter></AppFooter>
</template>

<script>
import VProducts from "@/components/v-products";
import vHeader from "@/components/v-header.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { VProducts, vHeader, AppFooter },

  name: "HomeView",
};
</script>
