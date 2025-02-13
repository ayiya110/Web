$(document).ready(function () {
    $(".mapa").click(function () {
        if ($(this).hasClass("selected")) {
            // Si ya está seleccionado, lo deseleccionamos
            $(this).removeClass("selected").css({"background-color": "", "opacity": "1", "border-color": "#333"}).text("");
            $(".mapa").css({"pointer-events": "auto", "opacity": "1"});
        } else {
            // Si seleccionamos uno, restablecemos los demás y bloqueamos su interacción
            $(".mapa").removeClass("selected").css({"background-color": "", "opacity": "0.5", "border-color": "#333"}).text("");
            $(this).addClass("selected").css({"background-color": "blue", "opacity": "1", "border-color": "#333"}).text("Selected");
            $(".mapa").not(this).css("pointer-events", "none");
        }
    });

    $(".mapa").hover(
        function () {
            // Cambia el borde a amarillo SOLO si el mapa NO está seleccionado
            if (!$(this).hasClass("selected")) {
                $(this).css("border-color", "yellow");
            }
        },
        function () {
            // Cuando el mouse sale, restaura el borde solo si NO está seleccionado
            if (!$(this).hasClass("selected")) {
                $(this).css("border-color", "#333");
            }
        }
    );
});