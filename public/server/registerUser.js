const Cryptr = require('cryptr');
const express=require("express");
const mysqlConnection = require('../../configDatabase');
const cryptr = new Cryptr('SecretKey');
 
module.exports.register=(req,res)=>{
  let encryptedString = cryptr.encrypt(req.body.password);
    let users={
        "username":req.body.username,
        "password":encryptedString,
        "email":req.body.email,
    }
    mysqlConnection.query('INSERT INTO user SET ?',users, function (error, results, fields) {
      if (error) {
        // res.json({
        //     status:false,
        //     message:'there are some error with query'
        // })
              res.redirect('/public/components/404error.html');
      }else{
          // res.json({
                //   status:false,
                //   message:"Email and password does not match"
                //  });
        res.redirect('/login');     
      }
    });
}
