export function(element: HTMLInputElement, sendButton: HTMLInputElement) {
    if (element.value !)

}


function esCorreoElectronicoValido(email) {
    // Definir el patrón de expresión regular para validar un correo electrónico
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Comprobar si el correo electrónico cumple con el patrón
    return patronCorreo.test(email);
}

// Ejemplo de uso
const email = "ejemplo@dominio.com";
if (esCorreoElectronicoValido(email)) {
    console.log("El correo electrónico es válido.");
} else {
    console.log("El correo electrónico no es válido.");
}
document.getElementById('submit').onclick = function() {
    var value = document.getElementById('email').value;
    console.log(value)
    alert(value);
  }



  // Ejemplo de uso
const email = "ejemplo@dominio.com";
if (esCorreoElectronicoValido(email)) {
  console.log("El correo electrónico es válido.");
} else {
  console.log("El correo electrónico no es válido.");
}