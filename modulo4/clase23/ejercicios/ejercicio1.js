class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  mostrarInformacion() {
    console.log("Nombre: " + this.nombre);
    console.log("Precio: $" + this.precio);
    console.log("Categoria: " + this.categoria);
  }

  aplicarDescuento(descuento) {
    if (descuento > 100 || descuento < 0) {
      console.log("Porcentaje no valido");
    } else {
      console.log("Aplicando descuento del " + descuento + "%");
      this.precio = this.precio - (this.precio * descuento) / 100;
      console.log("Nuevo precio: $" + this.precio);
    }
  }
}

const producto1 = new Producto("Velador", 10000, "Hogar");

producto1.aplicarDescuento(10);
producto1.mostrarInformacion();
