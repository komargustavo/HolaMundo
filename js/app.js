// Definir una variable del tipo cadena cuyo contenido sea “Hola Mundo”.
// Cuando el usuario presiona un botón “Mostrar mensaje”, hacer que se 
// muestre el contenido de la variable por consola.

// Variables
const mensaje ='"Hola Mundo"';
const m_pantalla = document.querySelector("#mensaje");

// Funciones
function mostrar() {
    console.log(mensaje);
    m_pantalla.innerHTML = (mensaje);
}