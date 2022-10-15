<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <my-button @click="showDialog">Создать пост</my-button>
    </div>

    <my-dialog v-model:show="isDialogVisible">
      <post-form @create="createPost" :posts="posts" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>

    <my-error v-if="isError">Ошибка! Повторите позже!</my-error>
    <my-loading v-if="isPostsLoading" />
  </div>
</template>

<script>
import PostForm from "@/component/PostForm.vue";
import PostList from "@/component/PostList.vue";
import axios from "axios";
import MyLoading from "./component/UI/MyLoading.vue";
export default {
  components: {
    PostForm,
    PostList,
    MyLoading,
  },
  data() {
    return {
      posts: [],
      isDialogVisible: false,
      isPostsLoading: false,
      isError: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isDialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.isDialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isError = false;
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        this.isPostsLoading = true;
        this.isError = true;
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head {
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
}
</style>
