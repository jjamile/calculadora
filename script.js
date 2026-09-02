
const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu peso (kg): ', (peso) => {
rl.question('Digite sua altura (m): ', (altura) => {

peso = Number(peso);
altura = Number(altura);

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);


if (imc < 18.5){
    console.log("Você está abaixo do Peso" );
}else if(imc > 18.5 && imc <= 24.9){
    console.log ("Seu peso está normal" );
}else {
    console.log("Você está Sobrepeso" )
}

rl.close();

});
});



