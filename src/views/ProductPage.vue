<template>
  <section class="product">
    <div class="container">
      <div class="product__inner">
        <app-slider :images="testImages" />
        <app-about-product></app-about-product>
      </div>
    </div>
  </section>
  <section class="info-section">
    <div class="container">
      <div class="product-info">
        <aside>
          <rating-block :rating="4.2" :reviews="reviewsStat || []" />
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
import { defineAsyncComponent, ref } from "vue";
import { EffectCreative, Navigation, Thumbs } from "swiper";
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
  setup() {
    const onSwiper = () => {
      //console.log(swiper); Нужно убирать за собой
    };
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      EffectCreative,
      onSwiper,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      Navigation,
    };
  },
  data: () => ({
    // reviewsStat: [
    //   {
    //     starsCount: 5,
    //     reviewsCount: 12,
    //   },
    //   {
    //     starsCount: 4,
    //     reviewsCount: 35,
    //   },
    //   {
    //     starsCount: 3,
    //     reviewsCount: 15,
    //   },
    //   {
    //     starsCount: 2,
    //     reviewsCount: 1,
    //   },
    //   {
    //     starsCount: 1,
    //     reviewsCount: 25,
    //   },
    // ],
    testImages: [
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_1_aa820bd34d.jpg",
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_2_7827799980.jpg",
      "http://strapi.elextra.pp.ua/uploads/Apple_i_Phone_13_mini_3_b9a54c371c.jpg",
    ],
    tabList: new Set(["Description", "Specification", "Reviews"]),
    currentTab: "Description",
  }),
  computed: {
    ...mapGetters("Reviews", ["reviewsStat"]),
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
  methods: {
    ...mapActions("Reviews", ["getReviewsStat"]),
  },
  created() {
    let productId = this.$route.params.productId;
    this.getReviewsStat(productId);
  },
};
</script>

<style lang="scss">
.product {
  margin-top: 45px;
  &__inner {
    display: flex;
  }
}

.product-info {
  display: flex;
  gap: 35px;
}

.product-about {
  width: 100%;
}

.wrapper {
  padding: 120px 45px;
}
</style>
