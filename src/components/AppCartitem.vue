<template>
  <div class="item_wrap">
    <app-customcheck
      :name="title"
      @cus-input="select($event)"
    ></app-customcheck>
    <div class="img-box">
      <img :src="imgSrc" class="item-img" />
    </div>
    <div class="main_content">
      <div class="item_info">
        <div class="head">
          <router-link to="/" class="aside_link"
            ><div class="prod_title">{{ title }}</div>
          </router-link>
          <div class="sku">{{ id }}</div>
        </div>
        <div class="price">$ {{ price }}</div>
        <div class="btns">
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
          <app-button variant="bordered" icon @click="deleteItem">
            <template v-slot:default>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3571 1.37501H12.5357L12.158 0.571492C12.078 0.399709 11.9548 0.255209 11.8022 0.154247C11.6496 0.0532863 11.4736 -0.000130108 11.2942 7.53359e-06H6.70179C6.52274 -0.000728544 6.34712 0.0524887 6.19506 0.153562C6.04299 0.254636 5.92062 0.399477 5.84196 0.571492L5.46429 1.37501H0.642857C0.472361 1.37501 0.308848 1.44744 0.188289 1.57637C0.0677294 1.7053 0 1.88017 0 2.06251L0 3.43751C0 3.61984 0.0677294 3.79471 0.188289 3.92364C0.308848 4.05257 0.472361 4.12501 0.642857 4.12501H17.3571C17.5276 4.12501 17.6912 4.05257 17.8117 3.92364C17.9323 3.79471 18 3.61984 18 3.43751V2.06251C18 1.88017 17.9323 1.7053 17.8117 1.57637C17.6912 1.44744 17.5276 1.37501 17.3571 1.37501ZM2.1375 20.0664C2.16816 20.59 2.38426 21.0815 2.74181 21.4407C3.09936 21.7999 3.57147 21.9999 4.06205 22H13.9379C14.4285 21.9999 14.9006 21.7999 15.2582 21.4407C15.6157 21.0815 15.8318 20.59 15.8625 20.0664L16.7143 5.50001H1.28571L2.1375 20.0664Z"
                  fill="#A4A4A4"
                />
              </svg>
            </template>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCustomcheck from "@/components/AppCustomcheck.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "AppCartitem",
  components: {
    AppCustomcheck,
    AppButton,
  },
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Product Title",
    },
    id: {
      type: String,
      default: "SKU 12314124124",
    },
    price: {
      type: Number,
      default: 500,
    },
    count: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    decreaseCount() {
      this.$emit("less");
    },
    increaseCount() {
      this.$emit("more");
    },
    deleteItem() {
      this.$emit("deleteItem");
    },
    select(e) {
      this.$emit("choose", e);
    },
  },
};
</script>

<style scoped>
.item_wrap {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  display: flex;
  padding: 25px;
  margin-bottom: 20px;
}

.main_content {
  display: flex;
  margin-left: 30px;
  flex: 1;
}

.img-box {
  width: 152px;
  height: 133px;
  background: #c4c4c4;
  border-radius: 14px;
}

.item_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.item_info .head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Poppins";
  font-style: normal;
}

.head .prod_title {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
}

.head .prod_title:hover {
  color: #ff7020;
}

.head .sku {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  color: #4d4d4d;
}

.price {
  margin-top: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  color: #ff7020;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.btns button:not(.counter__btn) {
  margin-left: 20px;
  width: 54px;
  display: flex;
}

.btns button:not(.counter__btn) svg {
  margin: 0 auto;
}

.btns button:not(.counter__btn):hover svg path {
  fill: #fff;
}

.counter {
  width: 214px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.counter__btn {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.counter__icon:hover {
  fill: #ff7020;
}

.counter__icon {
  fill: #d2d2d2;
}

.counter__number {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: #ff7020;
}
</style>
