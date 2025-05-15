/*Exercicio 7 -  As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')()

let numeroMaca = Number(prompt("Diga o número de maças que você comprou: "))
let resultado = 0

if(numeroMaca < 12){
    resultado = numeroMaca * 0.30
} else{
     resultado = numeroMaca * 0.25
}

console.log( `Você comprou ${numeroMaca} maças, o valor da compra é de R$${resultado.toFixed(2)}.`)
