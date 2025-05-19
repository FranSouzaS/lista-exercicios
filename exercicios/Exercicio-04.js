/*Exercicio 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')()


console.log("=== Menu Interativo ===");
console.log("1. Dizer Olá");
console.log("2. Mostrar data atual");
console.log("3. Sair");

let opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
    case "1":
        console.log("Olá! Seja bem-vindo(a)!");
        break;
    case "2":
        console.log("Data atual: " + new Date().toLocaleString());
        break;
    case "3":
        console.log("Saindo do programa...");
        break;
    default:
        console.log("Opção inválida.");
}