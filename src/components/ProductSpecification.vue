<template>
  <div class="box" v-for="item in specification" :key="item.title">
    <h3 class="title">{{ item.title }}</h3>
    <div class="block" v-for="feature in item.features" :key="feature.title">
      <p class="name">
        {{ feature.title }}
        <span class="line"></span>
      </p>
      <p class="text" v-if="typeof feature.value === 'object'">
        <template v-for="value in feature.value" :key="value">
          <span>{{ value }}</span>
          <br />
        </template>
      </p>
      <p class="text" v-else>
        {{ feature.value }}
        <br />
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductSpecification",
  computed: {
    ...mapGetters("Products", ["specification"]),
  },
};
</script>

<style scoped>
.title {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%;
  color: #000;
  margin-bottom: 24px;
}

.box {
  margin-bottom: 50px;
}

.block {
  display: flex;
  gap: 0 25px;
  margin-bottom: 15px;
}

.text,
.name {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: 180%;
  color: #000;
}

.name {
  max-width: 650px;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 0 25px;
  white-space: nowrap;
}

.line {
  display: block;
  width: 100%;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
</style>
