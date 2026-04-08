//lista de números
let numeros: number[] = [1, 2, 3, 4];

console.log("Numeros pos 01: ", numeros[1]);

console.log("numeros pos 02: ", numeros[2]);

//lista de strings
let nomes: string[] = ["ana", "joão", "elvis"];
console.log(nomes)

//lista genérica (usando array <tipo>)
let years: Array< number > = [20, 30, 40];

//lista com tipos mistos (usando Union Types)
let misto: (number | string) [] = [1, "dois", 3, "quatro"];

let fruits: string[] = ["banana", "maçã"];

fruits.push("pera"); //adiciona no final da lista

console.log(fruits);

fruits.unshift("uva"); //adiciona no começo da lista

fruits.pop(); //remove da ultima posição

fruits.shift(); //remove do começo da lista 

console.log (fruits[0]);
console.log(fruits.length);









