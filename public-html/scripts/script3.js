// Contador de números pares e impares. Pide 10 números y muestra cuántos fueron pares y cuántos impares 

// Inicialización de variables y contadores
let numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10, contPares = 0, contImpares = 0; 

// Entrada de datos de cada variable (los números)
numero1 = parseInt(prompt("Ingrese el primer número:"));
numero2 = parseInt(prompt("Ingrese el segundo número:"));
numero3 = parseInt(prompt("Ingrese el tercer número:"));
numero4 = parseInt(prompt("Ingrese el cuarto número:"));
numero5 = parseInt(prompt("Ingrese el quinto número:"));
numero6 = parseInt(prompt("Ingrese el sexto número:"));
numero7 = parseInt(prompt("Ingrese el séptimo número:"));
numero8 = parseInt(prompt("Ingrese el octavo número:"));
numero9 = parseInt(prompt("Ingrese el noveno número:"));
numero10 = parseInt(prompt("Ingrese el décimo número:"));

// Condicional (ternario)
(numero1 % 2) === 0 ? contPares++ : contImpares ++;
(numero2 % 2) === 0 ? contPares++ : contImpares ++;
(numero3 % 2) === 0 ? contPares++ : contImpares ++;
(numero4 % 2) === 0 ? contPares++ : contImpares ++;
(numero5 % 2) === 0 ? contPares++ : contImpares ++;
(numero6 % 2) === 0 ? contPares++ : contImpares ++;
(numero7 % 2) === 0 ? contPares++ : contImpares ++;
(numero8 % 2) === 0 ? contPares++ : contImpares ++;
(numero9 % 2) === 0 ? contPares++ : contImpares ++; 
(numero10 % 2) === 0 ? contPares++ : contImpares ++;


// Salida de datos (console y document)
console.log("Números ingresados: " + numero1 + "; " + numero2 + "; " + numero3 + "; " + numero4 + "; " + numero5 + "; " + numero6 + "; " + numero7 + "; " + numero8 + "; " + numero9 + "; " + numero10);
console.log("Cantidad de pares: " + contPares + "\nCantidad de impares: " + contImpares);
document.write(`<p>Números ingresados: ${numero1} ;  ${numero2} ;  ${numero3} ;  ${numero4} ;  ${numero5} ;  ${numero6} ;  ${numero7} ;  ${numero8} ;  ${numero9} ;  ${numero10}</p>`);
document.write(`<p>Cantidad de pares: ${contPares} <br>Cantidad de impares: ${contImpares}</p>`);
