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
        <li @click="profile" class="profile">Perfil</li>
        <li @click="inicialpage" class="inicialpage">Página Inicial</li>
        <li @click="dashboard" class="dashboard">Dashboard</li>
        <li @click="forum" class="forum">Fórum</li>
        <li @click="eventos" class="eventos">Eventos e Encontros</li>
        <li @click="reportarBug" class="bug">Reportar um Bug</li>
      </ul>
    </div>

    <!-- Conteúdo Central -->
    <div id="content">
      <div id="header">
        <h1>Forum</h1>
        <div id="search-notification">
          <img style="height: 30px; width: 30px;" src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-bleue.png" alt="Ícone de Notificação">
          <i class="fas fa-bell"></i>
          <input type="text" placeholder="Pesquisar">
        </div>

      </div>

      <div id=criarTopico>
        <button id="btCriarTopico" @click="criarTopico">Criar Tópico</button>
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
            <tr onclick="location.href='/topicocriado';" style="cursor: pointer;">
              <td><a href="/topicocriado">Título do Tópico 1</a></td>
              <td><a href="/topicocriado">Categoria: A</a></td>
              <td><a href="/topicocriado">10</a></td>
              <td><a href="/topicocriado">Participantes: 10</a></td>
          </tr>

          <tr onclick="location.href='/topicocriado';" style="cursor: pointer;">
            <td><a href="/topicocriado">Título do Tópico 2</a></td>
            <td><a href="/topicocriado">Categoria: B</a></td>
            <td><a href="/topicocriado">15</a></td>
            <td><a href="/topicocriado">Participantes: 15</a></td>
         </tr>
         <tr onclick="location.href='/topicocriado';" style="cursor: pointer;">
              <td><a href="/topicocriado">Título do Tópico 3</a></td>
              <td><a href="/topicocriado">Categoria: C</a></td>
              <td><a href="/topicocriado">20</a></td>
              <td><a href="/topicocriado">Participantes: 20</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    criarTopico(){
      this.$router.push('/novotopico');
    },
    profile(){
      this.$router.push('/perfil');
    },
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

h1 {
  text-align: left;
}

#sidebar {
  width: 300px;
  background-color: #E5E8E9;
  color: #061494;
  padding: 20px;
  margin-top: -70px;

}

#profile {
  text-align: center;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
tr {
        cursor: pointer;
    }

    td a {
        text-decoration: none;
        color: inherit; /* Isso mantém a cor original do texto */
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

#menu li:hover{
  border: 2px solid rgba(246, 242, 242, 0.6);
  transform: scale(1.08);
  background-color: rgba(246, 242, 242, 0.6);
  box-shadow: 0 5px 15px rgba(232, 230, 230, 0.6);
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
  width: 50px;
  /* Ajuste conforme necessário */
  height: 50px;
  /* Ajuste conforme necessário */
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

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #B5BDD9;
  color: #061494;
}

tr {
  margin-bottom: 10px;
  /* Adiciona espaçamento entre as linhas */
}

tr:hover {
  background-color: #f5f5f5;
}




#btCriarTopico {
  width: 10%;
  align-content: left;

}
</style>
  