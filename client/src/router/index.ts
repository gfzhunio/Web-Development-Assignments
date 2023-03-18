import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/myActivity',
      name: 'myActivity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyActivity.vue')
    },
    {
      path: '/friendsActivity',
      name: 'friendsActivity',
      component: () => import('../views/FriendsActivity.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/createWorkout',
      name: 'createWorkout',
      component: () => import('../views/CreateWorkout.vue')
    }

  ]
})

export default router
