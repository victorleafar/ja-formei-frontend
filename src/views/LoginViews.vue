<template>
  <div>
    <div class="container">
      <img class="logo" src="https://media.discordapp.net/attachments/1087446474104774666/1163898666902372396/logo.png?ex=6541401a&is=652ecb1a&hm=40dfba49c06d377a73c7f09b723051831145bc6bc1870229e375fc78c4d07691&=&width=832&height=468" alt="Logo">
      <div class="form">
        <h1>Faça login na sua conta</h1>
        <form @submit.prevent="login">
          <input v-model="username" type="text" name="username" placeholder="Usuário">
          <input v-model="password" type="password" name="password" placeholder="Senha">
          <br>
          <a href="/redefinirsenhaemail" style="text-decoration: underline; color: #12B82D;">Esqueceu a senha?</a>
          <br><br>
          <button type="submit">ENTRAR</button>
        </form>
        <a href="/cadastro" class="create-account" @click="criarConta">Não tem uma conta? Criar conta</a>
        <div class="or">OU</div>
        <a href="/login/google" class="google-button">
      <span class="google-icon"></span> Continuar com Google
    </a>
      </div>
      <div class="banner"></div>
    </div>

    <!-- Modal para Cadastro -->
    <div class="modal" v-show="showModal">
      <!-- Conteúdo do modal de cadastro -->
      <h1>Cadastro</h1>
      <!-- Adicionar os campos e elementos necessários para o cadastro -->
      <button @click="closeModal">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  // Restante do código ...

  methods: {
    login() {
      
      this.$router.push('/home');
    },
    criarContat() {
      
      this.$router.push('/cadastro');
    },
    
    // Restante do seu código ...
  }
};
</script>

<style>

@font-face {
  font-family: Akshar;
  src: url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #D7E0E4;
  font-family: 'Akshar', sans-serif;
  height: 100%;
  overflow-y: hidden;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
}

.banner {
  flex: 1;
  height: 80vh;
  background: url('https://media.discordapp.net/attachments/1087446474104774666/1163895684630577172/image.png?ex=65413d53&is=652ec853&hm=77d595701808c8299f95f366aac38af9c67edba07106caeadfc3d8e407637478&=&width=613&height=583') center/cover no-repeat;
  background-size: contain;
  margin-left: 250px;
}

.form {
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  font-family: 'Akshar', sans-serif;
}

.logo {
  max-width: 350px;
  position: absolute;
  top: -95px;
  left: -60px;
}

h1 {
  color: #061494;
  font-size: 20px;
  font-family: 'Akshar', sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Akshar', sans-serif;
}

input {
  width: 100%;
  padding: 10px;
  margin: 5px;
  color: #F5F5F5;
  box-sizing: border-box;
  font-family: 'Akshar', sans-serif;
  border-radius: 14px; 
  box-shadow: 0px 0px 10px 0px rgba(112, 112, 112, 0.765);
  border-color: rgba(180, 182, 180, 0.765);
}

button {
  width: 90%;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  background-color: #12B82D;
  color: #f5f5f5;
  cursor: pointer;
  font-family: 'Akshar', sans-serif;
  border-radius: 18px; 
  box-shadow: 0px 0px 10px 0px rgba(227, 228, 227, 0.765);
  border-color: rgba(39, 165, 39, 0.765);
}

button:hover {
  border: 2px solid rgb(81, 221, 81);
  transform: scale(1.1); 
  box-shadow: 0 5px 15px rgba(232, 230, 230, 0.6);
}

a.create-account {
  display: block;
  margin-top: 10px;
  color: #061494;
  text-decoration: none;
  font-family: 'Akshar', sans-serif;
}

a.create-account .blue-underlined {
  color: #0000FF;
  text-decoration: underline;
}

.or {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.or::before, .or::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px;
}

/* Adicionando estilos para o modal */
.modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
}

.google-button {
  width: 100%;
  display: inline-block;
  background-color: #fff;
  color: #000000;
  border: 1px solid #ffffff;
  text-decoration: none;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.google-button:hover {
  background-color: #f0f3f1;
  color: #fff;
}

.google-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('https://imagepng.org/google-icone-icon/google-icon/') center/cover no-repeat;
  margin-right: 6px;
}

</style>

