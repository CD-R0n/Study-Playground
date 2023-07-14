window.onload = () => {
    document.getElementById("knop").onclick = () => {
        const element = document.createElement("p");
        const tekst = document.createTextNode(document.getElementById("tekst").value);
        element.appendChild(tekst);
        document.getElementById("div-Result").appendChild(element);
    }    
}