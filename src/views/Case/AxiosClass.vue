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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component
export default class AxiosClassView extends Vue {
  posts: IPost[] = [];
  errorMSG = "";
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
  }
  created() {
    this.getPosts();
  }
}
</script>

<style scoped></style>
