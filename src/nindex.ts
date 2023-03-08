/*let x: number = 10;
x = 31;

console.log(x);

// inferência x annotation

let y = 12; //inferência mais usada porem sucinta
// y = 12;

let z: number = 11; //annotation deixa mais explicito a declaração


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
//myTuple = [true, false, 5]; */

// object literals -> {pop: value}

const user: { name: string; age: number } = { // determina oq sera atribuído no object
    name: 'Santos',
    age: 31,
};
// não pode adicionar nada alem do que foi atribuído 
console.log(user);
// console.log(typeof user);

//any valor que aceita qual quer tipo de dados any
let a: any = 0;
a = 'teste'; // não é a melhor opção para se usar o any
a = true;
a = [];


// union types unir tipos para criar tipos mais completos

let id: string | number = '10'; // | barra vertical se chama pipe

id = 200;

// id = true; ele nao vai aceitar no typescript
// id = [] ele nao aceita boolean ou array se nao for declarado na variável

// type alias codigo mais limpo

type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = '10';
const shirId: myIdType = 123;

// enum  enumera uma coleção

// tamanhos de roupas

enum size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande',
}

const camisa = {
    name: 'Camisa gola V',
    size: size.G,
};

console.log(camisa)