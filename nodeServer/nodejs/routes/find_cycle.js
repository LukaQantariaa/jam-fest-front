const express = require('express');
const Graph = require('tarjan-graph');
const Set = require('set');
const Queue = require('queue');
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
    let query  = "SELECT * FROM  binary_requests ; ";
    con.query(query , async function (err, result, fields) {
          if (err) throw err;
          let map = new Map();
          for(let item of result){
                if(map.has(item.from_user_item_id)){
                    console.log("miro");
                    let bla =  map.get(item.from_user_item_id);
                    bla.push(item.to_user_item_id);
                   map.set(item.from_user_id , bla);
                }else{
                    map.set(item.from_user_item_id ,  [item.to_user_item_id]);
                }
          }
          let start = req.body.user_id;
          let graph = new Graph();
          map.forEach(function(value, key) {
            graph.add(key , value);
          });
    let q = new Queue();
   let explored = new Set();
   q.push([parseInt(start)]);

   // Mark the first node as explored explored.
    console.log(map);
   // We'll continue till our queue gets empty
   while (q.length) {
      let t = q.pop();
      // Log every element that comes out of the Queue
      console.log(t);

      // 1. In the edges object, we search for nodes this node is directly connected to.
      // 2. We filter out the nodes that have already been explored.
      // 3. Then we mark each unexplored node as explored and add it to the queue.
      let miroo = map.get(parseInt(t[t.length-1]));
      console.log(miroo);
      for(let ii of miroo ){
          if (t.includes(parseInt(ii))){
            res.status(200).send({'cycle_ids':t});
          }
          let b = [...t];
          b.push(parseInt(ii));
          q.push(b);
      }
   }
   res.status(404).send();

         

          
    });
});





module.exports = router;