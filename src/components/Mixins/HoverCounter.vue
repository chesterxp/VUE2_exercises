<template>
  <div>
    <h1>HoverCounter</h1>
    <button class="btn" @mouseover="incrementCount">
      Hovered {{ count }} times
    </button>
  </div>
</template>

<script>
import CounterMixin from "@/mixins/Counter";
export default {
  name: "HoverCounter",
  mixins: [CounterMixin],
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   incrementCount() {
  //     this.count += 1;
  //   },
  // },
};
</script>

<style scoped></style>
