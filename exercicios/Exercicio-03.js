/*Exercicio 3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/


const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite a sua nota de 0 a 10: "))

if(nota >= 7 && nota <= 10){
    console.log("Você foi APROVADO!")
} else if( nota >= 5 && nota <= 6){
    console.log("Você está de RECUPERAÇÂO!")
} else if (nota <= 4){
    console.log("Você foi REPROVADO!")
} else{
    console.log("Esta nota não consta no sistema!")
}
