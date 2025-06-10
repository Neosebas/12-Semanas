// Calculadora

let numero1 = number(prompt('Elige el primer número:'));
let numero2 = number(prompt('Elige el segundo número:'));
let operacion = prompt('Elige la operación: +, -, *, /');

let resultado;

if (operacion === '+') {
    resultado = numero1 + numero2;
} else if (operacion === '-') {
    resultado = numero1 -numero2;
} else if (operacion === '*') {
    resultado= numero1 * numero2;
} else if (operacion === '/') {
    resultado = numero2 != 0 ? numero1 / numero2 : 'Error: no se puede dividir por cero';
} else {
    resultado = 'Operación no válida';
}

console.log(`El Resultado de ${numero1} ${operacion} ${numero2} es de : ${resultado}`);