/*Exercicio 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const prompt = require('prompt-sync')()

let peso = Number(prompt("Digite o seu peso:"))
let altura = Number(prompt("Digite a sua altura em metros:"))
let imc = (peso / (altura * altura)).toFixed(2)

console.log(`O seu IMC é ${imc}.`)

if(imc <= 18.4){
    console.log("Você está abaixo do peso!")
} else if(imc >= 18.5 && imc <= 24.9){
    console.log("Você está com o seu peso normal!")
} else if( imc >= 25 && imc <=29.9 ){
    console.log("Você está com sobrepeso!")
} else {
    console.log("Você está com obesidade!")
}