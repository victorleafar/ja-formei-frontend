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
      <h1>Página Inicial</h1>

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
      <div id="recent-topics" lass="indicator-modal">
        <h2>Últimos Tópicos</h2>
        <ul>
          <li>Título do Tópico 1 - Categoria: A - Participantes: 10</li>
          <li>Título do Tópico 2 - Categoria: B - Participantes: 15</li>
          <li>Título do Tópico 3 - Categoria: C - Participantes: 20</li>
        </ul>
      </div>

      <!-- Lista de Últimos Membros -->
      <div id="recent-members" >
        <h2>Últimos Membros</h2>
        <ul>
          <li><img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt="Membro 1" class="member-photo"> Nome do Membro 1 - Graduação: A</li>
          <li><img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Membro 2" class="member-photo"> Nome do Membro 2 - Graduação: B</li>
          <li><img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="Membro 3" class="member-photo"> Nome do Membro 3 - Graduação: C</li>
        </ul>
      </div>
    </div>

    <!-- Menu Lateral Direito -->
    <div id="right-sidebar">
      <div id="events-menu">
        <h2>Eventos</h2>
        <ul>
          <li>Próximos Eventos</li>
          <li>Últimos Eventos</li>
        </ul>
      </div>

      <div id="friends-events-menu ">
        <h2>Eventos de Amigos</h2>
        <ul>
          <li>Evento do Amigo 1</li>
          <li>Evento do Amigo 2</li>
        </ul>
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
.modal-1 {
  border: 2px solid #F3FAF9; /* Borda vermelha */
  background-color: #F3FAF9; /* Fundo amarelo */
}

.modal-2 {
  border: 2px solid #F3FAF9; /* Borda verde */
  background-color: #F3FAF9; /* Fundo azul claro */
}

.modal-3 {
  border: 2px solid #F3FAF9; /* Borda azul */
  background-color: #F3FAF9; /* Fundo salmão claro */
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

.modal-container {
  display: flex;
  justify-content: space-between;
}

#recent-topics,
#recent-members {
  margin-top: 20px;
}

#recent-topics ul,
#recent-members ul {
  list-style: none;
  padding: 0;
  
}

#recent-topics li,
#recent-members li {
  margin-bottom: 10px;
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

#events-menu,
#friends-events-menu {
  margin-bottom: 20px;
}

#events-menu ul,
#friends-events-menu ul {
  list-style: none;
  padding: 0;
}

#events-menu li,
#friends-events-menu li {
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

</style>
