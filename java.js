function Encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function Desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoDesencriptado = frase.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    
    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;
}

function copiar() {
    var contenido = document.getElementById("textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.innerHTML = "Copiado";
}