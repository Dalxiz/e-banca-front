import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateUsuario from '../views/usuarios/CreateUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'login', component: LoginApp },
  {path: '/home', name: 'HomeView', component: HomeView },
  {path: '/usuarios/create', name: 'usuario-create', component: CreateUsuario },
  {path: '/about',name: 'about'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
