// tablaMultiplicar.js
// Actividad 2: Tabla de multiplicar usando for

// Pedimos al usuario el número deseado
var numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar (1 al 12):"));

// Verificamos que sea un número válido
if (isNaN(numero)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  console.log("Tabla de multiplicar del " + numero + ":");
  // Bucle para mostrar la tabla del 1 al 12
  for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
