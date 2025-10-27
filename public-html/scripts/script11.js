// Un supermercado desea una app que simule un carrito de compras muy simple 
// El usuario puede agregar productos uno por uno, indicando sólo su precio, hasta que decida no continuar 
// Al terminar, mostrar: 
//     El total parcial a pagar 
//     Si el total supera 100, mostrar el mensaje "Tiene un descuento del 10%" y aplicar el descuento 
//     Si el total está entre 50 y 100, mostrar "Gana un cupón de 5%" y aplicar el descuento 
//     Si el total es menor que 50, mostrar "No aplica descuento" 
//     Finalmente, mostrar el total final a pagar

document.write(`<h3>Ejercicio 11 - Supermercado</h3>`);

let precio, total = 0, confirmar, i = 0;
do {

    precio = parseFloat(prompt("Ingrese precio del " + (i + 1) + "° producto:"));
    total += precio;

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

// Total a pagar
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