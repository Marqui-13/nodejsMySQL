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
var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";  
var values = [  
['2', 'Joe Harold', '27', 'Los Angeles'],  
['3', 'Lyle Richards', '83', 'Waverly'],  
['4', 'Scott Fiser', '9', 'CA']  
];  
con.query(sql, [values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted: " + result.affectedRows);  
});  
});  

// Open command prompt and run the following code: node insertall.js

// Verfiy that the records was inserted by using SELECT query: SELECT * FROM employees;