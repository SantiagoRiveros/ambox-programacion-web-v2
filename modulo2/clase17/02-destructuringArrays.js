const colores = ["rojo", "azul", "verde"];

// Vamos a hacer destructuring con arrays:
const [primero, segundo, tercero] = colores;

// Los valores se asignan segun su posicion

console.log(primero); // rojo
console.log(segundo); // azul
console.log(tercero); // verde

colores[1] = "Naranja";
console.log(segundo);

// podemos omitir posiciones:

const numeros = [10, 20, 30];

const [primerNumero, , tercerNumero] = numeros;

const nombre = "Santiago";
const apellido = "Riveros";

// Con destructuring de arrays, podemos asignar 2 variables de una:
const [nombreUsuario, apellidoUsuario] = [nombre, apellido];
// const nombreProducto = "Teclado Gamer"
// const precioProducto = 25000

const [nombreProducto, precioProducto] = ["Teclado gamer", 25000];
