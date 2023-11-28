<template>
    <div id="app">
      <!-- Menu Lateral -->
      <div id="sidebar">
        <div id="profile">
          <h2>Já formei</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Avatar" class="avatar">
          <p>Bem-vindo, Fulano de Tal</p>
        </div>
        <hr>
        <ul id="menu">
          <li>Página Inicial</li>
          <li>Dashboard</li>
          <li>Fórum</li>
          <li>Usuários</li>
          <li>Eventos e Encontros</li>
          <li>Reportar um Bug</li>
        </ul>
      </div>
      <!-- Conteúdo Central -->
      <div id="content">
        <h1>Reportar BUG</h1>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    // Componente Vue.js
  };
  </script>
  
  <style scoped>
  
  #app {
    display: flex;
    min-height: 100vh;
  }
  
  
  #sidebar {
    width: 300px;
    background-color: #E1E7E9;
    color: #061494;
    padding: 20px;
  }
  
  #profile {
    text-align: center;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  hr {
    border: 1px solid #061494;
  }
  
  #menu {
    list-style: none;
    padding: 0;
  }
  
  #menu li {
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  #content {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  </style>
  