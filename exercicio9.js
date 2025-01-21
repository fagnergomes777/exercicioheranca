// Crie uma classe base Conta com métodos privados simulados para manipular um saldo.
// Crie uma classe derivada ContaPremium que utiliza esses métodos para validar
// depósitos e saques.

// Classe base Conta
class Conta {
    #saldo;  // Campo privado para saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial || 0; // Inicializa o saldo, caso não seja informado, começa com 0
    }

    // Getter para acessar o saldo privado
    get saldo() {
        return this.#saldo;
    }

    // Método para verificar o saldo
    verSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }

    // Método protegido para saque, que deve ser validado nas classes derivadas
    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.#modificarSaldo(-valor); // Decrementa o saldo
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }

    // Método protegido para depósito
    depositar(valor) {
        if (valor > 0) {
            this.#modificarSaldo(valor); // Incrementa o saldo
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    // Método privado para manipular o saldo (não acessível diretamente fora da classe)
    #modificarSaldo(valor) {
        this.#saldo += valor;
    }
}

// Classe ContaPremium, derivada de Conta
class ContaPremium extends Conta {
    constructor(saldoInicial) {
        super(saldoInicial); // Chama o construtor da classe base
    }

    // Sobrescrita do método sacar para validações adicionais específicas para ContaPremium
    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            super.sacar(valor);  // Chama o método sacar da classe base
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }

    // Sobrescrita do método depositar para validar se o depósito é superior a um valor mínimo
    depositar(valor) {
        if (valor >= 50) {
            super.depositar(valor); // Chama o método depositar da classe base
        } else {
            console.log("Depósito mínimo de R$ 50,00 necessário para Conta Premium.");
        }
    }
}

// Criando uma instância de ContaPremium
const contaPremium = new ContaPremium(1000);

// Exibindo o saldo atual
contaPremium.verSaldo();

// Realizando operações
contaPremium.depositar(200); // Depósito válido
contaPremium.depositar(30);  // Depósito abaixo do valor mínimo para Conta Premium
contaPremium.sacar(500);     // Saque válido
contaPremium.sacar(2000);    // Tentando sacar mais do que o saldo

// Exibindo o saldo após as operações
contaPremium.verSaldo();
