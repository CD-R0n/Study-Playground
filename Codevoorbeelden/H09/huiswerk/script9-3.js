$(() => {
    $("button").on("click", () => {
        const tekst = $("div").text() + $("input").val();
        $("div").text(tekst);
    })
})