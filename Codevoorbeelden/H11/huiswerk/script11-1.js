$(() => {
    $("img").hover( //deprecated https://api.jquery.com/hover/
        () => {
            $("div").slideDown("fast")
        },
        () => {
            $("div").slideUp("fast");
        }
    ); 
})