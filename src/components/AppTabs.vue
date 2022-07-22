<template>
  <nav class="tab-nav">
    <ul class="tab-list">
      <li
        class="tab"
        v-for="tab in tabs"
        :key="tab"
        @click="$emit('update:modelValue', tab)"
        :selected="modelValue === tab"
      >
        {{ tab }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppTabs",
  props: {
    tabs: {
      type: [Array, Set],
      required: true,
    },
    // Current Tab
    modelValue: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/colors.scss";

.tab {
  position: relative;
  user-select: none;
  cursor: pointer;
  font-size: 24px;
  color: #9f9f9f;
}

.tab[selected="true"] {
  color: $accent-color;
  -webkit-text-stroke: 1px $accent-color;
}

.tab[selected="true"]::after {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 50%;
  width: 72px;
  height: 6px;
  transform: translateX(-50%);
  background-color: $accent-color;
  border-radius: 4px 4px 0 0;
}

.tab-nav {
  background-color: #f9f9f9;
  padding: 25px 60px;
  border-radius: 12px;
}

.tab-list {
  display: flex;
  gap: 80px;
}
</style>
