import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/category',
    component: Layout,
    redirect: '/category/page1',
    alwaysShow: true,
    meta: {
      title: '分类',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'page1',
        name: 'Page1',
        component: () => import('@/views/category/page1'),
        meta: {
          title: '页面1',
          icon: 'apps-line',
        },
      },
      {
        path: 'page2',
        name: 'Page2',
        component: () => import('@/views/category/page2'),
        meta: {
          title: '页面2',
          icon: 'table-2',
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
