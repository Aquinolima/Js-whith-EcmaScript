/********************************************************************/
// Funções ou Function
// Function são ações executadas assim que são chamadas
// ou em decorreência de um evento.
// Uma Function pode receber parâmetros e retornar um resultado.
// Os componentes básicos da functions são: Chamada, Parâmetros, Ação e Retorno. 
/********************************************************************/

console.log("********************************************************************");
// Usando Functions

//Par ou impar

console.log(`Função Par ou Impar`);

function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var res = parimp(11)

console.log(`O número 11 é ${res}!`);

console.log("********************************************************************");

// Soma

console.log(`Função Soma`);

function soma(n1 = 0, n2 = 0) { // Quando não são passados os valores de n1 ou n2 é considerado 0.
    return n1 + n2
}

console.log(`A soma de 7 e 8 é ${soma(7,8)}!`);

console.log("********************************************************************");

// Function dentro de variável

console.log(`Função dentro de variável`);

var v = function (x) {      // Foi passado para a variável um parâmetro e conseguiu executar uma função.
    return x * 2
}

console.log(`O Dobro de 5 é ${v(5)}!`);


console.log("********************************************************************");

//Calcular o fatorial de um número

console.log(`Calcular o fatorial de um numero.`);
//exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120 

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat 
}

console.log(` O número Fatorial de 5 é ${fatorial(5)}!`);


console.log("********************************************************************");

//Calcular o fatorial de maneira recursiva
console.log(`Calcular o fatorial de maneira recursiva.`);        // Uma recurção acontece quando uma função chama ela mesma.

function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)        
    }
}

/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!

n! = n x  ( n - 1 )!
1! = 1

*/

console.log(`O fatorial recursivo de 5 é : ${fatorial(5)}`);

console.log("********************************************************************");