import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/Apps/Home.vue";
import LukiView from "../views/Case/LukiView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/luki",
    name: "luki",
    component: LukiView,
  },
  {
    path: "/case/axios",
    name: "axios",
    component: () => import("@/views/Case/Axios.vue"),
  },
  {
    path: "/case/axios_class",
    name: "axios_class",
    component: () => import("@/views/Case/AxiosClass.vue"),
  },
  {
    path: "/case/mixins",
    name: "mixins",
    component: () => import("@/views/Case/Mixins.vue"),
  },
  {
    path: "/case/lifecyclehooks",
    name: "lifecyclehooks",
    component: () => import("@/views/Case/LifeCycleHooks.vue"),
  },
  {
    path: "/case/provide",
    name: "provide",
    component: () => import("@/views/Case/Provide.vue"),
  },
  {
    path: "/case/provide_class",
    name: "provide_class",
    component: () => import("@/views/Case/ProvideClass.vue"),
  },
  {
    path: "/case/tabs",
    name: "tabs",
    component: () => import("@/views/Case/Tabs.vue"),
  },
  {
    path: "/case/templateref",
    name: "templateref",
    component: () => import("@/views/Case/TemplateRef.vue"),
  },
  {
    path: "/case/popup",
    name: "popup",
    component: () => import("@/views/Case/Popup.vue"),
  },
  {
    path: "/case/slots",
    name: "slots",
    component: () => import("@/views/Case/Slots.vue"),
  },
  {
    path: "/apps/todolist",
    name: "todolist",
    component: () => import("@/views/Apps/Todolist.vue"),
  },
  {
    path: "/apps/movies",
    name: "movies",
    component: () => import("@/views/Apps/Movies.vue"),
  },
  {
    path: "/apps/vuetify",
    name: "vuetify",
    component: () => import("@/views/Apps/Vuetify.vue"),
  },
  {
    path: "/apps/registration",
    name: "registration",
    component: () => import("@/views/Apps/Registration.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
