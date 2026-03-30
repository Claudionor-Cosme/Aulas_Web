let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let valor = 42;

let dado: any;
let vazio: null = null;
let indefinido: undefined = undefined;

//tipos literais (valores específicos)
let situacao: "ativo" | "inativo" | "meio_termo"= "ativo"; //só aceita esses valores

//união de tipo (Union Type)
let idadeOuNulo: string | null | 3 = 3;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

//typeof retorna uma string que que indica o tipo do operando
console.log(typeof valor); //output: number









