<template>
  <div>
    <h1>Luki</h1>
    <LukiClassStyleComponent />
  </div>
</template>

<script>
/* eslint-disable */
import LukiClassStyleComponent from "@/components/Luki/LukiClassStyleComponent.vue";
export default {
  name: "luki",
  components: {
    LukiClassStyleComponent,
  },
};

// class Person {
//   firstname: String;
//   lastname: String;

//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   say(text) {
//     return this.firstname + " " + this.lastname + " says: " + text;
//   }
// }
</script>

<style lang="scss" scoped></style>
