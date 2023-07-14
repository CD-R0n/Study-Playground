window.onload = () => {
    const divResult = document.getElementById("div-Result");
    document.getElementById("knopDupliceer").onclick = () => {
        const element = document.createElement("p");
        const tekst = document.createTextNode(document.getElementById("tekst").value);
        element.appendChild(tekst);
        divResult.appendChild(element);
    }   
    document.getElementById("knopVerwijder").onclick = () => {
        if(divResult.querySelector("p") != null) {
            divResult.removeChild(document.querySelector("p:last-child"));
        }        
    } 
}