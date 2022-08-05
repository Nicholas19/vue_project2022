<template>
  <div class="product__slider slider">
    <swiper
      class="slider__left"
      :modules="[Thumbs, EffectCreative, Navigation]"
      :thumbs="{ swiper: thumbsSwiper }"
      :spaceBetween="20"
      :navigation="{
        nextEl: '.slider__btn--next',
        prevEl: '.slider__btn--prev',
      }"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          translate: ['-150%', 0, -500],
        },
        next: {
          translate: ['150%', 0, -500],
        },
      }"
    >
      <swiper-slide class="slider__slide" v-for="item in images" :key="item.id">
        <img :src="imgURL + item.attributes.url" alt="" />
      </swiper-slide>
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
        :allowTouchMove="false"
        watch-slides-progress
        :slidesPerView="'auto'"
        @swiper="setThumbsSwiper"
        :direction="'vertical'"
      >
        <swiper-slide
          class="slider__slide"
          v-for="item in images"
          :key="item.id"
        >
          <img :src="imgURL + item.attributes.url" alt="" />
        </swiper-slide>
      </swiper>
      <button class="slider__btn slider__btn--next" @click="slideNext">
        <svg width="16" height="16">
          <use xlink:href="@/assets/images/svg/sprites.svg#arrow"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      EffectCreative,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      Navigation,
    };
  },
  props: {
    images: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      imgURL: process.env.VUE_APP_DOMAIN,
    };
  },
};
</script>
<style lang="scss" scoped>
.slider {
  display: flex;
  align-items: center;

  &__left {
    margin: 0;
    padding: 0;
    width: 600px;
    height: 529px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  &__thumb {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: 90px;
      object-fit: contain;
      display: block;
    }
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
    //@media (max-width: 992px) {
    //  width: 312px;
    //}
    //&.swiper-wrapper {
    //  @media (max-width: 992px) {
    //    flex-direction: row;
    //  }
    //}
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
</style>
