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

    function updateCharacterStyle() {
        let hue = $("#hue").val();
        let saturation = $("#saturation").val();
        let brightness = $("#brightness").val();

        $("#character").css("filter", `hue-rotate(${hue}deg) saturate(${saturation}%) brightness(${brightness}%)`);
    }

    // Evento de cambio en los sliders
    $("input[type='range']").on("input", updateCharacterStyle);

    const $rangeInput = $(".js-range-input");
    // const $output = $('.js-range-output');
    const $root = $(":root");
  
    function setHue() {
        // $output.val($rangeInput.val() + '°');
        $root.css("--hue", $rangeInput.val());
    }
  
    function setDefaultState() {
        $rangeInput.focus();
        setHue();
    }
  
    $rangeInput.on("input", function() {
        setHue();
    });
  
    setDefaultState();
  });
  
  $(document).ready(function() {
      let index = 0;
      const avatars = $(".avatar");
      const totalAvatars = avatars.length;
      const track = $(".carousel-track");
      const avatarWidth = $(".avatar").outerWidth(true);
      
      $(".avatar").click(function() {
          let newAvatar = $(this).data("avatar");
          $("#selected-avatar").attr("src", newAvatar);
          avatars.removeClass("selected");
          $(this).addClass("selected");
      });
      
      $("#next").click(function() {
          if (index < totalAvatars - 3) {
              index++;
              track.css("transform", `translateX(${-index * avatarWidth}px)`);
          }
      });
      
      $("#prev").click(function() {
          if (index > -2) {
              index--;
              track.css("transform", `translateX(${-index * avatarWidth}px)`);
          }
      });
})