import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

// 3. Create the router
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Accueil.vue")
    },
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
    },
    {
      path: "/quizz",
      name: "Test",
      component: () => import("./components/Test.vue"),
      props: true
    }
  ]
});
