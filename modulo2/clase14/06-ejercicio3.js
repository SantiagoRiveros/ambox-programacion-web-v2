const carrito = ["Mouse", "Teclado", "Monitor"];

// Agregamos Auriculares y Webcam
carrito.push("Auriculares", "Webcam");

// Mostramos el carrito
console.log(carrito);

// Eliminamos el ultimo elemento y guardamos su valor en una variable
let productoEliminado = carrito.pop();

// Mostramos el elemento eliminado
console.log("Producto eliminado: " + productoEliminado);

// Eliminamos el primer elemento
productoEliminado = carrito.shift();

// Lo mostramos
console.log("Producto eliminado: " + productoEliminado);

// Agregamos Parlantes
carrito.push("Parlantes");

// Mostramos el carrito final
console.log(carrito);

// MOstramos la cantidad de elementos que tiene
console.log(carrito.length);
