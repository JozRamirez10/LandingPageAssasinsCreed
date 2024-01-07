function ingresar(event){
    usuario = document.querySelector('.entrada-usuario').value;
    contraseña = document.querySelector('.entrada-contraseña').value;
    if(usuario.length == 0 || contraseña.length == 0){
        alert('Ingrese un nombre de usuario y/o contraseña');
        event.preventDefault();
    }else{
        window.open('./menu.html','_self');
    }
}


