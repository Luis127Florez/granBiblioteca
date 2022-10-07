var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

con.connect(
    (err)=>{
        if (!err) {
            console.log('la coneccion esta bien')
        } else {
            console.log('la coneccion esta barra')            
        }
    }
);
module.exports = con;