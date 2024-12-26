var agora = new Date()
var hora = agora.getHours()
if (hora > 19) {
    console.log('Boa noite')
}
else if (hora > 12) {
    console.log('Boa tarde')
}
else if (hora <= 12) {
    console.log('Bom dia')
}