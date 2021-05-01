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