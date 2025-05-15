/*Exercicio 6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt = require('prompt-sync')()

let valorA = Number(prompt("Digite o primeiro valor para o triângulo: "))
let valorB = Number(prompt("Digite o segundo valor para o triângulo: "))
let valorC = Number(prompt("Digite o terceiro valor para o triângulo: "))

let triangulo = false

if ((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB)) {
    console.log("Forma um triângulo")
    triangulo = true
} else {
    console.log("Não forma triângulo")
}

if (triangulo) {
    if (valorA === valorB && valorB === valorC) {
        console.log("Equilátero")
    } else if (valorA === valorB || valorA === valorC || valorB === valorC) {
        console.log("Isósceles")
    } else {
        console.log("Escaleno")
    }
}