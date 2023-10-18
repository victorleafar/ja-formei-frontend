// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/LoginViews.vue';
import Cadastro from './views/CadastroViews.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/LoginViews', component: Login },
  { path: '/CadastroViews', component: Cadastro },
];

const router = new VueRouter({
  routes,
});

export default router;  // Certifique-se de exportar o objeto router
