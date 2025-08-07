// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let resultado;
let nombre;


function agregarAmigo() {
nombre = document.getElementById("amigo").value;
   value = nombre.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return; 
    } else if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }
    else {
        amigos.push(nombre);
        document.getElementById("amigo").value = ""; 
        document.getElementById("listaAmigos").innerHTML = amigos.join("<li></li>");
        document.getElementById("listaAmigos").style.display = "block";
    }

}

function sortearAmigo() {
    resultado = amigos [Math.floor(Math.random()* amigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + resultado;
    document.getElementById("resultado").style.display = "block";
    document.getElementById("listaAmigos").style.display = "none";
    amigos = []; // Limpiar la lista de amigos después del sorteo
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista de amigos
}


