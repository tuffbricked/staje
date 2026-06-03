import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Marketplace from '../pages/Marketplace.vue'
import Farmers from '../pages/Farmers.vue'
import Register from '../pages/Register.vue'
import Translator from '../pages/Translator.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/marketplace', name: 'Marketplace', component: Marketplace },
  { path: '/farmers', name: 'Farmers', component: Farmers },
  { path: '/register', name: 'Register', component: Register },
  { path: '/translate', name: 'Translator', component: Translator },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
