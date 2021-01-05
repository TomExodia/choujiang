import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index")
  },
  {
    path: "/one",
    name: "One",
    component: () => import("@/views/one")
  }
  {
    path: "/two",
    name: "Two",
    component: () => import("@/views/two")
  }
  {
    path: "/three",
    name: "Three",
    component: () => import("@/views/three")
  },
  {
    path: "/lucky",
    name: "Lucky",
    component: () => import("@/views/lucky")
  }
];

const router = new VueRouter({
  model: "history",
  base: "screens",
  routes
});

export default router;
