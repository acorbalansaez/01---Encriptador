//Ingreso de datos
let input = document.getElementById("input");
let botonCifrar = document.getElementById("btn-cifrar");
let botonDescifrar = document.getElementById("btn-descifrar");

//Salida de datos
let cajaSinTexto = document.getElementById("resultadoSinTexto");
let cajaTexto = document.getElementById("resultadoTexto");
let divMensajes = document.getElementById("mensajes");


//Que enter sea igual a click en botonCifrar:
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botonCifrar.click();
    }
});

//Mostrar mensaje
function mostrarMensaje(mensajeIngresado) {

    //Agregar mensaje a un 'p'
    let mensaje = document.createElement("p");
    let node = document.createTextNode(mensajeIngresado);
    mensaje.appendChild(node);
    //Agregar 'p' al DOM
    divMensajes.appendChild(mensaje);

    //Convertir un HTMLCollection a Array:
    let cantidadTextos = Array.from(divMensajes.children);

    //Crear arreglo con los mensajes
    let mensajes = [];
    for (let i = 0; i < cantidadTextos.length; i++) {
        let hijo = cantidadTextos[i];
        let hijoContenido = hijo.textContent;
        mensajes.push(hijoContenido);
    }

    let texto = mensajes.toString();

    copiarPortapapeles(texto);
    borrarMensajes();

}

//Validar texto ingresado
function validarMensajeIngresado(mensajeIngresado) {

    let mensajeValido;
    let contieneMayus = /[A-Z\u00C0-\u017FC]/;
    let letras = /[a-z]/;


    if (letras.test(mensajeIngresado) == false || contieneMayus.test(mensajeIngresado) == true) {

        mensajeValido = false;
        if (contieneMayus.test(mensajeIngresado) == true) {
            mostrarAlerta("No ingreses mayúsculas, tildes o caracteres especiales");
        } else {
            mostrarAlerta("Ingresá un mensaje");
        }

    } else {
        mensajeValido = true;
    }

    return mensajeValido;
}

//Cifrar y descifrar
function descifrarMensaje(mensajeIngresado) {

    let mensajeDescifrado = '';

    for (let i = 0; i < mensajeIngresado.length; i++) {

        switch (mensajeIngresado[i]) {

            case 'e': if (mensajeIngresado[i + 4] === 'r') {
                mensajeDescifrado += 'e';
                i += 4;
            } else { mensajeDescifrado += mensajeIngresado[i]; }
                break;

            case 'i': if (mensajeIngresado[i + 3] === 's') {
                mensajeDescifrado += 'i';
                i += 3;
            } else { mensajeDescifrado += mensajeIngresado[i]; }
                break;

            case 'a': if (mensajeIngresado[i + 1] === 'i') {
                mensajeDescifrado += 'a';
                i += 1;
            } else { mensajeDescifrado += mensajeIngresado[i]; }
                break;

            case 'o': if (mensajeIngresado[i + 3] === 'r') {
                mensajeDescifrado += 'o';
                i += 3;
            } else { mensajeDescifrado += mensajeIngresado[i]; }
                break;

            case 'u': if (mensajeIngresado[i + 3] === 't') {
                mensajeDescifrado += 'u';
                i += 3;
            } else { mensajeDescifrado += mensajeIngresado[i]; }
                break;

            default: mensajeDescifrado += mensajeIngresado[i];

        }
    }
    return mensajeDescifrado;
}
function cambiarLetras(letra) {
    switch (letra) {
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'a': return 'ai';
        case 'o': return 'ober';
        case 'u': return 'ufat';
        default: return letra;
    }
}
function cifrarMensaje(mensajeIngresado) {

    let mensajeCifrado = '';

    for (const letra of mensajeIngresado) {
        mensajeCifrado += cambiarLetras(letra);
    }
    return mensajeCifrado;

}

//Función principal
function clickBoton(boton, funcion) {

    boton.addEventListener("click", function () {

        let mensajeIngresado = input.value;
        let mensajeValido = validarMensajeIngresado(mensajeIngresado);

        if (mensajeValido) {

            cajaSinTexto.style.display = "none";
            cajaTexto.style.display = "flex";

            let mensajeCifrado = funcion(mensajeIngresado);
            mostrarMensaje(mensajeCifrado);
        }

        input.value = "";

    })

}

clickBoton(botonCifrar, cifrarMensaje);
clickBoton(botonDescifrar, descifrarMensaje);


