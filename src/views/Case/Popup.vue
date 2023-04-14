<template>
  <div>
    <br />
    <h1>Use case with emit</h1>
    <button @click="showPopupFunction">Show Popup</button>
    <keep-alive>
      <Popup v-if="showPopup" @close="showPopupFunction" />
    </keep-alive>

    <Box @lukievent="lukiEventShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Popup from "@/components/Popup/index.vue";
import Box from "@/components/Popup/Box.vue";

@Component({
  components: {
    Popup,
    Box,
  },
})
export default class PopupView extends Vue {
  showPopup = false;

  showPopupFunction(value: string) {
    console.log("showPopupFunction", value);
    this.showPopup = !this.showPopup;
  }

  created() {
    console.log("created");
  }
  beforeMount() {
    console.log("beforeMounted");
  }
  mounted() {
    console.log("Child mounted");
  }

  lukiEventShow(value: any) {
    console.log("lukiEventShowWzorzec", value);
  }
}
</script>

<style scoped></style>
