<template>
  <div class="label">
    <slot name="icon"></slot>
    <span class="text">
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "AppLabel",
};
</script>

<style scoped>
.label {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
</style>
