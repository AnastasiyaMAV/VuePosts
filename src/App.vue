<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./component/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  height: 100vh;
  background: rgb(227, 225, 225);
}
</style>
