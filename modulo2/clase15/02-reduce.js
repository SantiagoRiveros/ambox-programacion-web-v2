// reduce recorre un array y utiliza sus elementos para construir un unico resultado.
// es muy util para sumar, multiplicar, contar o acumular valores

const numeros = [10, 20, 30, 40];

const suma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(suma);

// sumar gastos

const gastos = [5000, 2500, 8000, 1500];

const total = gastos.reduce((acumulador, gasto) => {
  return acumulador + gasto;
}, 0);

console.log(total);

// calcular un producto

const numeros2 = [2, 3, 4];

const producto = numeros2.reduce((acumulador, numero) => {
  return acumulador * numero;
}, 1);

console.log(producto);
