// EXERCÍCIO 1
// 1 - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e demonstre a saída do valor da variável! 
let time;       //declarando uma variável com valor undefined
console.log(time);

let vazio = "";     //declarando uma variável com valor vazio
console.log(vazio);

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

// EXERCÍCIO 4
// 4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando a mensagem no console, o valor é: !

for (let i = 0; i < 50;i++)
    {
 console.log("O valor é de ",i+1)
    }

// EXERCÍCIO 5
// 5 - Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado
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

// EXERCÍCIO 6
// 6 - Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. 
// Considere que a média mínima para aprovação é 6. Exemplifique e demonstre a saída!
let totalnotas = 7;
let somanotas = 0;
for (let i = 0; i < totalnotas; i++){
    let notas = parseFloat(prompt(`Informe a sua ${i + 1} nota`));
    if (notas < 0 || notas > 10){
        alert("Nota inválida, digite uma nota válida");
        break;
    }
    somanotas += notas;
}
let media = somanotas / totalnotas
if (media >= 6){
    alert(`Média: ${media.toFixed(2)} \nAluno Aprovado!`)
    console.log(`Média: ${media.toFixed(2)} \nAluno Aprovado!`)
}
else{
    alert(`Média: ${media.toFixed(2)} \nAluno Reprovado!`)
    console.log(`Média: ${media.toFixed(2)} \nAluno Reprovado!`)
}

// EXERCÍCIO 7
// 7 - Crie um programa que imprima na tela o nome, idade, Curso e ano na tela um embaixo do outro , no 
// seu html coloque um fundo e um título e o javascript deve ser externo.
let nome = "Rodrigo";
let idade = 18;
let curso = "Engenharia de Software";
let ano = 2025;

const ex7 = document.getElementById("ex7");

ex7.innerHTML = `
  Nome: ${nome} <br>
  Idade: ${idade} <br>
  Curso: ${curso} <br>
  Ano: ${ano}
`;
console.log(`
  Nome: ${nome}
  Idade: ${idade}
  Curso: ${curso}
  Ano: ${ano}
`);

// EXERCÍCIO 8
//Criando o programa
let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."
//1) Buscando a primeira posição de "em"
console.log("Primeira posição de 'em': ", texto.indexOf("em"));
//2) Buscando a ultima posição de "ia"
console.log("Útima posição de 'ia':", texto.lastIndexOf("ia"))
//3) Buscando a palavra ciência
console.log("Posição da palavra ciência: ", texto.indexOf("ciência"))
//4) Buscando a palavra métodos
console.log("Posição da palavra métodos: ", texto.indexOf("métodos")) 

//EXERCÍCO 9 
// 9 - Criando um programa que declare a variável como String depois converta para float e em seguida apresente 
// o tipo da variável.

let numString = "934.528"
console.log(typeof numString) // declara como String
console.log(parseFloat(numString)) // conversão para float 
console.log(typeof parseFloat(numString)) // tipo alterado da variável