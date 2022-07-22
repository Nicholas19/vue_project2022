<template>
  <div class="aside">
    <div class="aside_wrap">
      <h2 class="title">Filters</h2>
      <div class="range">
        <span class="range-title">Price range</span>
        <p>заглушка</p>
      </div>
      <div class="drops">
        <app-drop
          style="margin-bottom: 20px"
          :placeholder="'Choose Brand'"
          :values="$store.state.brands"
          :default_item="$store.state.brand"
        ></app-drop>
      </div>
      <div class="filter">
        <div class="filter_head">
          <span class="range-title">Color</span>
          <app-button :name="'Select All'"></app-button>
        </div>
        <div class="btns">
          <app-button :name="'White'" :variant="'filter-select'"></app-button>
          <app-button :name="'Black'" :variant="'filter-select'"></app-button>
          <app-button :name="'Blue'" :variant="'filter-select'"></app-button>
          <app-button :name="'Red'" :variant="'filter-select'"></app-button>
          <br />
          <app-button :name="'+ Show More'" :variant="'orange'"></app-button>
        </div>
        <app-button></app-button>
        <div class="filter_foot">
          <app-button :name="'FILTER'" :variant="'colored'"></app-button>
          <app-button :name="'Reset Filter'" :variant="'orange'"></app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrop from "@/components/AppDrop.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "AppAside",
  components: {
    AppDrop,
    AppButton,
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
  /* identical to box height */
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

.filter_head button::before {
  content: "";
  display: block;
  background: url("@/assets/images/svg/check.svg") no-repeat;
  width: 20px;
  height: 21px;
  float: left;
  margin: 0 10px 0 0;
}

.filter_head button:hover::before,
.filter_head button.active::before {
  background: url("@/assets/images/svg/check_active.svg") no-repeat;
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
