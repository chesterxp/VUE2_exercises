<template>
  <div>
    <h1>ParentLifeCycleHooks</h1>
    <button @click="showChild = !showChild">Toggle Child</button>
    <ChildLifeCycleHooks v-if="showChild" />
  </div>
</template>

<script>
import ChildLifeCycleHooks from "./ChildLifeCycleHooks.vue";
export default {
  name: "ParentLifeCycleHooks",
  components: { ChildLifeCycleHooks },
  data() {
    return {
      showChild: false,
    };
  },
  beforeCreate() {
    console.log("Parent beforeCreate");
  },
  created() {
    console.log("Parent created");
  },
  beforeMount() {
    console.log("Parent beforeMount");
  },
  mounted() {
    console.log("Parent mounted");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate");
  },
  updated() {
    console.log("Parent updated");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmount");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
};
</script>

<style scoped></style>
