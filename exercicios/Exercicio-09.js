/*Exercicio 9 - Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/

const prompt = require('prompt-sync')()

let i = 0
for(let i = 10; i >= 1; i--){
    console.log(i)
}
console.log('Fim')