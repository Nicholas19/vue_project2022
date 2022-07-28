<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      placeholder="Search here..."
      v-model="value"
      @change="productsSearch($event.target.value)"
    />
    <button class="search-btn">
      <svg width="24" height="24">
        <use xlink:href="@/assets/images/svg/sprites.svg#search"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeaderSearch",
  data: () => ({
    value: "",
  }),
  computed: {
    ...mapState("Products", ["products"]),
  },
  watch: {
    $route() {
      this.value = "";
    },
    products() {
      this.value = "";
    },
  },
  methods: {
    ...mapActions("Products", ["productsSearch"]),
  },
};
</script>

<style scoped>
.search {
  overflow: hidden;
  border-radius: 12px;
  max-width: 796px;
  flex: 1;
  display: flex;
  background-color: #f1f1f1;
}

.search-input {
  transition: 0.25s ease;
  outline: none;
  background-color: transparent;

  border: none;
  padding: 24px 0 24px 30px;
  width: 100%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #4d4d4d;
}

.search-btn {
  flex-shrink: 0;
  cursor: pointer;
  margin: 0;
  padding: 0 30px 0 10px;

  border: none;
  outline: none;
  background-color: transparent;
}

.search-btn img {
  display: block;
}
</style>
