import Vue from "vue";
import Router from "vue-router";
import { constantRouterMap } from "./module";
// import Home from './views/Home.vue'

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: constantRouterMap
});

export default router;
