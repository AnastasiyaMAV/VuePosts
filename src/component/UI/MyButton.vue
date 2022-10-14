<template>
  <button class="btn" v-on:mouseover="onHover" v-on:mouseleave="offHover">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  methods: {
    onHover: function (event) {
      event.target.style.boxShadow =
        "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset";
    },
    offHover: function (event) {
      event.target.style.boxShadow =
        "0px 5px 10px 2px rgba(34, 60, 80, 0.2)";
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 35px;
  margin-top: 10px;
  background: none;
  color: blue;
  border: 1px solid blue;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
</style>
