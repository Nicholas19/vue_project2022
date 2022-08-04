<template>
  <section class="checkout">
    <div class="container" v-if="!success">
      <div class="checkout_wrapper">
        <h1 class="sect_title">Shipping Details</h1>
        <form class="user_form">
          <div class="row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="userInfo.firstName"
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                v-model="userInfo.lastName"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="userInfo.email"
              />
            </div>
            <div class="form-group">
              <label for="phone">Mobile Phone Number</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="userInfo.phone"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                v-model="userInfo.address"
              />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                class="form-control"
                id="country"
                v-model="userInfo.country"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label for="zip">Postcode/ZIP</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                v-model="userInfo.zip"
              />
            </div>
            <div class="form-group">
              <label for="city">Town/City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                v-model="userInfo.city"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="note">Note</label>
            <textarea
              rows="2"
              class="form-control"
              id="note"
              v-model="userInfo.note"
            />
          </div>
        </form>
      </div>
      <app-asidecart>
        <template v-slot:header>My Orders</template>
        <template v-slot:main_content>
          <div class="items unl">
            <div class="row" v-for="item in productsDetailed" :key="item.id">
              <div class="item_count">{{ quantityById(item.id) }}x</div>
              <div class="item_name">{{ item.name }}</div>
              <div class="item_price">${{ item.price }}</div>
            </div>
          </div>
          <div class="total unl">
            <div class="title">Order Total</div>
            <div class="total_price">$ {{ totalSum }}</div>
          </div>
          <div class="payment">
            <h2 class="title">Payment</h2>
            <div class="checks">
              <app-customcheck
                v-for="(item, i) in paymentMethods"
                :key="i"
                class="aside"
                @cus-input="checkDelivery(item)"
                :name="item"
                :lbl="item"
                :isChecked="userInfo.payment === item"
              ></app-customcheck>
            </div>
          </div>
        </template>
        <template v-slot:button>
          <app-button
            name="PLACE ORDER"
            variant="colored"
            class="fw_btn"
            @btnClick="sendOrder"
            :disabled="items.length === 0"
          ></app-button>
        </template>
        <template v-slot:footer>
          <span class="footer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            numquam!
          </span>
        </template>
      </app-asidecart>
    </div>
    <div class="container" v-else>
      <h1 class="sect_title">Your order was send successfully</h1>
      <router-link to="/" class="aside_link"> Back to Shopping</router-link>
    </div>
  </section>
</template>

<script>
import AppAsidecart from "@/components/AppAsidecart.vue";
import AppButton from "@/components/AppButton.vue";
import AppCustomcheck from "@/components/AppCustomcheck.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    AppAsidecart,
    AppButton,
    AppCustomcheck,
  },
  data: () => ({
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      zip: "",
      note: "",
      payment: "",
    },
    paymentMethods: ["Visa", "MasterCard", "PayPal", "Bitcoin"],
    check: false,
    success: false,
  }),
  computed: {
    ...mapState("Cart", ["productsDetailed", "items"]),
    ...mapGetters("Cart", ["quantityById"]),
    totalSum() {
      return this.items?.reduce((acc, item) => {
        return (
          acc +
          item?.quantity *
            this.productsDetailed?.find((obj) => obj.id === item.id)?.price
        );
      }, 0);
    },
  },
  methods: {
    ...mapActions("Cart", [
      "getCartItems",
      "getProductByCart",
      "updateCart",
      "makeOrder",
    ]),
    ...mapMutations("Cart", ["removeFromCart"]),
    checkDelivery(e) {
      this.userInfo.payment = e;
    },
    sendOrder() {
      if (this.items.length > 0) {
        this.makeOrder(this.userInfo, this.items);
        this.items.forEach((item) => {
          this.removeFromCart(item.id);
        });
        this.updateCart();
        this.success = true;
        /* очищаем поля формы */
        for (const [key] of Object.entries(this.userInfo)) {
          this.userInfo[key] = "";
        }
      } else return;
    },
  },
  created() {
    this.getCartItems();
    this.getProductByCart();
  },
};
</script>

<style scoped>
.checkout {
  padding: 80px 0 120px;
}

.checkout .container {
  max-width: 1650px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.checkout_wrapper {
  width: 1061px;
}

.sect_title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  /* identical to box height */
  color: #000000;
  margin-bottom: 50px;
}

.fw_btn {
  width: 100%;
  border-radius: 12px;
  font-size: 20px;
  line-height: 24px;
  padding: 20px;
  margin: 30px 0;
}

.user_form .row {
  display: flex;
  justify-content: space-between;
}

.user_form .row .form-group {
  width: calc(50% - 25px);
}

.user_form .form-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.user_form label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
  margin-bottom: 20px;
}

.user_form .form-control {
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  height: 70px;
  width: 100%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  padding: 23px 40px;
}

.user_form textarea.form-control {
  resize: none;
  height: 113px;
}

.items {
  padding-bottom: 45px;
  font-family: "Lato";
  font-style: normal;
}

.items .row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.items .item_count,
.items .item_price {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  color: #1d1d1d;
}

.items .item_name {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  color: #8d8d8d;
  text-align: left;
  flex: 1;
  padding: 0 45px 0 35px;
}

.items .item_price {
  text-align: right;
}

.unl {
  border-bottom: 2px solid #f3f3f3;
  margin-bottom: 35px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-content: baseline;
}

.total .title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  color: #000000;
}

.total_price {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */
  text-align: right;
  color: #ff7020;
}

span.footer {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  color: #8d8d8d;
}

.summary {
  padding-bottom: 20px;
  font-family: "Lato";
  font-style: normal;
}

.summary .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.summary .label {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */
  color: #8d8d8d;
}

.summary .value {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  text-align: right;
  color: #1d1d1d;
}

.payment {
  padding-bottom: 20px;
}

.payment h2.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
}

.payment .checks div {
  margin: 15px 0;
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

.fw_btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
