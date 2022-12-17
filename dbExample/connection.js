var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "13148"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  

// run the following command in the terminal: node connection.js
