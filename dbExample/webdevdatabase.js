var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE webdevdatabase", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  

// run the following command in the terminal: Node javatpoint.js

// Go to initial path by using mysql-p command. For verification of the database use the SHOW DATABASES command.