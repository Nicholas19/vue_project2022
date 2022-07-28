<template>
  <div class="aside">
    <div class="aside_wrap">
      <h2 class="title">Filters</h2>
      <div class="range">
        <span class="range-title">Price range</span>
        {{ getMinPrice }}
        {{ getMaxPrice }}
        <app-range
          :min="range.min"
          :max="range.max"
          :valueFirst="range.input1"
          :priceGap="range.gap"
          :valueSecond="range.input2"
          v-model:input1="range.input1"
          v-model:input2="range.input2"
          :fillColor="fillColor"
        ></app-range>
      </div>
      <div class="drops">
        <app-drop
          style="margin-bottom: 20px"
          :placeholder="'Choose Brand'"
          :values="brandsArray"
          :default_item="filter.brand"
          @choose="chooseBrand"
        ></app-drop>
      </div>
      <div class="filter">
        <div class="filter_head">
          <span class="range-title">Color</span>
          <app-button
            v-if="!allSelected"
            :name="'Select All'"
            @click="selectAllColors(colors)"
          ></app-button>
          <app-button
            v-else
            :name="'Clear All'"
            @click="clearAllColors"
            class="clear"
          ></app-button>
        </div>
        <div class="btns" v-if="!showColors">
          <app-button
            :name="colors[item - 1]"
            :variant="'filter-select'"
            v-for="item in 4"
            :key="item"
            @click="chooseColor(colors[item])"
            :class="{
              'filter-select-active': filter.colors.includes(colors[item]),
            }"
          ></app-button>
          <br />
          <app-button
            :name="'+ Show More'"
            :variant="'orange'"
            v-if="colors.length > 4"
            @click="showColors = !showColors"
          ></app-button>
        </div>
        <div class="btns" v-else>
          <app-button
            :name="item"
            :variant="'filter-select'"
            v-for="item in colors"
            :key="item"
            @click="chooseColor(item)"
            :class="{
              'filter-select-active': filter.colors.includes(item),
            }"
          ></app-button>
          <br />
          <app-button
            :name="'+ Show Less'"
            :variant="'orange'"
            @click="showColors = !showColors"
          ></app-button>
        </div>
        <app-button></app-button>
        <div class="filter_foot">
          <app-button :name="'FILTER'" :variant="'colored'"></app-button>
          <app-button
            :name="'Reset Filter'"
            :variant="'orange'"
            @click="resetFilter"
          ></app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrop from "@/components/AppDrop.vue";
import AppButton from "@/components/AppButton.vue";
import AppRange from "@/components/AppRange.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppAside",
  components: {
    AppDrop,
    AppButton,
    AppRange,
  },
  created() {
    this.getBrands();
  },
  data: () => ({
    showColors: false,
    /* Дефолтные состояния для тестирования */
    range: {
      min: 250,
      max: 12000,
      gap: 50,
      input1: 250,
      input2: 12000,
    },
    filter: {
      brand: "",
      colors: [],
      rangeMin: null,
      rangeMax: null,
    },
    allSelected: false,
  }),
  computed: {
    ...mapGetters("Brands", ["brands"]),
    ...mapGetters("Products", ["products", "getMinPrice", "getMaxPrice"]),
    colors() {
      let res = [];
      this.products?.forEach((item) => {
        res.push(item.color);
      });
      return this.find_uniqums(res.flat(1));
    },
    brandsArray() {
      let arr = [];
      this.brands?.forEach((item) => {
        arr.push(item.name);
      });
      return arr;
    },
    fillColor() {
      let percent1 = (this.range.input1 / this.range.max) * 100;
      let percent2 = (this.range.input2 / this.range.max) * 100;
      return `linear-gradient(to right, #dadae5 ${percent1}% , #ff7020 ${percent1}% , #ff7020 ${percent2}%, #dadae5 ${percent2}%)`;
    },
  },
  methods: {
    ...mapActions("Products", ["getProducts"]),
    ...mapActions("Brands", ["getBrands"]),
    find_uniqums(arr) {
      let result = [];
      for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
      return result;
    },
    chooseColor(e) {
      if (this.filter.colors.includes(e)) {
        let i = this.filter.colors.indexOf(e);
        this.filter.colors.splice(i, 1);
      } else {
        this.filter.colors.push(e);
      }
    },
    selectAllColors(arr) {
      this.showColors = true;
      this.allSelected = true;
      arr.forEach((element) => {
        if (!this.filter.colors.includes(element)) {
          this.filter.colors.push(element);
        }
      });
    },
    clearAllColors() {
      this.filter.colors.splice(0, this.filter.colors.length);
      this.allSelected = false;
      this.showColors = false;
    },
    chooseBrand(e) {
      this.filter.brand = e;
    },
    resetFilter() {
      this.filter.brand = "";
      this.showColors = false;
      this.filter.colors.splice(0, this.filter.colors.length);
      this.filter.rangeMin = null;
      this.filter.rangeMax = null;
    },
  },
};
</script>

<style>
.aside {
  margin: 0 60px 0 0;
  width: 350px;
}

.aside_wrap h2.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  /* identical to box height */
  color: #000000;
  margin: 0;
  text-align: left;
}

.range {
  margin: 43px 0 50px 0;
}

.range-title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #575757;
}

.drops {
  font-family: "Lato";
}

.filter {
  margin-top: 40px;
}

.filter_head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.filter_head button {
  color: #575757;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
}

.filter_head button.clear:hover {
  color: #ff3535;
}

.filter_head button::before {
  content: "";
  display: block;
  background: url("../assets/images/svg/check.svg") no-repeat;
  width: 20px;
  height: 21px;
  float: left;
  margin: 0 10px 0 0;
}

.filter_head button.clear::before {
  content: "";
  display: block;
  background: url("@/assets/images/svg/clear.svg") no-repeat;
  width: 20px;
  height: 21px;
  float: left;
  margin: 0 10px 0 0;
  background-size: contain;
}

.filter_head button:hover::before,
.filter_head button.active::before {
  background: url("../assets/images/svg/check_active.svg") no-repeat;
}

.filter_head button.clear:hover::before,
.filter_head button.clear.active::before {
  background: url("@/assets/images/svg/clear_active.svg") no-repeat;
  background-size: contain;
}

.filter .btns button {
  margin: 15px 15px 0 0;
}

.filter .btns .filter-select {
  padding: 16px 35px;
  border-radius: 7px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
}

.filter_foot {
  margin-top: 55px;
  text-align: center;
}

.filter_foot .colored {
  width: 100%;
  padding: 21px;
  border-radius: 14px;
  margin-bottom: 30px;
}
</style>
