import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notas',
    name: 'notas',
    component: () => import('../views/NotaView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la ruta requiere autenticación

    if (!token || !userId) {
      // Si no hay token o userId en el almacenamiento local, redirige a la página de login
      next('/login')
    } else {
      // Si hay token y userId en el almacenamiento local, permite la navegación
      next()
    }

  } else {
    // Si la ruta no requiere autenticación, permite la navegación
    next()
  }
})


export default router
