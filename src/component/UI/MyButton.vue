<template>
  <button class="btn" v-on:mouseover="onHover" v-on:mouseleave="offHover">
    <slot></slot>
  </button>
</template>

<script>
import hoverMixin from "@/mixins/hoverMixin"
export default {
  name: "my-button",
  mixins: [hoverMixin],
};
</script>

<style scoped>
.btn {
  width: 120px;
  height: 35px;
  background: none;
  padding: 5px;
  color: blue;
  border: 1px solid blue;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
</style>
