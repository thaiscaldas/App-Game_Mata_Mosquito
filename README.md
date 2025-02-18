# App-Game_Mata_Mosquito

O "Game Mata Mosquito" é um jogo interativo desenvolvido com HTML, CSS e JavaScript, onde o objetivo do jogador é clicar nos mosquitos que aparecem na tela antes que o tempo acabe. O jogo possui diferentes níveis de dificuldade e um sistema de vidas, tornando-o mais desafiador e dinâmico.

# Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

index.html: Tela inicial do jogo onde o usuário escolhe o nível de dificuldade.

app.html: Tela principal onde o jogo acontece, contendo a lógica de cronômetro e aparição dos mosquitos.

vitoria.html: Tela exibida quando o jogador vence o jogo.

fim_de_jogo.html: Tela exibida quando o jogador perde todas as vidas.

jogo.js: Script principal que controla a lógica do jogo.

styles.css: Arquivo de estilos que define a aparência do jogo.

# Explicação do Código

°index.html

Contém a interface inicial onde o jogador seleciona o nível de dificuldade.

O botão "Iniciar Jogo" chama a função iniciarJogo(), que verifica se um nível foi selecionado e redireciona para app.html passando o nível na URL.

°app.html

Possui um painel com um cronômetro e indicadores de vidas.

Carrega o script jogo.js, que gerencia a lógica do jogo.

Ajusta dinamicamente o tamanho da área de jogo com onresize="ajustaTamanhoPalcoJogo()".

°jogo.js

Define variáveis de controle, como altura, largura, vidas, tempo e criaMosquitoTempo.

Lê o nível da URL para ajustar o tempo de criação dos mosquitos.

Implementa um cronômetro que diminui o tempo e redireciona para vitoria.html caso o jogador vença.

A função posicaoRandomica() gera a posição dos mosquitos na tela e os adiciona dinamicamente.

Se o jogador não clicar no mosquito a tempo, uma vida é perdida, e se todas as vidas forem perdidas, ele é redirecionado para fim_de_jogo.html.

°vitoria.html e fim_de_jogo.html

Exibem mensagens de "Vitória" ou "Game Over".

Possuem um botão que permite reiniciar o jogo.

°styles.css

Define estilos para o jogo, como background, tamanhos dos mosquitos e efeitos visuais.

Personaliza o cursor para um "mata-mosquito".

Define diferentes tamanhos e orientações dos mosquitos.

# Como Jogar

Abra index.html em um navegador.

Escolha um nível de dificuldade.

Clique no botão "Iniciar Jogo".

Clique nos mosquitos para eliminá-los antes que o tempo acabe.

Evite perder todas as vidas para não receber "Game Over".

# Tecnologias Utilizadas

HTML5: Estrutura do jogo.

CSS3: Estilização da interface.

JavaScript: Lógica do jogo.

# Melhorias Futuras

Implementação de um sistema de pontuação.

Efeitos sonoros ao eliminar os mosquitos.

Versão responsiva para dispositivos móveis.

Este documento serve como referência para o funcionamento do jogo e pode ser usado para apresentar ao orientador.

