import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Home/index.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router