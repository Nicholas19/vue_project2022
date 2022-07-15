<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <div class="category">
          <h2 class="title">Filters</h2>
          <!--     range     -->
          <div class="category__range">
            <h3 class="category__title">Price range</h3>

            <!--  тут должен быть input range -->
            <p>тут должен быть input range</p>
          </div>

          <!--     selects     -->
          <ul class="category__selects">
            <li class="category__selects-item">
              тут должены быть component Selects
            </li>
          </ul>
          <!--     button color     -->

          <div class="category__colors">
            <div class="category__head">
              <h3 class="category__title">Price range</h3>

              <button class="category__all">
                <svg width="20" height="21">
                  <use
                    xlink:href="@/assets/images/svg/sprites.svg#select-all"
                  ></use>
                </svg>
                Select All
              </button>
            </div>

            <ul class="category__buttons">
              <li class="category__button">
                <!--  тут должен быть копонент кнопки (Стили прописаны чисто для примеры) -->
                <button class="btn">Red</button>
              </li>
              <li class="category__button">
                <!--  тут должен быть копонент кнопки (Стили прописаны чисто для примеры) -->

                <button class="btn">White</button>
              </li>
              <li class="category__button">
                <!--  тут должен быть копонент кнопки (Стили прописаны чисто для примеры) -->
                <button class="btn">Black</button>
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
            <li class="cards__item">Компонент карточки тут должно быть</li>
            <li class="cards__item">Компонент карточки тут должно быть</li>

            <li class="cards__item">Компонент карточки тут должно быть</li>
            <li class="cards__item">Компонент карточки тут должно быть</li>

            <li class="cards__item">Компонент карточки тут должно быть</li>
            <li class="cards__item">Компонент карточки тут должно быть</li>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "vProducts",
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
    letter-spacing: 0em;
    text-align: left;
    color: #575757;
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
  .test {
    color: red;
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
  }
  .test {
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
