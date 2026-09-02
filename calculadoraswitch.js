
const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let operador = prompt("Digite o operador (+, -, *, /): ");

switch (operador) {
    case "+":
        console.log("Resultado:", numero1 + numero2);
        break;

    case "-":
        console.log("Resultado:", numero1 - numero2);
        break;

    case "*":
        console.log("Resultado:", numero1 * numero2);
        break;

    case "/":
        console.log("Resultado:", numero1 / numero2);
        break;

    default:
        console.log("Operador inválido!");
}

