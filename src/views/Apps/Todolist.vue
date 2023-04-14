<template>
  <div>
    <Index />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "@/components/TodoList/index.vue";

@Component({
  components: {
    Index,
  },
})
export default class TodoListView extends Vue {}
</script>

<style scoped></style>
