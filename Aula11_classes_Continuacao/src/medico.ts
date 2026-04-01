import { Pessoa } from "./pessoa";

export class Medico{
    pessoa:Pessoa
    especialidade:string

    constructor(pessoa:Pessoa, especialidade:string){
        this.pessoa = pessoa;
        this.especialidade = especialidade;
    }
}