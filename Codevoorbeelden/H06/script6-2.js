window.onload = () => {
    const naam = document.getElementById("naam");
    document.getElementById("knop").onclick = () => {
        if(naam.value.length > 2) {
            alert("Hoi " + naam.value);
        }
        else {
            alert("Voer uw naam in");
        }
    }  
}