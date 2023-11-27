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
          <li>Forum</li>
          <li>Dashboard</li>
          <li>Fórum</li>
          <li>Usuários</li>
          <li>Eventos e Encontros</li>
          <li>Reportar um Bug</li>
        </ul>
      </div>
  
      <!-- Conteúdo Central -->
      <div id="content">
        <div id="header">
          <h1>Forum</h1>
          <div id="search-notification">
            <img src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-bleue.png" alt="Ícone de Notificação">
            <i class="fas fa-bell"></i>
            <input type="text" placeholder="Pesquisar">
          </div>
          
        </div>
  
        <!-- Lista de Últimos Tópicos -->
        <div id="Forum">
          <table>
            <thead>
              <tr>
                <th>Fórum</th>
                <th>Descrição</th>
                <th>Tópicos</th>
                <th>Número de Participantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título do Tópico 1</td>
                <td>Categoria: A</td>
                <td>10</td>
                <td>Participantes: 10</td>
              </tr>
              <tr>
                <td>Título do Tópico 2</td>
                <td>Categoria: B</td>
                <td>15</td>
                <td>Participantes: 15</td>
              </tr>
              <tr>
                <td>Título do Tópico 3</td>
                <td>Categoria: C</td>
                <td>20</td>
                <td>Participantes: 20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Componente Vue.js
  };
  </script>
  
  <style scoped>
    /* Estilos adicionais podem ser adicionados aqui conforme necessário */
    #app {
      display: flex;
      min-height: 100vh;
    }
  
    h1 {
      text-align: left;
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
  
    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  
    #search-notification {
      display: flex;
      align-items: center;
    }
    #search-notification img {
    width: 50px; /* Ajuste conforme necessário */
    height: 50px; /* Ajuste conforme necessário */
    margin-right: 10px;
  }
    #search-notification i {
      font-size: 20px;
      color: #061494;
      margin-right: 10px;
    }
  
    #search-notification input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }
  
    th, td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  
    th {
      background-color: #B5BDD9;
      color: #061494;
    }
  
    tr {
      margin-bottom: 10px; /* Adiciona espaçamento entre as linhas */
    }
  
    tr:hover {
      background-color: #f5f5f5;
    }
  </style>
  