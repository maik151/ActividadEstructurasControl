// edadCategoria.js
// Actividad 1: Clasificación de edades usando if anidados

// Pedimos la edad al usuario
var edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Verificamos la categoría de edad
if (edad < 0) {
  console.log("Edad no válida");
} else if (edad <= 12) {
  console.log("Niño");
} else if (edad <= 17) {
  console.log("Adolescente");
} else if (edad <= 59) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
} 

// Todas las salidas se muestran en la consola del navegador