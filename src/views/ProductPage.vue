<template>
  <h1 class="title">Product: {{ $route.params.productId }}</h1>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  margin-top: 100px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
}
</style>
