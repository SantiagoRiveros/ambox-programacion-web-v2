const usuario = {
  nombre: "carlos",
  edad: 25,
};

const datosExtra = {
  ciudad: "La plata",
  profesion: "Programador",
};

const usuarioCompleto = {
  ...usuario,
  ...datosExtra,
};

console.log(usuarioCompleto);

const usuario2 = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "La Plata",
};

const usuarioActualizado = {
  ...usuario2,
  edad: 26,
};
