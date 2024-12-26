function parinpar(n) {
    if (n%2 == 0) {
        return 'par'
    }else
    return 'inpar'
}
let i = parinpar(11) //Chamar função
console.log(i)