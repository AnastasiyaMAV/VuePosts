<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <h2>Composition Api</h2>
      <my-input v-model="searchQuery" placeholder="Поиск по названию..." />
      <div class="head__btns">
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
    </div>

    <my-dialog v-model:show="isDialogVisible">
      <post-form @create="createPost" :posts="posts" />
    </my-dialog>

    <post-list :posts="sortedAndSeachedPosts" v-if="!isPostsLoading" />
    <div v-intersection="loadMorePosts" class="observer"></div>

    <my-error v-if="isError">Ошибка! Повторите позже!</my-error>
    <my-loading v-if="isPostsLoading" />
  </div>
</template>

<script>
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

import PostForm from "@/component/PostForm.vue";
import PostList from "@/component/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      isDialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup() {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSeachedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSeachedPosts,
    };
  },
};
</script>

<style scoped>
.head__btns {
  display: flex;
  justify-content: flex-start;
}
</style>
