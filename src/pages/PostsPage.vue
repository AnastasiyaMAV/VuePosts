<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <my-input v-model="searchQuery" placeholder="Поиск по названию..." />
      <div class="head__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
    </div>

    <my-dialog v-model:show="isDialogVisible">
      <post-form @create="createPost" :posts="posts" />
    </my-dialog>

    <post-list
      :posts="sortedAndSeachedPosts"
      :btn="true"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-intersection="loadMorePosts" class="observer"></div>

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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        this.isPostsLoading = true;
        this.isError = true;
      } finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        this.isError = false;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        this.isError = true;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSeachedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>

.head {
  margin: 25px;
  text-align: center;
}
.head__btns {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}

</style>
