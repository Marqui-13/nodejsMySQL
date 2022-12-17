var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148",  
database: "webdevdatabase"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "DROP TABLE employee2";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table deleted");  
});  
});  

// Open command prompt and run the following code: node drop.js

// Verify that the table employee2 is no more in the database by running the following command: SHOW tables;