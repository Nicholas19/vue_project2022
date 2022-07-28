<template>
  <div class="slider">
    <div class="progress" :style="fillColor"></div>
  </div>
  <div class="input__range">
    <input
      id="input1"
      type="range"
      :min="min"
      :max="max"
      :step="priceGap"
      :value="minPrice"
      @input="getFirstInput"
    />
    <input
      id="input2"
      type="range"
      :min="min"
      :max="max"
      :step="priceGap"
      :value="maxPrice"
      @input="getSecondInput"
    />
  </div>
  <div class="input__values">
    <span> ${{ minPrice }}</span>
    <span> ${{ maxPrice }}</span>
  </div>
</template>

<script>
export default {
  name: "AppRange",

  data() {
    return {
      min: 0,
      max: 100000,
      minPrice: 15000,
      maxPrice: 80500,
      priceGap: 500,
    };
  },
  methods: {
    getFirstInput(e) {
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
    },
  },
  computed: {
    fillColor() {
      let percent1 = (this.minPrice / this.max) * 100;
      let percent2 = (this.maxPrice / this.max) * 100;
      return {
        "background-image": `linear-gradient(to right, #dadae5 ${percent1}% , #ff7020 ${percent1}% , #ff7020 ${percent2}%, #dadae5 ${percent2}%)`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.slider {
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
