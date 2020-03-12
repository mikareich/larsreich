import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/topics",
    name: "Topics",
    component: () => import("../views/Topics.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue")
  },
  {
    path: "/publications",
    name: "Publications",
    component: () => import("../views/Publications.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
