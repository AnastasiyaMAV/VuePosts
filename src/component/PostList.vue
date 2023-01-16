<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-iteam
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :btn="btn"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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
    btn: {
      type: Boolean,
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
