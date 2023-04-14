<template>
  <div>
    <hr />
    <br />
    <h1>SmallBox</h1>
    <p class="btn" @click="$emit('lukieventSmall', 'siema')">Slucham</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SmallBox extends Vue {
  getInfo() {
    console.log("pokaz info");
  }
}
</script>

<style scoped></style>
