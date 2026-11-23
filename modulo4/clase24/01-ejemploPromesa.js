function obtenerUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nombre: "Juan",
        email: "juan@gmail.com",
      };

      resolve(usuario); // a los 2000 ms, resuelve la promesa, retornando el usuario
    }, 2000); // Luego de 2000 milisegundos, ejecuta lo que esta dentro del timeOut
  });
}

// Como obtenemos el usuario?
// el .then es que haga X accion, una vez se resuelva o rechaze la promesa
obtenerUsuario().then((usuario) => {
  console.log(usuario);
});

// Resolve: Indica que la operacion termino correctamente
// Reject: Indica que ocurrio un error
