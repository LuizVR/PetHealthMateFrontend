import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'
import Mascotas from '../views/Mascotas.vue'
import PostMascotas from '../views/PostMascotas.vue'
import Campaign from '../views/Campaigns.vue'
import Registro from '../views/Registro.vue'
import InfoMascota from '../views/EditarMascotas.vue'

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
    path: '/login',
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
  {
    path: '/campaigns',
    name: 'Campaign',
    component: Campaign
  },
  {
    path: '/mascota/:pet_Id',
    name: 'InfoMascota',
    component: InfoMascota,
    props: true
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
