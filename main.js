//Tipos de variable

// Var (en desuso)
var nameVar = "Francisco";
console.log(nameVar);
// let
let nameLet = "Francisco";

// Const
const nameConst = "name";

// Tipos de datos primitivos

// String
let string = "string";

// Number
let entero = 12; // Enteros
let decimal = 12.2; // Float

// Boolen
let trueVar = true;
let falseVar = false;

// Undefinide
let undefinideVar = undefined;

// Null
let nullVar = null;

// Symbol
let symbolVar = Symbol();

// Bigint
let bigIntVar = BigInt(123312738127387123712983791237128973);
let bigIntVar2 = 4887452758927870283975732987120589213895729n;

// Operadores
let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
a += 2;
a -= 3;
a *= 4;
a /= 5;

// Operadores comparacion

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log((a = b)); //asignacion
console.log(a == b); //Igualdad
console.log(a === b); //Identidad
console.log((a = b)); //asignacion
console.log(a != b); //Igualdad
console.log(a !== b); //Identidad
console.log((a = b)); //asignacion

//Bucles
for (let step = 0; step < 5; step++) {
  console.log("Camina un paso en Javascript");
}

//Condicionales
//if - else
let edad = 50;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// if -else if - else
if (edad >= 18 && edad <= 24) {
  console.log("Eres mayor de edad");
} else if (edad >= 25 && edad <= 39) {
  console.log("Eres un adulto");
} else if (edad >= 40) {
  console.log("Eres un adulto mayor");
} else {
  console.log("Eres menor de edad");
}

//Funcion básica.
function sumar(a, b) {
  return a + b;
}

console.log(sumar(100, 200));

//Expresion  de funcion(agrega una funcion anonima a una variable)

const expresionSumar = function (a, b) {
  return a + b;
};

console.log(expresionSumar(10, 20));

//Funciones de flecha.
const arrowFunctonSumar = (a, b) => {
  return a + b;
};

console.log(arrowFunctonSumar(10, 20));

//Si la función tiene un solo parametro
//const nombrevariable = parametro => valordeRetorno
const name = (nombre) => nombre;

// Estructuras de datos

// Arrray
// comparacion

let mayArray = ["brais", "moured", "brasimored"];
let mayArray2 = new Array(1, 2, 3, 4);

console.log(mayArray, mayArray2);

//métodos comunes

let myArray = [];

// push y pop
myArray.push("francisco");
myArray.push("vanegas");

myArray.pop();

console.log(myArray);

// shift

myArray.shift();

console.log(myArray);

// unshift

myArray.unshift("francisco", "vanegas");

console.log(myArray);

// length
console.log(myArray.length);

// slice

myArray.slice(1, 2);

let myNewArray = myArray.slice(0, 1);
console.log(myArray);
console.log(myNewArray);

// splice
myArray.slice(1, 2);

let myNewArray2 = myArray.splice(0, 1);
console.log(myArray);
console.log(myNewArray2);

// Set
// Declaracion

let mySet = new Set(["francisco", "vanegas", 29]);
console.log(mySet);

// Métodos comunes
// add y delete

mySet.add("vanefran@gmail.com");
console.log(mySet);

mySet.delete("francisco");
console.log(mySet.delete(0));

// has

console.log(mySet.has("francisco"));
console.log(mySet.has("vanegas"));

// convertir un set a Array

let myArrayConvertSet = Array.from(mySet);
console.log(myArrayConvertSet);

let mySetArray = new Set(myArrayConvertSet);
console.log(mySetArray);

// Maps (colecciión de elementos)
// keys
// values
let myMap = new Map();
console.log(myMap);

// Inicialización
myMap = new Map([
  ["name", "Francisco"],
  ["lastname", "Vanegas"],
  ["email", "vanegasfrancisco@gmail.com"],
  ["age", 29],
]);
console.log(myMap);

// Metodos y procedimientos
// Set

myMap.set("alias", "FranV");
myMap.set("name", "Francisco De jesus");
console.log(myMap);

// Get

console.log(myMap.get("name"));

// Has

console.log(myMap.has("surname"));

// keys

console.log(myMap.keys());

// Values

console.log(myMap.values());

// entries

console.log(myMap.entries());

// size

console.log(myMap.size);

// delete

myMap.delete("age");
console.log(myMap);

// clear

myMap.clear();
console.log(myMap);
