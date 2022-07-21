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
        <div class="product-about">
          <app-tabs :tabs="tabList" v-model="currentTab" />
          <div class="wrapper">
            <component :is="currentComponent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RatingBlock from "@/components/RatingBlock";
import AppTabs from "@/components/AppTabs";
import ProductDescription from "@/components/ProductDescription";
import ProductSpecification from "@/components/ProductSpecification";
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
    tabList: new Set(["Description", "Specification", "Reviews"]),
    currentTab: "Description",
  }),
  computed: {
    currentComponent() {
      switch (this.currentTab) {
        case "Description":
          return "ProductDescription";
        case "Specification":
          return "ProductSpecification";
        case "Reviews":
          return "ProductReviews";
      }
      return null;
    },
  },
  components: {
    RatingBlock,
    AppTabs,
    ProductDescription,
    ProductSpecification,
  },
};
</script>

<style>
.product-section,
.info-section {
  margin-top: 100px;
}

.product-info {
  display: flex;
  gap: 35px;
}

.product-about {
  width: 100%;
}

.wrapper {
  padding: 33px;
}
</style>
