/*let x: number = 10;
x = 31;

console.log(x);

// inferência x annotation

let y = 12; //inferência mais usada porem sucinta
// y = 12;

let z: number = 11; //annotation deixa mais explicito a declaração*/


//tipos basicos

let firstName: string = ' Wesley';
let age: number = 31;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);
firstName = 'João';
// console.log(firstName);
console.log(firstName.toUpperCase());
//object

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length); // mostra quantos elementos temos dentro do array e seus id
myNumbers.push(5, 4, 12, 23, 1, 90); // adiciona mai elementos ao array
myNumbers.sort((a, b) => a - b); // organiza um arrAay

//tuplas

let myTuple: [number, string, string[]];

myTuple = [5, 'teste', ['a', 'b']]; //tuple organiza de forma fixa a ordem dos elementos 
//myTuple = [true, false, 5];

