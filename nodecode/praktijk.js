var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end("Ik voel me goed vandaag!");
}).listen(8080)
var module = require("./mijnGrapje")
module.mijnGrapje();