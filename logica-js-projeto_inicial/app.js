alert('Boas vindas ao jogo do número secreto');
let numeroSecretro = 7;
console.log(numeroSecretro)
let chute = prompt('escolha um número entre 1 e 30');

//Se o chute for igual ao numero secreto
if(numeroSecretro == chute){
    alert(`Isso ai! Você descobriu o número secreto 
        ${numeroSecretro}`);
} else {
    alert('Você errou :(');
}

/*Exercícios da primeira aula
alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro ='ERRO! Preencha todos os campos';
alet(mensagemDeErro);
let Nome = prompt('Qual é o seu nome?');
let Idade = prompt('Qual é a sua idade');
if (Idade >= 18){
    console.log("Pode tirar a habilitação!");
}
*/

