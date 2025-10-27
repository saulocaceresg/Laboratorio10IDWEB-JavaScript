// Crea un menú con opciones:
// - Calcular área del círculo
// - Calcular área del rectángulo
// - Salir
// El programa debe repetir hasta que el usuario elija salir.

document.write(`<h3>Ejercicio 8 - Menú de opciones</h3>`);

let confirmar; // Variable confirmar para que no haya errores en la consola
// Ciclo do-while para repetir el programa
do {
    // Menú principal
    let opcion = parseInt(prompt("===== MENÚ PRINCIPAL =====\nElija una opción:\n(1) Calcular área del círculo\n(2) Calcular área del rectángulo\n(3) Salir"));
    
    // Estructura switch para evaluar la opción elegida
    switch (opcion) {
        case 1: // Área del círculo
            let radio;
            do { // Ciclo do-while para verificar la validez del radio
                radio = parseFloat(prompt("---- ÁREA DEL CÍRCULO ----\nIngrese el radio del circulo:"));
                if (radio <= 0) {
                    alert("DATO NO VÁLIDO: Radio menor o igual a cero. INGRESE DE NUEVO.")
                }
            } while (radio <= 0);

            let areaC = Math.PI * (radio ** 2);

            // Salida de datos del área circular
            console.log("Radio ingresado: " + radio);
            console.log("Área del círculo: " + areaC);
            document.write(`<p><b>Radio ingresado:</b> ${radio}<br><b>Área del círculo:</b> ${areaC} </p>`);
            break;
        case 2: // Área del rectángulo
            let base, altura;
            do { // Ciclos do-while para verificar la validez de la base y altura
                base = parseFloat(prompt("Ingrese la base del rectángulo:"));
                if (base <= 0) {
                    alert("DATO NO VÁLIDO: Lado menor o igual a 0. INGRESE DE NUEVO");
                }
            } while (base <= 0);

            do {
                altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                if (altura <= 0) {
                    alert("DATO NO VÁLIDO: Lado menor o igual a 0. INGRESE DE NUEVO");
                }
            } while (altura <= 0);

            let areaR = base * altura;

            // Salida de datos del área rectangular
            console.log("Base: " + base + "\nAltura: " + altura);
            console.log("Área del rectángulo: " + areaR);
            document.write(`<p><b>Base:</b> ${base}<br><b>Altura:</b> ${altura}<br><b>Área del rectángulo:</b> ${areaR}</p>`);
            break;
        case 3: // Para salir del programa
            alert("SALIENDO DEL PROGRAMA...");
            break;
        default: // En caso de que no elija las otras opciones
            alert("OPCIÓN NO VÁLIDA.")
            break;
    }

    // Para elegir si quiere otra operación (iterar)
    confirmar = prompt("¿Desea realizar otra operación? S/N");
    do { // Ciclo do-while para verificar la opción de confirmación
        confirmar = confirmar.toUpperCase();
        if (confirmar != "S" && confirmar != "N") {
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.");
            confirmar = prompt("¿Desea realizar otra operación? S/N");
        }
    } while (confirmar != "S" && confirmar != "N");

} while (confirmar != "N");