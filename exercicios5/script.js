let arr = []
let num = document.getElementById('n1')
let sel = document.getElementById('v1')
let res = document.getElementById('id2')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function clicou() {
    if (isNumero(num.value) && !inLista(num.value, arr)) {
       
        let numb = Number(num.value)
        arr.push(numb)
        let item = document.createElement('option')
        item.text = `valor ${numb} adicionado`
        sel.appendChild(item)
        addEventListener("click",)
        res.innerHTML = ''
       
        
        
    }else{ 
        alert('Escreve certo troxa')
      
    }
    numb = ''
    numb.focus()
}
function cliquei() {
    if (arr.length == 0) {
        alert('escreve certo')
    } else {
        let valor = arr.length
        let maior = arr[0]
        let menor = arr[0]
        let soma = 0
        for (let pos in arr) {
            soma += arr[pos]
            if (arr[pos] > maior){
                maior = arr[pos]
            }
             else if (arr[pos] < menor){
                menor = arr[pos]
            
            }

          
                
        }   

        res.innerHTML += `<p>Ao todo, temos ${valor} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores dá ${soma} .</p>`
        res.innerHTML += `<p>A media de todos os valores é ${soma / valor}.</p>`
                      
      
    }
}







