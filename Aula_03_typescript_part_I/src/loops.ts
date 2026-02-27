for(let i= 0; i < 5; i++){
    console.log(`iteração: ${i}`); // console.log("Iteração: ", i)
}

let contador = 0;
while (contador < 5){
    console.log("Iteração: ", contador);
    contador++;
}

let num: number = 5;

do{
    console.log("Numeros: ", num);
    num++;

}while (num < 5)

let numeros: number[] = [ 10, 20, 30];

for( const num of numeros){
    console.log("Numeros: ", num);
}

// const pessoa = {nome: "alice", idade: 25, cidade: "boituva"}
// for( const chave in pessoa){
//     console.log(`${chave}:`, pessoa[chave])
// }

