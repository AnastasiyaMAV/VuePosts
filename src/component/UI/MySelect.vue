<template>
  <select
    class="select"
    v-model="selected"
    @change="changeOption"
    v-on:mouseover="onHover"
    v-on:mouseleave="offHover"
  >
    <option value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onHover: function (event) {
      event.target.style.boxShadow =
        "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset";
    },
    offHover: function (event) {
      event.target.style.boxShadow = "0px 5px 10px 2px rgba(34, 60, 80, 0.2)";
    },
  },
};
</script>

<style scoped>
.select {
  border: 1px solid gray;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
</style>
