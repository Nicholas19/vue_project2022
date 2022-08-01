<template>
  <section class="product">
    <div class="container">
      <div class="product__inner">
        <app-slider :images="getOneProduct?.attributes?.images.data" />
        <app-about-product></app-about-product>
      </div>
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
            <keep-alive>
              <component :is="currentComponent" />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import RatingBlock from "@/components/RatingBlock";
import AppTabs from "@/components/AppTabs";
import AppAboutProduct from "@/components/AppAboutProduct";
import AppSlider from "@/components/AppSlider.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RatingBlock,
    AppTabs,
    AppAboutProduct,
    AppSlider,
    ProductDescription: defineAsyncComponent(() =>
      import("@/components/ProductDescription.vue")
    ),
    ProductSpecification: defineAsyncComponent(() =>
      import("@/components/ProductSpecification.vue")
    ),
    ProductReviews: defineAsyncComponent(() =>
      import("@/components/ProductReviews.vue")
    ),
  },
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
    getId() {
      return parseInt(this.$route.params.productId);
    },
    currentComponent() {
      switch (this.currentTab) {
        case "Description":
          return "ProductDescription";
        case "Specification":
          return "ProductSpecification";
        case "Reviews":
          return "ProductReviews";
      }
      return "ProductDescription";
    },
    ...mapGetters("Products", ["getOneProduct"]),
  },
  methods: {
    ...mapActions("Products", ["productsActive"]),
  },
  created() {
    this.productsActive(this.getId);
  },
};
</script>

<style lang="scss">
.info-section {
  padding-bottom: 80px;
}
.product {
  margin-top: 45px;
  padding-bottom: 80px;
  &__inner {
    display: flex;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
}

.product-info {
  display: flex;
  gap: 35px;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.product-about {
  width: 100%;
}

.wrapper {
  padding: 120px 45px;
}
</style>
