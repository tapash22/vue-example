import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'land',
    component: () => import(/* webpackChunkName: "about" */ '../views/Land.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/sir',
    name: 'sir',
    component: () => import(/* webpackChunkName: "about" */ '../views/SirForm.vue')
  },
  {
    path: '/carView',
    name: 'carView',
    component: () => import(/* webpackChunkName: "carView" */ '../views/CarView.vue')
  },
  {
    path: '/carDetails/:id',
    name: 'carDetails',
    component: () => import(/* webpackChunkName: "carDetails" */ '../views/CarDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
