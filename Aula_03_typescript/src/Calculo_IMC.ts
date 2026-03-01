import promptSync from "prompt-sync";
const prompt = promptSync();

function menu(): string{
    console.log("Bem vindo, escolha sua opcão: [1] novo cálculo, [2] histórico de consultas, [0] sair");
    const escolha: string = prompt("Opção: ");
    return escolha;
}

let opcao: string;
let IMC: number = 0;
let altura: number;
let peso: number;
let historico: number[] = [];

do{
    opcao = menu();
    switch(opcao){
        case "1":
            console.log("Calculando o IMC");
            peso = Number(prompt("digite o seu peso (kg): "));
            altura = Number(prompt("digite a sua altura (m): "));
            IMC = peso / (altura * altura);
            historico.push(IMC);
            console.log("Seu IMC é: ", IMC.toFixed(2));
            break;
        case "2":
            console.log("Histórico de IMCs:");
            historico.forEach((valor, index) =>
            {console.log(`${index + 1}: ${valor.toFixed(2)}`);});
            break;
        case "0":
            console.log("programa finalizado com sucesso.")
            break;
        default:
            console.log("Opção Inválida, digite um número correto")
    }

} while(opcao !== "0");

