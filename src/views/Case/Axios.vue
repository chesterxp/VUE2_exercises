<template>
  <div>
    <CreatePost />
    <PostsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreatePost from "@/components/Axios/CreatePost.vue";
import PostsList from "@/components/Axios/PostsList.vue";

@Component({
  components: {
    CreatePost,
    PostsList,
  },
})
export default class Axios extends Vue {}
</script>

<style scoped></style>
