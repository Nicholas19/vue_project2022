<template>
  <div class="aside">
    <div class="aside_wrap">
      <h2 class="title">Filters</h2>
      <div class="range">
        <span class="range-title">Price range</span>

        <app-range
          :min="getPrices?.min"
          :max="getPrices?.max"
          :gap="range.gap"
          :input1="filter.rangeMin"
          :input2="filter.rangeMax"
        />
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
      <!--   Colors   -->
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
        <div class="btns">
          <app-button
            v-for="(item, index) in colors"
            v-show="showColors || index < 4"
            :name="item.name"
            :variant="'filter-select'"
            :key="item.name"
            @click="chooseColor(item)"
            :class="{
              'filter-select-active': filter.colors.includes(item),
            }"
          ></app-button>
          <br />
          <app-button
            :name="showColors ? 'Hide' : 'Show more'"
            :variant="'orange'"
            @click="showColors = !showColors"
          ></app-button>
        </div>
        <app-button></app-button>
        <div class="filter_foot">
          <app-button
            :name="'FILTER'"
            :variant="'colored'"
            @btnClick="filterData"
          ></app-button>
          <app-button
            :name="'Reset Filter'"
            :variant="'orange'"
            @click="filterReset"
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "AppAside",
  components: {
    AppDrop,
    AppButton,
    AppRange,
  },
  data: () => ({
    showColors: false,
    /* Дефолтные состояния для тестирования */
    range: {
      gap: 1,
    },
    allSelected: false,
  }),
  computed: {
    ...mapGetters("Colors", ["colors"]),
    ...mapGetters("Brands", ["brands"]),
    ...mapGetters("Products", ["products", "getPrices"]),
    ...mapState("Products", ["filter"]),
    brandsArray() {
      let arr = [];
      this.brands?.forEach((item) => {
        arr.push(item.name);
      });
      return arr;
    },
  },
  created() {
    this.getBrands();
    this.getColors();
    this.loadMaxMinPrice("desc").then(() => {
      this.setMaxPrice(this.getPrices?.max);
    });
    this.loadMaxMinPrice("asc").then(() => {
      this.setMinPrice(this.getPrices?.min);
    });
  },
  methods: {
    ...mapActions("Products", ["loadMaxMinPrice"]),
    ...mapActions("Colors", ["getColors"]),
    ...mapActions("Brands", ["getBrands"]),
    ...mapMutations("Products", [
      "chooseBrand",
      "resetFilter",
      "chooseColor",
      "selectAll",
      "resetColors",
      "setMaxPrice",
      "setMinPrice",
    ]),
    selectAllColors() {
      this.showColors = true;
      this.allSelected = true;
      this.selectAll(this.colors);
    },
    filterReset() {
      this.showColors = false;
      this.resetFilter();
      this.$emit("reset-filter");
    },
    clearAllColors() {
      this.resetColors();
      this.allSelected = false;
      this.showColors = false;
    },
    filterData() {
      this.$emit("filter-data");
    },
  },
};
</script>

<style scoped>
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
