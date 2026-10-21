const numeros = [1, 2, 3];

console.log(numeros);
console.log(...numeros);

// los tres puntos expanden los elementos del array como valores individuales

// Una aplicacion es combinar arrays

const frutas = ["manzana", "pera"];
const otrasFrutas = ["banana", "naranja"];

const todasLasFrutas = [...frutas, ...otrasFrutas];

console.log(todasLasFrutas);

// tambien podemos agregar elementos al principio o al final:
const numeros2 = [2, 3, 4];
const nuevosNumeros = [1, ...numeros2, 5];

console.log(nuevosNumeros);

// Copiar un array, shallow copy

let original = [10, 20, 30];
let copia = original;

console.log(original);
console.log(copia);

copia.push(40);

console.log(original);
console.log(copia);

// Me modifico la copia... no deberia haberlo, porque la asignacion la hice antes de hacer el push
// Porque cambia el original? Porque copia = original no crea otro array independiente.
// ambas variable shacen refencia al mismo array, es decir, modifico uno, y me modifica el otro

let numero = 20;
let copiaNumero = numero;

console.log(numero);
console.log(copiaNumero);

numero = numero + 1;

console.log(numero);
console.log(copiaNumero);

console.log("PROBANDO CON SPREAD");
const original2 = [10, 20, 30];
const copia2 = [...original2]; // Aca crea una copia, no hace referencia al mismo array
// por ende cuando haga cambios ya no se chocan

copia2.push(40);

original2.push("Hola");

console.log(copia2);
console.log(original2);
