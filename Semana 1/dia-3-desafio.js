// Convertido de Celsius a Fahrenheit y viceversa


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}



while (true) {
    let unidad = prompt("Ingresa la unidad (C para Celsius, F para Fahrenheit, o salir para dejar de convertir):").toUpperCase();

    if(unidad === "SALIR") {
        alert("Conversión finalizada.");
        break;       
    }

    if (unidad !== "C" && unidad !== "F") {
        alert("Unidad no válida. Por favor, ingresa C para Celsius, F para Fahrenheit o salir para terminar.");
        continue;
    }

    let temperatura = Number(prompt("Ingresa la temperatura:"));   
    
    if (isNaN(temperatura)){
        alert("Temperatura invalidad. Ingresa un numero");
        continue;
    }

    let resultado;

    if (unidad === "C") {
        resultado = celsiusAFahrenheit(temperatura);
        alert(`${temperatura}°C es igual a ${resultado.toFixed(2)}°F`);
    
    }else {
        resultado = fahrenheitACelsius(temperatura);
        alert(`${temperatura}°F es igual a ${resultado.toFixed(2)}°C`);
    }
};
