const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});/*
///inicio de sesion
function validarCredencialesInisioSesion() {

    var usuarioInput = document.getElementById("usuario").value;
    var contrasenaInput = document.getElementById("passwords").value;
    var mensajeError = document.getElementById("status");
    
    mensajeError.textContent = "successfully!!";
    mensajeError.style.color = "lime";
    if (usuarioInput === "admin" && contrasenaInput === "123") {
      
      mensajeError.textContent = "successfully!!";
      mensajeError.style.color = "lime";
        return false;
    }
    else if(usuarioInput === "" || contrasenaInput=== ""){
        mensajeError.textContent = "Complete los campos vacios.";
        mensajeError.style.color = "red";
        return false;
        }
    else
    {
        mensajeError.textContent = "Credenciales incorrectas...";
        mensajeError.style.color = "red";
        mensajeError.classList.remove("oculto");
        return false;
    } 
 

  }*/

///creacion de cuenta
  function validarCredencialesCreaciondecuenta(){

    var usernameInput = document.getElementById("username").value;
    var passworInput = document.getElementById("pass").value;
    var emailImput = document.getElementById("correo").value;
    var statusError = document.getElementById("estatus");
    statusError.textContent = "successfully!!";
    statusError.style.color = "lime";
    if (usernameInput === ""||passworInput ==="" ||emailImput==="") {
        statusError.textContent = "Complete los campos vacios.";
        statusError.style.color = "red";
        //statusError.classList.remove("oculto");
        return false;

    }else
    {
      
        statusError.textContent = "";
      
        statusError.style.color = "lime";
        statusError.textContent = "successfully!!";
        localStorage.setItem('capturadoUsername', usernameInput);
        setTimeout(function() {
        
            window.location.href = "..";
        }, 5000); // 5000 milisegundos (5 segundos)
       
        return false;
    } 
    return false;
  }





