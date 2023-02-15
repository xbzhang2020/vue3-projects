import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/table',
    component: () => import('../components/edit-table/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
