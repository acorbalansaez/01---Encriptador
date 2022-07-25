
//Alerta
let alerta = document.getElementById("fondo-alerta");
let textoAlerta = document.getElementById("titulo-alerta");
let botonCerrarAlerta = document.getElementById("cerrar-alerta");

//Cerrar alerta
function cerrarAlerta() {
    botonCerrarAlerta.addEventListener("click", function () {
        alerta.style.display = "none";
    });
}

//Mostrar alerta
function mostrarAlerta(mensaje) {
    textoAlerta.innerHTML = mensaje;
    alerta.style.display = "flex";
    input.blur();
    cerrarAlerta();
}