// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios al principio y al final

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Crear un nuevo elemento de lista (li)
    const li = document.createElement("li");
    li.textContent = nombre;

    // Agregar el nombre a la lista visible
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const amigos = Array.from(listaAmigos.children);

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Añade nombres primero.");
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio].textContent;

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}
