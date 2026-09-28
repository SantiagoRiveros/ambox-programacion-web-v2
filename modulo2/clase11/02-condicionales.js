let edad = 10;

// Que pasa si yo quiero poner un algoritmo que me de un mensaje en especifico
// Si es mayor de edad?

// if (condicion){ bloque de ejecucion si se cumple la condicion }
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
/* if (!(edad >= 18)) {
  console.log("Es menor de edad");
}
 */

// Otro ejemplo:

let nota = 2;

if (nota > 10 || typeof nota !== "number") {
  console.log("Nota no valida");
} else if (nota >= 6) {
  console.log("Aprobado");
} else if (nota >= 4) {
  console.log("Recuperatorio");
} else {
  console.log("Desaprobado");
}

/* 0 a 3 → Desaprobado
4 a 5 → Recuperatorio
6 a 10 → Aprobado */

if (typeof nota == "number") {
  if (nota >= 0 && nota <= 10) {
    if (nota >= 6) {
      console.log("Aprobado");
    } else if (nota >= 4) {
      console.log("Recuperatorio");
    } else {
      console.log("Desaprobado");
    }
  } else {
    console.log("Nota fuera de rango");
  }
} else {
  console.log("Formato no valido");
}
