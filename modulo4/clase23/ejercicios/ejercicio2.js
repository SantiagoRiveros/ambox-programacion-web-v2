class CuentaBancaria {
  constructor(titular, numeroCuenta) {
    this.titular = titular;
    this.numeroCuenta = numeroCuenta;
    this.saldo = 0;
  }

  depositar(deposito) {
    console.log("Depositando $" + deposito + " en su cuenta.");
    this.saldo += deposito;
    console.log("Nuevo saldo: $" + this.saldo + ".");
  }

  consultarSaldo() {
    console.log("Saldo: $" + this.saldo + ".");
  }
}

const cuenta1 = new CuentaBancaria("Santiago Riveros", 1234);

cuenta1.depositar(1000);
cuenta1.consultarSaldo();
