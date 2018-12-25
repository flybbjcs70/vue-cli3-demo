export const constantRouterMap = [
  {
    path: "/",
    name: "home",
    hidden: true,
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/Test",
    name: "Test",
    hidden: true,
    component: () => import(/* webpackChunkName: "Test" */ "@/views/Test.vue")
  }
];

export const asyncRouterMap = [];
