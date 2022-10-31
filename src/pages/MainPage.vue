<template>
  <div class="mainPage">
    <h1>Добро пожаловать в блог!</h1>
    <h2>Пример поста</h2>
    <post-list :posts="post" :btn="false" v-if="!isPostsLoading" />
    <my-loading v-else />
    <my-error v-if="isError">Ошибка! Повторите позже!</my-error>
  </div>
</template>

<script>
import PostList from "@/component/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostList,
  },
  data() {
    return {
      post: [],
      randomId: 1,
      maxPosts: 100,
      minPosts: 1,
      isPostsLoading: false,
      isError: false,
    };
  },
  methods: {
    async randomPost() {
      this.randomId = Math.ceil(
        Math.random() * (this.maxPosts - this.minPosts) + this.minPosts
      );
      try {
        this.isError = false;
        this.isPostsLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.randomId}`
        );
        this.post = [response.data];
      } catch (e) {
        this.isPostsLoading = true;
        this.isError = true;
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.randomPost();
  },
};
</script>

<style scoped>
.mainPage {
  height: 90vh;
  margin: 0 25px 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
