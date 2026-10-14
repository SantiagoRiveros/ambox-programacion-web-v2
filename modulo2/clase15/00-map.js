// Map recorre un array y devuelve un nuevo array,  con el resultado de transformar cada elemento

let arrayMap = [1, 2, 3, 4];

const duplicados = arrayMap.map(function (numero) {
  return numero * 2;
});

console.log(duplicados);

const duplicados2 = arrayMap.map((numero) => numero * 2);

console.log(duplicados2);

// Convertir precios

const precios = [1000, 2500, 3000, 4500];

const preciosConAumento = precios.map((precio) => precio * 1.1);

console.log(preciosConAumento);

// con strings

const nombres = ["Santiago", "Dario", "Felipe", "Oscar"];

const saludos = nombres.map((nombre) => "Hola " + nombre + "!");

// forEach realiza una accion por cada uno de los elementos de un array

saludos.forEach((saludo) => console.log(saludo));

for (let i = 0; i < saludos.length; i++) {
  console.log(saludos[i]);
}

// Guardamos los nombres que terminan en o

const nombresConO = nombres.filter(
  (nombre) => nombre[nombre.length - 1] == "o",
);

console.log(nombresConO);
