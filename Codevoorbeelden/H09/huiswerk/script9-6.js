$(() => {
    const styleObj = {
        "height" : 200,
        "width" : 200,
        "background-color" : "#C80000"
    }
    $("#div1").css(styleObj);
    $("#btn1").on("click", () => {
        $("#div2").removeClass();
        $("#div2").addClass("klasse1");
    });
    $("#btn2").on("click", () => {
        $("#div2").removeClass();
        $("#div2").addClass("klasse2");
    })
    $("#btn3").on("click", () => {
        $("#div2").removeClass();
        $("#div2").addClass("klasse3");
    });
});