import Router from "vue-router";
import Vue from "vue";
import Accueil from "./components/Accueil";

Vue.use(Router);

// 3. Create the router
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Accueil },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/login.vue"),
      props: true
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/register.vue"),
      props: true
    }
  ]
});
