<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <div class="head__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
    </div>

    <my-dialog v-model:show="isDialogVisible">
      <post-form @create="createPost" :posts="posts" />
    </my-dialog>

    <post-list :posts="sortedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идёт загрузка...</div>

    <my-error v-if="isError">Ошибка! Повторите позже!</my-error>
    <my-loading v-if="isPostsLoading" />
  </div>
</template>

<script>
import PostForm from "@/component/PostForm.vue";
import PostList from "@/component/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      isDialogVisible: false,
      isPostsLoading: false,
      isError: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
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
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => 
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      )
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgb(227, 225, 225);
}
.head {
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
}
.head__btns {
  display: flex;
  justify-content: space-around;
}
</style>
