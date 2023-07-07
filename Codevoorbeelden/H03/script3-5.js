const getal1 = parseInt(prompt("Voer het eerste getal in:"));
const getal2 = parseInt(prompt("Voer het tweede getal in:"));
document.getElementById("invoer").innerHTML = "De getallen die u invoerde waren " + getal1 + " en " + getal2 + ".";
const groterKleiner = (getal1 > getal2)
    ? "groter dan "
        : (getal1 === getal2)
            ? "gelijk aan "
            : "kleiner dan ";
const resultaat = getal1 + " is " + groterKleiner + getal2 + ".";
document.getElementById("uitvoer").innerHTML = resultaat;