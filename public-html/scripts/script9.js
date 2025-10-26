// Menú con múltiples opciones. Crea un menú tipo consola con las siguientes opciones
//      Calcular estadísticas de N notas
//          Promedio
//          Valor máximo
//          Valor mínimo
//          Cantidad de pares e impares
//          Cuántos están por encima del promedio
//      Contar números pares e impares en un rango
//      Generar una tabla de multiplicar
//      Salir
// Debe repetirse hasta que el usuario elija la opción salir

document.write(`<h3>Ejercicio 9 - Menú con múltiples opciones</h3>`);

let opcion;

do {
    // Menú principal
    opcion = prompt("================ MENÚ PRINCIPAL ================\nElija una opción:\n(a) Calcular estadísticas de N notas\n(b) Contar números pares e impares en un rango\n(c) Generar una tabla de multiplicar\n(d) Salir");

    switch (opcion) {
        case "a":
            document.write(`<h4>Calcular estadísticas de N notas</h4>`);
            console.log(`Calcular estadísticas de N notas`);

            let nNotas, promedio, maximo, minimo, cantPar = 0, cantImpar = 0, masPromedio = 0;
            do { // Ciclo do-while para verificar el número
                nNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
                if (nNotas <= 0) {
                    alert("DATO NO VÁLIDO: Cantidad menor o igual a cero. INGRESE DE NUEVO.")
                }
            } while (nNotas <= 0);

            // ------------ PROMEDIO -------------
            let suma = 0, cadenaNotas = "";
            for (let i = 0; i < nNotas; i++) {
                let nota;
                do { // Do-while para verificar la validez de la nota
                    nota = prompt("Ingrese " + (i + 1) + "° nota:");
                    if (nota > 20 || nota < 0) {
                        alert("DATO NO VÁLIDO: Nota fuera de rango. INGRESE DE NUEVO.")
                    }
                } while (nota > 20 || nota < 0);

                if (nota.length === 1 && nota.charAt(0) != "0") {
                    nota = "0" + nota;
                }
                if (i === nNotas - 1) {
                    cadenaNotas += nota; // Para almacenar las notas como un arreglo
                } else {
                    cadenaNotas += (nota + "-"); // Para almacenar las notas como un arreglo
                }
                suma += parseFloat(nota); // Para el promedio
            }
            console.log(cadenaNotas);
            document.write("Notas ingresadas: " + cadenaNotas);
            promedio = suma / nNotas;

            // ------------- MAXIMO Y MÍNIMO, PARES E IMPARES, POR ENCIMA DEL PROMEDIO ----------
            let siguiente, par, impar;
            // Se inicializan el máximo y el mínimo como el primer número, el par y el impar también
            maximo = parseFloat(cadenaNotas.substring(0, 2));
            minimo = parseFloat(cadenaNotas.substring(0, 2));
            par = parseFloat(cadenaNotas.substring(0, 2));
            impar = parseFloat(cadenaNotas.substring(0, 2));
            // Ciclo for para calcular máximo y mínimo al mismo tiempo
            for (let i = 0; i < cadenaNotas.length; i = i + 3) {
                let notaIndividual = parseFloat(cadenaNotas.substring(i, i + 2)); // Se recoge las notas de la cadena que funciona como arreglo
                if (i + 3 < cadenaNotas.length) {
                    siguiente = parseFloat(cadenaNotas.substring(i + 3, (i + 5)));
                }
                console.log("Notas individual: " + notaIndividual);
                // Se calcula el máximo y el mínimo al mismo tiempo
                if (siguiente > maximo) {
                    maximo = siguiente;
                } else if (siguiente < minimo) {
                    minimo = siguiente;
                }
                // Se verifica que el número sea par o impar
                if (notaIndividual % 2 === 0) {
                    cantPar++;
                } else {
                    cantImpar++;
                }
                // Se verifica que el número sea mayor al promedio
                if (notaIndividual > promedio) {
                    masPromedio++;
                }
            }
            // Salida de datos
            console.log("Número máximo: " + maximo + "\nNúmero mínimo: " + minimo);
            console.log("Cantidad de pares: " + cantPar + "\nCantidad de impares: " + cantImpar);
            console.log("Cantidad de números por encima del promedio: " + masPromedio);

            document.write(`<p><b>Estadísticas</b><br>Promedio: ${promedio}<br>Máximo: ${maximo}<br>Mínimo: ${minimo}<br>Cantidad de pares: ${cantPar}<br>Cantidad de impares: ${cantImpar}<br>Cantidad de notas por encima del promedio: ${masPromedio} </p>`);

            break;
        case "b":
            document.write(`<h4>Contar números pares e impares en un rango</h4>`);
            console.log(`Contar números pares e impares en un rango`);

            // Declaración de variables
            let numero1, numero2, contPar = 0, contImpar = 0;
            // Extremos del intervalo
            numero1 = parseInt(prompt("Ingrese el extremo inferior del intervalo:"));
            numero2 = parseInt(prompt("Ingrese el extremo superior del intervalo:"));

            document.write(`<p><b>Números:</b></p>`);
            let aux;
            if (numero1 > numero2) { // Condicional para intercambiar los extremos en caso sea el primero mayor que el segundo
                aux = numero1;
                numero1 = numero2;
                numero2 = aux;
            }
            console.log("Intervalo: [" + numero1 + ", " + numero2 + "]")
            document.write(`<p><b>Intervalo:</b> [${numero1}, ${numero2}]</p>`);
            // Ciclo for para contar los pares e impares
            for (let i = numero1 + 1; i < numero2; i++) {
                console.log(i);
                document.write(i + "<br>");
                if (i % 2 === 0) {
                    contPar++;
                } else {
                    contImpar++;
                }
            }

            // Salida de datos
            console.log("Cantidad de pares: " + contPar);
            console.log("Cantidad de impares: " + contImpar);
            document.write(`<p>Cantidad de pares: ${contPar}<br>Cantidad de impares: ${contImpar}</p>`);
            break;
        case "c":
            document.write(`<h4>Generar una tabla de multiplicar</h4>`);
            console.log(`Generar una tabla de multiplicar`);

            // Entrada de datos
            let numero;
            numero = parseFloat(prompt("Ingrese un número:"));

            console.log("Número ingresado: " + numero);
            document.write(`<p>Número ingresado: ${numero}</p>`);
            
            // Ciclo for para imprimir la tabla de multiplicar
            for (let i = 1; i <= 12; i++) {
                let producto = numero * i;
                console.log(numero + " * " + i + " = " + producto);
                document.write(`${numero} * ${i} = ${producto}<br>`);
            }
            break;
        case "d":
            alert("SALIENDO DEL PROGRAMA...");
            document.write(`<p><b>FIN DEL PROGRAMA...</b></p>`);
            break;
        default:
            // Mensaje en caso de opción no válida
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.")
            break;
    }

} while (opcion != "d");
