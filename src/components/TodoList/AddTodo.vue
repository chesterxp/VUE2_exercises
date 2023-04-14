<template>
  <div>
    <h3>Add todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input
          type="text"
          v-model="title"
          placeholder="Add todo ..."
          class="addInput"
        />
        <input type="submit" value="submit" class="btn" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
}
.addInput {
  width: 100%;
}
</style>
