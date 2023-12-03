import { createApp } from 'vue'
import App from './App.vue'
import LoginViews from './views/LoginViews.vue'
import ValidacaoViews from './views/ValidacaoViews.vue'
import HomeViews from './views/HomeViews.vue'
import DashboardViews from './views/DashboardViews.vue'
import ForumViews from './views/ForumViews'
import ReportarViews from './views/ReportarViews'
import CadastroViews from './views/CadastroViews'
import EventosEncontros from './views/EventosEncontros'
import PerfilViews from './views/PerfilViews'
import NovoTopicoViews from './views/NovoTopicoViews'
import RedefinirSenhaViews from './views/RedefinirSenhaViews'
import RedefinirsenhaEmail from './views/RecuperarsenhaEmail'
import RedefinirsenhaVerificar from './views/RecuperarsenhaVerificar'
import TopicoCriadoViews from './views/TopicoCriadoViews'
// 1 - import view
import { createRouter, createWebHistory } from 'vue-router'


// 2 - adicionar a rota
const routes = [
  { path: '/', component: LoginViews },
  { path: '/login', component: LoginViews },
  { path: '/validacao', component: ValidacaoViews },
  { path: '/home', component: HomeViews },
  { path: '/dashboard', component: DashboardViews },
  { path: '/forum', component: ForumViews },
  { path: '/reportar', component: ReportarViews },
  { path: '/eventos', component: EventosEncontros },
  { path: '/cadastro', component: CadastroViews },
  { path: '/perfil', component: PerfilViews },
  { path: '/novotopico', component: NovoTopicoViews },
  { path: '/redefinirsenha', component: RedefinirSenhaViews },
  { path: '/redefinirsenhaemail', component: RedefinirsenhaEmail },
  { path: '/redefinirsenhaverificar', component: RedefinirsenhaVerificar },
  { path: '/topicocriado', component: TopicoCriadoViews },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')