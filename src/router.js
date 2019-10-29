import Router from 'vue-router'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

// 3. Create the router
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/login', name: 'login', component: () => import('./components/login.vue'), props: true },
    { path: '/test', name: 'test', component: () => import('./components/test.vue'), props: true },
    { path: '/register', name: 'register', component: () => import('./components/register.vue'), props: true }
  ]
})
