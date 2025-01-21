// Crie uma classe base ContaBancaria com um atributo protegido _saldo e um método
// verSaldo. Crie uma classe derivada ContaCorrente que implementa métodos
// depositar e sacar, com validação para impedir saques maiores que o saldo.

// Classe base ContaBancaria
class ContaBancaria {
    constructor(saldoInicial) {
        this._saldo = saldoInicial || 0;  // Define o saldo inicial ou 0 se não fornecido
    }

    // Método para visualizar o saldo
    verSaldo() {
        console.log(`Saldo atual: R$ ${this._saldo.toFixed(2)}`);
    }
}

// Classe ContaCorrente, derivada de ContaBancaria
class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial) {
        super(saldoInicial);  // Chama o construtor da classe base (ContaBancaria)
    }

    // Método para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    // Método para sacar dinheiro com validação de saldo
    sacar(valor) {
        if (valor > this._saldo) {
            console.log("Saldo insuficiente para o saque.");
        } else if (valor > 0) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("Valor de saque inválido.");
        }
    }
}

// Instanciando uma conta corrente
const minhaConta = new ContaCorrente(1000);

// Exibindo saldo inicial
minhaConta.verSaldo();

// Realizando depósitos e saques
minhaConta.depositar(500);
minhaConta.verSaldo();

minhaConta.sacar(200);
minhaConta.verSaldo();

minhaConta.sacar(2000);  // Tentando sacar mais do que o saldo
minhaConta.verSaldo();
