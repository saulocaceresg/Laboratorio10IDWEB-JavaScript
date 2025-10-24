// Solicita edad y muestra: 
// “Niño” si < 12 
// “Adolescente” si entre 12 y 17 
// “Adulto” si entre 18 y 59 
// “Adulto mayor” si ≥ 60 

document.writeln(`<h3>Ejercicio 2 - Edad</h3>`)

let edad, etapa; // Declaración de vaiables: "edad2 es para la edad, "etapa" es una cadena de texto para imprimir la etapa de desarrollo de la persona según la edad

// Se solicita la edad
edad = parseFloat(prompt("Ingrese una edad:"));

// switch para evaluar la edad usando condiciones booleanas
switch (true) {
    case (edad < 12 && edad > 0):
        etapa = "Niño";
        break;
    case (edad >= 12 && edad < 17):
        etapa = "Adolescente";
        break;
    case (edad >= 18 && edad < 56):
        etapa = "Adulto";
        break;
    case (edad >= 60):
        etapa = "Adulto mayor";
        break;
    default:
        console.log("Edad no válida");
        document.write(`<p>Edad no válida</p>`);
        etapa = "----"
        break;
}

// Imprimiendo los datos y el resultado en consola y documento
console.log("Edad ingresada: " + edad + "\nLa persona es " + etapa);
document.write(`<p><b>Edad ingresada: </b> ${edad}<br>La persona es <b>${etapa}</b></p>`);