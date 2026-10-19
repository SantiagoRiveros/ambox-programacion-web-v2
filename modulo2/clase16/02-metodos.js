let persona = {
  nombre: "Lucia",

  saludar() {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar();

/* 
Un objeto es una estructura de datos
organizada en pares de clave-valor.
Como valor, puede contener cualquier tipo de dato.
Es de las estructuras mas utilizadas hoy en dia.


*/

let catalogo = [
  {
    id: 1,
    nombre: "Teclado",
    precio: 25000,
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 20000,
  },
  {
    id: 3,
    nombre: "Monitor",
    precio: 180000,
  },
];

console.log(catalogo[1]);
