function clicou() {
   var anoAgora = new Date().getFullYear()
   var fano = document.getElementById('ano').value
   var idade = Number(anoAgora) - fano  
   var sex = document.getElementsByName('radsex')
   var res = document.getElementById('res') 
   var gender = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if (fano == 0 || fano > anoAgora ) {
    alert('Escreve certo vagabundo')
   }
    else{
    if (sex[0].checked) {
        gender = 'Masculino'
        if (idade > 0 && idade < 12) {
            img.setAttribute('src', 'a.jpg')
            
        } else if (idade < 22) {
            img.setAttribute('src', 'f.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'd.jpg')
        } else if (idade > 50) {
            img.setAttribute('src', 'g.jpg')
        }
    } else if (sex[1].checked) {
        gender = 'Feminino'
        if (idade > 0 && idade < 12) {
            img.setAttribute('src', 'e.jpg')
        } else if (idade < 22) {
            img.setAttribute('src', 'b.jpg')
        } else if (idade < 50 ) {
            img.setAttribute('src', 'h.jpg')
        } else if (idade > 50) {
            img.setAttribute('src', 'c.jpg')
        }

    }
}
   res.style.textAlign = 'center' 
   res.innerHTML = 'Seu sexo é ' + gender + ' e sua idade é  ' + idade
   res.appendChild(img)
}