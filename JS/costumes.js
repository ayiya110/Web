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