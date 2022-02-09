let ordem = [];
let ordemClick = [];
let pontuacao = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.azul');
const red = document.querySelector('.vermelho');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    ordem[ordem.length] = colorOrder;
    ordemClick = [];

    for(let i in ordem) {
        let elementColor = createColorElement(ordem[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in ordemClick) {
        if(ordemClick[i] != ordem[i]) {
            gameOver();
            break;
        }
    }
    if(ordemClick.length == ordem.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        proxNivel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    ordemClick[ordemClick.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let proxNivel = () => {
    pontuacao++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    ordem = [];
    ordemClick = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    pontuacao = 0;

    proxNivel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();