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
                <h1>Fórum</h1>
                <div id="search-notification">
                    <img src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-bleue.png"
                        alt="Ícone de Notificação">
                    <i class="fas fa-bell"></i>
                    <input type="text" placeholder="Pesquisar">
                </div>
            </div>

            <div id="content">

                <div id="topics-members">
                    <!-- Lista de Últimos Tópicos -->


                    <div id="recent-topics" class="forum-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Avatar"
                            class="avatartop">Usuario
                        <h2>Título do tópico</h2>
                        <div id="texto">
                            Como desenvolvedor, escolhi adotar o Vue.js como meu principal framework front-end, e as
                            vantagens
                            são notáveis. Primeiramente, a simplicidade da sua sintaxe torna a codificação uma experiência
                            intuitiva e eficiente. Sua capacidade de reatividade permite uma atualização instantânea da
                            interface do usuário, resultando em uma experiência mais fluida para o usuário final.

                            Além disso, a modularidade do Vue.js facilita a organização do código, tornando-o mais legível e
                            manutenível. A flexibilidade do framework é evidente, pois posso integrá-lo facilmente a outros
                            projetos, adaptando-me às necessidades específicas de cada um. A comunidade ativa e solidária é
                            uma
                            enorme vantagem, proporcionando acesso a uma ampla gama de recursos e soluções para desafios
                            comuns.
                        </div>
                        <input>
                        <input type="submit" value="Responder" id="responder">

                    </div>

                    <div id="recent-topics" class="forum-section">
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Avatar"
                            class="avatartop">Usuario
                        <h2>Título do tópico - Resposta</h2>
                        <div id="texto">
                            A eficiência de Vue.js na criação de Single Page Applications (SPAs) é notável, garantindo uma
                            experiência de usuário rápida e responsiva. A abordagem de componentes reutilizáveis facilita a
                            escalabilidade do projeto, permitindo-me construir aplicações robustas de maneira eficiente. Em
                            resumo, a escolha pelo Vue.js tem se mostrado uma decisão acertada, proporcionando uma
                            experiência de desenvolvimento agradável e resultados excepcionais.
                        </div>


                    </div>

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

.avatartop {
    width: 50px;
    height: 50px;
    margin-right: 450px;
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

}

.forum-section h2 {
    margin-bottom: 15px;
    color: #061494;
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
    font-weight: bold;
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

#texto {

    text-align: left;
}

#responder {
    width: 100px;
    height: 50px;
    margin-left: 450px;

}



.calendar {
    -image: url();
}</style>
  