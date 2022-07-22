<template>
  <div class="custom-select-wrapper" :class="{ 'open-dropdown': shown }">
    <div class="input-wrapper">
      <input
        type="text"
        class="custom-select"
        readonly="readonly"
        @click="show"
        :value="default_item"
        :placeholder="placeholder"
      />
      <ul class="droplist">
        <li
          v-for="item in values"
          :key="item"
          @click="choose(item)"
          :class="{ selected: item === default_item }"
        >
          <span> {{ item }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    default_item: String,
    values: Array,
    placeholder: String,
  },
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    ...mapMutations("Products", ["chooseBrand"]),
    choose(e) {
      let value = e;
      this.chooseBrand(value);
      this.show();
    },
    show() {
      this.shown = !this.shown;
    },
    hide(e) {
      if (!this.$el.contains(e.target)) {
        this.shown = false;
      }
    },
  },
  created() {
    document.addEventListener("click", this.hide);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hide);
  },
};
</script>

<style>
.custom-select-wrapper .input-wrapper {
  background-color: #fff;
}

.custom-select-wrapper .input-wrapper input[type="text"] {
  border: 0;
  padding: 22px 32px;
  cursor: pointer;
  outline: none;
  width: 100%;
  border: 2px solid #ebebeb;
  border-radius: 7px;
}

.custom-select-wrapper.open-dropdown ul {
  border: 2px solid #ebebeb;
}

.custom-select-wrapper ul {
  border: none;
  list-style: none;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 0;
  height: 0;
  overflow: hidden;
  margin: 5px 0 0 0;
  position: absolute;
  width: auto;
  left: 0;
  right: 0;
  z-index: 1;
}

input,
.custom-select-wrapper ul li {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 32px;
  color: #575757;
}

.custom-select-wrapper ul li:hover {
  color: #ff7020;
}

.custom-select-wrapper.open-dropdown ul {
  height: auto;
}

.custom-select-wrapper {
  position: relative;
  cursor: pointer;
}

.custom-select-wrapper ul li.selected {
  color: #4d4d4d73;
  cursor: default;
}
</style>
