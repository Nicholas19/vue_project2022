<template>
  <section class="product-section">
    <div class="container">
      <span>Секция продукта {{ $route.params.productId }}</span>
    </div>
  </section>
  <section class="info-section">
    <div class="container">
      <div class="product-info">
        <aside>
          <rating-block :rating="4.2" :reviews="reviewsStat" />
        </aside>
        <div>Дпополнительная информация о продукте</div>
      </div>
    </div>
  </section>
</template>

<script>
import RatingBlock from "@/components/RatingBlock";
export default {
  data: () => ({
    reviewsStat: [
      {
        starsCount: 5,
        reviewsCount: 12,
      },
      {
        starsCount: 4,
        reviewsCount: 35,
      },
      {
        starsCount: 3,
        reviewsCount: 15,
      },
      {
        starsCount: 2,
        reviewsCount: 1,
      },
      {
        starsCount: 1,
        reviewsCount: 25,
      },
    ],
  }),
  components: {
    RatingBlock,
  },
};
</script>

<style>
.title {
  margin-top: 100px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
}

.product-section,
.info-section {
  margin-top: 100px;
}

.product-info {
  display: flex;
  gap: 35px;
}
</style>
