<template>
  <div class="toolbar">
    <div class="container">
      <div class="toolbar-inner">
        <div class="toolbar-start">
          <app-label>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </template>
            <template #text>+221 33 66 22</template>
          </app-label>
          <app-label>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
            </template>
            <template #text>support@elextra.io</template>
          </app-label>
        </div>
        <div class="toolbar-end">
          <app-label>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            <template #text>Store Location</template>
          </app-label>
          <app-label>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            <template #text>Track Your Order</template>
          </app-label>
          <div class="horizontal-separator"></div>
          <select class="drop" v-model="selectedLocale">
            <option value="EN">EN</option>
            <option value="UA">UA</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLabel from "@/components/AppLabel";
export default {
  name: "HeaderToolbar",
  components: {
    AppLabel,
  },
  data: () => ({
    selectedLocale: "EN",
  }),
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colors.scss";
.toolbar {
  padding: 15px 0;
  width: 100%;
  background-color: $accent-color;
}

.toolbar-inner {
  display: flex;
  justify-content: space-between;
}

.toolbar-start,
.toolbar-end {
  display: flex;
  gap: 50px;
}

.horizontal-separator {
  height: 100%;
  width: 2px;
  background-color: #ffffff;
}

.drop {
  margin-left: -30px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  option {
    color: black;
  }
}
</style>
