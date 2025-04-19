// EXERCÍCIO 1
// 1 - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e demonstre a saída do valor da variável! 
let nome;       //declarando uma variável com valor undefined
console.log(nome);

let idade = "";     //declarando uma variável com valor vazio
console.log(idade);

let valor = 10;     //declarando uma variável com valor
console.log(valor);

//EXERCÍCIO 2
// 2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!
let a = 5;
let b = 5;
let c = 10;

//== comparação
console.log(a == c);        //saída : false        
console.log(a == b);        //saída : true

// != compara se os valores são diferentes
console.log(a != b);        //saída : false
console.log(a != c);        //saída : true

// >= Verifica se o valor é maior ou igual
console.log(a >= b);        //saída : true
console.log(c >= a);        //saída : true
console.log(a >= c);        //saída : false

// EXERCÍCIO 3
// 3 - Escreva um programa(usando Switch case) que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as 
// seguintes faixas de IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9 (acima do peso). Exemplifique e demonstre a saída! 
let peso = parseFloat(prompt("Informe o seu peso: (kg)"));
let altura = parseFloat(prompt("Informe a sua altura: (m)"));
let imc = peso / (altura ** 2);

switch (true){
    case (imc < 18.5):
        console.log(`IMC: ${imc.toFixed(2)}`);
        console.log(`Você está abaixo do peso`);
        break;
    case (imc >= 18.5 && imc <= 24.9):
        console.log(`IMC: ${imc.toFixed(2)}`)
        console.log(`Você está no peso ideal`);
        break;
    case (imc > 24.9):
        console.log(`IMC: ${imc.toFixed(2)}`)
        console.log(`Você está acima do peso`);
        break;
    default:
        console.log(`Valor de IMC inválido`);
}

//Exercício 4:
//Faça um programa que que faça uma repetição até 50 (usando for )apresentando a mensagem no console, o valor é: !

for (let i = 0; i < 50;i++)
    {
 console.log("O valor é de ",i+1)
    }

//Exercício 5
// Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado
//Criação das variaveis://
let usuario, senha;
//atribuindo valores as variaveis//
usuario = prompt("Digite o nome de usúario");
senha = prompt("Digite a senha");
//Verificação de valores//
 if(usuario == "admin" && senha == 1234 ){
    console.log("Usuário Autentificado!")
  }else{
    console.log("Usuarío não Autenticado!")
  }
