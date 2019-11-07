//VENTANA AYUDA

var btnAbrirPopup = document.getElementById("ayuda"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function() {
    overlay.classList.add("active");
})

btnCerrarPopup.addEventListener("click", function() {
    overlay.classList.remove("active");
})

//Desplazamiento

var desplazamiento = 0

function onClickDesplazamiento(event) {
    event.preventDefault()
    desplazamiento = parseInt(event.target.id)
}

//Cifrar

function cifrarUnaLetra(desplazamiento, cadena) {

    var asciiNumero =
        cadena.charCodeAt(0)
    var asciiNuevoNumero =
        (asciiNumero - 65 + desplazamiento) % 26 + 65
    return String.fromCharCode(asciiNuevoNumero)
}

function code(desplazamiento, cadena) {
    var arregloVacio = []
    for (var i = 0; i < cadena.length; i++) {
        arregloVacio.push(cifrarUnaLetra(desplazamiento, cadena[i].toUpperCase()))
        if (cadena.length === 32) {
            arregloVacio.push(32)
        }
    }
    //alert(arregloVacio.join(""))
    document.getElementById("cajaCifrada").value = arregloVacio.join("").toUpperCase()
}


function onClickcode(event) {
    event.preventDefault()
    code(desplazamiento, document.getElementById("cajaCifrar").value)
}

//Descifrar

function descifrarUnaLetra(desplazamiento, cadena) {
    ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
    var abecedario = {
        "A": 0,
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5,
        "G": 6,
        "H": 7,
        "I": 8,
        "J": 9,
        "K": 10,
        "L": 11,
        "M": 12,
        "N": 13,
        "O": 14,
        "P": 15,
        "Q": 16,
        "R": 17,
        "S": 18,
        "T": 19,
        "U": 20,
        "V": 21,
        "W": 22,
        "X": 23,
        "Y": 24,
        "Z": 25,
        " ": 26,
    }
    var valorLetra = abecedario[cadena.toUpperCase()]
    var nuevaLetra = (valorLetra - desplazamiento) % 27
    if (nuevaLetra < 0) {
        nuevaLetra = 27 + nuevaLetra
    }
    return ABC[nuevaLetra]
}

function decode(desplazamiento, cadena) {
    var arregloVacio = []
    for (var i = 0; i < cadena.length; i++) {
        arregloVacio.push(descifrarUnaLetra(desplazamiento, cadena[i].toUpperCase()))
    }
    //alert(arregloVacio.join(""))
    document.getElementById("cajaCifrar").value = arregloVacio.join("").toUpperCase()
}


function onClickdecode(event) {
    event.preventDefault()
    decode(desplazamiento, document.getElementById("cajaCifrada").value)
}