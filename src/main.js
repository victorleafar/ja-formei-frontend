import { createApp } from 'vue'
import App from './App.vue'
import CadastroViews from './views/CadastroViews.vue'
import ValidacaoViews from './views/ValidacaoViews.vue'
// 1 - import view
import {createRouter, createWebHistory} from 'vue-router'  


// 2 - adicionar a rota
const routes = [
  { path: '/', component: CadastroViews },
  { path: '/cadastro', component: CadastroViews },
  {path: '/validacao', component: ValidacaoViews}
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')