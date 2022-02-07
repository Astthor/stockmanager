/*
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host     : 'localhost',
  user     : 'manager',
  password : 'astthorIthai',
  database : 'stockmanager''
});
 
//connection.connect();
 
pool.query('SELECT * FROM Account', function (error, results, fields) {
  if (error) throw error;
  console.log(results); //'The solution is: ', results[0].solution
});
 
//connection.end();
*/
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'manager',
  password        : 'astthorIthai',
  database        : 'stockmanager'
});
 
module.exports = {
    query: (queryText, params, callback) => {
        var x = pool.query(queryText, params, callback);
        return x;// resolve(JSON.parse(JSON.stringify(x)))
    }
}
/*
const dataFromTheScaryInternet = 2;

pool.query('SELECT * FROM stockmanager.Account WHERE account_id > ?', [dataFromTheScaryInternet], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});*/
