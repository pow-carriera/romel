import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue')
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('../views/RoomsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/BookingCarouselView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfiledetailsView.vue')
    },
    {
      path: '/user',
      name: '/user',
      component: () => import('../views/UserLoggedin.vue')
    },
    {
      path: '/registration',
      name: '/registration',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/booknow',
      name: '/booknow',
      component: () => import('../views/BookNow.vue')
    },
  ]
})

export default router
