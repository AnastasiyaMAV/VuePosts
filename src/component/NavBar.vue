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
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
import home from "@/component/assets/icon-home.png";
export default {
  data() {
    return {
      home,
    };
  },
  methods: {
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
}
</style>
