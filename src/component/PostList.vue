<template>
  <div v-if="posts.length > 0">
    <transition-group name="user-list">
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
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>
