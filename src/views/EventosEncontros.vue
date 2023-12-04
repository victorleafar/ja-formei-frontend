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
        <h1>Eventos e Encontros</h1>
        <div id="search-notification">
          <img style="height: 30px; width: 30px;" src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-bleue.png" alt="Ícone de Notificação">
          <i class="fas fa-bell"></i>
          <input type="text" placeholder="Pesquisar">
        </div>
      </div>

      <!-- Lista de Eventos -->
      <div class="event-section">
        <div class="event-block">
          <h3>Evento 1: Para ex alunos e graduando proximos a finalizar</h3>
          <p>Data: 01/12/2023</p>
          <p>Hora: 14:00</p>
          <p>Lugar: Local A</p>
          <p>Descrição: Descrição do Evento 1</p>
        </div>
        <div class="event-block">
          <h3>Evento 2: Para ex alunos e graduando proximos a finalizar</h3>
          <p>Data: 05/12/2023</p>
          <p>Hora: 18:30</p>
          <p>Lugar: Local B</p>
          <p>Descrição: Descrição do Evento 2</p>
        </div>
        <!-- Adicione mais blocos conforme necessário -->
      </div>
    </div>

    <!-- Menu Lateral Direito -->
    <div id="right-sidebar">
    <!-- Adicione o componente full-calendar com a imagem do calendário -->
    <div class="event-section">
      <img
        src="@/assets/pngtree-2023-calendar-december-blue-png-image_8680836.png"
        alt="Calendário"
        style="max-width: 80%; height: auto;"
      />
    </div>
     
      <!-- Formulário para Criar Eventos -->
      <div class="event-section">
        <h2>Novo Evento</h2>
        <form>
          <!-- Campos do formulário -->
          <label for="nomeEvento">Nome do Evento:</label>
          <input type="text" id="nomeEvento" name="nomeEvento" required>

          <label for="dataEvento">Data do Evento:</label>
          <input type="date" id="dataEvento" name="dataEvento" required>

          <label for="horaEvento">Hora do Evento:</label>
          <input type="time" id="horaEvento" name="horaEvento" required>

          <label for="localEvento">Local do Evento:</label>
          <input type="text" id="localEvento" name="localEvento" required>

          <label for="descricaoEvento">Descrição do Evento:</label>
          <textarea id="descricaoEvento" name="descricaoEvento" required></textarea>

          <button type="submit">Criar Evento</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    profile(){
      this.$router.push('/perfil');
    },
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

input {
  height: 30px; 
  font-family: 'Akshar', sans-serif;
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
  max-height: 550px;
  overflow-y: auto;
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

.event-section {
  background-color: #E1E7E9;
  color: #061494;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.event-section h2 {
  margin-bottom: 15px;
  color: #061494;
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
  margin-bottom: 20px;
}

.indicator-modal {
  flex: 1;
  padding: 20px;
  border: 2px solid #699BF7;
  background-color: #F3FAF9;
  border-radius: 10px;
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

.topic-members {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
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
  max-height: 300px;
  overflow-y: auto;
}

#right-sidebar {
  width: 300px;
  background-color: #E1E7E9;
  color: #061494;
  padding: 20px;
  overflow-y: auto;
  margin-top: -70px;
}
.event-section {
  background-color: #E1E7E9;
  color: #061494;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.event-section h2 {
  margin-bottom: 15px;
  color: #061494;
}

.event-block {
  background-color: #E1E7E9;
  color: #061494;
  padding: 5px;
  margin-bottom: 20px; /* Ajuste o valor conforme necessário */
  border-radius: 8px;
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.event-block h3 {
  margin-bottom: 10px;
  color: #061494;
  text-align: left;
}

.event-block p {
  margin-bottom: 5px;
  text-align: left;
}

</style>
