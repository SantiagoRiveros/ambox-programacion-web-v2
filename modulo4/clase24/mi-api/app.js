// Primero, requerimos, express, que va a ser nuestra herramienta, para lo ques
// La definicion de endpoints y del servidor en si
const express = require("express");

const app = express();

// Aca indicamos el puerto donde se va a ejecutar el servidor
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Base de datos simulada
const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com",
  },
  {
    id: 2,
    nombre: "Maria",
    email: "maria@gmail.com",
  },
];

// Ruta principal
// GET - http://localhost:3000/
app.get("/", (req, res) => {
  //.get es el verbo HTTP
  // "/" Es la ruta
  res.send("API de usuarios funcionando");
});

// Obtener todos los usuarios
// GET - http://localhost:3000/usuarios
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Obtener un usuario por ID
// GET - http://localhost:3000/usuarios/:id
app.get("/usuarios/:id", (req, res) => {
  // el :id es un params, significa que por ejemplo
  // vamos a hacer GET - http://localhost:3000/usuarios/3
  // el "3" remplaza el ":id"
  const id = +req.params.id; // lo capturamos aca el ":id"

  const usuario = usuarios.find((user) => user.id === id); // buscamos el usuario por el id que
  // recibimos como params

  if (!usuario) {
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
    });
  }

  res.json(usuario);
});

// Crear un usuario
app.post("/usuarios", (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json(nuevoUsuario);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
