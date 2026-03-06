import promptSync from "prompt-sync";
const prompt = promptSync();

function maiuscula (texto:string){
    return texto.toUpperCase();
}

let mensagem = prompt("Digite o seu texto: ");
let resposta = maiuscula(mensagem);

console.log(resposta);

