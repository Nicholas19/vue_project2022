<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__left">
          <div class="footer__logo">
            <router-link to="/">
              <img src="@/assets/images/svg/logo.svg" alt="" />
            </router-link>
          </div>
          <p class="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="social">
            <li class="social__item">
              <router-link to="/">
                <svg class="social__icon" width="25" height="19">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#youtube"
                  ></use>
                </svg>
              </router-link>
            </li>
            <li class="social__item">
              <router-link to="/">
                <svg class="social__icon" width="20" height="20">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#linkid"
                  ></use>
                </svg>
              </router-link>
            </li>
            <li class="social__item">
              <router-link to="/">
                <svg class="social__icon" width="18" height="16">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#twitter"
                  ></use>
                </svg>
              </router-link>
            </li>
            <li class="social__item">
              <router-link to="/">
                <svg class="social__icon" width="10" height="18">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#facebook"
                  ></use>
                </svg>
              </router-link>
            </li>
            <li class="social__item">
              <router-link to="/">
                <svg class="social__icon" width="18" height="18">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#instagram"
                  ></use>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__middle">
          <div class="footer__middle--left">
            <h2 class="footer__title">QUICK LINKS</h2>
            <ul class="footer__list">
              <li
                class="footer__item"
                v-for="link in linksLeft"
                :key="link.route"
              >
                <router-link :to="{ name: link.route }" class="footer__link">
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer__middle--right">
            <h2 class="footer__title">CUSTOMER AREA</h2>
            <ul class="footer__list">
              <li
                class="footer__item"
                v-for="link in linksRight"
                :key="link.route"
              >
                <router-link :to="{ name: link.route }" class="footer__link">
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__right">
          <h2 class="footer__title">CONTACT</h2>
          <p class="footer__text footer__text--address">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <div class="footer__wrap">
            <router-link to="/" class="footer__question-link">
              <svg class="footer__icon" width="48" height="51">
                <use
                  xlink:href="@/assets/images/svg/sprites.svg#footer-address"
                ></use>
              </svg>

              <div class="footer__question">
                <h4 class="footer__question-title">Have any question?</h4>

                <p class="footer__question-tel">+ 123 456 789</p>
              </div>
            </router-link>

            <button class="footer__chat">LIVE CHAT</button>
          </div>

          <div class="footer__wrap footer__wrap--buttons">
            <button class="footer__btn">
              <svg class="footer__icon" width="30" height="38">
                <use xlink:href="@/assets/images/svg/sprites.svg#apply"></use>
              </svg>
              <div class="footer__btn-wrap">
                <h5 class="footer__btn-title">Download on the</h5>
                <p class="footer__btn-name">App Store</p>
              </div>
            </button>
            <button class="footer__btn">
              <svg class="footer__icon" width="26" height="32">
                <use xlink:href="@/assets/images/svg/sprites.svg#google"></use>
              </svg>
              <div class="footer__btn-wrap">
                <h5 class="footer__btn-title">GET IT ON</h5>
                <p class="footer__btn-name">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__bottom-title">EXTRA - © 2020 All Rights Reserved</p>
        <div class="footer__bottom-wrap">
          <p class="footer__bottom-title">Payment</p>
          <ul class="footer__bottom-list">
            <li
              class="footer__bottom-item"
              v-for="link in linksPayment"
              :key="link.route"
            >
              <router-link
                :to="{ name: link.route }"
                :class="link.class"
                class="footer__link"
              >
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    linksLeft: [
      { route: "home", text: "About us" },
      { route: "home", text: "Contact us" },
      { route: "home", text: "Products" },
      { route: "home", text: "Login" },
      { route: "home", text: "Sign Up" },
    ],
    linksRight: [
      { route: "home", text: "My Account" },
      { route: "home", text: "Orders" },
      { route: "home", text: "Tracking List" },
      { route: "home", text: "Terms" },
      { route: "home", text: "Privacy Policy" },
      { route: "home", text: "My Cart" },
    ],
    linksPayment: [
      { route: "home", text: "VASI", class: "vasi" },
      { route: "home", text: "MASTERKARD", class: "master" },
      { route: "home", text: "PEYPOL", class: "peypol" },
      { route: "home", text: "BITKOIN", class: "bitok" },
    ],
  }),
};
</script>

<style scoped lang="scss">
.footer {
  overflow: hidden;
  &__top {
    padding-bottom: 70px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 130px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%);
      width: calc(100% + 15vw);
      height: 1px;
      background: #c4c4c4;
    }
  }

  &__left {
    width: 100%;
    max-width: 390px;
  }

  &__logo {
    margin-bottom: 40px;
  }

  &__title {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  &__text {
    margin-bottom: 50px;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);

    &--address {
      color: rgba(0, 0, 0, 1);
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }

  &__middle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
  }

  &__list {
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__link {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
  }

  &__right {
    width: 100%;
    max-width: 493px;
  }

  &__wrap {
    display: flex;
    margin-bottom: 60px;

    &--buttons {
      margin-bottom: 0;
      justify-content: space-between;
    }
  }

  &__question {
    margin-left: 30px;

    &-link {
      display: flex;
    }

    &-title {
      font-family: "Lato", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #000000;
      margin-bottom: 6px;
    }

    &-tel {
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;
      color: #ff7020;
    }
  }

  &__chat {
    background: transparent;
    width: 100%;
    max-width: 166px;
    margin-left: auto;
    padding: 15px;
    color: #3d7bd8;

    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3d7bd8;
    border-radius: 12px;
  }

  &__btn {
    width: 100%;
    max-width: 231px;
    height: 76px;
    background: #232323;
    border-radius: 12px;
    padding: 9px 25px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-right: 30px;
    }

    &-wrap {
      margin-left: 20px;
    }

    &-title {
      font-family: "Lato", sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
      margin-bottom: 3px;
    }

    &-name {
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 900;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      text-transform: uppercase;
      color: #ffffff;
    }
  }

  &__bottom {
    padding: 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0;
      text-align: left;
    }

    &-wrap {
      display: flex;
      align-items: center;
    }

    &-list {
      display: flex;
      align-items: center;
      margin-left: 75px;
    }
    &-item {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
}

.social {
  display: grid;
  grid-template-columns: repeat(5, 58px);
  gap: 15px;

  &__item {
    background: rgba(203, 203, 203, 0.23);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    padding: 15px;
    transition: all 0.5s ease-in-out;

    @media (any-hover: hover) {
      &:hover {
        transition: all 0.5s ease-in-out;
        background: rgba(255, 112, 32, 0.23);
        cursor: pointer;

        .social__icon {
          color: #ff7020;
        }
      }
    }
  }

  &__icon {
    transition: all 0.5s ease-in-out;

    color: rgba(78, 78, 78, 0.45);
  }
}
.vasi {
  color: rgba(61, 123, 216, 0.65);
}
.master {
  color: rgba(255, 75, 75, 0.65);
}
.peypol {
  color: rgba(108, 192, 227, 0.65);
}
.bitok {
  color: rgba(255, 135, 23, 0.65);
}
.address {
  font-size: inherit;
}
</style>
