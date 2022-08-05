<template>
  <div class="reviews__rating">
    <p class="reviews__text">Evaluate:</p>
    <!-- <app-rating :starSize="32"></app-rating> -->
    <AppRating :starSize="'32'" />
  </div>
  <div class="reviews__form form">
    <div class="form__block">
      <label class="form__label" for="feedback">Feedback text</label>
      <textarea
        class="form__textarea"
        name="feedback"
        id="feedback"
        v-model="text"
      ></textarea>
    </div>
    <div class="form__wrapper">
      <div class="form__block">
        <label class="form__label" for="name">Full name</label>
        <input
          class="form__input"
          type="text"
          name="name"
          id="name"
          v-model="fullName"
        />
      </div>
      <div class="form__block">
        <label class="form__label" for="email">Email</label>
        <input
          class="form__input"
          type="email"
          name="email"
          id="email"
          v-model="email"
        />
      </div>
      <app-button
        class="form__btn"
        :name="'SEND'"
        :variant="'colored'"
        @click="
          createComment({
            productId,
            fullName,
            email,
            text,
          })
        "
      ></app-button>
    </div>
  </div>
  <div class="reviews__list">
    <app-comment
      v-for="comment in comments"
      :key="comment.id"
      :name="comment.fullName"
      :date="comment.createdAt"
      :text="comment.text"
    ></app-comment>
  </div>
  <div class="pagination">
    <span class="pagination__show"
      >Showing {{ pagesSize }} of {{ total }} result</span
    >

    <ul class="pagination__list" v-if="pagesCount">
      <li class="pagination__item" v-for="page in pagesCount" :key="page">
        <router-link
          :to="{ path: `${$route.fullPath}`, query: { page } }"
          class="pagination__number"
          >{{ page }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppRating from "@/components/AppRating.vue";
import AppButton from "@/components/AppButton.vue";
import AppComment from "@/components/AppComment.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductReviews",
  components: {
    AppRating,
    AppButton,
    AppComment,
  },
  data() {
    return {
      productId: this.$route.params.productId,
      fullName: null,
      email: null,
      text: null,
    };
  },
  computed: {
    ...mapGetters("Comments", ["comments", "pagesCount", "pagesSize", "total"]),
  },
  created() {
    this.getComments(this.productId);
  },
  methods: {
    ...mapActions("Comments", ["getComments", "createComment"]),
  },
};
</script>

<style scoped lang="scss">
.reviews {
  &__rating {
    display: flex;
    align-items: center;
    gap: 0 25px;
    margin-bottom: 32px;
  }

  &__text {
    font-family: "Lato", sans-serif;
  }

  &__form {
    margin-bottom: 100px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 50px 0;
  }
}

.form {
  &__block {
    width: 100%;
  }

  &__label {
    display: block;
    margin-bottom: 16px;
    font-family: "Lato", sans-serif;
  }

  &__textarea {
    width: 100%;
    height: 115px;
    margin-bottom: 35px;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 20px 24px;
    border-radius: 12px;
    border: 1px solid #d4d4d4;
    font-size: 18px;
  }

  &__wrapper {
    display: flex;
    align-items: flex-end;
    gap: 0 20px;
  }

  &__btn {
    padding: 23px 100px;
    border-radius: 12px;
  }
}

.pagination {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  &__list {
    display: flex;
  }

  &__item {
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

    &.active {
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

  &__number {
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
}
</style>
