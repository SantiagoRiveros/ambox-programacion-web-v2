class Empleado {
  constructor(nombre, edad, sueldo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
  }

  mostrarInformacion() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Sueldo: " + this.sueldo);
  }
}

// Vamos a crear la clase "Hija"
// Al usar Extends, hereda las propiedades y metodos del empleado

// Pero que pasa si yo necesito darle propiedades unicas?
class Programador extends Empleado {
  constructor(nombre, edad, sueldo, lenguaje) {
    // con super, llamamos a la funcion constructora del padre
    super(nombre, edad, sueldo);
    this.lenguaje = lenguaje;
  }
}

// Entonces podemos hacer asi:
const programador1 = new Programador("Santiago", 33, 1500000, "Javascript");

programador1.mostrarInformacion();
