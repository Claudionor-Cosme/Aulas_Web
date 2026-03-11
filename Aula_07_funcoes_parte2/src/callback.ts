function imprimir(valor:any):void{
    console.log("operacao efetuada resultou em: " +valor);
}

function concatenar(a:string, b:string, callback:(param:string)=> void): void{
    var op =  a + " " + b;
    console.log("A operacao efetuarda resultou em: " + op)
}

function somar( a:number, b:number, callback:(param:string)=>void): void{
    var op = a+b;
    console.log("A operacao efetuada resultou em: "+op)
}

concatenar ("Hello","World ",imprimir) ;
somar (2 , 2 , imprimir);

