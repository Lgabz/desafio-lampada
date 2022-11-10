const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const imagem = document.getElementById('lampada');

function lampadaQuebrada () {
    return imagem.src.indexOf('quebrada') > -1;
}

function ligarLampada () {
    if (!lampadaQuebrada()){
        imagem.src = './assets/ligada.jpg'
    }
}

function desligarLampada () {
    if (!lampadaQuebrada()){
    imagem.src = './assets/desligada.jpg'
    }
}

function quebrarLampada () {
    imagem.src = 'assets/quebrada.jpg'
}

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);
imagem.addEventListener('dblclick', quebrarLampada);
imagem.addEventListener('mouseover', ligarLampada);
imagem.addEventListener('mouseleave', desligarLampada);