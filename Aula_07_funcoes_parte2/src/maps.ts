const numeros = [1,2,3,4,5];

const dobro = numeros.map(n => n * 2);
const strings: string[] = numeros.map(n => `Numero ${n}`);
console.log(strings)

type produto = {id: number, nome: string, preco:number}
const produtos: produto[] = [
    {id:1, nome: 'Mouse', preco:50},
    {id:1, nome: 'MousePad', preco:150}
];

const nomes: string[] = produtos.map(p => p.nome);

const listaFormatada = produtos.map(p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true

}));