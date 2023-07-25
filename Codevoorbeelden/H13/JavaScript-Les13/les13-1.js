$(() => {
    $("#slider").slider({
        start: () => {
            $("#sliderValue").show();
        },
        slide: (event, ui) => {
            $("#sliderValue").html(ui.value + " stuks à &euro;4,95 per stuk:");
        },
        stop: (event, ui) => {
           let subtotaal = ui.value * 4.95;
           const verzendkosten = 5;
           let korting = parseFloat((subtotaal * 0.1).toFixed(2)); //toFixed hier toegepast zodat de eindberekening sowieso klopt voor de gebruiker
           $("#tSubtotaal").html("&euro;" + subtotaal.toFixed(2));
           switch (true) {
            case (ui.value < 20):
                $("#tVerzendkosten").html("&euro;" + verzendkosten.toFixed(2));
                $("#tKorting").html("(geen korting)");
                $("#tTotaal").html("&euro;" + (subtotaal + verzendkosten).toFixed(2));
                break;
            case (ui.value > 80):
                $("#tVerzendkosten").html("gratis");
                $("#tKorting").html("&euro;-" + korting.toFixed(2));
                $("#tTotaal").html("&euro;" + (subtotaal + verzendkosten - korting).toFixed(2));
                break;
            default:
                $("#tVerzendkosten").html("gratis");
                $("#tKorting").html("(geen korting)");
                $("#tTotaal").html("&euro;" + subtotaal.toFixed(2));
           }
        }
    });
});