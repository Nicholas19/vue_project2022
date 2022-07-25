<template>
  <section class="product">
    <div class="container">
      <div class="product__inner">
        <app-slider :images="testImages" />
        <div class="product__about">
          <h2>Тут будет описание товара</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";
export default {
  components: {
    AppSlider,
  },
  data: () => ({
    testImages: [
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_1_aa820bd34d.jpg",
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_2_7827799980.jpg",
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_3_b9a54c371c.jpg",
    ],
  }),
};
</script>

<style lang="scss">
.container {
  max-width: 1650px;
  padding: 0 15px;
  margin: 0 auto;
}
.product {
  margin-top: 45px;
  &__inner {
    display: flex;
  }
}

.title {
  margin-top: 100px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
}
</style>
