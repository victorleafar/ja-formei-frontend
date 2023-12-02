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
      <h1>Dashboard</h1>
      <!-- Indicadores -->
      <div class="indicator-container">
        <!-- Indicador 1 -->
        <div class="indicator">
          <span>1</span>
          <h3>Título 1</h3>
          <p>Descrição do indicador 1.</p>
        </div>

        <!-- Indicador 2 -->
        <div class="indicator">
          <span>2</span>
          <h3>Título 2</h3>
          <p>Descrição do indicador 2.</p>
        </div>

        <!-- Indicador 3 -->
        <div class="indicator">
          <span>3</span>
          <h3>Título 3</h3>
          <p>Descrição do indicador 3.</p>
        </div>

        <!-- Indicador 4 -->
        <div class="indicator">
          <span>4</span>
          <h3>Título 4</h3>
          <p>Descrição do indicador 4.</p>
        </div>

        <!-- Indicador 5 -->
        <div class="indicator">
          <span>5</span>
          <h3>Título 5</h3>
          <p>Descrição do indicador 5.</p>
        </div>

        <!-- Indicador 6 -->
        <div class="indicator">
          <span>6</span>
          <h3>Título 6</h3>
          <p>Descrição do indicador 6.</p>
        </div>
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

#content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centraliza o conteúdo */
}

.indicator-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* Ajusta o espaço entre os indicadores */
  gap: 20px;
  /* Espaçamento entre os indicadores */
}

.indicator {
  flex: 0 0 calc(33.33% - 20px);
  /* Garante três indicadores por linha */
  max-width: 300px;
  padding: 20px;
  border: 2px solid #699BF7;
  background-color: #F3FAF9;
  border-radius: 10px;
  margin-bottom: 20px;
  /* Ajuste a margem conforme necessário */
  text-align: center;
  /* Centraliza o conteúdo dentro do indicador */
}

.indicator h3 {
  margin-bottom: 10px;
}

.indicator p {
  margin-bottom: 10px;
}

.indicator span {
  font-size: 24px;
  font-weight: bold;
  color: #699BF7;
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
  height: 200vh;
  /* Ajustado para ocupar 100% da altura da viewport */
  display: flex;
  flex-direction: column;
}</style>
