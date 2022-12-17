var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "13148",  
database: "webdevdatabase"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM employees", function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  

// Open command prompt and run the following code: node select.js

// You can also use the statement: SELECT * FROM employees;  
