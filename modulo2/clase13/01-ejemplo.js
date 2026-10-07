function saludar() {
  console.log("Hola");
}

saludar();
saludar();
saludar();

const despedir = () => console.log("Chau");

despedir();

function nombrar(meAvisaronSobreLaHora) {
  console.log("Hola " + meAvisaronSobreLaHora);
}

nombrar("Santiago");

const suma = (numero1, numero2) => numero1 + numero2;

console.log(suma(9, 11));

// Vamos a sumar varios conceptos
const profesor = "Oak";
const esMayor = (nombre = "", edad = NaN) => {
  const profesor = "Santiago Riveros";
  if (edad == NaN) {
    return "Valor no valido";
  } else if (edad >= 18) {
    return nombre + " es mayor de edad";
  } else {
    return nombre + " es menor de edad";
  }
};

console.log(profesor);

let resultado = esMayor("Santiago", 33);
console.log(resultado);

// Aca exporte la funcion esMayor
export default esMayor;
