window.onload = () => {
    let index = 1;
    document.getElementById("knop").onclick = () => {        
        const kop = document.createElement("h" + index);
        const tekst = document.createTextNode(document.getElementById("tekst").value);
        kop.appendChild(tekst);
        document.getElementById("div-Result").appendChild(kop);
        index++;
        if(index > 6) {
            index = 1;
        }
    }
}