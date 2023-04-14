<template>
  <div>
    <form action="" @submit.prevent="createPost">
      <label for="userId">Post User ID</label>
      <input type="text" id="userID" v-model="formData.userID" />
      <br />
      <label for="title">Post Title</label>
      <input type="text" id="title" v-model="formData.title" />
      <br />
      <label for="body">Post Body</label>
      <input type="text" id="body" v-model="formData.body" />
      <br />
      <button class="btn">Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userID: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((res) => console.log("res", res))
        .catch((err) => console.log("Error: ", err));
    },
  },
};
</script>

<style scoped></style>
