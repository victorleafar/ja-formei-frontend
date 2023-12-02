<template>
  <div id="app">
    <!-- Menu Lateral -->
    <div id="sidebar">
  
    </div>

    <!-- Conteúdo Central -->
    <div id="content">
      <div id="header">
        <h1>Cadastro</h1>
      </div>

      <!-- Formulário de Cadastro -->
      <div class="event-section">
        <form>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
          </div>

          <div class="form-group">
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" required>
          </div>

          <div class="form-group">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required>
          </div>

          <div class="form-group">
            <label for="curso">Curso:</label>
            <select id="curso" name="curso" required>
              <option value="curso1">Curso de graduação 1</option>
              <option value="curso2">Curso de graduaçã 2</option>
              <option value="curso2">Curso de graduaçã 3</option>
              <option value="curso2">Curso de graduaçã 4</option>
              <option value="curso2">Curso de graduaçã 5</option>
              <option value="curso2">Curso de graduaçã 6</option>
              <option value="curso2">Curso de graduaçã 7</option>
              
            </select>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>

          <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required>
          </div>

          <div class="form-group">
            <label for="confirmaSenha">Confirme a Senha:</label>
            <input type="password" id="confirmaSenha" name="confirmaSenha" required>
            <div class="button-container">
            <button id="Cadastrar" @click="cadastrar">Cadastrar</button>
          </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Menu Lateral Direito -->
    <div id="right-sidebar">
      <!-- ... (mantenha o conteúdo do menu lateral direito) ... -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cadastrar(){
      this.$router.push('/validacao');
    },
    
  },
};
</script>

<style scoped>
/* ... (mantenha os estilos existentes) ... */

.form-group {
  margin-bottom: 20px;
}

form {

  flex-direction: column;
}
.form-group input {
  width: 100%; /* Ou a largura desejada, como 200px */
  max-width: 300px; /* Adicione uma largura máxima */
  padding: 10px;
  box-sizing: border-box;
  margin: 5px 0; /* Adicione um pequeno espaçamento vertical entre os campos */
  /* Adicione outras propriedades de estilo conforme necessário */
}
.custom-button {
  width: 200px; /* ou o tamanho desejado em pixels ou outra unidade */
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  background-color: #12B82D;
  color: #fff;
  cursor: pointer;
}

</style>
