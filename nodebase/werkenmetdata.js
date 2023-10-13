const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wv&MKJ27%CWib%dE',
    database: 'nha'
});
con.query('SELECT * FROM cursisten', (err,rows) => {
    if(err) throw err;
    const cursist = { 
        name: 'Kirsten D', 
        city: 'Roermond'
    };
    con.query('INSERT INTO cursisten SET ?', cursist, (err, res) => {
        if(err) throw err;
        console.log('Laatst toegevoegde cursist:', res.insertId);
    });
    rows.forEach( (row) => {
        console.log(`${row.name} woont in ${row.city}`);
    });
});