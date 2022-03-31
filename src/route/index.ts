import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
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
  {
    path: '/css',
    name: 'CSS',
    component: () => import('../views/css/CSS.vue'),
  },
  {
    path: '/css/flex',
    name: 'Flex',
    component: () => import('../views/css/flex/Flex.vue'),
  },
  {
    path: '/css/grid',
    name: 'Grid',
    component: () => import('../views/css/grid/Grid.vue'),
  },
  {
    path: '/windi/index',
    name: 'windiIndex',
    component: () => import('../views/windi/Index.vue'),
  },
]

const router = createRouter({
  // history: createWebHistory('/'),
  history: createWebHashHistory(),
  routes,
})

export default router
