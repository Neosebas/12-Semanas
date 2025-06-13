let frase = prompt("Ingresa una frase");

let caracteres = frase.replace(/\s/g,"").length;

let palabras = frase.trim().split(/\s+/).length;

let letra = prompt("ingresa que letra quieres contar").toLowerCase();

let contador = 0;

for (let i =0; i < frase.length; i++) {
    if (frase [i].toLowerCase() === letra) {
        contador++;
    }
};

alert(`La frase tiene ${caracteres}, tambien tiene ${palabras} palabras y la letra ${letra} aparece ${contador} veces.`);

