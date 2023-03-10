import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Behandeling from '../views/Behandeling.vue'
import Lichamelijke_Klachten from '../views/Lichamelijke_Klachten.vue'
import OverMei from '../views/OverMei.vue'
import Tarieven from '../views/Tarieven.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/behandeling',
      name: 'behandeling',
      component: Behandeling
    },
    {
      path: '/lichamelijkeklachten',
      name: 'lichamelijkeklachten',
      component: Lichamelijke_Klachten
    },
    {
      path: '/mei',
      name: 'mei',
      component: OverMei
    },
    {
      path: '/tarieven',
      name: 'tarieven',
      component: Tarieven
    },
  ]
})

export default router
