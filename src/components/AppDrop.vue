<template>
  <div class="custom-select-wrapper" :class="{ 'open-dropdown': shown }">
    <div class="input-wrapper">
      <label> {{ lbl }} </label>
      <!--  @click.stop - запрещает ивент клика по документу для сворачивания списка    -->
      <input
        type="text"
        class="custom-select"
        readonly="readonly"
        @click.stop="show"
        :value="default_item"
        :placeholder="placeholder"
      />
      <ul class="droplist">
        <li
          v-for="item in values"
          :key="item"
          @click="choose(item)"
          v-show="item !== default_item"
        >
          <span> {{ item }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    default_item: String,
    values: Array,
    lbl: String,
    placeholder: String,
  },
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    choose(e) {
      let value = e;
      this.show();
      this.$emit("choose-drop", value);
    },
    show() {
      this.shown = !this.shown;
    },
    hide() {
      this.shown = false;
    },
  },
  created() {
    /*сворачиваем дропдаун при клике в любой точке*/
    document.addEventListener("click", this.hide);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap");
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
  border: 1px solid #ced4da;
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
  transition: 0.1s ease-out;
  position: absolute;
  width: auto;
  left: 0;
  right: 0;
}

input,
.custom-select-wrapper ul li {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  color: #575757;
}

.custom-select-wrapper ul li:hover {
  background-color: #0d6efd;
}

.custom-select-wrapper.open-dropdown ul {
  height: auto;
  transition: 0.1s ease-in;
}

.custom-select-wrapper {
  position: relative;
  cursor: pointer;
}
</style>
