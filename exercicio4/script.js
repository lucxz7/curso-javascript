function clicou() {
    let num = document.getElementById('n1').value
    let sel = document.getElementById('t1')
    if (num == 0) {
        alert('Escreve certo idiota')
    } else{
        let n = Number(num)
        let c = 1
        sel.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `sel${c}`
            sel.appendChild(item)
            c++
        }
    }
}