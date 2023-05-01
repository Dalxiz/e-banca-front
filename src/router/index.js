import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateUsuario from '../views/usuarios/CreateUsuario.vue'
import IndexUsuario from '../views/usuarios/IndexUsuario.vue'
import ModuloBancario from '../views/ModuloBancario.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'login', component: LoginApp },
  {path: '/home', name: 'HomeView', component: HomeView },
  {path: '/usuarios/index', name: 'usuario-index', component: IndexUsuario },
  {path: '/usuarios/create', name: 'usuario-create', component: CreateUsuario },
  {path: '/module-banca', name: 'ModuloBancario', component: ModuloBancario },
  {path: '/about',name: 'about'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
