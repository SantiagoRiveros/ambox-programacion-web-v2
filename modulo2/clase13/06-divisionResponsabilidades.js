// Orquesta el calculo de descuento y el calculo del total
const calcularPrecioFinal = (precio, descuento) => {
  // responsabilidad -> calcular descuento
  const calcularDescuento = (precio, descuento) => {
    return precio * (descuento / 100);
  };

  // responsabilidad -> calcular total
  const calcularTotal = (precio, descuentoCalculado) => {
    return precio - descuentoCalculado;
  };

  // retorno del valor que retorna la funcion que calcula el total
  return calcularTotal(precio, calcularDescuento(precio, descuento)); // callback, una funcion que le pasamos como argumento a otra
};

console.log(calcularPrecioFinal(10000, 20));
// 8000
