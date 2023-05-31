const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");
const btnLimpiar = document.querySelector(".btn-limpiar");

botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener('click', copiarTexto);
btnLimpiar.addEventListener('click', limpiarTexto);

function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    const cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    const munieco = document.querySelector("#munieco");
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}


function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "a";
            i += 1;
        } else if (texto[i] === "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

function copiarTexto() {
    const contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado: ", contenido);
}

function limpiarTexto() {
    const cajatexto = document.querySelector(".cajatexto");
    cajatexto.value = ""; // Limpiar el contenido de la caja de texto
    resultado.textContent = ""; // Limpiar el resultado en el elemento de texto
}
