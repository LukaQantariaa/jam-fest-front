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
    let query  = "SELECT * FROM  categories order by category_name  ; ";
    console.log(query);
    con.query(query , async function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.status(200).send(result);
    });
});





module.exports = router;