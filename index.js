var card = window.document.getElementById('card');
var icon1 = window.document.getElementById('icon1');
var icon2 = window.document.getElementById('icon2');
var link = window.document.getElementById('link');

function Honda() {
    card.src = 'imagens/honda.svg';
    setLinks('https://wa.me/5571987566959?text=quero+saber+mais+sobre+a+Honda+CX500');
}

function scootter() {
    card.src = 'imagens/voltz.svg';
    setLinks('https://wa.me/5571987566959?text=Quero+saber+sobre+a+volta+ev+1');
}

function primeirolink() {
    card.src = 'imagens/honda.svg';
    setLinks('https://wa.me/5571987566959?text=quero+saber+mais+sobre+a+Honda+CX500');
}

function segundolink() {
    card.src = 'imagens/voltz.svg';
    setLinks('https://wa.me/5571987566959?text=Quero+saber+sobre+a+volta+ev+1');
}

function setLinks(href) {
    link.href = href;
    icon1.setAttribute('onclick', 'scootter()');
    icon2.setAttribute('onclick', 'scootter()');
    // Adiciona uma pequena pausa antes de redefinir os links
    setTimeout(() => {
        icon1.setAttribute('onclick', 'primeirolink()');
        icon2.setAttribute('onclick', 'primeirolink()');
    }, 100);
}
