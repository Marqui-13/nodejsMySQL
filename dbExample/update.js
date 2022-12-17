var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148",  
database: "webdevdatabase"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "UPDATE employees SET city = 'London' WHERE city = 'Fort Dodge'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  
});  

// Open command prompt and run the following code: node update.js

// Verfiy that the record was updated by using SELECT query: SELECT * FROM employees;