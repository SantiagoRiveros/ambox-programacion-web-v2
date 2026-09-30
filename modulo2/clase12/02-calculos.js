let sumatoria = 0;
for (let i = 1; i <= 100000; i++) {
  sumatoria = sumatoria + i;
}

console.log(sumatoria);

// Quiero sumar solos los numeros pares divisibles por 6 que hay hasta 100.000

let sumatoriaRara = 0;

for (let i = 1; i <= 100000; i++) {
  if (i % 2 === 0 && i % 6 === 0) {
    sumatoriaRara += i;
  }
}

console.log(sumatoriaRara);
