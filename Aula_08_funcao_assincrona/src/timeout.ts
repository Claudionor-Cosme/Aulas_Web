
console.log("antes do setTimeout");
let frase = "rodando o setTimeout";
const timeout= setTimeout(()=> console.log("executando o timeout"), 3000);

frase = "rodando o clearTimeout";

if( frase !== "rodadando o setTimeout"){
    clearTimeout(timeout);
    console.log(frase);
}

console.log("depois do setTimeout");
