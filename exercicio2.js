// Crie uma classe base chamada Funcionario com os atributos nome e salario. Depois,
// crie uma classe derivada Gerente que adiciona o atributo departamento e um método
// para exibir todas as informações do gerente.

// Classe base Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$ ${this.salario}`);
    }
}

// Classe Gerente, derivada de Funcionario
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario); // Chama o construtor da classe base
        this.departamento = departamento;
    }

    exibirInformacoes() {
        super.exibirInformacoes(); // Chama o método da classe base
        console.log(`Departamento: ${this.departamento}`);
    }
}

// Instanciando um Funcionario e um Gerente
const funcionario = new Funcionario("Carlos", 3000);
const gerente = new Gerente("Ana", 7000, "TI");

// Exibindo as informações
console.log("Informações do Funcionário:");
funcionario.exibirInformacoes(); // Exibe as informações do funcionário

console.log("\nInformações do Gerente:");
gerente.exibirInformacoes(); // Exibe as informações do gerente
