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

// $(document).ready(function() {
//     const $rangeInput2 = $(".js-range-input2");
//     // const $output = $('.js-range-output');
//     const $root2 = $(":root");
  
//     function setSaturation() {
//         // $output.val($rangeInput.val() + '°');
//         $root2.css("--saturation", $rangeInput2.val());
//     }
  
//     function setDefaultState2() {
//         $rangeInput2.focus();
//         setSaturation();
//     }
  
//     $rangeInput2.on("input", function() {
//         setSaturation();
//     });
  
//     setDefaultState2();
//   });

//   $(document).ready(function() {
//     const $rangeInput3 = $(".js-range-input3");
//     // const $output = $('.js-range-output');
//     const $root3 = $(":root");
  
//     function setBrightness() {
//         // $output.val($rangeInput.val() + '°');
//         $root3.css("--brightness", $rangeInput3.val());
//     }
  
//     function setDefaultState3() {
//         $rangeInput3.focus();
//         setBrightness();
//     }
  
//     $rangeInput3.on("input", function() {
//         setBrightness();
//     });
  
//     setDefaultState3();
//   });