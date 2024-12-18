let altura = 0
let largura = 0
let vidas = 1
let tempo = 15
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
}else if(nivel === 'medio') {
    criaMosquitoTempo = 1000
}else if(nivel === 'dificil') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {
    
    if(document.getElementById('mosquito')) {  // remoção do mosquito anterior
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {

            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Elemento HTML dentro do script JS
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

tamanhoAleatorio()


function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
            
    }
}