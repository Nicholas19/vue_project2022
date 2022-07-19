<template>
  <div class="home">Home</div>
  <v-header />

  <div class="main">
    <v-products></v-products>
  </div>
  <v-footer></v-footer>
</template>

<script>
import VProducts from "@/components/v-products";
import vHeader from "@/components/v-header.vue";
import vFooter from "@/components/v-footer.vue";

export default {
  components: { VProducts, vHeader, vFooter },

  name: "HomeView",
};
</script>
