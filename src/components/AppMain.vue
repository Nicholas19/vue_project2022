<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <app-aside></app-aside>
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
              <app-drop
                placeholder="Choose sort"
                class="sort"
                :values="sortValues"
                @choose="handleChoose"
                :default_item="currentSortField?.title"
              />
            </div>
          </div>
          <ul class="cards__list">
            <li class="cards__item" v-for="card in products" :key="card.id">
              <app-card
                :name="card.name"
                :price="card.price"
                :amount="card.amount"
                :picture="imgPrefix + card.imgSrc"
                :raiting="card.rating"
                @click="handleCardClick(card.category.code, card.id)"
              ></app-card>
            </li>
          </ul>

          <div class="cards__history">
            <span class="cards__show">Showing 9 of 120 result</span>

            <ul class="cards__pagination" v-if="pagesCount">
              <li
                class="cards__pagination-item cards__pagination-item--active"
                v-for="page in pagesCount"
                :key="page"
              >
                <router-link
                  :to="{ path: `${$route.fullPath}`, query: { page } }"
                  class="cards__pagination-number"
                  >{{ page }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppDrop from "@/components/AppDrop.vue";
import AppCard from "@/components/AppCard.vue";
import AppAside from "@/components/AppAside.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppMain",
  components: {
    AppDrop,
    AppCard,
    AppAside,
  },
  data: () => ({
    sortValues: [
      {
        title: "Price: Low To High",
        value: "price",
        direction: "asc",
      },
      {
        title: "Price: High To Low",
        value: "price",
        direction: "desc",
      },
    ],
    currentSortField: { value: "id", direction: "asc" },
    imgPrefix: process.env.VUE_APP_DOMAIN,
  }),
  created() {
    this.getProducts({
      category: this.$route.params.categoryCode,
      page: this.$route.query.page,
    });
  },
  computed: {
    ...mapGetters("Products", ["products", "pagesCount"]),
  },
  watch: {
    $route() {
      this.getProducts({
        category: this.$route.params.categoryCode,
        sort: {
          field: this.currentSortField?.value,
          direction: this.currentSortField?.direction,
        },
        page: this.$route.query.page,
      });
    },
  },
  methods: {
    ...mapActions("Products", ["getProducts"]),
    handleChoose(val) {
      this.currentSortField = val;
      this.getProducts({
        category: this.$route.params.categoryCode,
        sort: {
          field: this.currentSortField?.value,
          direction: this.currentSortField?.direction,
        },
        page: this.$route.query.page,
      });
    },
    handleCardClick(category, id) {
      this.$router.push({
        path: `/${category}/${id}`,
      });
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
