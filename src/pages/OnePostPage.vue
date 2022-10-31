<template>
  <div class="onePostPage">
    <h1>Пост № {{ $route.params.id }}</h1>
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
      isPostsLoading: false,
      isError: false,
    };
  },
  methods: {
    async onePost() {
      try {
        this.isError = false;
        this.isPostsLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
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
    this.onePost();
  },
};
</script>

<style scoped>
.onePostPage {
  height: 90vh;
  margin: 0 25px 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
