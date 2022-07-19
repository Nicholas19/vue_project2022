<template>
  <div class="home">Home</div>
  <v-header />
<<<<<<< HEAD
</template>

<script>
import vHeader from "@/components/v-header.vue";
export default {
  name: "HomeView",
  components: { vHeader },
=======

  <div class="main">
    <v-products></v-products>
  </div>
</template>

<script>
import VProducts from "@/components/v-products";
import vHeader from "@/components/v-header.vue";

export default {
  components: { VProducts, vHeader },

  name: "HomeView",
>>>>>>> dev
};
</script>
