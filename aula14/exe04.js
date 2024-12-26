var agora = new Date() //como colocar o horario ou dia a semana do seu computador 
var diaS = agora.getDay()
switch (diaS) {
    case 0:
        console.log('domingo')
        break;
    
    case 1:
        console.log('segunda') 
        break // NUNCA ESQUECER
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')                               
        break;
} 