function dividir(a: number, b:number): number{
    try{
        if(b===0){
            throw new Error("Não é possível dividir por zero");
        }
        return a/b;
    } catch (erro){
        console.log ("Erro encontrado: ", (erro as Error).message);
        return 0;
    }
}

function ValidarNumero(valor: number){
    if(valor < 0){
        throw new Error ("Valor não pode ser negativo"); 
    }
}

const n1: number = 2;
const n2: number = 0;
const n3: number = -1;

console.log("Divisao: ", dividir(n1, n2));
console.log("Validar: ", ValidarNumero(n3));

//Ao capturar um erro, é recomendável tratá-lo como unknown e verificar se ele é realmente uma
//instância da classe Error:
try{
    //codigo que pode dar erro
} catch(erro: unknown){
    if(erro instanceof Error){
        console.log("Erro: ", erro.message);
    }
}



