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
          <li @click="inicialpage" class="inicialpage">Página Inicial</li>
          <li @click="dashboard" class="dashboard">Dashboard</li>
          <li @click="forum" class="forum">Fórum</li>
          <li @click="eventos" class="eventos">Eventos e Encontros</li>
          <li @click="reportarBug" class="bug">Reportar um Bug</li>
        </ul>
      </div>
  
      <!-- Conteúdo Central -->
      <div id="content">
        <h1>Eventos e Encontros</h1>
      </div>
  
      
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      inicialpage() {
        this.$router.push('/home');
      },
      dashboard() {
        // Lógica para a opção Dashboard
        this.$router.push('/dashboard');
      },
      forum() {
        // Lógica para a opção Fórum
        this.$router.push('/forum');
      },
      eventos() {
        // Lógica para a opção Eventos e Encontros
        this.$router.push('/eventos');
      },
      reportarBug() {
        // Lógica para a opção Reportar um Bug
        this.$router.push('/reportar');
      },
      // Adicione outros métodos conforme necessário
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais podem ser adicionados aqui conforme necessário */
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
  
  .member-photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  #right-sidebar {
    width: 300px;
    background-color: #E1E7E9;
    color: #061494;
    padding: 20px;
    height: 200vh; /* Ajustado para ocupar 100% da altura da viewport */
    display: flex;
    flex-direction: column;
  }
  
  
  </style>
  