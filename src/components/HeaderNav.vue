<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link"> All Categories </router-link>
      </li>
      <li class="nav__item" v-for="item in categories" :key="item.code">
        <router-link :to="{ path: `/${item.code}` }" class="nav__link"
          >{{ item.name }}
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" class="nav__link nav__link--hot">
          HOT DEALS
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HeaderNav",
  computed: {
    ...mapGetters("categories", ["categories"]),
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
  },
  created() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
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
</style>
