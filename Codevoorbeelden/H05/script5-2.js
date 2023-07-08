function optel(getal1, getal2) {
    return getal1 + " + " + getal2 + " = " + (getal1 + getal2) + ".<br>" +
    "Deze functie is aangeroepen met " + arguments.length + " parameters.";
}
document.getElementById("divResult").innerHTML = (optel(3, 5));