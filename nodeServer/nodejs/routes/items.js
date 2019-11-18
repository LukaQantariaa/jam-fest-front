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



router.post('/', (req, res) => {
    let pars = "";
    if (req.body.category ) {
        console.log("asd");
        pars = "where category_id = "+req.body.category;
    }
    let query  = "SELECT * FROM  ITEMS "+pars+" ; ";
    console.log(query);
    con.query(query , async function (err, result, fields) {
          if (err){
              res.status(404).send()
            throw err;
              
          } 
          console.log(result);
          res.status(200).send(result);
    });
   
});

router.put('/', (req, res) => {
    let baba = req.body.user_id + " , \""+req.body.item_name +"\" , \"" + req.body.item_url + "\" , " 
    + req.body.category_id +" , \""+req.body.description + "\" ";

    let query  = "insert into   ITEMS (user_id , item_name , item_url , category_id , item_description)  values("+ baba+ ") ";
    console.log(query);
    con.query(query , async function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.status(200).send();
    });
    
});


module.exports = router;