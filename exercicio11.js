// Crie uma classe base chamada Veiculo com o método info que exibe o tipo de veículo.
// Em seguida, crie duas classes derivadas chamadas Carro e Moto que sobrescrevem o
// método info para incluir informações específicas do veículo, como modelo e ano

// Classe base Veiculo
class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    // Método info que será sobrescrito pelas classes derivadas
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
    }
}

// Classe Carro, derivada de Veiculo
class Carro extends Veiculo {
    constructor(tipo, modelo, ano) {
        super(tipo); // Chama o construtor da classe base
        this.modelo = modelo;
        this.ano = ano;
    }

    // Sobrescrita do método info para incluir modelo e ano
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Classe Moto, derivada de Veiculo
class Moto extends Veiculo {
    constructor(tipo, modelo, ano) {
        super(tipo); // Chama o construtor da classe base
        this.modelo = modelo;
        this.ano = ano;
    }

    // Sobrescrita do método info para incluir modelo e ano
    info() {
        console.log(`Tipo de veículo: ${this.tipo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Criando instâncias de Carro e Moto
const meuCarro = new Carro("Carro", "Fusca", 1975);
const minhaMoto = new Moto("Moto", "Harley Davidson", 2020);

// Chamando o método info de cada instância
meuCarro.info();
minhaMoto.info();
