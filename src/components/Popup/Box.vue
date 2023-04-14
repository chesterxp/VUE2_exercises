<template>
  <div>
    <h1>Box w popup</h1>
    <p @close="getInfo" class="btn" @click="$emit('lukievent', 'siema')">
      Slucham
    </p>

    <SmallBox @lukieventSmall="$emit('lukievent', 'siema')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SmallBox from "./SmallBox.vue";

@Component({
  components: {
    SmallBox,
  },
})
export default class Box extends Vue {
  getInfo() {
    console.log("pokaz info");
  }
  msgFromSmallBox(value: string) {
    console.log("msgFromSmallBox", value);
  }
}
</script>

<style scoped></style>
