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
          <rating-block
            :rating="getOneProduct?.attributes?.rating || 0"
            :reviews="reviewsStat || []"
          />
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
import AppAboutProduct from "@/components/ProductAbout";
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
    tabList: new Set(["Description", "Specification", "Reviews"]),
    currentTab: "Description",
  }),
  computed: {
    ...mapGetters("Reviews", ["reviewsStat"]),
    ...mapGetters("Products", ["getOneProduct", "specification"]),
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
  },
  created() {
    this.productsActive(this.getId);
    let productId = this.$route.params.productId;
    this.getReviewsStat(productId);
  },
  methods: {
    ...mapActions("Products", ["productsActive"]),
    ...mapActions("Reviews", ["getReviewsStat"]),
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
