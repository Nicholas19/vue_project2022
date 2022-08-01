<template>
  <div class="about">
    <p class="about__subtitle">SKU 12314124124</p>
    <h2 class="about__title">{{ getOneProduct?.attributes?.name }}</h2>
    <ul class="about__info">
      <li class="about__item">
        <app-rating
          :rating="getOneProduct?.attributes?.rating"
          :amount="223"
        ></app-rating>
      </li>
      <li class="about__item">
        <svg
          class="about__icon"
          width="21"
          height="15"
          viewBox="0 0 21 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74648 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54257 15.0982 7.13253 14.7054V14.7054Z"
          />
        </svg>
        <p class="about__text">
          <span class="about__text--bold">4,320</span>
          Sold
        </p>
      </li>
      <li class="about__item">
        <svg
          class="about__icon"
          width="28"
          height="18"
          viewBox="0 0 28 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8309 8.31562C25.1947 3.35578 19.9758 0 14 0C8.02422 0 2.80387 3.35813 0.16914 8.31609C0.0579383 8.52821 0 8.76256 0 9.00023C0 9.23791 0.0579383 9.47226 0.16914 9.68438C2.80533 14.6442 8.02422 18 14 18C19.9758 18 25.1961 14.6419 27.8309 9.68391C27.9421 9.47179 28 9.23744 28 8.99977C28 8.76209 27.9421 8.52774 27.8309 8.31562V8.31562ZM14 15.75C12.6155 15.75 11.2621 15.3541 10.111 14.6124C8.95985 13.8707 8.06265 12.8165 7.53283 11.5831C7.00302 10.3497 6.86439 8.99251 7.13449 7.68314C7.40459 6.37377 8.07127 5.17103 9.05024 4.22703C10.0292 3.28302 11.2765 2.64015 12.6344 2.3797C13.9922 2.11925 15.3997 2.25292 16.6788 2.76381C17.9579 3.2747 19.0511 4.13987 19.8203 5.2499C20.5895 6.35993 21 7.66498 21 9C21.0005 9.88654 20.8197 10.7645 20.4681 11.5836C20.1165 12.4028 19.6009 13.1471 18.9508 13.7739C18.3007 14.4008 17.5288 14.898 16.6793 15.2371C15.8298 15.5761 14.9194 15.7504 14 15.75V15.75ZM14 4.5C13.5835 4.50561 13.1696 4.56537 12.7697 4.67766C13.0993 5.10969 13.2576 5.64135 13.2156 6.17622C13.1736 6.71109 12.9343 7.21376 12.5409 7.59305C12.1476 7.97234 11.6263 8.20314 11.0716 8.24361C10.517 8.28407 9.9656 8.13151 9.51756 7.81359C9.26243 8.71996 9.30849 9.68066 9.64924 10.5605C9.98999 11.4403 10.6083 12.1949 11.4171 12.7181C12.2259 13.2413 13.1845 13.5068 14.158 13.4771C15.1314 13.4475 16.0707 13.1242 16.8437 12.5528C17.6166 11.9814 18.1843 11.1907 18.4668 10.2919C18.7493 9.39308 18.7324 8.43149 18.4184 7.54246C18.1045 6.65342 17.5093 5.88171 16.7167 5.33593C15.9241 4.79015 14.9739 4.49779 14 4.5V4.5Z"
          />
        </svg>
        <p class="about__text">
          <span class="about__text--bold">1,4k</span>
          Viewed
        </p>
      </li>
      <li class="about__item">
        <svg
          class="about__icon"
          width="22"
          height="19"
          viewBox="0 0 22 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8646 1.29915C17.51 -0.681392 14.0081 -0.325149 11.8468 1.87593L11.0003 2.73685L10.1538 1.87593C7.99686 -0.325149 4.49068 -0.681392 2.13603 1.29915C-0.562353 3.57233 -0.704147 7.65216 1.71065 10.1162L10.0249 18.5897C10.562 19.1368 11.4343 19.1368 11.9714 18.5897L20.2857 10.1162C22.7048 7.65216 22.563 3.57233 19.8646 1.29915V1.29915Z"
          />
        </svg>
        <p class="about__text about__text--wishlist">Add to wishlist</p>
      </li>
    </ul>
    <div class="about__wrapper">
      <div class="about__prices">
        <h3 class="about__price">${{ getOneProduct?.attributes?.price }}</h3>
        <p class="about__oldprice">$1,020.99</p>
        <div class="about__discount">
          {{ getOneProduct?.attributes?.discount }} %
        </div>
      </div>
      <img src="@/assets/img/store_logo.svg" alt="manthul logo" />
    </div>
    <p
      class="about__text about__description"
      v-html="getOneProduct?.attributes?.description"
    ></p>
    <ul class="about__text about__list">
      <li class="about__point">- Direct Full Array</li>
      <li class="about__point">- Quantum Dot Technology</li>
      <li class="about__point">- Ambient Mode</li>
      <li class="about__point">- One Remote Control</li>
    </ul>
    <div class="about__block">
      <h4 class="about__headline">Screen Size</h4>
      <ul class="about__sizes">
        <li class="about__size">
          <app-button
            class="btn"
            :name="'14-Inch'"
            :variant="'filter-select'"
          ></app-button>
        </li>
        <li class="about__size">
          <app-button
            class="btn"
            :name="'24-Inch'"
            :variant="'filter-select'"
          ></app-button>
        </li>
        <li class="about__size">
          <app-button
            class="btn"
            :name="'32-Inch'"
            :variant="'filter-select'"
          ></app-button>
        </li>
        <li class="about__size">
          <app-button
            class="btn"
            :name="'60-Inch'"
            :variant="'filter-select'"
          ></app-button>
        </li>
      </ul>
    </div>
    <div class="about__footer">
      <div class="counter">
        <button class="counter__btn" @click="decreaseCount">
          <svg
            class="counter__icon"
            width="19"
            height="4"
            viewBox="0 0 19 4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H19V4H0V0Z" />
          </svg>
        </button>
        <p class="counter__number">{{ count }}</p>
        <button class="counter__btn" @click="increaseCount">
          <svg
            class="counter__icon"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.566 0.885986V8.26599H17.568V11.56H10.566V18.976H6.966V11.56H0V8.26599H6.966V0.885986H10.566Z"
            />
          </svg>
        </button>
      </div>
      <div class="about__buttons">
        <app-button
          class="btn"
          :name="'BUY'"
          :variant="'filter-select'"
        ></app-button>
        <app-button
          class="btn"
          :name="'ADD TO CART'"
          :variant="'colored'"
        ></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppRating from "./AppRating.vue";
