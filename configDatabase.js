let mysql      = require('mysql');
let mysqlConnection =  mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'bookingappdb'
});
mysqlConnection.connect((err)=>{
	if(!err) 
		{
			console.log('Database connection succeded !')

			var sql = "CREATE TABLE IF NOT EXISTS user (userId INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) , password VARCHAR(255) , password VARCHAR(255) )";
  			mysqlConnection.query(sql, function (err, result) {
    			if (err) throw err;
    			console.log("Table created");
 			 });
			
		}

	else 
		console.log('Database connection failed \n Error '+ JSON.stringify(err,undefined,2));
});

module.exports = mysqlConnection; 