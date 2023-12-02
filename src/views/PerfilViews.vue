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
                <h1>Nome do usuário</h1>
                <div id="search-notification">
                    <img src="https://icons-for-free.com/download-icon-add+contact+add+user+friend+request+icon-1320166593384401746_0.svg"
                        alt="Ícone de Notificação">
                    <i class="fas fa-bell"></i>
                    <input type="text" placeholder="Pesquisar">
                </div>
            </div>

            <div id="content">
                <!-- Modais de Indicadores -->


                <div id="topics-members">
                    <!-- Lista de Últimos Tópicos -->
                    <div id="recent-topics" class="forum-section">
                        <h2>Informações</h2>
                        <h3>Nome: Ex-Aluno</h3>
                        <p>Graduação: Ciencia da Computação</p>
                        <p>Semestre de Entrada: 2019-1</p>
                        <p>Ano de Conclusão: 2023</p>
                        <p>Cidade Atual: Salvador</p>
                        <p>Email: usuario-exaluno@jmail.com</p>


                    </div>

                    <!-- Lista de Últimos Membros -->

                </div>

                <div id="topics-members">
                    <!-- Lista de Últimos Tópicos -->
                    <div id="recent-topics" class="forum-section">
                        <h2>Tópicos do Usuário</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Título do Tópico</th>
                                    <th>Categoria</th>
                                    <th>Tópicos</th>
                                    <th>Participantes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Título do Tópico 1</td>
                                    <td>Categoria: A</td>
                                    <td>10</td>
                                    <td>Participantes: 10</td>
                                </tr>
                                <tr>
                                    <td>Título do Tópico 2</td>
                                    <td>Categoria: B</td>
                                    <td>15</td>
                                    <td>Participantes: 15</td>
                                </tr>
                                <tr>
                                    <td>Título do Tópico 3</td>
                                    <td>Categoria: C</td>
                                    <td>20</td>
                                    <td>Participantes: 20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Lista de Eventos -->
                <div class="event-section">
                    <div class="forum-section">
                        <h3>Evento 1: Para ex alunos e graduando proximos a finalizar</h3>
                        <p>Data: 01/12/2023</p>
                        <p>Hora: 14:00</p>
                        <p>Lugar: Local A</p>
                        <p>Descrição: Descrição do Evento 1</p>
                    </div>
                    <div class="forum-section">
                        <h3>Evento 2: Para ex alunos e graduando proximos a finalizar</h3>
                        <p>Data: 05/12/2023</p>
                        <p>Hora: 18:30</p>
                        <p>Lugar: Local B</p>
                        <p>Descrição: Descrição do Evento 2</p>
                    </div>
                    <!-- Adicione mais blocos conforme necessário -->
                </div>




            </div>
        </div>
        <!-- Menu Lateral Direito -->
        <div id="right-sidebar">
            <!-- Eventos Próximos -->
            <div class="event-section">
    <h2>Eventos Próximos</h2>
    <ul>
        <li>
            <svg id="calendar" style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                    fill="blue"></path>
            </svg> Evento Próximo 1
        </li>
        <li>
            <svg id="calendar" style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                    fill="blue"></path>
            </svg> Evento Próximo 2
        </li>
        <li>
            <svg id="calendar" style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                    fill="blue"></path>
            </svg> Evento Próximo 3
        </li>
    </ul>
</div>

            <!-- Lista de Eventos -->
            <div class="event-section">
                <h2>Lista de Eventos</h2>
                <ul>
                    <li>Evento 1</li>
                    <li>Evento 2</li>
                    <!-- Adicione mais eventos conforme necessário -->
                </ul>
            </div>

            <!-- Eventos de Amigos -->
            <div class="event-section">
                <h2>Eventos de Amigos</h2>
                <ul>
                    <li>Evento do Amigo 1</li>
                    <li>Evento do Amigo 2</li>
                    <!-- Adicione mais eventos de amigos conforme necessário -->
                </ul>
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

h3 {
    text-align: left;
}

p {
    text-align: center;
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
    max-height: 550px;
    /* Defina a altura máxima desejada */
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

.forum-section {
    background-color: #E1E7E9;
    color: #061494;
    padding: 20px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: left;

}

.forum-section h2 {
    margin-bottom: 15px;
    color: #061494;
    text-align: left;
}

.forum-section table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.forum-section th,
.forum-section td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.forum-section th {
    background-color: #B5BDD9;
    color: #061494;
}

.forum-section tbody tr {
    margin-bottom: 10px;
}

.forum-section tbody tr:hover {
    background-color: #f5f5f5;
}

.forum-section ul {
    list-style: none;
    padding: 0;
}

.forum-section li {
    margin-bottom: 10px;
    cursor: pointer;
}

.forum-section li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.forum-section li span {
    color: #061494;
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
    margin-bottom: 20px;
    text-align: left;
}

.event-section h2 {
    color: #061494;
    margin-bottom: 10px;
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

    /* Ajuste a margem conforme necessário */
}

.indicator-modal {
    flex: 1;
    padding: 20px;
    border: 2px solid #699BF7;
    background-color: #F3FAF9;
    border-radius: 10px;
    /* Adiciona bordas arredondadas */
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
    /* Defina a altura máxima desejada */
    overflow-y: auto;
}

.member-details {
    display: flex;
    flex-direction: column;
}

.member-name {

    color: #061494;
}

.member-graduation,
.member-joined {
    color: #061494;
}

#recent-members .table-container {
    max-height: 300px;
    /* Defina a altura máxima desejada */
    overflow-y: auto;
    /* Adiciona uma barra de rolagem vertical quando necessário */
}

</style>
  