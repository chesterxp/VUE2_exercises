<template>
  <div>
    <h1>Mixins</h1>
    <Main />
    <Hover />

    <!-- <h2>Class Sytnatx</h2>
    <button class="btn" @click="incrementCount">
      Clicked {{ count }} times
    </button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "@/components/Mixins/index.vue";
import Hover from "@/components/Mixins/HoverCounter.vue";
import Component, { mixins } from "vue-class-component";
// import { Hello, World } from "@/mixins/CounterClass";

@Component({
  components: {
    Main,
    Hover,
  },
})
// export default class Axios extends mixins(Hello, World) {
export default class Axios extends Vue {
  created() {
    console.log("luki log");
    // console.log(this.hello + " " + this.world + "!"); // -> Hello World!
  }
}
</script>

<style scoped></style>
