// Crie uma classe base Funcionario com um método calcularSalario. Crie classes
// derivadas Estagiario e Gerente, onde cada uma implementa a lógica de cálculo do
// salário de forma distinta

// Classe base Funcionario
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    // Método para calcular o salário (será sobrescrito pelas classes derivadas)
    calcularSalario() {
        throw new Error("O método calcularSalario deve ser implementado nas classes derivadas.");
    }
}

// Classe Estagiario, derivada de Funcionario
class Estagiario extends Funcionario {
    constructor(nome, salarioBase, horasTrabalhadas) {
        super(nome, salarioBase);
        this.horasTrabalhadas = horasTrabalhadas; // Horas trabalhadas pelo estagiário
    }

    // Implementação do método calcularSalario para Estagiário
    calcularSalario() {
        // Salário do estagiário é calculado pela quantidade de horas trabalhadas multiplicado pelo valor da hora base
        const salario = this.horasTrabalhadas * (this.salarioBase / 160); // Supondo 160 horas mensais
        console.log(`${this.nome} (Estagiário) - Salário: R$ ${salario.toFixed(2)}`);
        return salario;
    }
}

// Classe Gerente, derivada de Funcionario
class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus; // Bônus do gerente
    }

    // Implementação do método calcularSalario para Gerente
    calcularSalario() {
        // Salário do gerente é o salário base + bônus
        const salario = this.salarioBase + this.bonus;
        console.log(`${this.nome} (Gerente) - Salário: R$ ${salario.toFixed(2)}`);
        return salario;
    }
}

// Criando instâncias de Estagiário e Gerente
const estagiario = new Estagiario("Lucas", 1200, 80); // 80 horas trabalhadas
const gerente = new Gerente("Ana", 5000, 2000); // Bônus de 2000

// Calculando e exibindo os salários
estagiario.calcularSalario();
gerente.calcularSalario();
