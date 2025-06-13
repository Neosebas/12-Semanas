let frase = prompt("Ingresa una frase para contar las vocales:");

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < frase.length; i++) {
    letra = frase[i];

    if (letra ==="a") contadorA++;
    else if (letra ==="e") contadorE++;
    else if (letra ==="i") contadorI++;
    else if (letra ==="o") contadorO++;
    else if (letra ==="u") contadorU++;
};

alert(`La frase tiene ${contadorA} letras "a", ${contadorE} letras "e", ${contadorI} letras "i", ${contadorO} letras "o" y ${contadorU} letras "u".`);

// La vocal que mas se repite


let maximo = Math.max(contadorA, contadorE, contadorI, contadorO, contadorU);

let vocalMasUsada = "";

if (maximo === contadorA) vocalMasUsada = "a";
else if (maximo === contadorE) vocalMasUsada = "e";
else if (maximo === contadorI) vocalMasUsada = "i";
else if (maximo === contadorO) vocalMasUsada = "o";
else if (maximo === contadorU) vocalMasUsada = "u";

alert(`La vocal que mas se uso es la "${vocalMasUsada}" con un total de ${maximo} de veces.`);