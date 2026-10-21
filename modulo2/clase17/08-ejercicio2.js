// Un instituto necesita administrar la informacion de sus estudiantes.
/* Resolver los siguientes puntos:
1. Usar destructuring para obtener nombre, curso y notas.
2. Crear una copia del alumno usando spread.
3. En la copia, cambiar la edad a 25.
4. Agregar una propiedad llamada activo con valor true.
5. Convertir el objeto actualizado a texto JSON.
6. Convertir ese texto JSON nuevamente a un valor de JavaScript.
7. Mostrar por consola el nombre del alumno, el curso y el objeto recuperado.
8. Comprobar que el objeto original sigue teniendo la edad 24. */

const alumno = {
  nombre: "Camila",
  edad: 24,
  curso: "JavaScript",
  notas: [8, 9, 10],
};

// 1. Destructuring:
const { nombre, curso, notas } = alumno;

console.log(nombre);
console.log(curso);
console.log(notas);

// 2, 3, 4 Copiar y actualizar:

const alumnoActualizado = {
  ...alumno,
  edad: 25,
  activo: true,
};

console.log(alumnoActualizado);

// 5. COnvertir a JSON
const textoJSON = JSON.stringify(alumnoActualizado, null, 2);

console.log(textoJSON);

// 6. recuperar el valor de Javascript
const alumnoRecuperado = JSON.parse(textoJSON);

// 7. Mostrar informacion
console.log(alumnoRecuperado.nombre);
console.log(alumnoRecuperado.curso);
console.log(alumnoRecuperado);

// 8 - comprobar que el original no cambio

console.log(alumno.edad);
