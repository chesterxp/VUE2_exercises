<template>
  <div class="popup">
    <h1 class="title">This is popup</h1>
    <input type="text" v-model="lastName" />
    <button class="btn" @click="$emit('close', lastName)">Close</button>
  </div>
</template>

<!-- <script>
export default {
  name: "popup-component",
  emits: {
    close: () => {
      if (name) {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      lastName: "",
    };
  },
};
</script> -->

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopUpClass extends Vue {
  lastName = "";
}
</script>

<style scoped>
.popup {
  width: 300px;
  height: 300px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 10px 0 rgba(51, 51, 51, 0.233);
  border-radius: 5px;
  margin: 20px auto;
}

.title {
  font-size: 30px;
  padding: 30px 0 50px;
}

.btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: inline;
}
</style>
