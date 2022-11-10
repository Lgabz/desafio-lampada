const botao = document.getElementById('ligar');
const imagem = document.getElementById('lampada');
let ligada = false;

function lampadaQuebrada () {
    return imagem.src.indexOf('quebrada') > -1;
}

function ligarLampada () {
    if (!lampadaQuebrada() && !ligada){
        imagem.src = './assets/ligada.jpg';
        botao.textContent = 'desligar';
        ligada = true;
    }else if (!lampadaQuebrada() && ligada){
        imagem.src = './assets/desligada.jpg';
        botao.textContent = 'ligar';
        ligada = false;
    }
}

function desligarLampada () {
    if (!lampadaQuebrada() && ligada){
        imagem.src = './assets/desligada.jpg';
        botao.textContent = 'ligar';
        ligada = false;
    }
}

function quebrarLampada () {
    imagem.src = 'assets/quebrada.jpg'
}

botao.addEventListener('click', ligarLampada);
imagem.addEventListener('dblclick', quebrarLampada);
imagem.addEventListener('mouseover', ligarLampada);
imagem.addEventListener('mouseleave', desligarLampada);