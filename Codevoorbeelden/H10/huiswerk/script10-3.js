$(() => {
    $(document).on("keydown", (e) => {
        switch(e.code){
            case "ArrowUp":
                $("div").animate({top: "-=100px"}, "slow", "linear");
                break;
            case "ArrowDown":
                $("div").animate({top: "+=100px"}, "slow", "linear");
                break;
            case "ArrowLeft":
                $("div").animate({left: "-=100px"}, "slow", "linear");
                break;
            case "ArrowRight":
                $("div").animate({left: "+=100px"}, "slow", "linear");
                break;
        }
    })
    $(document).on("keyup", (e) => {
        $("div").stop(true);
    })
})