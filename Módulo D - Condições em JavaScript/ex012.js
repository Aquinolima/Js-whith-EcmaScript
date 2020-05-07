// Estrutura Condicional Aninhada

var dataAtual = new Date()
var hora = dataAtual.getHours()
var minuto = dataAtual.getMinutes()
var horaCerta =hora + ':' + minuto
console.log(`Agora são exatamente ${horaCerta} horas.`);
if (hora < 12) {
    console.log('Bom Dia!');
} else if (hora <= 18){
    console.log('Boa Tarde!');
} else{
    console.log('Boa Noite!');
} 