
let botonCopiar = document.getElementById("btn-copiar");
let botonBorrar = document.getElementById("btn-borrar");

//Copiar
function copiarPortapapeles(texto) {

    let mensajeCopiado = document.getElementById("alerta-copiado");

    botonCopiar.addEventListener("click", function () {
        navigator.clipboard.writeText(texto);

        mensajeCopiado.style.display = "block";
        setTimeout(function () {
            mensajeCopiado.style.display = "none";
        }, 1600);

    });

}

//Borrar
function borrarMensajes() {

    botonBorrar.addEventListener("click", function () {

        while (divMensajes.firstChild) {
            divMensajes.removeChild(divMensajes.firstChild);
        }

        cajaSinTexto.style.display = "flex";
        cajaTexto.style.display = "none";

    });

}