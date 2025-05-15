/*Exercicio 13 - Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número, para obter a média aritmética (Digite 0 para encerrar): "))
let soma = 0
let quantidade = 0

while(numero !== 0){
    soma += numero
    quantidade++
    numero = Number(prompt("Digite um número, para obter a média aritmética (Digite 0 para encerrar): "))
} 
if(quantidade > 0){
    media = soma / quantidade
    console.log(`A média aritmética é ${media} `)
} else {
    console.log('ENCERRADO')
}