/*Exercicio 15 - Escreva um programa que gera e imprimi os 10 primeiros números
da sequencia de Fibonacci utilizando loop for.*/

let n = 10
let a = 0, b = 1

console.log("Os 10 primeiros números da sequência de Fibonacci são:")

for (let i = 0; i < n; i++) {
    console.log(a)
    let proximo = a + b
    a = b
    b = proximo
}