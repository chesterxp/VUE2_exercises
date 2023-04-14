<template>
  <div>
    <h1>Provide class syntax</h1>
    <ParentClass />
  </div>
</template>

<script>
import ParentClass from "@/components/ProvideClass/Parent.vue";

export default {
  name: "provide-view",
  components: {
    ParentClass,
  },
};
</script>

<style lang="scss" scoped></style>
