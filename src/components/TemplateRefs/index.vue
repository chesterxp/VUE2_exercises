<template>
  <div>
    <h1>TemplateRef</h1>
    <input type="text" ref="inputRef" />
    <!-- <PostsList ref="postsListRef" /> -->
  </div>
</template>

<script>
// import PostsList from "../Axios/PostsList.vue";
export default {
  name: "TemplateRef",
  // components: {
  //   PostsList,
  // },
  mounted() {
    console.log(this.$refs.postsListRef);
    this.$refs.inputRef.focus();
  },
};
</script>

<style scoped></style>
