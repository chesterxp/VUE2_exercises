<template>
  <div>
    <h1>Child</h1>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue";
export default {
  name: "child-nested",
  components: {
    GrandChild,
  },
};
</script>

<style scoped></style>
