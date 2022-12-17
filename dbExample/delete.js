var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148",  
database: "webdevdatabase"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "DELETE FROM employees WHERE city = 'London'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Number of records deleted: " + result.affectedRows);  
});  
});  

// Open command prompt and run the following code: node delete.js

// Verfiy that the record was deleted by using SELECT query: SELECT * FROM employees;