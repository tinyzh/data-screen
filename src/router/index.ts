import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type {RouteRecordRaw} from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('@/views/businessMage/index.vue'),
      },
      {
        path: '/pm',
        name: 'pm',
        component: () => import('@/views/PM/index.vue'),
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/right-center.vue'),
      },{
        path: '/vusu',
        name: 'vusu',
        component: () => import('@/views/vusu/index.vue'),
      },
      {
        path: '/userManager',
        name: 'userManager',
        component: () => import('@/views/userManager/index.vue'),
      },
      {
        path: '/kaoqin',
        name: 'kaoqin',
        component: () => import('@/views/kaoqin/index.vue'),
      },
      {
        path: '/peixun',
        name: 'peixun',
        component: () => import('@/views/peixun/index.vue'),
      },
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
