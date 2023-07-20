$(() => {
    $("input").on("keyup", (e) => {
        if (e.which === 13) {
            let getal = parseInt($("input").val());
            if (isNaN(getal)) {
                alert("Voer een getal in");
            } else {
                $("input").off();
                for(let i = 1; i <= getal; i++) {
                    $("ul").append("<li>Item " + i + "</li>")
                }
            }
        }
    });
    $("ul")
        .on("mouseenter", "li", () => {
            $("div").show();
        })
        .on("mousemove", "li", function (e) {
            $("div")
                .text(this.innerHTML)
                .css({left: e.pageX + 10, top: e.pageY + 10});
        })
        .on("mouseleave", "li", () => {
            $("div").hide();
        });
});