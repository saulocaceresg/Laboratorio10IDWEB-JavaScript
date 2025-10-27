// Suma todos los números desde 1 hasta N, pero omite los múltiplos de 5. Programa iterativo

document.write(`<h3>Ejercicio 7 - Suma de números</h3>`);

let confirmar;
do {
    // Declaración de variable "numero"
    let numero;
    do { // Ciclo do-while para verificar la validez del número
        numero = parseInt(prompt("Ingresa un número entero mayor a 1:"));
        if (numero <= 1) {
            alert("DATO NO VÁLIDO: Menor o igual a 1. INGRESE DE NUEVO");
        }
    } while (numero <= 1);

    let suma = 0;
    for (let i = 1; i <= numero; i++) { // Ciclo for para sumar números
        if (i % 5 === 0) {
            continue;
        } else {
            suma += i;
        }
    }

    console.log("Número ingresado: " + numero + "\nSuma desde 1 hasta el número (múltiplos de 5 ignorados): " + suma);
    document.write(`<p><b>Número ingresado:</b> ${numero}<br><b>Suma desde 1 hasta el número (múltiplos de 5 ignorados):</b> ${suma} </p>`);

    // Para elegir si quiere otra operación (iterar)
    do { // Ciclo do-while para verificar la opción de confirmación
        confirmar = prompt("¿Desea repetir el proceso? S/N");
        confirmar = confirmar.toUpperCase();
        if (confirmar != "S" && confirmar != "N") {
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.");
        }
    } while (confirmar != "S" && confirmar != "N");
} while (confirmar != "N");