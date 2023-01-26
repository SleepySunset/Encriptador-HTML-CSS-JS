function encriptar(){
    var textoEntrada = document.getElementById("textoIngreso").value.toLowerCase();
    var textoEncriptado = textoEntrada.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoSalida").innerHTML = textoEncriptado;
    
}

function btnEncriptar(){
    const textoEncriptado = encriptar();
    textoIngreso.value = "";
    munheco.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    instruccion.style.visibility = "hidden";
    sinmensaje.style.visibility = "hidden";
    
}


function desencriptar(){
    var textoEntrada = document.getElementById("textoIngreso").value.toLowerCase();
    var textoDesencriptado = textoEntrada.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById("textoSalida").innerHTML = textoDesencriptado; 
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar();
    textoIngreso.value = "";
    munheco.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    instruccion.style.visibility = "hidden";
    sinmensaje.style.visibility = "hidden";
}


function copiar(){
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand("copy");
}

var btn3 = document.querySelector("#botonCopiar");
btn3.onclick = copiar;