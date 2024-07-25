import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import StoreView from '@/views/StoreView.vue'
import UserInfo from '../views/UserInfo.vue'
import ChangePasswdView from '../views/ChangePasswdView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: '/register',
      component: RegisterView
    },
    {
      path: '/user/info',
      name: '/userinfo',
      component: UserInfo
    },
    {
      path: '/user/changepasswd',
      name: '/changePasswd',
      component: ChangePasswdView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
