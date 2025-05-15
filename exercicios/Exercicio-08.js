/*Exercicio 8 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require('prompt-sync')()

let valorA = Number(prompt('Digite 2 números diferente. Digite o primeiro número: '))
let valorB = Number(prompt('Digite o segundo número: '))


while(valorA === valorB){
    valorB = Number(prompt(`Digite um número diferente de ${valorA}: `))
} if(valorA > valorB){
    console.log(`A ordem dos números é ${valorB}, ${valorA}`)
} else {
    console.log(`A ordem dos números é ${valorA}, ${valorB}`)
}