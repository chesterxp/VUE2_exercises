<template>
  <div>
    <ParentLifeCycleHooks />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParentLifeCycleHooks from "@/components/LifeCycleHooks/ParentLifeCycleHooks.vue";

@Component({
  components: {
    ParentLifeCycleHooks,
  },
})
export default class Life extends Vue {}
</script>

<style scoped></style>
