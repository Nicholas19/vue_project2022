<template>
  <button
    type="button"
    @click="click"
    class="stndt-btn"
    :class="[{ icon: icon }, variant]"
  >
    <img v-if="icon" :src="iconSrc" />
    {{ name }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    name: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    iconSrc: {
      type: String,
      default: "",
    },
  },
  methods: {
    click() {
      this.$emit("btnClick");
    },
  },
};
</script>

<style scoped>
.stndt-btn {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #7b7b7b;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.stndt-btn:hover,
.stndt-btn:active {
  color: #ff7020;
}

.orange {
  color: #ff7020;
}

.orange:hover {
  color: #7b7b7b;
}

.red {
  color: #ff3535;
}

.red:hover {
  color: #7b7b7b;
}

.icon,
.icon-active,
.colored,
.bordered,
.variant-select,
.variant-select-active,
.filter-select,
.filter-select-active {
  border: 1px solid;
}

.icon {
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  padding: 15px;
  line-height: 0;
}

.icon:hover,
.icon-active {
  background: #ff7020;
  border-color: #ff7020;
}

.icon img {
  max-height: 22px;
}

.colored {
  background: #ff7020;
  color: #fbfbfb;
}

.colored:hover {
  border-color: #ff7020;
  color: #ff7020;
  background: #fbfbfb;
}

.bordered {
  background: #fbfbfb;
  color: #ff7020;
}

.bordered:hover {
  border-color: #ff7020;
  color: #fbfbfb;
  background: #ff7020;
}

.variant-select {
  color: #7b7b7b;
  border-color: #ffeade;
}

.variant-select-active,
.variant-select:hover {
  background: rgba(255, 112, 32, 0.15);
  border-color: #ffeade;
  color: #ff7020;
}

.filter-select {
  border-color: #ffd6be;
  color: #ff7020;
}

.filter-select-active,
.filter-select:hover {
  background: #ffe6d9;
  border-color: #ffe6d9;
  color: #ff7020;
}
</style>
