import axios from "axios";

//stan
const state = {
  todos: [],
};

//funkcje pobierajace
const getters = {
  allTodos: (state: any): any => {
    return state.todos;
  },
};

//funkcje do exportowania do modulów
const actions = {
  async fetchTodos({ commit }: { commit: any }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log("res13", res.data);
    //wysułamy do mutations
    commit("setTodos", res.data);
  },
  async addTodo({ commit }: { commit: any }, title: string) {
    console.log("addTodo");
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      complete: false,
    });

    commit("newTodo", res.data);
  },
  async deleteTodo({ commit }: { commit: any }, id: string) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("removeTodo", id);
  },
  async filterTodo({ commit }: { commit: any }, e: any) {
    console.log("e.target", e.target.value);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${e.target.value}`
    );
    commit("setTodos", res.data);
  },
  async updateTodo({ commit }: { commit: any }, updateTodo: any) {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updateTodo.id}`
    );

    commit("update", updateTodo);
  },
};

//modyficacje
const mutations = {
  setTodos: (state: any, todos: any) => (state.todos = todos),
  newTodo: (state: any, newTodo: any) => state.todos.unshift(newTodo),
  removeTodo: (state: any, id: any) =>
    (state.todos = state.todos.filter((todo: any) => todo.id !== id)),
  update: (state: any, updateTodo: any) => {
    const index = state.todos.findIndex(
      (todo: any) => todo.id === updateTodo.id
    );

    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
    console.log("index", index);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
