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
        :step="priceGap"
        :value="input1"
        @input="$emit('update:input1', parseInt($event.target.value))"
      />
      <input
        id="input2"
        type="range"
        :min="min"
        :max="max"
        :step="priceGap"
        :value="input2"
        @input="$emit('update:input2', parseInt($event.target.value))"
      />
    </div>
    <div class="input__values">
      <span> ${{ input1 }}</span>
      <span> ${{ input2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRange",
  props: {
    input1: {
      type: Number,
      required: true,
    },
    input2: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    priceGap: {
      type: Number,
      default: 50,
    },
    fillColor: {
      type: String,
      default: "",
    },
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.wrapp {
  margin-top: 30px;
}
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
