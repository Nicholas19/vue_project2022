<template>
  <div class="wrapp">
    <div class="slider">
      <div class="progress" :style="{ backgroundImage: fillColor }"></div>
    </div>
    <div class="input__range">
      <input
        id="input1"
        type="range"
        :min="min"
        :max="max"
        :step="gap"
        :value="input1"
        @input="setNewMinPrice"
      />
      <input
        id="input2"
        type="range"
        :min="min"
        :max="max"
        :step="gap"
        :value="input2"
        @input="setNewMaxPrice"
      />
    </div>
    <div class="input__values">
      <span> {{ input1 }}$</span>
      <span> {{ input2 }}$</span>
    </div>
  </div>
</template>

<script>
/* $emit('update:input1', parseInt($event.target.value)) */
import { mapMutations } from "vuex";
export default {
  name: "AppRange",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    input1: {
      type: Number,
      default: 0,
    },
    input2: {
      type: Number,
      default: 0,
    },
    gap: {
      type: Number,
      default: 30,
    },
  },
  computed: {
    fillColor() {
      let percent1 = (this.input1 / this.max) * 100;
      let percent2 = (this.input2 / this.max) * 100;

      return `linear-gradient(to right, #dadae5 ${percent1}% , #FF7020 ${percent1}% , #FF7020 ${percent2}%, #dadae5 ${percent2}%)`;
    },
  },
  methods: {
    ...mapMutations("Products", ["setMaxPrice", "setMinPrice"]),
    setNewMinPrice(e) {
      if (this.input2 - parseInt(e.target.value) <= this.gap) {
        this.setMinPrice(this.input2 - this.gap);
      } else {
        this.setMinPrice(parseInt(e.target.value));
      }
    },
    setNewMaxPrice(e) {
      if (this.input2 - parseInt(e.target.value) <= this.gap) {
        this.setMaxPrice(this.input1 + this.gap);
      } else {
        this.setMaxPrice(parseInt(e.target.value));
      }
    },
    /*   getFirstInput(e) {
      this.minPrice = parseInt(e.target.value);
      if (parseInt(this.maxPrice) - parseInt(this.minPrice) <= this.priceGap) {
        this.minPrice = parseInt(this.maxPrice) - this.priceGap;
      }
    },
    getSecondInput(e) {
      this.maxPrice = parseInt(e.target.value);
      if (parseInt(this.maxPrice) - parseInt(this.minPrice) <= this.priceGap) {
        this.maxPrice = parseInt(this.minPrice) + this.priceGap;
      }
    }, */
  },
};
</script>

<style scoped lang="scss">
.slider {
  margin-top: 30px;

  height: 6px;
  position: relative;
  background: #c4c4c4;
  border-radius: 5px;
}

.progress {
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5px;
  background: #ff7020;
}

.input {
  &__range {
    position: relative;

    input {
      left: 0;
      position: absolute;
      width: 100%;
      height: 6px;
      top: -5px;
      background: none;
      pointer-events: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }

  &__wrap {
    position: relative;

    &:before {
      content: attr(data-min);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:after {
      content: attr(data-max);
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  &__price {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
  &__values {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    span {
      display: block;
      margin: 0 auto;

      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}

input[type="range"]::-webkit-slider-thumb {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #ff7020;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

input[type="range"]::-moz-range-thumb {
  height: 24px;
  width: 24px;
  border: none;
  border-radius: 50%;
  background: #ff7020;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
