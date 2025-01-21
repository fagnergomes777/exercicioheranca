// Crie uma classe base FormaGeometrica com um método calcularArea. As classes
// derivadas Retangulo e Circulo devem implementar o cálculo da área com suas
// fórmulas específicas.

// Classe base FormaGeometrica
class FormaGeometrica {
    calcularArea() {
        throw new Error("O método calcularArea deve ser sobrescrito pelas subclasses.");
    }
}

// Classe Retangulo, derivada de FormaGeometrica
class Retangulo extends FormaGeometrica {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

// Classe Circulo, derivada de FormaGeometrica
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2); // Fórmula da área do círculo: π * r²
    }
}

// Instanciando os objetos
const retangulo = new Retangulo(5, 10);
const circulo = new Circulo(7);

// Exibindo as áreas
console.log(`Área do Retângulo: ${retangulo.calcularArea()} unidades quadradas`);
console.log(`Área do Círculo: ${circulo.calcularArea()} unidades quadradas`);
