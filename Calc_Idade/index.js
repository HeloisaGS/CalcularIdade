//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

//recebe nome
let nomeCompleto = prompt("Digite seu nome completo: ");
//recebe ano - laco de repetiçao do ano

let nascimento;
try{
    while(isNaN(nascimento) ||nascimento < 1922 || nascimento > 2021){
        nascimento = Number(prompt("Digite sua data de nascimento (que seja entre 1922 e 2021)"));
        if (nascimento < 1922 || nascimento > 2021) {
            //Não aceita data de nascimento fora do valor solicitado
            console.log("O valor digitado não corresponde ao intervalo de tempo pedido");
        }
        else {
            //Não aceita quando digita algo que não é um número
            console.log("O valor digitado não é um número")
        }
    }
}catch (error){
    (console.log ("Ocorreu um erro" + error.message))
}

//calcula idade
const idade = 2022 - nascimento
//mostra nome e idade
console.log(`Seu nome completo é: ${nomeCompleto}`)
console.log(`Sua idade é: ${idade}`)