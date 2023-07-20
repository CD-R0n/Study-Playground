$(() => {
    $("input")
        .on("focus", function () {
            $(this).select();
        })
        .on("keyup", (e) => {
            if (e.which === 13) {
                alert("U hebt op Enter gedrukt, we gaan het formulier verzenden");
            }
        });
});