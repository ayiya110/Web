$(document).ready(function(){
    console.log("Documento cargado");


    // Código de los sliders
    $("#slider").slider({
        min: 0,          // Valor mínimo
        max: 100,        // Valor máximo
        value: 50,       // Valor inicial
        slide:function(event, ui) {
            // Actualizar el valor mostrado en la página
            $("#valorSlider").text(ui.value);
            
            // Guardar el valor en una variable
            var valorDelSlider = ui.value;
            console.log("Valor del Slider: " + valorDelSlider); // Aquí puedes hacer lo que quieras con el valor
        }
    });


    // Hace que funcione el botón de return
    let botonReturn = $("#return");
    botonReturn.click(function(){
        window.location.href="../JuegoHTML/game.html";
    });
})