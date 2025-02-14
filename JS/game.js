$(document).ready(function(){
 // Hace que funcione el botón de return
     let botonReturn = $("#return");
    botonReturn.click(function(){
     window.location.href="../JuegoHTML/game.html";
     });
      // Hace que funcione el botón de return
      let PlayLink = $("#play");
      PlayLink.click(function(){
          window.location.href="../JuegoHTML/maps.html";
      }); 
      let SettingsLink = $("#settings");
      SettingsLink.click(function(){
          window.location.href="../JuegoHTML/settings.html";
      }); 
      let CostumesLink = $("#costumes");
      CostumesLink.click(function(){
          window.location.href="../JuegoHTML/costumes.html";
      }); 
      let PageLink = $("#quit");
      PageLink.click(function(){
          window.location.href="../index.html";
          st
      }); 
      $(".mapa").click(function () {
        if ($(this).hasClass("selected")) {
            // Si ya está seleccionado, lo deseleccionamos
            $(this).removeClass("selected").find("img").css("filter", ""); // Quitar tinte
            $(this).find(".texto-seleccionado").remove(); // Eliminar texto

            // Restaurar todos los mapas a su brillo normal
            $(".mapa").css({"pointer-events": "auto", "opacity": "1"})
                     .find("img").css("filter", "brightness(100%)");
        } else {
            // Si hay uno seleccionado, bloqueamos el resto
            $(".mapa").removeClass("selected").find("img").css("filter", ""); // Resetear filtro
            $(".mapa").not(this).css("pointer-events", "none")
                     .find("img").css("filter", "brightness(50%)"); // Oscurecer los demás mapas

            $(this).addClass("selected")
                   .find("img").css("filter", "sepia(100%) hue-rotate(90deg) saturate(300%) brightness(80%)"); // Aplicar tinte verde

            // Agregar el texto "Selected"
            if ($(this).find(".texto-seleccionado").length === 0) {
                $(this).append('<div class="texto-seleccionado">Selected</div>');
            }
        }
    });

    $(".mapa").hover(
        function () {
            if (!$(this).hasClass("selected")) {
                $(this).css("border-color", "yellow");
            }
        },
        function () {
            if (!$(this).hasClass("selected")) {
                $(this).css("border-color", "#333");
            }
        }
    );
})