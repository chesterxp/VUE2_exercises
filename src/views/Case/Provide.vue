<template>
  <div>
    <h1>Provide Vue Methods</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from "@/components/Provide/Parent.vue";

export default {
  name: "provide-view",
  components: {
    Parent,
  },
};
</script>

<style lang="scss" scoped></style>
