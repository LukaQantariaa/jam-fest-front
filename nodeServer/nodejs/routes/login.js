const express = require('express');

const router = express.Router();
var mysql = require('mysql');
var user;
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "arvicitoo123" , 
    database: "gundavri"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });



router.get('/', (req, res) => {
    res.send('bla');
});

router.post('/', (req, res) => {
    let i ;
    let b ;
    let query  = "SELECT * FROM  USERS where username =\'"+req.body.username+"\' and password_= \'"+req.body.password+"\' ; ";
    console.log(query);
    con.query(query , async function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          i = result;
          if (i.length!==0) {
            res.status(200).send({
                'status': 'OK' , 
                'info' : i
            });
        }else {
            res.status(404).send({
                'status': 'NOT OK'
            });  
        }
        });
    
   
    // res.status(404);
});


module.exports = router;