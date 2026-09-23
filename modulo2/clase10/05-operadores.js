// OPERADORES MATEMATICOS

// Suma
let suma = 3 + 4;

// Resta
let resta = 10 - 3;

// division
let division = 20 / 4;

// multiplicacion
let multiplicacion = 3 * 7;

// modulo / resto
let modulo = 21 % 4; // da 1

// Operadores de comparacion

// Estos operadores nos dan true o false dependiendo si lo que comparamos es verdedero o no

// Igualdad
// Verifica que los dos valores sean iguales

let igualdad = 3 == 3; // se usa el == para esto
console.log("igualdad");
console.log(igualdad);

let igualdadConString = 3 == "3";
console.log("igualdad con string");
console.log(igualdadConString);

// Igualdad Estricta
// se usa para comparar valor y tipo
let igualdadEstricta = 3 === "3"; // se usa ===
console.log("igualdad estricta");
console.log(igualdadEstricta);

// desigual
// verifica que dos valores sean distintos
let desigual = 9 != "Hola"; // se usa !=
console.log("desigual");
console.log(desigual);

// mayor que
// verifica que un numero sea mayor que otro
let mayorQue = 3 > 5; // se usa >
console.log("mayor que");
console.log(mayorQue);

// mayor igual que
// verifica que sea mayor o igual
let mayorIgual = 9 >= 9; // se usa >=

console.log("mayor igual que");
console.log(mayorIgual);

// menor que
// verifica que un valor sea menor que el otro
let menorQue = 9 < 11; // se usa <

console.log("menor que");
console.log(menorQue);

// menor igual que
// verifica que sea menor o igual
let menorIgual = 11 <= 9; // se usa <=
console.log("menor igual que");
console.log(menorIgual);

// OPERADORES CON STRINGS

// Concatenacion
// Los strings se pueden sumar, para "encadenarse" o concatenarse

let nombre = "Santiago";
let apellido = "Riveros";
let saludo = "Hola " + nombre + " " + apellido;
console.log(saludo);
