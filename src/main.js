import { createApp } from 'vue'
import App from './App.vue'
import LoginViews from './views/LoginViews.vue'
import ValidacaoViews from './views/ValidacaoViews.vue'
import HomeViews from './views/HomeViews.vue'
import DashboardViews from './views/DashboardViews.vue'
import ForumViews from './views/ForumViews'
import ReportarViews from './views/ReportarViews'
// 1 - import view
import {createRouter, createWebHistory} from 'vue-router'  


// 2 - adicionar a rota
const routes = [
  { path: '/', component: LoginViews },
  { path: '/login', component: LoginViews },
  {path: '/validacao', component: ValidacaoViews},
  {path: '/home', component: HomeViews},
  {path: '/dashboard', component: DashboardViews},
  {path:'/forum', component: ForumViews},
  {path:'/reportar', component: ReportarViews},
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')