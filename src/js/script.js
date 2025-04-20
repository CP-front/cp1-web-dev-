// EXERCÍCIO 1
// 1 - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e demonstre a saída do valor da variável! 
function exercicio1(){
    const res = document.querySelector("#ex1 .resposta");
    let time;               //declarando uma variável com valor undefined
    console.log(time);

    let vazio = "";         //declarando uma variável com valor vazio
    console.log(vazio);

    let valor = 10;         //declarando uma variável com valor
    console.log(valor);

    let rep = `Saídas no Console`;
    res.textContent = rep;
}

// EXERCÍCIO 2
// 2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!
function exercicio2(){
    const res = document.querySelector("#ex2 .resposta");
    let a = 5;
    let b = 5;
    let c = 10;

    //== compara se os valores são iguais
    console.log(a == c);        //saída : false        
    console.log(a == b);        //saída : true

    // != compara se os valores são diferentes
    console.log(a != b);        //saída : false
    console.log(a != c);        //saída : true

    // >= Verifica se o valor é maior ou igual
    console.log(a >= b);        //saída : true
    console.log(c >= a);        //saída : true
    console.log(a >= c);        //saída : false
    
    let rep = `Saídas no Console`;
    res.textContent = rep;
}

// // EXERCÍCIO 3
// // 3 - Escreva um programa(usando Switch case) que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as 
// // seguintes faixas de IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9 (acima do peso). Exemplifique e demonstre a saída! 
function exercicio3(){
    const res = document.querySelector("#ex3 .resposta");
    let peso = parseFloat(prompt("Informe o seu peso: (kg)"));
    let altura = parseFloat(prompt("Informe a sua altura: (m)"));
    let imc = peso / (altura ** 2);

    switch (true){
        case (imc < 18.5):
            console.log(`IMC: ${imc.toFixed(2)}`);
            console.log(`Você está abaixo do peso`);
            res.textContent = `IMC: ${imc.toFixed(2)}\nClassificação: Abaixo do peso`;
            break;
        case (imc >= 18.5 && imc <= 24.9):
            console.log(`IMC: ${imc.toFixed(2)}`)
            console.log(`Você está no peso ideal`);
            res.textContent = `IMC: ${imc.toFixed(2)}\nClassificação: Peso ideal`;
            break;
        case (imc > 24.9):
            console.log(`IMC: ${imc.toFixed(2)}`)
            console.log(`Você está acima do peso`);
            res.textContent = `IMC: ${imc.toFixed(2)}\nClassificação: Acima do peso`;
            break;
        default:
            console.log(`Valor de IMC inválido`);
            res.textContent = `Valor de IMC inválido`;
    }
}
// // EXERCÍCIO 4
// // 4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando a mensagem no console, o valor é: !
function exercicio4(){
    const res = document.querySelector("#ex4 .resposta");
    for (let i = 0; i < 50; i++){
        console.log(`O valor é ${i+1}!`)
    }
    let rep = `Saídas no Console`;
    res.textContent = rep;
}

// EXERCÍCIO 5
// Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e 
// senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação. Exemplifique e demonstre a saída!
function exercicio5(){
    const res = document.querySelector("#ex5 .resposta");
    let usuario, senha;
    usuario = prompt("Digite o nome de usúario");
    senha = prompt("Digite a senha");
    
    if(usuario == "admin" && senha == 1234 ){
        console.log("Usuário Autentificado!");
        alert("Login realizado com sucesso");
        res.textContent = `Login realizado com sucesso`;
    }
    else{
        console.log("Usuarío não Autenticado!");
        alert("Falha na realização do login");
        res.textContent = `Falha na realização do login`;
    }
}

// EXERCÍCIO 6
// 6 - Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. 
// Considere que a média mínima para aprovação é 6. Exemplifique e demonstre a saída!
function exercicio6(){
    const res = document.querySelector("#ex6 .resposta")
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
        alert(`Média: ${media.toFixed(2)} \nAluno Aprovado!`);
        console.log(`Média: ${media.toFixed(2)} \nAluno Aprovado!`);
        res.textContent = `Média: ${media.toFixed(2)}\nAluno Aprovado!`;
    }
    else{
        alert(`Média: ${media.toFixed(2)} \nAluno Reprovado!`);
        console.log(`Média: ${media.toFixed(2)} \nAluno Reprovado!`);
        res.textContent = `Média: ${media.toFixed(2)}\nAluno Reprovado!`;
    }
}

// EXERCÍCIO 7
// 7 - Crie um programa que imprima na tela o nome, idade, Curso e ano na tela um embaixo do outro , no 
// seu html coloque um fundo e um título e o javascript deve ser externo.
function exercicio7(){
    const res = document.getElementById("info");
    let nome = "Rodrigo";
    let idade = 18;
    let curso = "Engenharia de Software";
    let ano = 2025;

    res.textContent = `Nome: ${nome}\nIdade: ${idade}\nCurso: ${curso}\nAno: ${ano}`;
    console.log(`Nome: ${nome}\nIdade: ${idade}\nCurso: ${curso}\nAno: ${ano}`);
}

// EXERCÍCIO 8
// Crie um programa que no seguinte texto : Tecnologia é um produto da ciência e da engenharia que 
// envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.
function exercicio8(){
    const res = document.querySelector("#ex8 .resposta");
    let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."
    //1) Buscando a primeira posição de "em"
    let um = texto.indexOf("em");
    console.log("Primeira posição de 'em': ", texto.indexOf("em"));
    
    //2) Buscando a ultima posição de "ia"
    let dois = texto.lastIndexOf("ia");
    console.log("Útima posição de 'ia':", texto.lastIndexOf("ia"))
    
    //3) Buscando a palavra ciência
    let tres = texto.indexOf("ciência");
    console.log("Posição da palavra ciência: ", texto.indexOf("ciência"))
    
    //4) Buscando a palavra métodos
    let quatro = texto.indexOf("métodos")
    console.log("Posição da palavra métodos: ", texto.indexOf("métodos")) 
    res.textContent = `1) Busque a primeira posição de “em”: ${um}\n2) Busque a última posição de “ia”: ${dois}\n3) Busque a palavra ciência: ${tres}\n4) Busque a palavra métodos: ${quatro}`
}

//EXERCÍCO 9 
// 9 - Criando um programa que declare a variável como String depois converta para float e em seguida apresente 
// o tipo da variável.
function exercicio9(){
    const res = document.querySelector("#ex9 .resposta")
    let numString = "934.528"
    console.log(typeof numString)                   // declara como String
    console.log(parseFloat(numString))              // conversão para float 
    console.log(typeof parseFloat(numString))       // tipo alterado da variável
    res.textContent = `Saídas no console`
}