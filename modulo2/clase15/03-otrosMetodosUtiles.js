// find busca un elemento

const alumnos = [
  { id: 1, nombre: "Ana", nota: 8 },
  { id: 2, nombre: "Juan", nota: 4 },
  { id: 3, nombre: "Lucía", nota: 10 },
];

const alumno = alumnos.find((alumno) => alumno.nota < 5);

console.log(alumno);

// a diferencia de filter, find devuelve el primero que encuentra que cumpla la condicion
// si no encuentra ninguno, devuelve undefined

// some ¿Hay alguno que cumpla?

const notas = [8, 9, 3, 7];

const hayDesaprobados = notas.some((nota) => nota < 4);

console.log(hayDesaprobados); // true

// devuelve true o false, dependiendo si alguno cumple

// every ¿todos cumplen?

const notas2 = [8, 9, 7, 6];

const todosAprobados = notas.every((nota) => nota >= 4);

console.log(todosAprobados); // true

// includes ¿Esta presente?

const frutas = ["manzana", "pera", "banana"];

console.log(frutas.includes("pera")); // true
console.log(frutas.includes("naranja")); // false
