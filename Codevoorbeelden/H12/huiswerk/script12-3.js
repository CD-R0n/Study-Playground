$(() => {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q=zoetermeer,nl&units=metric&lang=nl",
        success: (data) => {
            $("div").append(data.name + "<br>Huidige temperatuur: " + data.main.temp + " Celsius<br>" + data.weather[0].description + "<br> Vochtigheid: " + data.main.humidity + "%");
        },
        error: (jqXHR, textStatus, errorThrown) => {
            alert(textStatus + " " + errorThrown);
            console.log(jqXHR);
        }
    })
})