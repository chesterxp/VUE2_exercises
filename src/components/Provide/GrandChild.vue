<template>
  <div>
    <h1>GrandChild</h1>
    {{ username }}
  </div>
</template>

<script>
export default {
  name: "grand-child-nested",
  inject: ["username"],
};
</script>

<style scoped></style>
