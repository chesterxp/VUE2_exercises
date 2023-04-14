<template>
  <div>
    <h1>VUE 2</h1>
    <h2>class-syntax</h2>
    <h1>VUE 3</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeView extends Vue {}
</script>

<style scoped></style>
