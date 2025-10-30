import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/EditView.vue'),
    },
    {
      path: '/convert',
      name: 'convert',
      component: () => import('../views/ConvertView.vue'),
    },
    {
      path: '/split',
      name: 'split',
      component: () => import('../views/SplitView.vue'),
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../views/SignView.vue'),
    },
    {
      path: '/merge',
      name: 'merge',
      component: () => import('../views/MergeView.vue'),
    },
  ],
})

export default router
