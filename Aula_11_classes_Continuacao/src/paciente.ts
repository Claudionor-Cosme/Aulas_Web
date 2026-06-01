import { Pessoa } from "./pessoa";
import { Remedio } from "./remedio";

export class Paciente{
    pessoa: Pessoa
    remedio: Remedio[]

    constructor(pessoa:Pessoa, remedio:Remedio[]){
        this.pessoa = pessoa;
        this.remedio = remedio;
    }
}