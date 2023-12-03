<template>
    <div>
      <!-- Conteúdo da página -->
      <div style="background-color: #D7E0E4; height: 100vh; display: flex; align-items: center; justify-content: center;">
        <!-- Modal -->
        <div style="background-color: #E5E8E9; padding: 20px; text-align: center; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); margin-top: -50px; color: #061494; font-weight: bold; font-size: 25px; height: 200px; width: 400px;">
          <div v-if="emailEnviado">
            <p>Email enviado, verifique seu email <span class="icon-email">✉️</span></p>
          </div>
  
          <!-- Botão para redefinir senha -->
          <button @click="Ok" style="font-size: 20px;">OK</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        emailEnviado: true, // Alterei para true para exibir a mensagem no exemplo
      };
    },
    methods: {
      Ok() {
        this.$router.push('/redefinirsenha');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionais podem ser adicionados aqui conforme necessário */
  </style>
  