<template>
  <div>
    <div class="conatiner">
      <AddTodo />
      <FilterTodo />
      <div class="legend">
        <div class="legend__title">Double click to mark as complete</div>
        <div class="legend__icons">
          <div class="icon">
            <div class="logo--incomplete"></div>
            <div class="logo">- Incomplete</div>
          </div>
          <div class="icon">
            <div class="logo--complete"></div>
            <div class="logo">- Complete</div>
          </div>
        </div>
      </div>
      <div class="todos">
        <div
          class="todo"
          v-for="todo in allTodos"
          @dblclick="ondblclick(todo)"
          :class="todo.completed ? 'complete' : ''"
          :key="todo.id"
        >
          {{ todo.title }}
          <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";
import FilterTodo from "./FilterTodo.vue";

export default {
  name: "TodoList",
  components: {
    AddTodo,
    FilterTodo,
  },
  //   methods: mapActions(["fetchTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    ondblclick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.conatiner {
  box-shadow: 2px 2px 10px 0 rgba(51, 51, 51, 0.188);
  max-width: 1100px;
  /* height: 500px; */
  margin: 40px auto;
  overflow: auto;
  padding: 0 30px;
}

.todos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.todo {
  background: var(--blue);
  padding: 10px 40px 10px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 0 rgba(51, 51, 51, 0.324);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

i:hover {
  color: #ae0404;
}

.todo:hover {
  box-shadow: 2px 2px 6px 0 rgba(51, 51, 51, 0.7);
  opacity: 0.9;
}
.legend__icons {
  display: flex;
}

.icon {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 20px;
}
.logo--incomplete,
.logo--complete {
  width: 20px;
  height: 20px;

  background: green;
  margin-right: 20px;
}

.complete {
  background: green;
}

.logo--incomplete {
  background: var(--blue);
}
</style>
