<template>
  <h1 class="title">Product: {{ $route.params.productId }}</h1>
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
        <div class="product__about">
          <h2>Тут будет описание товара</h2>
        </div>
      </div>
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
import { ref } from "vue";
import { Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import RatingBlock from "@/components/RatingBlock";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RatingBlock,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
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
    &--prev {
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
