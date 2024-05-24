document.getElementById("formulario").addEventListener("submit", function(event) {
    var usuario = document.getElementById("usuario").value;
    if (usuario == "") {
        alert("Por favor, completa el campo de email.");
        event.preventDefault(); // Evita que el formulario se envíe
    }
    var password = document.getElementById("password").value;
    if (password == "") {
        alert("Por favor, completa el campo de password.");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});
