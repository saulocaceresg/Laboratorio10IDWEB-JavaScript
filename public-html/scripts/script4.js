// Tabla de multiplicar. El usuario ingresa un número y se muestra su tabla del 1 al 12. Programa iterativo

document.write(`<h3>Ejercicio 4 - Tabla de multiplicar</h3>`);

// Declaración de variable
let numero;
numero = parseInt(prompt("Ingrese un número entero:"));

document.write(`<p><b>Tabla de multiplicar</b></p><br>`);
console.log("Tabla de multiplicar");

// Ciclo for para calcular cada producto e imprimirlo
for (let i = 1; i <= 12; i++) {
    let producto = numero * i;
    console.log(numero + " * " + i + " = " + producto);
    document.write(`${numero} * ${i} = ${producto}<br>`);
}
// document.write(`<p></p>`);

