// Filter recorre un array, devuelve uno nuevo, que contiene solamente los elementos
// que cumplen una condicion, la difernecia con map, es que este NO transforma nada

const numeros = [5, 12, 8, 20, 3, 15];

const mayoresA10 = numeros.filter((numero) => numero > 10);

console.log(mayoresA10);

// filtrar edades
const edades = [12, 17, 20, 15, 25, 16];

const mayores = edades.filter((edad) => edad >= 18);

console.log(mayores);
