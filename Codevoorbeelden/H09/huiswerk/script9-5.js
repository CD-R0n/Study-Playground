$(() => {
    for(let i = 1; i <= 5; i++) {
        $("div").append("achteraan toegevoegd: " + i +"<br>");
    }
    for(let i = 1; i <= 5; i++) {
        $("div").prepend("vooraan toegevoegd: " + i + "<br>");
    }
})