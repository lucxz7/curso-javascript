function clicou() {
    let ini = document.getElementById('n1').value
    let fim = document.getElementById('n2').value
    let pas = document.getElementById('n3').value
    let div = document.getElementById('id2')
    
    if (ini == 0 || fim == 0 || pas == 0) {
        alert('Escreve certo imbecil')
    } else {
        div.innerText = 'Contando: 👉'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(pas)
        if (i > f) {
            for  (let u = i; u >= f ; u -= p){
               
               div.innerHTML += u +  '\u{1F449}'//emoji do apontando para a direita
   
            }
           } else  for (let c = i; c < f ; c += p) {
            div.innerHTML += c + '\u{1F449}'
         
         }
        
        
        div.innerHTML += '\u{1F3C1}'//emoji da bandeira
        
        
    }

           
        
        
        
            
            
        
      
    }
        
    

