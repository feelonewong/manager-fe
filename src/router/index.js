import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Welcome from '../views/welcome.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    meta: {
      tittle: '首页'
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          tittle: '登录页'
        }
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
          tittle: '欢迎页'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router