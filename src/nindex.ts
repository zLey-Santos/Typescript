let x: number = 10;
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
//myTuple = [true, false, 5]; 

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

// literal types ele so aceita um valor

let teste: "autenticado" | null;// ele no pode ser alterado mais posso usar null para começar uma variável vazia nula 

// teste = "outroValor";
teste = "autenticado";
teste = null;


//funções

function sum(a: number, b: number) { // para obter um retorno temos que declarar qual tipo da tipagem
    return a + b
}

console.log(sum(12, 120)); // so retora oq foi declarado se for number so aceita number se for string so ceita string etc...


function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo('Wesley'));

function logger(msg: string): void { // void é tipo de função que nao retorna nada 
    console.log(msg);
}

logger('Santos');

function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("zLey");
greeting("Luana", "Miss")

//interfaces para operações matemáticas serve para padronizar estruturas 

interface MathFunctionParams {
    n1: number,
    n2: number,
}

function sumNumber(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

// console.log(sumNumber({ n1: 1, n2: 2 }));

function multiplyNumber(num: MathFunctionParams) {
    return num.n1 * num.n2;
}

const someNumber: MathFunctionParams = {
    n1: 2,
    n2: 10
};

console.log(multiplyNumber(someNumber));


//norrowing
// checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`)
    }
    console.log('Não foi passado um número')
}

doSomething(5);
doSomething(true);

// generics é mais complexo
// são usados por qual quer coisa
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
const a3 = [true, false];

showArraysItems(a1);
showArraysItems(a2);
showArraysItems(a3);

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome so usuário é ${this.name}`);

    } showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`A regra de negocio é  ${this.role}`);
            return
        } else {
            console.log('Informação restrita  ');
        }
    }
}
const zeca = new User('Zeca', 'Admin', true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(false);

// interface in class

interface IVelhice {
    brand: string
    showBrand(): void
}

class car implements IVelhice {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new car('VW ', 4);

fusca.showBrand();

// heranças

class superCar extends car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new superCar('Audi', 4, 2.0);
console.log(a4);
