// Declaro la clase
class Auto {
  marca = "Toyota";
  modelo = "Corolla";
  color = "Rojo";

  acelerar() {
    console.log("El auto esta acelerando");
  }

  frenar() {
    console.log("El auto esta frenado");
  }
}

// Creo instancias de esa clase, es decir "nuevos" autos

const auto1 = new Auto();
const auto2 = new Auto();

console.log(auto1);
console.log(auto2);

// trabajando de esta manera, todos los autos van a tener las mismas propiedades, pero yto quiero
// poder variar esas propiedades, para eso, vamos a crear una funcion constructora:
