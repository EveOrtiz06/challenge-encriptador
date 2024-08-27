// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.



let textArea = document.querySelector('.texto__ingresado');
let mensaje = document.querySelector('.mensaje');





// funciones
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
    cambiarDiv();
}


function cambiarDiv() {
    var divOcultar = document.getElementsByClassName('container2__contenido');
    var divMostrar = document.getElementsByClassName('container2__contenido__encriptado');

    if (divOcultar.length > 0) {  // Verifica si hay al menos un elemento para ocultar
        divOcultar[0].style.display = 'none';
    }

    if (divMostrar.length > 0) {  // Verifica si hay al menos un elemento para mostrar
        divMostrar[0].style.display = 'block';  // Cambia el estilo para mostrar el div
    }
}



// FUNCIÓN ENCRIPTAR

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

// BOTON DESENCRIPTAR

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    cambiarDiv();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// FUNCION BTN COPIAR

function btnCopiar() {
    // Selecciona el textarea con la clase .mensaje
    const textareaMensaje = document.querySelector('.mensaje');

    // Selecciona el contenido del textarea
    textareaMensaje.select();
    textareaMensaje.setSelectionRange(0, 99999); // Para móviles

    // Copia el texto seleccionado al portapapeles
    navigator.clipboard.writeText(textareaMensaje.value).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar al portapapeles: ", err);
    });

    
    // Restablece la visibilidad de los divs directamente
    document.querySelector('.container2__contenido').style.display = 'block';
    document.querySelector('.container2__contenido__encriptado').style.display = 'none';


}