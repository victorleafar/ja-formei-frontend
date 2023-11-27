import { createApp } from 'vue'
import App from './App.vue'
import CadastroViews from './views/CadastroViews.vue'
import ValidacaoViews from './views/ValidacaoViews.vue'
import HomeViews from './views/HomeViews.vue'
import DashboardViews from './views/DashboardViews.vue'
import ForumViews from './views/ForumViews'
// 1 - import view
import {createRouter, createWebHistory} from 'vue-router'  


// 2 - adicionar a rota
const routes = [
  { path: '/', component: CadastroViews },
  { path: '/cadastro', component: CadastroViews },
  {path: '/validacao', component: ValidacaoViews},
  {path: '/home', component: HomeViews},
  {path: '/dashboard', component: DashboardViews},
  {path:'/forum', component: ForumViews},
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')