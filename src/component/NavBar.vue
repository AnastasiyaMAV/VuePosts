<template>
  <div class="navbar">
    <img :src="home" class="icon" v-on:click="$router.push('/')" />
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
import home from '@/component/assets/icon-home.png'
export default {
    data() {
    return {
      home
    };
  },
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
}
</style>
