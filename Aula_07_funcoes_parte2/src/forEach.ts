const numbers = [1,2,3,4,5];
const frutas: string[] = ['maca', 'banana', 'uva'];

frutas.forEach( (item, index)=> {
    console.log(`${index}: ${item}`);
});

let contador: number = 0;

numbers.forEach(item => {
    contador += item;
});

numbers.forEach( (n, index) =>{ //não recomendado
    numbers[index] = n * 2;
});