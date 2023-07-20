$(()=>{
    $(".thumb").on("click", function () {
        const source = $(this).attr("src");
        const title = $(this).attr("title");
        $("#main").fadeOut("slow", ()=>{
            $("#main").attr("src", source);
            $("#main").fadeIn("slow");
            $("#beschrijving").text(title);
        });                
    })
})