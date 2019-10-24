import Router from "vue-router";
import Quizz from "./components/Quizz";
import HelloWorld from "./components/HelloWorld";

// 3. Create the router
export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/quizz", component: Quizz }
  ]
});
