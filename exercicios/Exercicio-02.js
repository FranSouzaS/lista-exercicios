/*Exercicio 2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

const prompt = require('prompt-sync')()

let idade = Number(prompt('Me diga a sua idade: '))

if(idade <= 12){
    console.log('Você é criança!')
} else if(idade >= 13 && idade <=17 ){
    console.log("Você é adolescente!")
} else if( idade >= 18 && idade <= 64){
    console.log("Você é adulto!")
} else{
    console.log("Você é idoso!")
}