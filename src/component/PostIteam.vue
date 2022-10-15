<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
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
</style>
