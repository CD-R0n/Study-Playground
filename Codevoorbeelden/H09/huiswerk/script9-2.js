$(() => {
    $("button").on("click", () => {
        const kleurcode = $("#inputKleur").val();
        if (kleurcode.length != 6) {
            alert("Invoer moet 6 tekens zijn");
        } else if ($("#radioVoorgrond").is(":checked")) {
            $("div").css("color", "#" + kleurcode);
        } else if ($("#radioAchtergrond").is(":checked")) {
            $("div").css("background-color", "#" + kleurcode);
        } else {
            alert("Maak een selectie");
        }
    });
});