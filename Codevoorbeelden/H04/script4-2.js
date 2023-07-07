var teller = 10,
getal = 10;

while ( teller >= 0) {
    document.getElementById('result').innerHTML +=
    teller + ' maal ' + getal + ' = ' + teller * getal + '<br/>';
    teller--;
    }