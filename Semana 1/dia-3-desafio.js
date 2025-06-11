// Convertido de Celsius a Fahrenheit y viceversa

let temperatura = Number(prompt("Ingresa la temperatura:"));
let unidad = prompt("Ingresa la unidad (C para Celsius, F para Fahrenheit, o salir para dejar de convertir):").toUpperCase();

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let resultado;

while (true) {


    if (unidad === "C") {
        resultado = celsiusAFahrenheit(temperatura);
        alert(`${temperatura}°C es igual a ${resultado}°F`);
        break;
    } else if (unidad === "F") {
        resultado = fahrenheitACelsius(temperatura);
        alert(`${temperatura}°F es igual a ${resultado}°C`);
        break;
    } else if (unidad === "SALIR") {
        alert("Conversión finalizada.");
        break;
    }else {
        alert("Unidad no válida. Por favor, ingresa C para Celsius, F para Fahrenheit o salir para terminar.");
        unidad = prompt("Ingresa la unidad (C para Celsius, F para Fahrenheit, o salir para dejar de convertir):").toUpperCase();
        temperatura = Number(prompt("Ingresa la temperatura:"));
    }
};