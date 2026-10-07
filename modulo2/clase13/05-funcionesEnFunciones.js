const multiplicar = (numero1 = 1, numero2 = 1) => numero1 * numero2;

const elevarAlCuadrado = (numero) => multiplicar(numero, numero);

console.log(elevarAlCuadrado(3));

const funcionEnFuncion = (nombre) => {
  const saludo = (nombreSaludo) => {
    return "Hola " + nombreSaludo;
  };
  return saludo(nombre);
};

console.log(funcionEnFuncion("santiago"));

console.log();
