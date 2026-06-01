
type categoria = "espadachim" | "mago" | "arqueiro"

export class herois{
    nome: string
    categoria: categoria
    ataque: number
    custo: number
    recurso: number = 0

    constructor(nome:string, categoria:categoria, ataque:number, custo:number){
       this.nome = nome;
       this.categoria = categoria;
       this.ataque = ataque;
       this.custo = custo;

       if(categoria = "espadachim"){
        this.recurso = 50;
       } else if(categoria = "mago"){
        this.recurso = 40;
       } else if(categoria = "arqueiro"){
        this.recurso = 10;
       }

       }
    
    atacar(){
        if(this.recurso < this.custo){
            console.log(`Ataque de ${this.nome} falhou por falta de recurso`);
        }else{
            console.log(`Ataque de ${this.nome} foi bem sucedido, restando ${this.recurso}`)
            this.recurso = this.recurso - this.custo;        }
    }  

    }


