let geboortejaar = parseInt(prompt("Wat is uw geboortejaar?"));
if(geboortejaar < 1980) {
    console.log("Geboren voor 1980");
}
else {
    document.getElementById("divResult").innerHTML = "Geboren na 1980.";
}