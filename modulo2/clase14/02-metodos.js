// Todo array, tiene una propiedad, llamada length
// Nos devuelve el largo del array
const frutas = ["Manzana", "Banana", "Naranja"];

console.log(frutas.length);

// Para agregar elementos, usamos push()
// push agrega un elemento a un array, en su final

frutas.push("Kiwi");

console.log(frutas);

// Push permite agregar varios elementos:
frutas.push("Sandia", "Melon", "Ciruela");

console.log(frutas);

// Con pop() eliminar el ultimo elemento

frutas.pop();
console.log(frutas);

// con shift eliminamos el primer elemento

frutas.shift();
console.log(frutas);

// con unshift agregamos un elemento al principio del array:

frutas.unshift("Manzana");

console.log(frutas);
