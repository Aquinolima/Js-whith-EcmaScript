/********************************************************************/
// Váriavel composta ou Array "vetor"
// Array é uma variável contendo vários elementos.
// Cada elemento é composto por um valor e uma chave de identificação.
// A identificação mostra as posiçoes gravadas, sempre começando em 0.
/********************************************************************/

console.log("********************************************************************");

let num = [2, 8]

console.log(`O valor inicial do Array num é: ${num}.`);

num [2] = 1        //Acresenta mais um elemento no array, nesse cado o elemento 10 na posição 5.

console.log(`Adicionando mais um valor fica assim: ${num}.`);

num.push(4)        // Acresenta mais um elemento no array porém sempre na última posição.

console.log(`Adicionando com o 'num.push' os valores ficam assim: ${num}.`);

num.length      //Atributo usado para mostrar a quantidade de posições ocupadas por elementos.

console.log(`Com o 'num.length' descobrimos que o Array guarda ${num.length} posições.`);     

console.log("********************************************************************");
// Usando estrutura de repetição para listar os elementos do Array

for (var pos = 0; pos < num.length; pos++) {
    
    console.log(`Com a estrutura de repetição 'for' fica assim:`);

    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
    
}

console.log("********************************************************************");
// colocando os numeros em ordem.

console.log(num);

num.sort()          // Deixa os elementos em ordem cresente.

console.log(`Usando o método 'num.sort()', os valores ficam assim: ${num}.`);

console.log(num);


console.log("********************************************************************");
// Usando o For in .

for (var teste in num) {
    
    console.log(`Com a estrutura de repetição 'for in' fica assim:`);
    
    console.log(`A posição ${teste} tem o valor ${num[teste]}`);
    
}

console.log("********************************************************************");



