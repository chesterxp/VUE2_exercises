import Vue from "vue";
import Vuex from "vuex";
import todolist from "./modules/todolist";
import globalSocpe from "./modules/globalSocpe";
import registration from "./modules/registration";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todolist,
    globalSocpe,
    registration,
  },
});
