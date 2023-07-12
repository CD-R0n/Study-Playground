window.onload = () => {
    let text = document.getElementById("text");
    text.onkeyup = (event) => {
        if((event.keyCode === 13) && (text.value.length > 0)) { 
            //keyCode is Deprecated, code wordt aangeraden https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
            //setTimeout(alert, 1000, text.value); is nog niet behandeld in de lessen
            const beginTijd = Date.now();
            while((Date.now()) < (beginTijd + 1000)) {}
            alert(text.value);
        }
    }
}