<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__top">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/images/svg/logo.svg" alt="" />
            </router-link>
          </div>
          <div class="header__search">
            <input
              type="text"
              class="header__input"
              placeholder="Search here..."
            />
            <button class="header__btn">
              <svg width="24" height="24">
                <use xlink:href="@/assets/images/svg/sprites.svg#search"></use>
              </svg>
            </button>
          </div>
          <div class="header__right">
            <router-link to="/" class="header__cart">
              <svg width="25" height="25">
                <use xlink:href="@/assets/images/svg/sprites.svg#basket"></use>
              </svg>
              <span class="header__count" v-if="$store.getters.cartCount">{{
                $store.getters.cartCount
              }}</span>
            </router-link>
            <!-- Заглушка -->
            <app-button
              :name="'MY ACCOUNT'"
              :variant="'colored'"
              icon
              :icon-src="require('@/assets/images/svg/person.svg')"
              @mouseover="showInfo"
              @mouseleave="showInfo"
            >
            </app-button>
            <div class="userInfo" v-if="userInfo">
              <div class="info"><span>Full name:</span>{{ name }}</div>
              <div class="info"><span>Login:</span>{{ login }}</div>
              <div class="info"><span>Email:</span>{{ email }}</div>
            </div>
          </div>
        </div>
        <div class="header__bottom">
          <nav class="header__nav nav">
            <ul class="nav__list">
              <li class="nav__item" v-for="link in links" :key="link.route">
                <router-link :to="{ name: link.route }" class="nav__link"
                  >{{ link.text }}
                </router-link>
              </li>

              <li class="nav__item">
                <router-link to="/" class="nav__link nav__link--hot"
                  >HOT DEALS
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
  data: () => ({
    links: [
      { route: "home", text: "All Categories" },
      { route: "home", text: "accessories" },
      { route: "home", text: "Smartphone" },
      {
        route: "home",
        text: "Gaming Equipments",
      },
      { route: "home", text: "TV & Monitors" },
      { route: "home", text: "Headphones" },
      { route: "home", text: "Speaker" },
    ],
    userInfo: false,
    name: "Hoida Vitalii",
    login: "Ho_Vi",
    email: "vitaliy.gojda@gmail.com",
  }),
  methods: {
    showInfo() {
      this.userInfo = !this.userInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  &__inner {
  }

  &__top {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 200px;
    margin-right: 130px;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__search {
    overflow: hidden;
    border-radius: 12px;
    max-width: 796px;
    flex: 1;
    display: flex;
    background-color: #f1f1f1;
  }

  &__input {
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

  &__btn {
    flex-shrink: 0;
    cursor: pointer;
    margin: 0;
    padding: 0 30px 0 10px;

    border: none;
    outline: none;
    background-color: transparent;

    img {
      display: block;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    margin-left: 50px;
    position: relative;
  }

  &__cart {
    margin-right: 58px;
    position: relative;
    cursor: pointer;

    svg {
    }
  }

  &__count {
    top: -10px;
    right: -12px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-color: #ff7020;
    color: #fff;
    font-family: "Lato";
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 19px;
    color: #ffffff;
  }

  &__bottom {
  }
}

.container {
  max-width: 1650px;
  padding: 0 15px;
  margin: 0 auto;
}

.nav {
  &__list {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    list-style: none;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 70px;
    }
  }

  &__link {
    text-decoration: none;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;

    color: #4d4d4d;

    &--hot {
      font-weight: 900;
      color: #161616;
      display: flex;

      &::before {
        content: "";
        width: 18px;
        height: 20px;
        margin-right: 10px;
        background: url(@/assets/images/svg/fire.svg);
      }
    }

    @media (any-hover: hover) {
      &:hover {
        color: #222222;
      }
    }
  }
}
.header__right button.colored {
  border-radius: 12px;
  padding: 21px 45px 21px 31px;
  width: 250px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 11px 27px rgba(255, 112, 32, 0.36);
  border: 1px solid #ff7020;
}
.header__right button.colored:hover {
  background-color: #ff7020;
  color: #fff;
  box-shadow: unset;
}

.userInfo {
  position: absolute;
  top: 100px;
  left: 0;
  padding: 20px;
  border: 2px solid #ff7020;
  background: #ffe6d9;
  width: 100%;
  border-radius: 12px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 32px;
  color: #575757;
}

.userInfo .info {
  padding: 10px 0;
}

.userInfo span {
  color: #ff7020;
  margin-right: 10px;
}
</style>
