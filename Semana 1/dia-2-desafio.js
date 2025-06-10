// Buscar el numero mas grande

let numeros = [12, 98, 45, 77, 66, 33, 40];
let mayor = numeros[0];

for (let i =1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log(`El numero mas grande es ${mayor}`);
