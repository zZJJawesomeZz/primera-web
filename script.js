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
