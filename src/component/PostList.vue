<template>
  <div v-if="posts.length > 0">
    <div>
      <post-iteam
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </div>
  </div>
  <h2 v-else class="title">Список постов пуст!</h2>
</template>

<script>
import PostIteam from "./PostIteam.vue";
export default {
  components: { PostIteam },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  color: red;
  text-align: center;
}
</style>
