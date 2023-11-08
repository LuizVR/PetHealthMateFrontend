import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'
import Mascotas from '../views/Mascotas.vue'
import PostMascotas from '../views/PostMascotas.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mascotas',
    name: 'Mascotas',
    component: Mascotas
  },
  {
    path: '/postMascotas',
    name: 'PostMascotas',
    component: PostMascotas
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
