$(() => {
    function wachtrij() {
        $("div").text("In wachtrij: " + ($("p").queue().length));
    }
    function start() {
        $("p").slideToggle(5000, "linear", () => {
            alert("Animatie gereed");
        });
    }
    setInterval(wachtrij, 100);
    start();   
    $("#btnFinish").on("click", () => {
        $("p").finish();
    })
    $("#btnStop").on("click", () => {
        $("p").stop();
    })
    $("#btnQueue").on("click", () => {
        $("p").slideToggle(5000, "linear");
    })
    $("#btnDequeue").on("click", () => {
        $("p").dequeue();
    })
})