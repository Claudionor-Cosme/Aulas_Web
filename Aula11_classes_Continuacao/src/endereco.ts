export class Endereço{
    rua: string
    numero: number
    cidade: string
    cep: number

    constructor(rua:string, numero:number, cidade:string, cep:number){
        this.rua =rua;
        this.numero = numero;
        this.cidade = cidade;
        this.cep = cep;
    }
    
}