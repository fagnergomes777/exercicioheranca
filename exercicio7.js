// Crie uma classe base Instrumento com o método tocar. Crie duas classes derivadas
// Violao e Piano, que devem implementar o método tocar exibindo sons específicos.

// Classe base Instrumento
class Instrumento {
    tocar() {
        throw new Error("O método tocar deve ser sobrescrito pelas subclasses.");
    }
}

// Classe Violao, derivada de Instrumento
class Violao extends Instrumento {
    tocar() {
        console.log("O violão faz: Strum strum!");
    }
}

// Classe Piano, derivada de Instrumento
class Piano extends Instrumento {
    tocar() {
        console.log("O piano faz: Plink plink plink!");
    }
}

// Instanciando os objetos
const violao = new Violao();
const piano = new Piano();

// Chamando o método tocar de cada instância
violao.tocar(); // Saída: O violão faz: Strum strum!
piano.tocar();  // Saída: O piano faz: Plink plink plink!
