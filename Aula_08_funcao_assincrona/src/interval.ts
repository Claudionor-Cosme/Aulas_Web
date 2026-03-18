//setInterval(()=> console.log("executando o interval", 1000));
//console.log("depois do interval");

let contador = 0;

const interval = setInterval(()=>{
    contador++;
    console.log("rodando o interval.....");
    if(contador === 3){
        console.log("contador cancelado");
        clearInterval(interval);
    }
},700);
console.log("Depois do interval...");

