$(() => {
    $("img").hover( //deprecated https://api.jquery.com/hover/
        () => {
            $("div").slideDown("fast", () => {
                $("img").on("mousemove", (e) => {
                    $("div").css({
                        left: e.clientX + 10,
                        top: e.clientY + 10
                    });
                });
            });
        },
        () => {
            $("div").slideUp("fast");
        }
    ); 
});