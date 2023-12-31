var card = window.document.getElementById('card')
var icon1 = window.document.getElementById('icon1')
var icon2 = window.document.getElementById('icon2')

function Honda(){
    card.src = 'imagens/honda.svg'
    icon1.setAttribute('onclick', 'scootter()')
    icon2.setAttribute('onclick', 'scootter()')
}

function scootter(){
    card.src = 'imagens/voltz.svg'
    icon1.setAttribute('onclick', 'Honda()')
    icon2.setAttribute('onclick', 'Honda()')
}

