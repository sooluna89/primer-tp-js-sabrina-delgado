function calcularPromedio(totalNotas, cantidadNotas) {
    let promedio = totalNotas / cantidadNotas;
    return promedio;
}

let cantidadNotas = parseInt(prompt("¿Cuantas notas quiere ingresar? "));

let totalNotas = 0;

for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseInt(prompt("Ingrese la nota:"));


    while (nota < 0 || nota > 10) {
        alert("Nota no válida, ingrese otra vez:");
        nota = parseInt(prompt("Ingrese la nota:"));
    }

    totalNotas = totalNotas + nota;
}

let promedio = calcularPromedio(totalNotas, cantidadNotas);

console.log("El promedio de notas es: " + promedio);

if (promedio > 7) {
    alert("Aprobaste el año!");
}
