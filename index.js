const mysql = require('mysql');
const express =  require('express');
const path =  require('path');
const morgan =  require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
const mysqlConnection = require('./configDatabase');
const registerUser = require('./public/server/registerUser');
const loginUser = require('./public/server/loginUser');


const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static(__dirname + '/public'));
app.use('/public/components', express.static(__dirname + '/public/components'));



//Select * from user table
mysqlConnection.query('SELECT * FROM user', (err, rows, fields)=>{
		if(!err)
			console.log(rows);
		else
			console.log("Error " + err);
	});

app.get('*', (req,res)=>  {
	res.sendFile(path.join(__dirname + '/public/components/index.html'));
});
app.post('/register',registerUser.register);
app.post('/login',loginUser.authenticate);
app.get('/login',loginUser.getUser);

app.listen(port,()=> {
	console.log("Server is running on port "+port);
});




// //get an user
// app.get('/user/:id',(req,res)=> {
// 	mysqlConnection.query('SELECT * from user WHERE userId = ?',[req.params.id],(err, rows, fields)=>{
// 		if(!err)
// 			res.send(rows);
// 		else
// 			console.log(err);
// 	})
// })

// //add an user
// app.get('/user/:id',(req,res)=> {
// 	mysqlConnection.query('DELETE  from user WHERE userId = ?',[req.params.id],(err, rows, fields)=>{
// 		if(!err)
// 			res.send('Deleted Successfully.');
// 		else
// 			console.log(err);
// 	})
// })

// //delete an user
// app.get('/user/:id',(req,res)=> {
// 	mysqlConnection.query('DELETE  from user WHERE userId = ?',[req.params.id],(err, rows, fields)=>{
// 		if(!err)
// 			res.send('Deleted Successfully.');
// 		else
// 			console.log(err);
// 	})
// });

// //login user
// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		mysqlConnection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('dashboard.html');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });