"use strict";
let x = 10;
x = 31;
console.log(x);
let y = 12;
let z = 11;
let firstName = ' Wesley';
let age = 31;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'João';
console.log(firstName.toUpperCase());
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5, 4, 12, 23, 1, 90);
myNumbers.sort((a, b) => a - b);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
const user = {
    name: 'Santos',
    age: 31,
};
console.log(user);
let a = 0;
a = 'teste';
a = true;
a = [];
let id = '10';
id = 200;
const userId = 10;
const productId = '10';
const shirId = 123;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: 'Camisa gola V',
    size: size.G,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 120));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Wesley'));
function logger(msg) {
    console.log(msg);
}
logger('Santos');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("zLey");
greeting("Luana", "Miss");
function sumNumber(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumber(num) {
    return num.n1 * num.n2;
}
const someNumber = {
    n1: 2,
    n2: 10
};
console.log(multiplyNumber(someNumber));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
    }
    console.log('Não foi passado um número');
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
const a3 = [true, false];
showArraysItems(a1);
showArraysItems(a2);
showArraysItems(a3);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome so usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A regra de negocio é  ${this.role}`);
            return;
        }
        else {
            console.log('Informação restrita  ');
        }
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new car('VW ', 4);
fusca.showBrand();
class superCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar('Audi', 4, 2.0);
console.log(a4);
