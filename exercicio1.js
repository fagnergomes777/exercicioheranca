// Crie uma classe base chamada Animal com o método fazerSom. Depois, crie classes
// derivadas Cachorro e Gato, cada uma sobrescrevendo o método fazerSom para emitir
// sons específicos.

// Classe base Animal
class Animal {
    fazerSom() {
        throw new Error("O método fazerSom deve ser sobrescrito pelas subclasses.");
    }
}

// Classe Cachorro, derivada de Animal
class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro faz: Au au!");
    }
}

// Classe Gato, derivada de Animal
class Gato extends Animal {
    fazerSom() {
        console.log("O gato faz: Miau!");
    }
}

// Instanciando os objetos
const cachorro = new Cachorro();
const gato = new Gato();

// Chamando o método fazerSom de cada instância
cachorro.fazerSom(); // Saída: O cachorro faz: Au au!
gato.fazerSom();     // Saída: O gato faz: Miau!
