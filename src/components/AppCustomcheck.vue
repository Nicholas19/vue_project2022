<template>
  <div>
    <input
      type="checkbox"
      :name="name"
      :value="name"
      :id="name"
      class="custom-checkbox"
      :class="{ checked: isChecked }"
      @change="updatedInput"
      :checked="isChecked"
    />
    <label :for="name"> {{ lbl }}</label>
  </div>
</template>

<script>
export default {
  name: "AppCustomcheck",
  props: {
    name: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    lbl: {
      type: String,
      default: "",
    },
  },
  methods: {
    updatedInput() {
      this.$emit("cus-input");
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 3px solid #898989;
  border-radius: 6px;
  margin-right: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.aside .custom-checkbox + label::before {
  margin-right: 33px;
}

.aside label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
}

.custom-checkbox.checked + label::before {
  border-color: #ff7020;
  background-color: #ff7020;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(.checked) + label:hover::before {
  border-color: #ff7020;
}

/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #fff8f3;
  border-color: #ff7020;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem #fff8f3;
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
</style>
