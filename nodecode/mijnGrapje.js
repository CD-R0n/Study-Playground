exports.mijnGrapje = function () {
    var fs = require("fs");
    fs.appendFile("bestand.txt", "Hoi, ik studeer bij NHA!", 
    (err) => {
        if (err) throw err;
        console.log("Opgeslagen!");
    })
}