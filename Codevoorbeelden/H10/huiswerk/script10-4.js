$(()=>{
    $(".thumb").on("click", function (e) {
        $("#main").fadeOut("slow", () => {
            $("#main").attr("src", e.target.src);
            $("#main").fadeIn("slow");
            $("#beschrijving").text(e.target.title);
        });                
    })
})