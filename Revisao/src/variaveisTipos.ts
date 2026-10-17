let nome: string = "Claudio";
let idade: number = 20;
let ativo: boolean = true;

let dado: any = 10;
let vazio: null = null;
let indefinido: undefined = undefined;

//tipos literais(valores específicos)
let situacao: "ativo" | "inativo" = "ativo"; //só aceita esses dois valores

//União de tipos (Union Type)
let idadeOuNulo: number | null = null;

console.log(`Nome:${nome}, Idade:${idade}, Ativo:${ativo}`);

let texto = "Olá";
//texto[0] = "A"; //não funcionará
console.log(texto); //saída =  "Olá"

let texto1: String = "Olá";
texto1 = "A" + texto.substring(1); //cria uma nova String
console.log(texto1); //saída = "Alá"

let valor = 24;

console.log(typeof(valor)); //saída = Number




