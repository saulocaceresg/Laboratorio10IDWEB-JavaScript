// Calcular promedio con validación. Pide 5 notas y calcula el promedio, asegurándote de que estén entre 0 y 20

document.writeln(`<h3>Ejercicio 1 - Promedio</h3>`)

let nota1, nota2, nota3, nota4, nota5, promedio;

// Ciclos do-while para validar el rango de las notas
do {
    nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    if (nota1 < 0 || nota1 > 20) {
        alert(`NOTA NO VÁLIDA. INGRESE DE NUEVO.`)
    }
} while (nota1 < 0 || nota1 > 20);

do {
    nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    if (nota2 < 0 || nota2 > 20) {
        alert(`NOTA NO VÁLIDA. INGRESE DE NUEVO.`)
    }
} while (nota2 < 0 || nota2 > 20);

do {
    nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    if (nota3 < 0 || nota3 > 20) {
        alert(`NOTA NO VÁLIDA. INGRESE DE NUEVO.`)
    }
} while (nota3 < 0 || nota3 > 20);

do {
    nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));
    if (nota4 < 0 || nota4 > 20) {
        alert(`NOTA NO VÁLIDA. INGRESE DE NUEVO.`)
    }
} while (nota4 < 0 || nota4 > 20);

do {
    nota5 = parseFloat(prompt("Ingrese la quinta nota:"));
    if (nota5 < 0 || nota5 > 20) {
        alert(`NOTA NO VÁLIDA. INGRESE DE NUEVO.`)
    }
} while (nota5 < 0 || nota5 > 20);

// Cálculo del promedio
promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// Impresión de las notas y promedio en la página y en la consola
console.log("Notas ingresadas: \n" + nota1 + "\n" + nota2 + "\n" + nota3 + "\n" + nota4 + "\n" + nota5);
console.log("Promedio final: " + promedio);
document.write(`<p><b>Notas ingresadas:</b><br>${nota1}<br>${nota2}<br>${nota3}<br>${nota4}<br>${nota5}<br><b>Promedio: </b>${promedio}</p>`);
