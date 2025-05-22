// tablasSeleccionadas.js
// Actividad 3: Tablas de multiplicar de pares o impares usando if + for

// Solicitamos al usuario si desea ver tablas pares o impares
var tipo = prompt("¿Quieres ver las tablas de multiplicar de números 'pares' o 'impares' entre 1 y 10?").toLowerCase();

// Verificamos la opción ingresada
if (tipo === "pares" || tipo === "impares") {
  console.log(`Mostrando tablas de multiplicar de números ${tipo}:`);

  for (let i = 1; i <= 10; i++) {
    // Condición para filtrar pares o impares
    if ((tipo === "pares" && i % 2 === 0) || (tipo === "impares" && i % 2 !== 0)) {
      console.log(`\nTabla del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
  }

} else {
  console.log("Opción no válida. Escribe 'pares' o 'impares'.");
}
