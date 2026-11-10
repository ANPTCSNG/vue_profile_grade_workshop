
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/grade',
    name: 'Grade',
    component: () => import('../views/GradeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
