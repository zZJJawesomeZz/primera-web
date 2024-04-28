document.getElementById("led-on").addEventListener("click", function() {
    fetch('/led/on')
        .then(response => console.log('LED encendido'))
        .catch(error => console.error('Error:', error));
});

document.getElementById("led-off").addEventListener("click", function() {
    fetch('/led/off')
        .then(response => console.log('LED apagado'))
        .catch(error => console.error('Error:', error));
});

document.getElementById("girarD").addEventListener("click", function() {
    enviarTextoAlServidor();
});

document.getElementById("girarI").addEventListener("click", function() {
    enviarTextoAlServidor();
});

function enviarTextoAlServidor() {
    const textoIngresado = document.getElementById("texto-ingreso").value;

    fetch('/texto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texto: textoIngresado })
    })
    .then(response => {
        if (response.ok) {
            console.log('Texto enviado correctamente');
        } else {
            console.error('Error al enviar texto:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));
}