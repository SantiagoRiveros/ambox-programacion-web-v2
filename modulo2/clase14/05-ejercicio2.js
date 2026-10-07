// Sistema de turnos:
// Crear un sistema que administre una lista de personas, esperando ser atendidas.

const personas = ["Juan", "Maria", "Pedro"];

// Parte 1 - Agregar a Lucia y Martin
personas.push("Lucia", "Martin");

// Parte 2 - Mostrar todas las personas
console.log(personas);

//  Parte 3 - Atender a la primera persona de la lista
// Para "atender" guardamos esa persona en otro array
const personasAtendidas = [];
personasAtendidas.push(personas[0]);

// Parte 4 - Agregamos otra persona:
personas.push("Sofia");

// parte 5 - atender a la ultima persona
personasAtendidas.push(personas[personas.length - 1]);
