let alumno = {
  nombre: "Lucia",
  edad: 22,
  curso: "Javascript",
  nota: 9,
};

alumno.curso = "Programacion Web";

alumno.ciudad = "La Plata";

console.log(alumno.curso);

console.log(alumno);

console.log(alumno["nota"]);

delete alumno.ciudad;

console.log(alumno);

let producto = {
  nombre: "Teclado",
  precio: 25000,
  disponible: true,
};

let clave = "nombre";

console.log(producto[clave]);

console.log(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
