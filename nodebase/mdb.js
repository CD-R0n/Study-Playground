var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("nhacursusDB");
var myobj = { naam: "Petra", cursus: "Python" };
dbo.collection("nhacursus").insertOne(myobj,
function(err, res) {
if (err) throw err;
console.log("Een document is toegevoegd aan uw collectie!");
db.close();
});
});