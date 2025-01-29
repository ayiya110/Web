$(document).ready(function(){
    console.log("Documento cargado");


    // Hace que funcione el botón de return
    let botonReturn = $("#return");
    botonReturn.click(function(){
        window.location.href="../JuegoHTML/game.html";
    });
})