class Pelicula {
  constructor(titulo, director, año, duracion) {
    this.titulo = titulo;
    this.director = director;
    this.año = año;
    this.duracion = duracion;
  }

  mostrarInformacion() {
    console.log("Titulo: " + this.titulo);
    console.log("Director: " + this.director);
    console.log("Año :" + this.año);
    console.log("Duracion: " + this.duracion);
  }

  esClasica() {
    return this.año < 2000;
  }
}

const pelicula1 = new Pelicula("Matrix", "Wachowski", 1999, 136);

pelicula1.mostrarInformacion();
console.log(pelicula1.esClasica());
