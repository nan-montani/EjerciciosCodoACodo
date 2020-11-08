function validate() {
    let name = document.querySelector('#input-uname').value;
    let password = document.querySelector('#input-psw').value;

    if( validar_email( name ) )
    {
        if (name.length !== 0 && password.length > 5){
            document.querySelector("#mensajeEstado").innerText = 'Datos validados'
        } else if (name.length == 0){
            document.querySelector("#mensajeEstado").innerText = 'Debe ingresar un mail'
        } else if (password.length < 5) {
            document.querySelector("#mensajeEstado").innerText = 'La contraseña debe tener minimo 5 caracteres'
        }
    } else {
        document.querySelector("#mensajeEstado").innerText = 'Debe ingresar un mail valido'
    }
}

document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault()
});

//valida mail
function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}