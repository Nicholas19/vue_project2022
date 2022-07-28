<template>
  <section class="cart">
    <div class="container">
      <div class="cart_wrapper">
        <div class="cart_head">
          <div class="cart_head-left">
            <app-customcheck name="all"></app-customcheck>
            <span class="sel">Select all</span>
          </div>
          <div class="cart_head-right">
            <app-button name="UPDATE CART" variant="orange"></app-button>
            <span class="divider"></span>
            <app-button name="REMOVE" variant="red"></app-button>
          </div>
        </div>
        <div class="cart-items">
          <app-cartitem
            v-for="item in items"
            :key="item.sku"
            :sku="item.sku"
            :title="item.name"
            :price="item.price"
            :count="item.count"
            :checked="false"
          ></app-cartitem>
        </div>
      </div>
      <app-asidecart>
        <template v-slot:header> Shopping summary</template>
        <template v-slot:main_content>
          <div class="total">
            <div class="total_title">Total</div>
            <div class="total_sum">$ {{ totalSum }}</div>
          </div>
        </template>
        <template v-slot:button>
          <app-button
            name="CHECKOUT"
            variant="colored"
            class="fw_btn"
          ></app-button>
        </template>
        <template v-slot:footer>
          <div class="footer_btn">
            <router-link to="/" class="aside_link"
              >Back to Shopping
            </router-link>
          </div>
        </template>
      </app-asidecart>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppAsidecart from "@/components/AppAsidecart.vue";
import AppCartitem from "@/components/AppCartitem.vue";
import AppCustomcheck from "@/components/AppCustomcheck.vue";

export default {
  data: () => ({
    items: [
      {
        name: "tv",
        sku: "tv1",
        count: 1,
        price: 500,
      },
      { name: "phone", sku: "phone1", count: 1, price: 250 },
      { name: "laptop", sku: "laptop1", count: 1, price: 400 },
    ],
  }),
  computed: {
    totalSum() {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item.count * item.price;
      });
      return sum;
    },
  },
  components: {
    AppButton,
    AppAsidecart,
    AppCartitem,
    AppCustomcheck,
  },
};
</script>

<style scoped>
.cart {
  padding: 80px 0 120px;
}

.cart .container {
  max-width: 1650px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.cart_wrapper {
  width: 1061px;
}

.cart_head {
  height: 88px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 30px 25px;
  margin: 0 0 30px 0;
  justify-content: space-between;
}

.cart_head-left,
.cart_head-right {
  display: flex;
  align-items: center;
}

.cart_head-right {
  margin-right: 30px;
}

.cart_head-right .divider {
  height: 27px;
  width: 2px;
  background-color: #ededed;
  border-radius: 8px;
  margin: 0 27px;
}

.cart_head .sel {
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}

.footer_btn {
  text-align: center;
  margin-top: 30px;
}

.fw_btn {
  width: 100%;
  border-radius: 12px;
  font-size: 20px;
  line-height: 24px;
  padding: 20px;
  margin-top: 30px;
}

.total {
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
  font-style: normal;
  align-items: center;
}

.total_title {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  color: #000000;
}

.total_sum {
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */
  text-align: right;

  color: #ff7020;
}

.aside_link {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ff7020;
}

.aside_link:hover {
  color: #7b7b7b;
}
</style>
