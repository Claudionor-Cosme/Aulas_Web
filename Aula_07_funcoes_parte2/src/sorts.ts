const numberx = [11,22,7,2,3,4,5];

numberx.sort((a,b)=> a-b); //ordenar de forma crescente
numberx.sort((a,b)=> b-a) //ordenar de forma decrescente
console.log(numberx);

const arquivos: string[] = ["item10.png", "item01.png", "item09.png"];
arquivos.sort((a,b) => a.localeCompare(b));
console.log(arquivos)

"claudio".localeCompare("CLAUDIO", undefined, {sensitivity: 'base'});
"teste".toLocaleLowerCase().localeCompare("TESTE".toLocaleLowerCase())