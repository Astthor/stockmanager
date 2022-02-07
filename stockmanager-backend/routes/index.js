var express = require('express');
var router = express.Router();
const mysqlDb = require('../db/mysqlConn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testapi', function(req,res, next){
  //console.log(req);
  // multiple params to the query, just add element to the array, eg [3, 'Astthor']
  const queryText = 'SELECT * FROM stockmanager.Account WHERE account_id > ?'; 
  const dataFromTheScaryInternet = 0;
  mysqlDb.query(queryText, [dataFromTheScaryInternet], (error, results) => {
    //var resultArray = Object.values(JSON.parse(JSON.stringify(results)));
    //console.log('resultArray: ' + resultArray);
    //console.log(results);
    //var x = Object.assign({}, results)
    console.log(results);
    res.json(results)
  });
  // res.json({name: 'Astthor'});
});




module.exports = router;
