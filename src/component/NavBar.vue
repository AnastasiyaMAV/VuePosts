<template>
  <div class="navbar">
    <img
      :src="home"
      class="icon"
      v-on:click="$router.push('/')"
      v-on:mouseover="onHover"
      v-on:mouseleave="offHover"
    />
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">Цель проекта</my-button>
      <my-button @click="$router.push('/store')">Vuex</my-button>
      <my-button @click="$router.push('/сomposition')">Composition api</my-button>
    </div>
  </div>
</template>

<script>
import home from "@/component/assets/icon-home.png";
import hoverMixin from "@/mixins/hoverMixin";
export default {
  data() {
    return {
      home,
    };
  },
  mixins: [hoverMixin],
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  display: flex;
  gap: 20px;
}
.icon {
  width: 25px;
  padding: 5px;
  border: 1px solid black;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
}
</style>
