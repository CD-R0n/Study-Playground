$(() => {
    $("#accordeon")
        .accordion({
            header: "> div > h3",
            collapsible: true,
            animate: {
                easing: "easeInOutElastic",
                duration: 1000
            }
        })
        .sortable({
            axis: "y",
            handle: "h3"
        });
});