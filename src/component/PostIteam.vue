<template>
  <div class="post">
    <div>
      <div><strong>Номер поста:</strong> {{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns" v-if="btn">
      <my-button @click="$router.push(`/posts/${post.id}`)" class="btn">Открыть</my-button>
      <my-button @click="$emit('remove', post)" class="btn">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
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
.post {
  padding: 15px;
  border: 2px solid blue;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
.btn {
  margin-left: 20px;
}
.post__btns {
  display: flex;
}
</style>
