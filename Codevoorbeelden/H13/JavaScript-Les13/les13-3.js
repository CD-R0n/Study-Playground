$(function () {
    $("#div").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        },
        show: {
            effect: "highlight",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        }
    });
    $("a").on("click", () => {
        $("#div").dialog("open");
    })
});