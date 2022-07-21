<template>
  <div class="slider">
    <div class="progress"></div>
  </div>
  <div class="range-input">
    <input
      type="range"
      min="0"
      max="100000"
      step="500"
      v-model.number="minPrice"
      @change="setRange"
    />

    <input
      type="range"
      min="0"
      max="100000"
      step="500"
      v-model.number="maxPrice"
      @change="setRange"
    />
  </div>
  <div class="range__values">
    <p>Min{{ minPrice }}</p>
    <p>Max{{ maxPrice }}</p>
  </div>
</template>

<script>
export default {
  name: "AppRange",

  data() {
    return {
      minPrice: 0,
      maxPrice: 100000,
      priceGap: 500,
    };
  },
  methods: {
    setRange() {
      if (this.minPrice > this.maxPrice) {
        let buffer = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = buffer;
      }

      // if(this.maxPrice - this.minPrice) && this.maxPrice <= this.
    },
    // slideOne() {
    //   // if(parseInt(this.))
    // }
  },
};
</script>

<style scoped lang="scss">
//.range {
//  width: 100%;
//  max-width: 350px;
//  margin-top: 30px;
//  text-align: center;
//  position: relative;
//
//  & svg,
//  input[type="range"] {
//    width: 100%;
//    max-width: 350px;
//
//    position: absolute;
//    left: 0;
//    bottom: 0;
//
//    -webkit-appearance: none;
//    -moz-appearance: none;
//    appearance: none;
//  }
//  input[type="range"]::-webkit-slider-thumb {
//    background: #ff7020;
//    cursor: pointer;
//    width: 24px;
//    height: 24px;
//    border-radius: 50%;
//    -webkit-appearance: none;
//    margin-top: -10px;
//    z-index: 2;
//    position: relative;
//  }
//  input[type="range"]::-webkit-slider-runnable-track {
//    height: 6px;
//    background-color: #c4c4c4;
//  }
//}
.slider {
  height: 6px;
  position: relative;
  background: #c4c4c4;
  border-radius: 5px;
}

.slider .progress {
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #ff7020;
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  width: 100%;
  height: 6px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
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
