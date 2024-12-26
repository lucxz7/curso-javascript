function carregar() {
    var ima = document.getElementById('ima1')
    var agora = new Date()
    var horas = agora.getHours()
    var div = document.getElementById('id1')
    div.innerText = 'Agora são ' + horas + ' horas'
    if (horas >= 0 && horas < 12) {
        ima.src = 'imagem1.jpg'
        document.body.style.backgroundColor = '#e2cd9f'    
    }
    else if (horas > 12 && horas < 18) {
        ima.src = 'imagem3.jpg'
        document.body.style.backgroundColor = '#b9846f'
    }
    else if (horas > 18 && horas < 0) {
        ima.src = 'imagem2.jpg'
        document.body.style.backgroundColor = '#515154'
    }

}

