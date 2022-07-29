<template>
  <div class="wrapper">
    <div class="title">
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="main_content"></slot>
    </div>
    <div>
      <slot name="button"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  max-width: 507px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 12px;
  padding: 34px;
}

.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
}
</style>
