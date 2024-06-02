document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    validarFormulario();
});

function validarFormulario() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Ingreso correcto',
        }).then(() => {
             document.getElementById('loginForm').submit();
        });
    }
}