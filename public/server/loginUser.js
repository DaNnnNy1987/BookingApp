const Cryptr = require('cryptr');
const express=require("express");
const mysqlConnection = require('../../configDatabase');
const cryptr = new Cryptr('SecretKey');

module.exports.authenticate = function(req,res){
    let email = req.body.email;
    let password = req.body.password;
   console.log("loginUser authenticate");
   
    mysqlConnection.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.redirect('/404error');
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                
                res.redirect('/dashboard');
            }else{
                res.redirect('/404error');
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}

module.exports.getUser = function(req,res){
    let email = req.body.email;
    let password = req.body.password;
   
   
    mysqlConnection.query('SELECT username FROM user WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.redirect('/404error');
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                
                res.redirect('/dashboard');
            }else{
                res.redirect('/404error');
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Username or Email does not exits !!"
          });
        }
      }
    });
}