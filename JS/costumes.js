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