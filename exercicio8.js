// Crie uma classe base Veiculo, uma classe intermediária Terrestre e uma classe
// derivada Carro. A classe Carro deve herdar atributos e métodos de Veiculo e
// Terrestre.

// Classe base Veiculo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método para exibir informações do veículo
    exibirInformacoes() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Classe intermediária Terrestre, que herda de Veiculo
class Terrestre extends Veiculo {
    constructor(marca, modelo, rodas) {
        super(marca, modelo); // Chama o construtor da classe base Veiculo
        this.rodas = rodas; // Atributo específico de veículos terrestres
    }

    // Método para exibir informações adicionais de veículos terrestres
    exibirInformacoesTerrestre() {
        console.log(`Número de rodas: ${this.rodas}`);
    }
}

// Classe derivada Carro, que herda de Terrestre
class Carro extends Terrestre {
    constructor(marca, modelo, rodas, cor) {
        super(marca, modelo, rodas); // Chama o construtor da classe intermediária Terrestre
        this.cor = cor; // Atributo específico de carros
    }

    // Método para exibir todas as informações do carro
    exibirInformacoesCarro() {
        super.exibirInformacoes(); // Chama o método da classe base Veiculo
        super.exibirInformacoesTerrestre(); // Chama o método da classe intermediária Terrestre
        console.log(`Cor: ${this.cor}`);
    }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 4, "Preto");

// Exibindo as informações do carro
meuCarro.exibirInformacoesCarro();
