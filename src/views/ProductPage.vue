<template>
  <section class="product">
    <div class="container">
      <div class="product__inner">
        <div class="product__slider slider">
          <swiper
            class="slider__left"
            :modules="[Thumbs, EffectCreative, Navigation]"
            :thumbs="{ swiper: thumbsSwiper }"
            :spaceBetween="20"
            @swiper="onSwiper"
            :navigation="{
              nextEl: '.slider__btn--next',
              prevEl: '.slider__btn--prev',
            }"
            :effect="'creative'"
            :creativeEffect="{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
              },
            }"
          >
            <swiper-slide class="slider__slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="slider__slide">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
            </swiper-slide>
            <swiper-slide class="slider__slide">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="slider__slide">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="slider__slide">
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="slider__slide">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=""
            /></swiper-slide>
          </swiper>
          <div class="slider__thumb">
            <button class="slider__btn slider__btn--prev" @click="slidePrev">
              <svg width="16" height="16">
                <use xlink:href="@/assets/images/svg/sprites.svg#arrow"></use>
              </svg>
            </button>

            <swiper
              class="slider__right"
              :modules="[Thumbs]"
              :direction="'vertical'"
              :allowTouchMove="false"
              watch-slides-progress
              :slidesPerView="'auto'"
              @swiper="setThumbsSwiper"
            >
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
              /></swiper-slide>
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
              /></swiper-slide>
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt=""
              /></swiper-slide>
              <swiper-slide class="slider__slide">
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt=""
              /></swiper-slide>
            </swiper>
            <button class="slider__btn slider__btn--next" @click="slideNext">
              <svg width="16" height="16">
                <use xlink:href="@/assets/images/svg/sprites.svg#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
        <app-about-product></app-about-product>
      </div>
    </div>
  </section>
  <section class="info-section">
    <div class="container">
      <div class="product-info">
        <aside>
          <raiting-block :raiting="4.2" :reviews="reviewsStat" />
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
import RaitingBlock from "@/components/RaitingBlock";
import AppTabs from "@/components/AppTabs";
import AppAboutProduct from "@/components/AppAboutProduct";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RaitingBlock,
    AppTabs,
    AppAboutProduct,
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
      return "ProductDescription";
    },
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
.slider {
  display: flex;
  align-items: center;
  &__slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  &__left {
    margin: 0;
    padding: 0;
    width: 600px;
    height: 529px;
  }
  &__thumb {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__btn {
    background-color: transparent;

    width: 50px;
    height: 50px;
    &.swiper-button-disabled {
      pointer-events: none;

      svg {
        fill: transparent;
        stroke: #c4c4c4;
      }
    }
    svg {
      transition: 0.2s ease;
      fill: transparent;
      stroke: #ff7020;
    }
    &--next {
      transform: rotate(180deg);
    }
  }
  &__right {
    margin: 0 10px;
    padding: 0;
    width: 104px;

    max-height: 416px;
    .swiper-slide {
      box-sizing: border-box;
      margin: 0;
      border: 1px solid transparent;
      padding: 6px;
      transition: 0.2s ease;
      &.swiper-slide-thumb-active {
        border-color: #ff7020;
      }
    }
  }
  @media (max-width: 1400px) {
    &__left {
      width: 450px;
      height: 450px;
    }
  }
}

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
