import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from '../views/TodoApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoApp
    }
  ]
})

export default router
