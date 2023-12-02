<template>
  <div>
    <!-- Conteúdo da página -->
    <div style="background-color: #D7E0E4; height: 100vh; display: flex; align-items: center; justify-content: center;">
      <!-- Modal -->
      <div style="background-color: #E5E8E9; padding: 20px; text-align: center; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); margin-top: -50px; color: #061494; font-weight: bold; font-size: 25px;height: 260px; width: 500px;">
        <p>Aguarde enquanto <br> verificamos os seus dados.</p>
        <!-- Ícone (substitua 'seu-icone.png' pelo caminho real do seu ícone) -->
        <img src="https://cdn-icons-png.flaticon.com/512/248/248961.png" alt="Ícone" style="width: 90px; height: 90px; margin-bottom: 10px;">
        <!-- Botão OK -->
        <button @click="fecharModal" style="font-size: 20px;">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fecharModal(){
      this.$router.push('/login');
    },
    
  },
};
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui conforme necessário */
</style>
