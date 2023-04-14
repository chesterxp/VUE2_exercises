<template>
  <div>
    <h1>ClickCounter</h1>
    <button class="btn" @click="incrementCount">
      Clicked {{ count }} times
    </button>
  </div>
</template>

<script>
import CounterMixin from "@/mixins/Counter";
export default {
  name: "ClickCounter",
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
