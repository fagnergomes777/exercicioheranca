// Crie uma classe base Produto com os atributos nome e preco. Crie duas classes
// derivadas Eletronico e Vestuario, cada uma com um método adicional (garantia
// para eletrônicos e tamanho para vestuário).

// Classe base Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para exibir informações do produto
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// Classe Eletronico, derivada de Produto
class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco); // Chama o construtor da classe base
        this.garantia = garantia; // Adiciona a garantia para produtos eletrônicos
    }

    // Método para exibir as informações adicionais do eletrônico
    exibirInformacoes() {
        super.exibirInformacoes(); // Exibe as informações da classe base
        console.log(`Garantia: ${this.garantia} anos`);
    }
}

// Classe Vestuario, derivada de Produto
class Vestuario extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco); // Chama o construtor da classe base
        this.tamanho = tamanho; // Adiciona o tamanho para vestuário
    }

    // Método para exibir as informações adicionais do vestuário
    exibirInformacoes() {
        super.exibirInformacoes(); // Exibe as informações da classe base
        console.log(`Tamanho: ${this.tamanho}`);
    }
}

// Criando instâncias de produtos
const celular = new Eletronico("Celular Samsung", 1200, 2); // 2 anos de garantia
const camiseta = new Vestuario("Camiseta Polo", 89.90, "M"); // Tamanho M

// Exibindo as informações dos produtos
console.log("Informações do Eletrônico:");
celular.exibirInformacoes();

console.log("\nInformações do Vestuário:");
camiseta.exibirInformacoes();
