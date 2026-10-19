// Ejercicio 1

let libro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupery",
  paginas: 96,
  leido: true,
};

console.log("Titulo del libro: " + libro.titulo);
console.log("Cantidad de paginas: " + libro.paginas);

let producto = {
  nombre: "Mouse",
  precio: 15000,
  disponible: true,
};

/* 
Resolver:
1. Mostrar el precio.
2. Cambiar el precio a 18000.
3. Agregar la propiedad marca con valor "Logitech".
4. Cambiar disponible a false.
5. Mostrar el objeto completo.
*/
console.log("Precio del producto: $" + producto.precio);
producto.precio = 18000;
producto.marca = "Logitech";
producto.disponible = false;
console.log(producto);

/* 
Ejercicio 3 — Crear un método
Crear un objeto perro con las propiedades nombre y edad, y un método ladrar() que muestre:

¡Guau! Soy Firulais

El nombre debe obtenerse de la propiedad del objeto, no escribirse directamente dentro del mensaje.
*/

let perro = {
  nombre: "Alpha",
  edad: 17,

  ladrar() {
    console.log("¡Guau! Soy " + this.nombre + ".");
  },
};

perro.ladrar();
