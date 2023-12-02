<template>
    <div>
      <!-- Conteúdo da página -->
      <div style="background-color: #D7E0E4; height: 100vh; display: flex; align-items: center; justify-content: center;">
        <!-- Modal -->
        <div style="background-color: #E5E8E9; padding: 20px; text-align: center; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); margin-top: -50px; color: #061494; font-weight: bold; font-size: 25px;height: 300px; width: 500px;">
          <p>Aguarde enquanto <br> redefinimos a sua senha.</p>
          <input type="password" placeholder="Nova Senha" style="margin-bottom: 10px; padding: 10px; width: 80%; box-sizing: border-box;">
          <input type="password" placeholder="Confirme a Nova Senha" style="margin-bottom: 20px; padding: 10px; width: 80%; box-sizing: border-box;">
          <!-- Botão para redefinir senha -->
          <button @click="redefinirSenha" style="font-size: 20px;">Redefinir Senha</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redefinirSenha() {
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais podem ser adicionados aqui conforme necessário */
  </style>
  