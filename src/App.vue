<template>
  <div class="app">
    <nav-bar/>
    <router-view/>
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
</style>
