<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <div class="category">
          <h2 class="title">Filters</h2>
          <!--     range     -->
          <div class="category__range">
            <h3 class="category__title category__title--price">Price range</h3>

            <!--  тут должен быть input range -->
            <AppRange></AppRange>
          </div>

          <!--     selects     -->
          <ul class="category__selects">
            <li class="category__selects-item">
              <app-drop
                style="margin-bottom: 20px"
                :placeholder="'Choose Brand'"
              ></app-drop>
            </li>
            <li class="category__selects-item">
              <app-drop :placeholder="'Choose Location'"></app-drop>
            </li>
          </ul>
          <!--     button color     -->

          <div class="category__colors">
            <div class="category__head">
              <h3 class="category__title">Color</h3>
              <app-button :name="'Select All'"></app-button>
              <!--              <button class="category__all">-->
              <!--                <svg width="20" height="21">-->
              <!--                  <use-->
              <!--                    xlink:href="@/assets/images/svg/sprites.svg#select-all"-->
              <!--                  ></use>-->
              <!--                </svg>-->
              <!--                Select All-->
              <!--              </button>-->
            </div>

            <ul class="category__buttons">
              <li class="category__button">
                <app-button
                  :name="'White'"
                  :variant="'filter-select'"
                  class="btn"
                ></app-button>
              </li>
              <li class="category__button">
                <app-button
                  :name="'Black'"
                  :variant="'filter-select'"
                  class="btn"
                ></app-button>
              </li>
              <li class="category__button">
                <app-button
                  :name="'Blue'"
                  :variant="'filter-select'"
                  class="btn"
                ></app-button>
              </li>

              <li class="category__button">
                <app-button
                  :name="'Red'"
                  :variant="'filter-select'"
                  class="btn"
                ></app-button>
              </li>
            </ul>

            <button class="category__show">+ Show more</button>
          </div>

          <button class="category__filter">FILTER</button>

          <button class="category__reset">Reset Filter</button>
        </div>

        <!--      правая колонка -->
        <div class="cards">
          <div class="cards__head">
            <h2 class="title">Laptop Products</h2>
            <div class="cards__sort">
              <button class="cards__sort-btn">
                <svg width="20" height="19">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#show-1"
                  ></use>
                </svg>
              </button>

              <button class="cards__sort-btn">
                <svg width="19" height="18">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#show-2"
                  ></use>
                </svg>
              </button>

              <button class="cards__sort-btn">Show by</button>

              <!--     тут еще dropdown должен быть-->
            </div>
          </div>
          <ul class="cards__list">
            <li
              class="cards__item"
              v-for="(card, index) in goodsData"
              :key="index"
            >
              <app-card
                :name="card.name"
                :price="card.price"
                :amount="card.amount"
                :picture="card.picture"
                :raiting="card.raiting"
                @click="handleCardClick(card.id)"
                @add-to-cart="addToCart(card.id)"
              ></app-card>
            </li>
          </ul>

          <div class="cards__history">
            <span class="cards__show">Showing 9 of 120 result</span>

            <ul class="cards__pagination">
              <li class="cards__pagination-item cards__pagination-item--active">
                <a href="#" class="cards__pagination-number">1</a>
              </li>
              <li class="cards__pagination-item">
                <a href="#" class="cards__pagination-number">2</a>
              </li>
              <li class="cards__pagination-item">
                <a href="#" class="cards__pagination-number">3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppRange from "@/components/AppRange.vue";
import AppDrop from "@/components/AppDrop.vue";
import AppButton from "@/components/AppButton.vue";
import AppCard from "@/components/AppCard.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "AppMain",
  components: {
    AppRange,
    AppDrop,
    AppButton,
    AppCard,
  },
  data: () => ({
    goodsData: [
      {
        id: 100,
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 4,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        id: 101,
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
      {
        id: 102,
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 2,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        id: 103,
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 3,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        id: 104,
        name: "Ultra slim Macbook Pro 2020",
        price: 1219,
        raiting: 1,
        amount: 78,
        picture: require("@/assets/img/card-3.jpg"),
      },
      {
        id: 105,
        name: "Macbook Pro 2020 With 260 SSD",
        price: 1099,
        raiting: 3,
        amount: 129,
        picture: require("@/assets/img/card.jpg"),
      },
      {
        id: 106,
        name: "Recoil Pro Gaming Laptop",
        price: 2081,
        raiting: 4,
        amount: 13,
        picture: require("@/assets/img/card-4.jpg"),
      },
      {
        id: 107,
        name: "ASUS Gaming Notebook ROG",
        price: 1629,
        raiting: 3,
        amount: 24,
        picture: require("@/assets/img/card-2.jpg"),
      },
    ],
  }),
  methods: {
    handleCardClick(id) {
      this.$router.push({
        name: "product",
        params: { productId: id },
      });
    },
    addToCart(id) {
      // this.$store.state.cart.push(id);
      // this.$store.commit("addToCart", id);
      this.$store.dispatch("addToCart", id);
    },
  },
};
</script>
<style scoped lang="scss">
.btn {
  background: transparent;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff7020;
  border: 1px solid #ffd6be;
  border-radius: 7px;
  width: 100%;
}

.products {
  padding-top: 80px;
  padding-bottom: 120px;

  &__wrapper {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 60px;
  }
}

.category {
  &__title {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    color: #575757;
    &--price {
      margin-bottom: 30px;
    }
  }

  &__range {
    margin-bottom: 50px;
  }

  &__selects {
    margin-bottom: 40px;

    &-item {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__colors {
    margin-bottom: 55px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  }

  &__all {
    background: transparent;
    display: flex;
    align-items: center;

    svg {
      margin-right: 11px;
    }
  }

  &__buttons {
    display: grid;
    grid-template-columns: repeat(3, 106px);
    gap: 15px;
    margin-bottom: 20px;
  }

  &__show {
    background: transparent;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff7020;
  }

  &__filter {
    width: 100%;
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    padding: 21px 20px 23px;
    background: #ff7020;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__reset {
    background: transparent;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff7020;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
  }
}

.cards {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 43px;

    .title {
      margin-bottom: 0;
    }
  }

  &__sort {
    display: flex;
    align-items: center;

    &-btn {
      background: transparent;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #a3a3a3;
      margin-right: 23px;

      &:last-child {
        margin-left: 20px;
        margin-right: 35px;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 39px 43px;
    @media (max-width: 1700px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1380px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__show {
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #a3a3a3;
  }

  &__history {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__pagination {
    display: flex;

    &-item {
      width: 59px;
      height: 48px;
      padding: 15px 15px 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffefe7;
      border-radius: 13px;

      a {
        color: #ff7020;
      }

      &--active {
        background: #ff7020;
        border-radius: 13px;

        a {
          color: #ffffff;
        }
      }

      &:not(:last-child) {
        margin-right: 7px;
      }
    }

    &-number {
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}
</style>