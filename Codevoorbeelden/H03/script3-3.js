const getal1 = parseInt(prompt("Voer het eerste getal in:"));
const getal2 = parseInt(prompt("Voer het tweede getal in:"));
document.getElementById("invoer").innerHTML = "De getallen die u invoerde waren " + getal1 + " en " + getal2 + ".";
let resultaat = "Is het eerste getal groter dan het tweede getal? " + (getal1 > getal2 ? "Ja" : "Nee");
resultaat += "<br> Is het eerste getal kleiner dan het tweede getal? " + (getal1 < getal2 ? "Ja" : "Nee");
resultaat += "<br> Is het eerste getal gelijk aan het tweede getal? " + (getal1 === getal2 ? "Ja" : "Nee");
document.getElementById("uitvoer").innerHTML = resultaat;