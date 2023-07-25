$(() => {
    $.ajax({
        url: "content12.html",
        success: (data) => {
            $("div").html(data);
            alert("content geladen");
        },
        error: () => {
            alert("Er is een fout opgetreden");
        }
    })
})