$(() => {
    $("div")
        .on("mousemove", (e) => {
            $("p").text("x: " + e.pageX + " y: " + e.pageY);
        })
        .on("mouseleave", () => {
            $("p").text("x: 0 y: 0")
        })
})