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
      <div id="header">
        <h1>Fórum</h1>
        <div id="search-notification">
          <img src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-bleue.png" alt="Ícone de Notificação">
          <i class="fas fa-bell"></i>
          <input type="text" placeholder="Pesquisar">
        </div>
      </div>

      <!-- Modais de Indicadores -->
      <div class="modal-container">
        <div class="indicator-modal modal-1">
          <h3>Título 1</h3>
          <p>Número Indicados: 100</p>
          <p>Descrição: Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="indicator-modal modal-2">
          <h3>Título 2</h3>
          <p>Número Indicados: 150</p>
          <p>Descrição: Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="indicator-modal modal-3">
          <h3>Título 3</h3>
          <p>Número Indicados: 200</p>
          <p>Descrição: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <!-- Lista de Últimos Tópicos -->
      <div id="recent-topics" class="forum-section">
        <h2>Últimos Tópicos</h2>
        <table>
          <thead>
            <tr>
              <th>Título do Tópico</th>
              <th>Categoria</th>
              <th>Tópicos</th>
              <th>Participantes</th>
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

      <!-- Lista de Últimos Membros -->
      <div id="recent-members" class="forum-section">
        <h2>Últimos Membros</h2>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nome</th>
                <th>Graduação</th>
                <th>Membro desde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="Membro 1" class="member-photo">
                </td>
                <td>Nome do Membro 1</td>
                <td>Graduação: A</td>
                <td>Membro desde: 01/01/2023</td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Membro 2" class="member-photo">
                </td>
                <td>Nome do Membro 2</td>
                <td>Graduação: B</td>
                <td>Membro desde: 02/01/2023</td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="Membro 3" class="member-photo">
                </td>
                <td>Nome do Membro 3</td>
                <td>Graduação: C</td>
                <td>Membro desde: 03/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Menu Lateral Direito -->
    <div id="right-sidebar">
      <!-- Eventos Próximos -->
      <div class="event-section">
        <h2>Eventos Próximos</h2>
        <ul>
          <li>Evento Próximo 1</li>
          <li>Evento Próximo 2</li>
          <li>Evento Próximo 3</li>
        </ul>
      </div>

      <!-- Lista de Eventos -->
      <div class="event-section">
        <h2>Lista de Eventos</h2>
        <ul>
          <li>Evento 1</li>
          <li>Evento 2</li>
          <!-- Adicione mais eventos conforme necessário -->
        </ul>
      </div>

      <!-- Eventos de Amigos -->
      <div class="event-section">
        <h2>Eventos de Amigos</h2>
        <ul>
          <li>Evento do Amigo 1</li>
          <li>Evento do Amigo 2</li>
          <!-- Adicione mais eventos de amigos conforme necessário -->
        </ul>
      </div>
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
      this.$router.push('/dashboard');
    },
    forum() {
      this.$router.push('/forum');
    },
    eventos() {
      this.$router.push('/eventos');
    },
    reportarBug() {
      this.$router.push('/reportar');
    },
  },
};
</script>

<style scoped>
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
  width: 50px;
  height: 50px;
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

.forum-section {
  background-color: #E1E7E9;
  color: #061494;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.forum-section h2 {
  margin-bottom: 15px;
  color: #061494;
}

.forum-section table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.forum-section th,
.forum-section td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.forum-section th {
  background-color: #B5BDD9;
  color: #061494;
}

.forum-section tbody tr {
  margin-bottom: 10px;
}

.forum-section tbody tr:hover {
  background-color: #f5f5f5;
}

.forum-section ul {
  list-style: none;
  padding: 0;
}

.forum-section li {
  margin-bottom: 10px;
  cursor: pointer;
}

.forum-section li img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.forum-section li span {
  color: #061494;
}

#right-sidebar {
  width: 300px;
  background-color: #E1E7E9;
  color: #061494;
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.event-section {
  margin-bottom: 20px;
}

.event-section h2 {
  color: #061494;
  margin-bottom: 10px;
}

.event-section ul {
  list-style: none;
  padding: 0;
}

.event-section li {
  margin-bottom: 10px;
  cursor: pointer;
}
.modal-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Ajuste a margem conforme necessário */
}

.indicator-modal {
  flex: 1;
  padding: 20px;
  border: 2px solid #699BF7;
  background-color: #F3FAF9;
  border-radius: 10px; /* Adiciona bordas arredondadas */
  margin-right: 20px;
}

.member-info {
  display: flex;
  align-items: center;
}

.member-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.member-details {
  display: flex;
  flex-direction: column;
}

.member-name {
  font-weight: bold;
  color: #061494;
}

.member-graduation,
.member-joined {
  color: #061494;
}

#recent-members .table-container {
  max-height: 300px; /* Defina a altura máxima desejada */
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
}
</style>
