// Verificación de número Armstrong. Programa iterativo
// Un número de n dígitos es Armstrong si la suma de sus dígitos elevados a n da el mismo número
// Ejemplo: 153 → 1³ + 5³ + 3³ = 153.

document.write(`<h3>Ejercicio 9 - Número Armstrong</h3>`);
// Declaración de variables
let numero, resultado = 0;
numero = prompt("Ingrese un número:");

document.write(`<b>Número ingresado: </b> ${numero}<br>`);
console.log("Número ingresado: " + numero);

// Ciclo for para analizar cada dígito, usando charAt y length
for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero.charAt(i)); // Se recoge el dígito y se convierte a entero
    // console.log(digito);
    let producto = digito ** parseInt(numero.length); // Se potencia el dígito a la cantidad de dígitos del número
    // Se imprimen cada dígito y sus operaciones
    console.log((i + 1) + "° dígito: " + digito);
    document.write(`${digito} ^ ${numero.length} = ${producto} <br>`);

    resultado += producto;
}

// Salida de datos
console.log("Resultado final: " + resultado);
document.write(`<p><b>Resultado final:</b> ${resultado} </p>`)

// Validación de resultados
if (resultado === parseInt(numero)) {
    console.log("El número ES Armstrong");
    document.write(`<b>El número ES Armstrong</b>`)
} else {
    console.log("El número NO ES Armstrong");
    document.write(`<b>El número NO ES Armstrong</b>`)
}