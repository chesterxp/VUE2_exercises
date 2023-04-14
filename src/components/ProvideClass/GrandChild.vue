<template>
  <div>
    <h1>GrandChild Provide Class</h1>
    <h3>Log : {{ hello }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Log } from "@/decorators";

// Register the router hooks with their names
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);
export default class GrandChildProvideClass extends Vue {
  beforeRouteEnter() {
    console.log("beforeRouteEnter");
    // next();
  }
  beforeRouteUpdate() {
    console.log("beforeRouteUpdate");
    // next();
  }
  beforeRouteLeave() {
    console.log("beforeRouteLeave");
    // next();
  }

  // dom = this.hello(234);

  // @Log
  // hello(value) {
  //   return value * 100;
  // }
}
</script>

<style scoped></style>
