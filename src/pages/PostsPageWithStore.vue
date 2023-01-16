<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск по названию..."
      />
      <div class="head__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
        />
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      isDialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),

    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      isError: (state) => state.post.isError,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSeachedPosts: "post/sortedAndSeachedPosts",
    }),
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
