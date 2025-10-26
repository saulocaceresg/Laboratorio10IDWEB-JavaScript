// Cajero automático. El usuario ingresa un monto a retirar. El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se entregan. (Debe ser la menor cantidad de billetes). Programa iterativo.

document.write(`<h3>Ejercicio 5 - Cajero</h3>`);

// Declaración de variables
let monto, b100, b50, b20, b10, confirmar, resto;

do { // Cilo do-while para que el programa sea ierativo
    do { // Ciclo do-while para verificar el monto
        monto = parseInt(prompt("Ingrese un monto a retirar"))
        if (monto <= 0) {
            alert("MONTO NO VÁLIDO. INGRESE DE NUEVO.")
        }
    } while (monto <= 0);
    
    // Obtención de la cantidad de cada billete (cociente)
    b100 = parseInt(monto / 100);
    b50 = parseInt((monto - (b100 * 100)) / 50);
    b20 = parseInt((monto - (b100 * 100) - (b50 * 50)) / 20);
    b10 = parseInt((monto - (b100 * 100) - (b50 * 50) - (b20 * 20)) / 10);
    // Resto del dinero (solo retira billetes)
    resto = monto - ((b100 * 100) + (b50 * 50) + (b20 * 20) + (b10 * 10));

    // Salida de datos
    console.log("MONTO RETIRADO!!!")
    console.log("Monto ingresado: " + monto);
    console.log("Total billetes a retirar:\n" + "De cien: " + b100 + "\nDe cincuenta: " + b50 + "\nDe viente: " + b20 + "\nDe diez: " + b10 + "\nDinero restante: S/. " + resto);
    document.write(`<p><b>MONTO RETIRADO!!!</b></p>`);
    document.write(`<p><b>Monto ingresado:</b> ${monto} <br><b>Total billetes a retirar:</b><br>Billetes de cien: ${b100}<br>Billetes de cincuenta: ${b50}<br>Billetes de veinte: ${b20}<br>Billetes de diez: ${b10}<br>Resto: S/. ${resto} </p>`);
    
    // Continuar o no continuar
    confirmar = prompt("¿Desea realizar otro retiro? (S) Sí | (N) No");
    
    do { // Ciclo do-while para validar la opción de confirmación
        if (confirmar.toUpperCase() != "S" && confirmar.toUpperCase() != "N") {
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.");
            confirmar = prompt("¿Desea realizar otro retiro? (S) Sí | (N) No");
        }
    } while (confirmar.toUpperCase() != "S" && confirmar.toUpperCase() != "N");

} while (confirmar.toUpperCase() != "N");