<template>
  <div id="app">
    <img alt="Logo da sua rede" src="./assets/logo.png">
    <h1>Bem-vindo à nossa Rede para Ex-alunos!</h1>
    <p>Atualmente, nossa plataforma está em construção.</p>
    <p>Estamos trabalhando para criar um espaço onde ex-alunos possam se reconectar</p>
    <p>compartilhar experiências acadêmicas e profissionais, e celebrar conquistas mútuas.</p>
    <p>Fique atento para mais atualizações em breve!</p>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
  max-width: 500px;
  margin-bottom: 20px;
}

#app h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

#app p {
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 15px;
}
</style>

