let a: number = 10;
let b: number = 5;

console.log("Soma", a+b);
console.log("subtração", a-b);
console.log("multiplicação", a*b);
console.log("divisão", a/b);
console.log("modulo", a%b);
console.log("exponenciação", a**b);
console.log("igualdade", a==b); //O operador == compara osvalores, convertendo tipos se necessário
console.log("igualdade estrita", a===b); //O operador === compara tanto os valores quantoos tipos
// garantindo igualdade estrita

a++; //a= a+1
console.log("incremento", a);

a +=b; // a = a +b
console.log("Atribuição com adição", a);