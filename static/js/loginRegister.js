function abrirLogin(){
    var btn_login = document.getElementById("btn-login");
    var btn_suscribe = document.getElementById("btn-suscribe");
    var ventana_login = document.getElementById("login-window"); 
    var ventana_suscribe = document.getElementById("suscribe-window");

    btn_login.addEventListener("click", function(e){
        e.preventDefault();
        ventana_login.style.marginTop = "150px";
        ventana_login.style.transition = ".4s ease all";
        ventana_suscribe.style.marginTop = "-1000px";
        ventana_suscribe.style.transition = ".3s ease all"
    });
    btn_suscribe.addEventListener("click", function(e){
        e.preventDefault();
        ventana_suscribe.style.marginTop = "120px";
        ventana_suscribe.style.transition = ".4s ease all";
        ventana_login.style.marginTop = "-1000px";
        ventana_login.style.transition = ".3s ease all";
    });
}
abrirLogin();

function valdiarCorreoSuscribe(){
    var email = document.getElementById("input-email").value;
    var expReg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    var input_email = document.getElementById("input-email");
    var btn_suscribe = document.getElementById("btn-suscribirse");

    btn_suscribe.addEventListener("click", function(e){
        e.preventDefault();
        if (expReg.test(email)){
            alert("La dirección de correo electrónico es válida")
        }
        else{
            alert("El correo ingresado no es válida! Por favor, vuelva a intentarlo.");
            input_email.value = "";
            input_email.focus();
        }
    });
}
valdiarCorreoSuscribe();