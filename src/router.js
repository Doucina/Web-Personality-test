import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

// 3. Create the router
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "QUIZZLAND", component: HelloWorld }
    //{ path: "/test", component: Test }
  ]
});
