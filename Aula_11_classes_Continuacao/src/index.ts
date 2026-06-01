import { Medico } from "./medico";
import { Remedio } from "./remedio";
import { Paciente } from "./paciente";
import { Prontuario } from "./prontuario";
import { Pessoa } from "./pessoa";
import { Endereço } from "./endereco";
import { Contato } from "./contato";

const remedio: Remedio[] = [new Remedio("dipirona", "10mg")];
const endereco = new Endereço("rua francelino", 221, "ipero", 1800);
const contato = new Contato(159983334, "claudio@gmail.com");
const pessoa = new Pessoa("claudio", 10, endereco, contato);
const medico = new Medico(pessoa, "cirurgiao");
const paciente = new Paciente(pessoa, remedio);
const prontuario1: Prontuario = new Prontuario(paciente, medico, remedio);

prontuario1.exibir();