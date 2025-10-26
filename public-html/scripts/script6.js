// Números primos en rango. Pide un número y muestra todos los primos entre 1 y dicho número. Programa iterativo

document.write(`<h3>Ejercicio 6 - Números primos</h3>`);

// Ciclo do-while para que el programa sea iterativo
do {
    let numero;

    do { // do-while para verificar el número
        numero = parseInt(prompt("Ingrese un número entero:"));
        if (typeof numero !='number' || isNaN(numero) || numero <= 1) {
            alert("NÚMERO NO VÁLIDO. INGRESE DE NUEVO.")
        }
    } while (typeof numero !='number' || isNaN(numero) || numero <= 1);
    
    console.log("Número ingresado: " + numero);
    document.write(`<b>Número ingresado:</b> ${numero}<br>`);

    // Conteo y verificación de primos
    let contPrimos = 0;
    for (let i = 2; i <= numero; i++) {
        let esPrimo = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }    
        }
        if (esPrimo) {
            contPrimos++;
            console.log(contPrimos + "°: " + i);
            document.write(`${contPrimos}°: ${i}<br>`);
        }
    }

    let confirmar = prompt("¿Desea ingresar otro número? S/N");
    do { // Ciclo do-while para verificar la opción de confirmación
        confirmar = confirmar.toUpperCase();
        if (confirmar != "S" && confirmar != "N") {
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.")
        }
    } while (confirmar != "S" && confirmar != "N");

} while (confirmar != "N");