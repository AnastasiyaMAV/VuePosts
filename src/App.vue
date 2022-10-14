<template>
  <div>
    <div class="head">
      <h1>Страница с постами</h1>
      <my-button @click="showDialog">Создать пост</my-button>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" :posts="posts" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/component/PostForm.vue";
import PostList from "@/component/PostList.vue";
import MyButton from "./component/UI/MyButton.vue";
export default {
  components: {
    PostForm,
    PostList,
    MyButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JS1", body: "JS пост1" },
        { id: 2, title: "JS2", body: "JS пост2" },
        { id: 3, title: "JS3", body: "JS пост3" },
        { id: 4, title: "JS4", body: "JS пост4" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
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
