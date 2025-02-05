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
const rangeInput = document.querySelector('.js-range-input');
const output = document.querySelector('.js-range-output');
const root = document.documentElement;

function setHue() {
  output.value = rangeInput.value + '°';
  root.style.setProperty('--hue', rangeInput.value);
}

function setDefaultState() {
  rangeInput.focus();
  setHue();
}

rangeInput.addEventListener('input', function(){
  setHue();
});

document.addEventListener('DOMContentLoaded', function(){
  setDefaultState();
});