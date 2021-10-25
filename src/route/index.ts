import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue'),
  },
]

const router = createRouter({
  // history: createWebHistory('/'),
  history: createWebHashHistory(),
  routes,
})

export default router
