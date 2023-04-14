<template>
  <div>
    <Movies />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Movies from "@/components/Movies/index.vue";

@Component({
  components: {
    Movies,
  },
})
export default class MoviesView extends Vue {}
</script>

<style scoped></style>
