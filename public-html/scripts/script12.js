// Mismo ejercicio anterior, pero con un límite en su presupuesto. La app no deberá permitir que se pase del presupuesto y no deberá considerar el último producto

document.write(`<h3>Ejercicio 11 - Supermercado con límite de presupuesto</h3>`);

let precio, total = 0, confirmar, i = 0, presupuesto;
presupuesto = parseFloat(prompt("Ingrese su presupuesto:"));
do {

    precio = parseFloat(prompt("Ingrese precio del " + (i + 1) + "° producto:"));
    total += precio;

    // Verifica si excede o no al presupuesto. Si excede corta el ingreso de productos y resta el último precio
    if (total > presupuesto) {
        alert("EL TOTAL EXCEDE AL PRESUPUESTO!!!");
        total -= precio;
        break;
    }

    // Para elegir si quiere otra operación (iterar)
    do { // Ciclo do-while para verificar la opción de confirmación
        confirmar = prompt("¿Desea agregar otro producto? S/N");
        confirmar = confirmar.toUpperCase();
        if (confirmar != "S" && confirmar != "N") {
            alert("OPCIÓN NO VÁLIDA. INGRESE DE NUEVO.");
        }
    } while (confirmar != "S" && confirmar != "N");

    console.log((i + 1) + "° producto: S/. " + precio);
    document.write(`${i + 1}° producto: S/. ${precio}<br>`);
    i++;
} while (confirmar != "N");

// Presupuesto
console.log("Presupuesto: " + presupuesto);
document.write(`<p><b>Presupuesto:</b> ${presupuesto}</p>`);

// Total a pagar
console.log("Total a pagar: " + total);
document.write(`<p><b>Total a pagar:</b> S/. ${total} </p>`);

// Aplicación de descuentos
let descuento;
switch (true) {
    case total > 100:
        alert(`Tiene un descuento del 10%`);
        descuento = 90 / 100;
        total = total * descuento;
        document.write(`<p><b>Total (descuento aplicado):</b> S/. ${total} </p>`);
        console.log(`Total (descuento aplicado): S/. ` + total);
        break;
    case total >= 50 && total <= 100:
        alert(`Gana un cupón de 5%`);
        descuento = 95 / 100;
        total = total * descuento;
        document.write(`<p><b>Total (descuento aplicado):</b> S/. ${total} </p>`);
        console.log(`Total (descuento aplicado): S/. ` + total);
        break;
    case total <= 50:
        alert("No aplica descuento");
        document.write(`<p><b>Total (descuento aplicado):</b> S/. ${total} </p>`);
        console.log(`Total (descuento aplicado): S/. ` + total);
        break;
    default:
        alert("DATOS NO VÁLIDOS")
        break;
}