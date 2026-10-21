const persona = {
  nombre: "Martin",
  edad: 25,
  ciudad: "Buenos Aires",
};

// Destructuring es una caracteristica de Javascript que permite extraer valores de objetos
// o arrays y permite guardarlos directamente en variables, de una manera mas corta y legible

// Si queremos guardar cada propiedad en una variable podriamos hacer lo siguiente:

const nombre = persona.nombre;
const edad = persona.edad;
const ciudad = persona.ciudad;

// Esto funciona perfectamente pero tenemos que escribir cada asignacion por separado
// Con destructuring podemos hacer lo mismo de una forma mas compacta.

const producto = {
  titulo: "Teclado gamer",
  precio: 25000,
  stock: 6,
};

const { titulo, precio, stock } = producto;

console.log(titulo);
console.log(precio);
console.log(stock);

// IMPORTANTE: EN Javascript, los nombres deben coincidir con los nombres de las propiedades

// Podemos cambiarle el nombre a una variable

const usuario = {
  nombre: "Sofia",
  edad: 28,
};

const { nombre: nombreDeUsuario } = usuario;

console.log(nombreDeUsuario);
// Significa -> Extrae la propiedad nombre del objeto usuario y guarda su valor en nombreDelUsuario

// Valores predeterminados:

const alumno = {
  nombre: "Esteban",
  materiasAprobadas: null,
};

const {
  nombre: nombreDeAlumno = "Anonimo",
  edad: edadDeAlumno = 0,
  materiasAprobadas: materiasAprobadasAlumno = 0,
} = alumno;
console.log(nombreDeAlumno);
console.log(edadDeAlumno);
console.log(materiasAprobadasAlumno);

const auto = {
  marca: "Ford",
  modelo: "Fiesta",
  color: "Rojo",
  cantidadMultas: null,
};

const {
  marca: marcaAuto,
  modelo: modeloAuto,
  color: colorAuto,
  cantidadMultas: multasAuto = 0,
  cantidadChoques: choquesAuto = 0,
} = auto;

console.log(marcaAuto);
console.log(modeloAuto);
console.log(colorAuto);
console.log(multasAuto);
console.log(choquesAuto);
