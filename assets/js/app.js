<<<<<<< HEAD
window.onload = function () {
    var boton = document.getElementById('one-button');

    boton.addEventListener('click', function() {

    })

    var btn = document.getElementById("button");
    var txt = document.getElementById("paragraph");
     var img = document.getElementById("imgJesse");
   

    btn.addEventListener("click", function(){
        var txt = document.getElementById("paragraph");
        txt.innerHTML = "<h2>Jesse Pinkman iba a morir</h2><p>Es uno de esos casos en que el guión marca la muerte del personaje pero finalmente, por diversas cuestiones, los creadores, showrunners o productores deciden mantenerlo con vida y, por lo tanto, ganando cada vez mayor protagonismo.</p>";
     
       
        
        
    })
      
       

        

}
=======
window.onload
    function oneButton(button) {
        var usuario = document.getElementById("userName").value;
        var texto = document.getElementById("welcome");
        texto.innerHTML= "Bienvenid@ " + usuario;
    }
>>>>>>> upstream/master
