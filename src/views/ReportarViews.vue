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
    <div id="content" class="center-content">
      <h1>Reportar BUG</h1>
      <!-- Formulário de Reportar Bug -->
      <div class="container">
        <form @submit.prevent="submitBugReport" class="bug-form">
          <div class="form-group">
            <label for="title">Título:</label>
            <textarea v-model="bugReport.title" required></textarea>
          </div>

          <div class="form-group">
            <label for="description">Descrição do Bug:</label>
            <textarea v-model="bugReport.description" required></textarea>
          </div>

          <div class="form-group">
            <label for="type">Tipo de Bug:</label>
            <select v-model="bugReport.type">
              <option value="Functionality">Funcionalidade</option>
              <option value="Accessibility">Acessibilidade</option>
              <option value="UI">Interface do Usuário</option>
              <option value="Usability">Usabilidade</option>
              <option value="Performance">Desempenho</option>
            </select>
          </div>

          <div class="form-group">
            <label for="category">Categoria:</label>
            <select v-model="bugReport.category">
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>

          <div class="form-group">
            <label for="imageUpload">Anexar Imagens:</label>
            <input type="file" id="imageUpload" accept="image/*" @change="handleImageUpload" multiple>
          </div>

          <!-- Exibir imagens carregadas -->
          <div v-if="bugReport.images.length" class="image-preview">
            <p>Imagens Anexadas:</p>
            <img v-for="(image, index) in bugReport.images" :key="index" :src="image" alt="Imagem">
          </div>

          <button type="submit" class="btn">Enviar Relatório</button>
        </form>

        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bugReport: {
        title: '',
        description: '',
        type: '',
        category: '',
        images: []
      },
      successMessage: '',
      outraRota1Data: {
        // Adicione dados específicos para outra-rota-1, se necessário
      },
    };
  },
  methods: {
    submitBugReport() {
      // Lógica para enviar relatório de bug
      this.successMessage = 'Bug report enviado com sucesso!';
    },
    handleImageUpload(event) {
      // Lógica para manipular upload de imagens
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.bugReport.images.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    },
    // Adicione métodos específicos para outra-rota-1
    outraRota1Method() {
      // Lógica específica para outra-rota-1
      // Por exemplo, você pode adicionar uma mensagem de sucesso ou fazer outra coisa
    },
    // Métodos para as rotas existentes
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
}

.center-content {
  padding: 10px;

  align-items: center;
}

.container {
  justify-content: center;
  max-width: 6000px;
  background-color: #E5E8E9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 10px;
  width: 400px;

}

label {
  display: block;
  margin-bottom: 5px;
}

textarea,
select,
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  appearance: none;
  background: url('https://image-url-for-dropdown-arrow') no-repeat right #fff;
  background-size: 20px;
  padding-right: 30px;
}

.btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
}

.image-upload {
  margin-top: 15px;
}

.image-preview {
  max-width: 100%;
  margin-top: 15px;
}

.image-preview img {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.success-message,
.error-message {
  margin-top: 15px;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
