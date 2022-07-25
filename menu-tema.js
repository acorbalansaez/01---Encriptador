//Menu colores
let temaAzulBoton = document.getElementById("tema-azul");
let temaCelesteBoton = document.getElementById("tema-celeste");
let temaRosaBoton = document.getElementById("tema-rosa");


class Tema {

    constructor(botones, claseActual, claseAEliminar1, claseAEliminar2, imgTitulo, imgTituloMB, imgAnimal) {
        
        this.botones = botones;
        this.claseActual = claseActual;
        this.claseAEliminar1 = claseAEliminar1;
        this.claseAEliminar2 = claseAEliminar2;
        this.imgTitulo = imgTitulo;
        this.imgTituloMB = imgTituloMB;
        this.imgAnimal = imgAnimal;        
    }

    cambiarTema() {

        let titulo = document.getElementById("titulo");
        let tituloMobile = document.getElementById("titulo-mobile");
        let img = document.getElementById("img-resultadoSinTexto");
        let iconos = document.getElementsByClassName("iconos");
        let mensajeCopiado = document.getElementById("alerta-copiado");
        let body = document.body;
        
        let claseActual = this.claseActual;
        let claseAEliminar1 = this.claseAEliminar1;
        let claseAEliminar2 = this.claseAEliminar2;
        let imgTitulo = this.imgTitulo;
        let imgTituloMB = this.imgTituloMB;
        let imgAnimal = this.imgAnimal;

        //Cambio de posición 
        let botones = this.botones;
        let botonActual = botones[0];
        let botonDos = botones[1];
        let botonTres = botones[2];
        let clasePosiciones = ["pos1", "pos2", "pos3"];


        botonActual.addEventListener('click', function () {

            titulo.src = "imgs/" + imgTitulo;
            tituloMobile.src = "imgs/" + imgTituloMB;
            img.src = "imgs/" + imgAnimal;

            for (let i = 0; i < iconos.length; i++) {
                iconos[i].classList.add(claseActual);
                iconos[i].classList.remove(claseAEliminar1);
                iconos[i].classList.remove(claseAEliminar2);
            }

            body.classList.add(claseActual);
            body.classList.remove(claseAEliminar1);
            body.classList.remove(claseAEliminar2);

            botonCifrar.classList.add(claseActual);
            botonCifrar.classList.remove(claseAEliminar1);
            botonCifrar.classList.remove(claseAEliminar2);

            botonDescifrar.classList.add(claseActual);
            botonDescifrar.classList.remove(claseAEliminar1);
            botonDescifrar.classList.remove(claseAEliminar2);

            mensajeCopiado.classList.add(claseActual);
            mensajeCopiado.classList.remove(claseAEliminar1);
            mensajeCopiado.classList.remove(claseAEliminar2);

            //Cambio de posición
            botonActual.classList.replace(botonActual.classList.item(1), clasePosiciones[0]);
            botonDos.classList.replace(botonDos.classList.item(1), clasePosiciones[1]);
            botonTres.classList.replace(botonTres.classList.item(1), clasePosiciones[2]);

        })

    }
}

let azul = new Tema([temaAzulBoton, temaCelesteBoton, temaRosaBoton] , "azul", "celeste", "rosa", "titulo.png", "titulo-mobile.png", "fish.png");
let celeste = new Tema([temaCelesteBoton, temaAzulBoton, temaRosaBoton], "celeste", "azul", "rosa", "titulo2.png", "titulo-mobile2.png", "dog.png");
let rosa = new Tema([temaRosaBoton, temaAzulBoton, temaCelesteBoton], "rosa", "azul", "celeste", "titulo3.png", "titulo-mobile3.png", "cat.png");

azul.cambiarTema();
celeste.cambiarTema();
rosa.cambiarTema();
