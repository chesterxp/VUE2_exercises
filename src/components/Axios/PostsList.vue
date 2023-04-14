<template>
  <div>
    <div class="btn" @click="getPosts">Get Posts</div>

    <div class="box">
      <h2 v-if="errorMSG">test {{ errorMSG }}</h2>
      <div class="post" v-for="post in posts" :key="post.id">
        <h3>{{ post.id }} {{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
      errorMSG: "",
    };
  },
  // created() {
  //   this.getPosts();
  // },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        })
        .catch((error) => {
          this.errorMSG = error;
          console.log("Error: ", error);
        });
    },
  },
};
</script>

<style scoped></style>
