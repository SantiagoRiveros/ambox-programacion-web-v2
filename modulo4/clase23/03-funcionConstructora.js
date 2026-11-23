class Auto {
  // Aca adnetro definimos una funcion constructora
  // Para que pueda recibir propiedades, y poder tener diferentes valores
  constructor(marca, modelo, color) {
    // estas son propiedades dinamicas que va a recibir la clase
    this.marca = marca; // Con esto definimos que este auto tendra la marca, que recibe como argumetno
    this.modelo = modelo;
    this.color = color;
    this.velocidad = 0;
  }
  // Vamos a agregarle metodos:
  acelerar() {
    this.velocidad += 10;
    console.log("Velocidad actual: " + this.velocidad);
  }

  frenar() {
    this.velocidad -= 10;
    console.log("Velocidad actual: " + this.velocidad);
  }

  mostrarInformacion() {
    console.log("Marca: " + this.marca);
    console.log("Modelo: " + this.modelo);
    console.log("Color: " + this.color);
  }
}
// Que significa this?
// this hace referencia al objeto actual que estamos creando o usando

// Vamos a crear instancias de este auto
// new nombre_de_la_clase nos permite crear una nueva instancia del objeto
const auto1 = new Auto("Toyora", "Corolla", "Rojo");
const auto2 = new Auto("Ford", "Focus", "Negro");
const auto3 = new Auto("Volkswagen", "Golf", "Blanco");

auto1.acelerar();
auto1.acelerar();
auto1.frenar();
auto1.mostrarInformacion();
