$(() => {
    $(document)
        .on("ajaxStart", () => {
            $("img").show();
        })
        .on("ajaxStop", () => {
            $("img").hide();
        });
    $("button").on("click", () => {
        let dollar = parseFloat($("input").val()).toFixed(2);
        if (isNaN(dollar)) {
            alert("Voer een getal in");
        } else {
            $.ajax({
                url: "https://openexchangerates.org/api/latest.json",
                data: {
                    app_id: "031b3dc69491490ab98a91b315f05eb6",
                    symbols: "GBP,JPY"
                },
                success: (data) => {             
                    let pond = (dollar * data.rates.GBP).toFixed(2);
                    let yen = (dollar * data.rates.JPY).toFixed(2);
                    $("#divResult").html("$" + dollar + " Amerikaanse dollars is op dit moment gelijk aan:<br><br>&pound;" + pond + " Britse pond<br><br>&yen;" + yen + " Japanse yen")
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    alert(textStatus + " " + errorThrown);
                    console.log(jqXHR);
                }
            })
        }
    })
})