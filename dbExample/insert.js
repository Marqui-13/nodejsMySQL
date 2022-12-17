var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148",  
database: "webdevdatabase"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");
}); 
var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Cliff Drand', '73', 'Fort Dodge')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  

// Open command prompt and run the following code: node insert.js

// Verfiy that the record was inserted by using SELECT query: SELECT * FROM employees;