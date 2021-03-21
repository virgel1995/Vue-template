import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css"
import "animate.css/animate.css"
import "hover.css"
import "hover.css/css/hover-min.css"
import "@fortawesome/fontawesome-free"
import "@fortawesome/fontawesome-free/css/all.min.css"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
