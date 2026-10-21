// 1. Extraer titulo y año usando destructuring.
// 2. Guardar titulo en una variable llamada nombrePelicula.
// 3. Mostrar ambas variables por consola.

const pelicula = {
  titulo: "Matrix",
  director: "Lana Wachowski",
  año: 1999,
  genero: "Ciencia Ficcion",
};

const { titulo: nombrePelicula, año } = pelicula;

console.log(nombrePelicula);
console.log(año);
