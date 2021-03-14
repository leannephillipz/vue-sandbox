import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToDos from '../views/todos.vue'
import ToDos0 from '../views/todos0.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'ToDos',
    component: ToDos
  },
  {
    path: '/todos0',
    name: 'ToDos0',
    component: ToDos0
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
