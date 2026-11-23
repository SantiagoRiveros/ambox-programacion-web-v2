/* 
Vamos a crear un sistema de usuarios.

La idea es que cada usuario tenga:
- Nombre.
- Apellido.
- Edad.
- Email.
Y que pueda mostrar su información.

Primero, planteales el problema:

Necesitamos crear una clase Usuario que permita generar diferentes usuarios sin repetir código.
*/

class Usuario {
  constructor(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
  }

  mostrarDatos() {
    console.log("Nombre: " + this.nombre);
    console.log("Apellido: " + this.apellido);
    console.log("Edad: " + this.edad);
    console.log("Email: " + this.email);
  }
}

const usuario1 = new Usuario("Santiago", "Riveros", 28, "santiago@gmail.com");

const usuario2 = new Usuario("Martina", "Gomez", 24, "martina@gmail.com");

usuario1.mostrarDatos();
usuario2.mostrarDatos();
