<template>
  <div>
    <TemplateRef />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TemplateRef from "@/components/TemplateRefs/index.vue";
@Component({
  components: {
    TemplateRef,
  },
})
export default class TemplateRefView extends Vue {}
</script>

<style scoped></style>
