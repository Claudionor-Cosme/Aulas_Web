export class pacote {
    peso: number = 1.2;
    descricao: string = "Medicamentos";

    constructor(peso: number, descricao: string) {
        this.peso = peso;
        this.descricao = descricao;
    }
}

const peso = 0.8;
const descricao = "Suprimentos";

const pacote2 = new pacote(peso, descricao);
console.log(pacote2);
