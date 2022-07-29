<template>
  <div class="reviews__rating">
    <p class="reviews__text">Evaluate:</p>
    <app-rating :starSize="32"></app-rating>
  </div>
  <div class="reviews__form form">
    <div class="form__block">
      <label class="form__label" for="feedback">Feedback text</label>
      <textarea class="form__textarea" name="feedback" id="feedback"></textarea>
    </div>
    <div class="form__wrapper">
      <div class="form__block">
        <label class="form__label" for="name">Full name</label>
        <input class="form__input" type="text" name="name" id="name" />
      </div>
      <div class="form__block">
        <label class="form__label" for="email">Email</label>
        <input class="form__input" type="email" name="email" id="email" />
      </div>
      <app-button
        class="form__btn"
        :name="'SEND'"
        :variant="'colored'"
      ></app-button>
    </div>
  </div>
  <ul class="reviews__list">
    <li class="comment" v-for="(comment, i) in 3" :key="i">
      <div class="comment__head">
        <h4 class="comment__name">Oleg Chernyshov</h4>
        <p class="comment__date">09 February 2022</p>
      </div>
      <app-rating
        class="comment__rating"
        :starSize="22"
        :fillStarColor="'#EBFF00'"
        :rating="3"
      ></app-rating>
      <p class="comment__text">
        Externally, everything is wonderful, it performs its function perfectly.
        The compressor is quite noisy compared to our old Samsung refrigerator.
        On the hotline, they answer that in two weeks it will work more quietly,
        guys, the deadline for the refund is just ending.
        <br />
        By the way, they measured the noise level in decibels, the declared 37
        does not smell, 47. The measurements were made with a program from the
        phone, I understand that there is a device for this special. We will
        return the ego to the store.
      </p>
    </li>
  </ul>
  <div class="pagination">
    <span class="pagination__show">Showing 9 of 120 result</span>

    <ul class="pagination__list">
      <li class="pagination__item active">
        <a href="#" class="pagination__number">1</a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__number">2</a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__number">3</a>
      </li>
    </ul>
  </div>
</template>

<script>
import AppRating from "@/components/AppRating.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "ProductReviews",
  components: {
    AppRating,
    AppButton,
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

.comment {
  padding: 26px 40px 42px;
  border-radius: 8px;
  border: 1px solid #ccc;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__name {
    font-weight: 500;
    font-size: 20px;
  }

  &__date {
    font-size: 16px;
  }

  &__rating {
    margin-bottom: 20px;
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
