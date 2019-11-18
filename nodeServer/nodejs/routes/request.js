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
    let query = 'select * from requests where from_user_id = '+req.body.from_user_id + ';';
    let resul;
    let ans = [];
    con.query(query ,  function (err , result , fields) {
        if(err){
            res.status(404).send();
            throw err;
        }
        lil_ans = [];
        resul = result;
        console.log(resul.length);
        console.log(resul[0]);
        for (let it = 0  ; it<=resul.length ; it++){
            let lisa = false;
            let bla = it ;
            if(it===resul.length){
                bla = it-1;
                lisa = true;
            }
            let item = resul[bla];
            let id = item.req_id;
            let query2 = 'select * from packs where request_id='+ id+';';
            console.log(query);
            con.query(query2 ,  function(err , result , fields){
                if(err){
                    res.status(404).send();
                    throw err;
                }
                console.log(result);
                if(lisa){
                    res.status(200).send(ans);
                    return;
                }
                ans.push([resul[bla] ,result]);
                console.log(ans);
                });         
    }
    });
});

router.put('/', (req, res) => {
    let baba = req.body.from_user_id + " ," +req.body.to_user_id +" ,"  + req.body.to_user_item_id ;
    let query  = "insert into   requests (from_user_id , to_user_id , to_user_item_id)  values ("+ baba+ ") ";
    console.log(query);
    for (let item of req.body.items ){
        console.log(item);
    }
    if(req.body.items.length==1){
        let lisa = 'insert into binary_requests (from_user_id , from_user_item_id ,to_user_id ,  to_user_item_id ) values ('+req.body.from_user_id+' , '+req.body.items[0] +', ' +req.body.to_user_id+' , '+req.body.to_user_item_id+' ) ; ';
        con.query(lisa , async function (err , result , fields ) {
            if(err)throw err;
        });
    }  
    let querty  = 'select req_id from requests where from_user_id ='+req.body.from_user_id +' and to_user_item_id='+req.body.to_user_item_id+';';
    console.log(querty);
    con.query(query , async function (err, result, fields) {
        if (err){
            res.status(404).send();
            throw err;
        };
        
        con.query(querty , async function (err , result , fields) {
            if(err) throw err;
            let i = result[0].req_id;
            for (let item of req.body.items){
                let qr = 'insert into packs (request_id , item_id) values('+i+', '+item+') ; ';
                con.query(qr , async function(err ,result , fields){
                    if(err) throw err;
                }); 
            }
            res.status(200).send();

        });
  });
    /*
    con.query(query , async function (err, result, fields) {
          if (err){
              res.status(404).send();
              throw error;
          };
          for item in ()
          res.status(200).send();
    });
   
    // res.status(404);
    */
});

module.exports = router;