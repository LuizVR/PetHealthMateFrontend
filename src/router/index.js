import { createRouter, createWebHistory } from '@ionic/vue-router';
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'
import Mascotas from '../views/Mascotas.vue'
import PostMascotas from '../views/PostMascotas.vue'
import Campaign from '../views/CampaignsPost.vue'
import Registro from '../views/Registro.vue'
import InfoMascota from '../views/EditarMascotas.vue'
import Gps from '../views/Gps.vue'
import ListaCampania from '../views/ListaCampanias.vue'
import Perfil from '../views/Perfil.vue'
import ListCampaigns from '../views/ListCampaigns.vue'
import InfoCampaigns from '../views/EditarCampaigns.vue'



const routes = [
  {
    path: '/',
    redirect: '/login'
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
    path: '/campaignsPost',
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
  {
    path: '/Gps',
    name: 'Gps',
    component: Gps
  },
  {
    path: '/campania/:lat/:lng/:street/:locality',
    name: 'Campania',
    component: Campaign,
    props: true,
  },
  {
    path: '/listacampa',
    name: 'ListaCampania',
    component: ListaCampania
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/listCampania',
    name: 'ListCampaigns',
    component: ListCampaigns
  },
  {
    path: '/campaigns/:campaign_Id',
    name: 'InfoCampaigns',
    component: InfoCampaigns,
    props: true
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
