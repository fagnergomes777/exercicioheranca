// Crie uma classe base Conversor com um método estático celsiusParaFahrenheit.
// Crie uma classe derivada ConversorAvancado que adiciona o método estático
// fahrenheitParaCelsius.

// Classe base Conversor
class Conversor {
    // Método estático para converter Celsius para Fahrenheit
    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

// Classe ConversorAvancado, derivada de Conversor
class ConversorAvancado extends Conversor {
    // Método estático para converter Fahrenheit para Celsius
    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}

// Testando as classes

// Usando o método da classe base Conversor
const celsius = 25;
const fahrenheit = Conversor.celsiusParaFahrenheit(celsius);
console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);

// Usando o método da classe derivada ConversorAvancado
const fahrenheitValue = 77;
const celsiusValue = ConversorAvancado.fahrenheitParaCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}°F é igual a ${celsiusValue.toFixed(2)}°C`);
