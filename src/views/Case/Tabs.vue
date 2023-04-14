<template>
  <div>
    <Tabs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs/Tabs.vue";

@Component({
  components: {
    Tabs,
  },
})
export default class TabsView extends Vue {}
</script>

<style scoped></style>
