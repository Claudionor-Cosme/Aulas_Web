import { Endereço } from "./endereco";
import { Contato } from "./contato";

export class Pessoa{
    nome:string
    idade:number
    endereco:Endereço
    contato:Contato

    constructor(nome:string, idade:number, endereco:Endereço, contato:Contato){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.contato = contato;
    }
}