const frutas = ["Manzana", "Banana", "Naranja"];
// indices         0           1          2

console.log(frutas[1]);

// Que pasa si intentamos acceder a uina posicion que no existe?

console.log(frutas[29]);

const edades = [18, 25, 32, 41];
// indices       0   1   2   3

const respuestas = [true, false, true];

const datos = ["Santiago", 33, true];

const verduras = ["Zapallo", "Papa", "Zanahoria", "Remolacha"];

// Los arrays permiten modificar una posicion:

verduras[4] = "Pepino";

console.log(verduras);

verduras[1] = "Papa Negra";

console.log(verduras);

const ciudades = ["Buenos Aires", "Cordoba", "Rosario"];

ciudades[1] = "Mendoza";
