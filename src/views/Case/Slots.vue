<template>
  <div>
    <h1>Slots - card with id</h1>
    <Card>
      <template #p2>
        <h1>Extra slots 2</h1>
      </template>
      <template #p3>
        <h1>Extra slots 3</h1>
      </template>
      <template #p1>
        <h1>Extra slots 1</h1>
      </template>
    </Card>
    <!-- <Card content="Card content 1">
      <p>Content card 1</p>
      <h1>h1</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
        perferendis obcaecati quo quasi commodi architecto modi, aliquid
        exercitationem eligendi asperiores soluta ipsum praesentium quaerat
        dignissimos aperiam iure fugiat laboriosam adipisci quibusdam ipsa eos
        voluptas.
      </p>
    </Card>
    <Card content="Card content 2">
      <p>Content card 2</p>
    </Card>
    <Card>
      <p>Content card 3</p>
    </Card> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Slots/index.vue";

@Component({
  components: {
    Card,
  },
})
export default class SlotsView extends Vue {}
</script>

<style scoped></style>
