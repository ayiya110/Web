$(document).ready(function () {
    function updateCharacterStyle() {
        let hue = $("#hue").val();
        let saturation = $("#saturation").val();
        let brightness = $("#brightness").val();

        $("#character").css("filter", `hue-rotate(${hue}deg) saturate(${saturation}%) brightness(${brightness}%)`);
    }

    // Evento de cambio en los sliders
    $("input[type='range']").on("input", updateCharacterStyle);
});


// Para revisar
$(document).ready(function() {
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
        if (index > -3) {
            index--;
            track.css("transform", `translateX(${-index * avatarWidth}px)`);
        }
    });
});