<template>
  <app-header />
  <router-view />
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
};
</script>

<style></style>