import AppButton from "./AppButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppAboutProduct",
  components: {
    AppRating,
    AppButton,
  },
  props: {},
  data: () => ({
    count: 1,
  }),
  computed: {
    ...mapGetters("Products", ["getOneProduct"]),
  },
  methods: {
    decreaseCount() {
      this.count > 1 ? this.count-- : -1;
    },
    increaseCount() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding-left: 80px;
  @media (max-width: 992px) {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 0 !important;
  }
  &__subtitle {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #4d4d4d;
    margin-bottom: 12px;
  }

  &__title {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 120%;
    color: #000000;
    margin-bottom: 18px;
  }

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 53px;
    gap: 0 33px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0 7px;

    &:last-child {
      gap: 0 14px;
      margin-left: auto;
    }
  }

  &__icon {
    fill: #bababa;
    width: 28px;
  }

  &__text {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #121212;

    &--bold {
      font-weight: 700;
    }

    &--wishlist {
      font-weight: 700;
      color: #ff7020;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
  }

  &__prices {
    display: flex;
    align-items: flex-end;
  }

  &__price {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: #ff7020;
    margin-right: 20px;
  }

  &__oldprice {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #8d8d8d;
    text-decoration: line-through;
    margin-bottom: 5px;
    margin-right: 17px;
  }

  &__discount {
    padding: 2px 8px;
    background-color: #3ab137;
    border-radius: 6px;
    margin-bottom: 7px;

    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #ffffff;
  }

  &__description {
    margin-bottom: 17px;
  }

  &__list {
    margin-bottom: 42px;
  }

  &__point {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 57px;
  }

  &__headline {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  &__sizes {
    display: flex;
    align-items: center;
    gap: 0 16px;
  }

  &__size {
    & .btn {
      padding: 23px 35px;
      border-radius: 12px;
      color: #7b7b7b;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 0 15px;

    & .btn {
      padding: 23px 62px;
      border-radius: 12px;
    }
  }
}

.counter {
  width: 214px;
  height: 70px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__btn {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:hover .counter__icon {
      fill: #ff7020;
    }
  }

  &__icon {
    fill: #d2d2d2;
  }

  &__number {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #ff7020;
  }
}

@media (max-width: 1599px) {
  .about {
    &__info {
      gap: 0 14px;
    }

    &__headline {
      margin-bottom: 12px;
    }

    &__size {
      & .btn {
        padding: 12px 16px;
      }
    }

    &__buttons {
      & .btn {
        padding: 18px 48px;
      }
    }
  }

  .counter {
    width: 170px;
    height: 60px;
  }
}

@media (max-width: 1279px) {
  .about {
    padding-left: 40px;

    &__info {
      flex-direction: column;
      align-items: start;
      gap: 15px 0;
      margin-bottom: 40px;
    }

    &__item {
      &:not(:last-child) {
        margin-right: 0;
      }

      &:last-child {
        margin-left: 0;
      }
    }

    &__wrapper {
      padding-bottom: 12px;
    }

    &__block {
      flex-direction: column;
      align-items: start;
      margin-bottom: 48px;
    }

    &__footer {
      flex-direction: column;
      align-items: start;
    }
  }

  .counter {
    margin-bottom: 16px;
  }
}
</style>
