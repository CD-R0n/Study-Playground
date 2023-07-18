$(() => {
    $("button").on("click", () => {
        const hoogte = parseInt($("#hoogte").val());
        const breedte = parseInt($("#breedte").val());
        if (isNaN(hoogte) || isNaN(breedte)) {
            $("div").after("<br><strong>Voer een getal in</strong>")
        } else {
            $("div ~ br, strong").remove();
            $("div").height(hoogte);
            $("div").width(breedte);
        }
    });
})