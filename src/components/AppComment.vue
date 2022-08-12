<template>
  <div class="comment">
    <div class="comment__head">
      <h4 class="comment__name">{{ name }}</h4>
      <p class="comment__date">{{ date }}</p>
    </div>
    <app-rating
      class="comment__rating"
      :starSize="'22'"
      :fillStarColor="'#EBFF00'"
      :rating="3"
    ></app-rating>
    <p class="comment__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
import AppRating from "@/components/AppRating.vue";

export default {
  name: "AppComment",
  components: {
    AppRating,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
