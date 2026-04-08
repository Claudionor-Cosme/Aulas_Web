import { Paciente } from "./paciente";
import { Medico } from "./medico";
import { Remedio } from "./remedio";

export class Prontuario{
    paciente:Paciente
    medico:Medico
    remedios:Remedio[]

    constructor(paciente:Paciente, medico:Medico, remedios:Remedio[]){
        this.paciente = paciente;
        this.medico = medico;
        this.remedios = remedios;
    }

    exibir(){
        console.log("Saudações, verificando nome dos pacientes, medicos e a lista de medicamentos");
        console.log(`medicos: ${this.medico.pessoa.nome}`);
        console.log(`Pacientes: ${this.paciente.pessoa.nome}`)
        console.log(`Lista de medicamentos ${this.remedios}`)
    }
}