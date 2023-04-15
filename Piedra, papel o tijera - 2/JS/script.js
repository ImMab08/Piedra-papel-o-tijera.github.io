let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let selectionSeleccionarAtaque = document.getElementById("seleccionar-ataques");
    selectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciarJuego = document.getElementById("reiniciar");
    sectionReiniciarJuego.style.display = "none";

    let botonMascota = document.getElementById("boton-mascota");
    botonMascota.addEventListener("click", seleccionarMascotaJugador);

    let botonPiedra = document.getElementById("boton-piedra");
    botonPiedra.addEventListener("click", ataquePiedra);
    let botonPapel = document.getElementById("boton-papel");
    botonPapel.addEventListener("click", ataquePapel);
    let botonTijera = document.getElementById("boton-tijera");
    botonTijera.addEventListener("click", ataqueTijera);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
    let selectionSeleccionarTitulo = document.getElementById("titulo");
    selectionSeleccionarTitulo.style.display = "none";

    let sectionSeleccionarMascota = document.getElementById("seleccionar-cientifico");
    sectionSeleccionarMascota.style.display = "none";

    let selectionSeleccionarAtaque = document.getElementById("seleccionar-ataques");
    selectionSeleccionarAtaque.style.display = "flex";

    let inputTesla = document.getElementById("tesla");
    let inputEinstein = document.getElementById("einstein");
    let inputDarwin = document.getElementById("darwin");
    let inputHawking = document.getElementById("hawking");
    let inputNewton = document.getElementById("newton");
    let inputPythagoras= document.getElementById("pythagoras");

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let imgCientifico = document.getElementById("img-cientificos");

    if (inputTesla.checked) {
        spanMascotaJugador.innerHTML = "Nikolas Tesla";
        imgCientifico.innerHTML = "<img class='imgJugador-tesla' src='/Piedra, papel o tijera - 2/IMG/tesla.gif'>"
    }

    else if (inputEinstein.checked) {
        spanMascotaJugador.innerHTML = "Albert Einstein";
        imgCientifico.innerHTML = "<img class='imgJugador-albert' src='/Piedra, papel o tijera - 2/IMG/albert.gif'>"
    }

    else if (inputDarwin.checked) {
        spanMascotaJugador.innerHTML = "Charles Darwin";
        imgCientifico.innerHTML = "<img class='imgJugador-darwin' src='/Piedra, papel o tijera - 2/IMG/darwin.gif'>"
    }

    else if (inputHawking.checked) {
        spanMascotaJugador.innerHTML = "Stephen Hawking";
        imgCientifico.innerHTML = "<img class='imgJugador-hawking' src='/Piedra, papel o tijera - 2/IMG/hawking.gif'>"
    }

    else if (inputNewton.checked) {
        spanMascotaJugador.innerHTML = "Isaac Newton";
        imgCientifico.innerHTML = "<img class='imgJugador-newton' src='/Piedra, papel o tijera - 2/IMG/newton.gif'>"
    }

    else if (inputPythagoras.checked) {
        spanMascotaJugador.innerHTML = "Pythagoras";
        imgCientifico.innerHTML = "<img class='imgJugador-pythagoras' src='/Piedra, papel o tijera - 2/IMG/pytagoras.gif'>"
    }

    else {
        alert("Elige un cientifico.")
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let imgCientificoEnemigo = document.getElementById("img-cientificos-enemigo");

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Nikolas Tesla.";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-tesla' src='/Piedra, papel o tijera - 2/IMG/tesla-enemigo.gif'>"
    }
    
    else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Albert Einstein";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-albert' src='/Piedra, papel o tijera - 2/IMG/albert-enemigo.gif'>"
    }

    else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Charles Darwin";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-darwin' src='/Piedra, papel o tijera - 2/IMG/darwin-enemigo.gif'>"
    }

    else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Stephen Hawking";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-hawking' src='/Piedra, papel o tijera - 2/IMG/hawking-enemigo.gif'>"
    }

    else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Isaac Newton";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-newton' src='/Piedra, papel o tijera - 2/IMG/newton-enemigo.gif'>"
    }

    else {
        spanMascotaEnemigo.innerHTML = "Pythagoras";
        imgCientificoEnemigo.innerHTML = "<img class='imgEnemigo-pythagoras' src='/Piedra, papel o tijera - 2/IMG/pytagoras-enemigo.gif'>"
    }
}

function ataquePiedra() {
    ataqueJugador = "PIEDRA";
    ataqueAleatorioEnemigo();
}

function ataquePapel() {
    ataqueJugador = "PAPEL";
    ataqueAleatorioEnemigo();
}

function ataqueTijera() {
    ataqueJugador = "TIJERA";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "PIEDRA";
    }

    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "PAPEL";
    }

    else {
        ataqueEnemigo = "TIJERA";
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE");
    }

    else if ((ataqueJugador == "PAPEL" && ataqueEnemigo == "PIEDRA") || (ataqueJugador == "TIJERA" && ataqueEnemigo == "PAPEL") || (ataqueJugador == "PIEDRA" && ataqueEnemigo == "TIJERA")) {
        crearMensaje("Ganaste  está ronda");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }

    else {
        crearMensaje("Perdiste  está ronda");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas();
}

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("GAME OVER")
    }

    else if (vidasEnemigo == 0) {
        crearMensajeFinal("¡Has ganado!");
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado");
    let ataquesDelJugador = document.getElementById("ataques-del-jugador");
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado");

    sectionMensajes.innerHTML = resultadoFinal;

    let botonPiedra = document.getElementById("boton-piedra");
    botonPiedra.disabled = true;
    let botonPapel = document.getElementById("boton-papel");
    botonPapel.disabled = true;
    let botonTijera = document.getElementById("boton-tijera");
    botonTijera.disabled = true;

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
