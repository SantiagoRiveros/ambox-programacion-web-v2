const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  color: "Rojo",
  velocidad: 0,

  acelerar: function () {
    this.velocidad += 10;
  },

  frenar: function () {
    this.velocidad += 10;
  },
};

auto.acelerar();

console.log(auto.velocidad);
