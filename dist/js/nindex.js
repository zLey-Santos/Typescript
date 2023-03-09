"use strict";
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
