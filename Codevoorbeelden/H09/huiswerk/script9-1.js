$(() => {
    $("button").on("click", () => {
        const kleurcode = $("#inputKleur").val();
        if (kleurcode.length != 6) {
            alert("Invoer moet 6 tekens zijn");
        }
        else {
            $("div").css("background-color", "#" + kleurcode);
        }
    });
});