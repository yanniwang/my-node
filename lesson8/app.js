var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '47.98.42.85',
    user: 'root',
    password: 'Ls021635?',
    database: 'storage'
});
connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if(error) throw error;
//     console.log('The solution is:', results[0].solution);
// })

var sql = 'SELECT * FROM websites'
connection.query(sql, function (error, results) {
    if (error) throw error;
    str = JSON.stringify(results);
    console.log(str);
})

// var addSql = 'INSERT INTO websites(Id, name, url,alexa, country) VALUES(0,?,?,?,?)';
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
// connection.query(addSql, addSqlParams, function (err, result) {
//     if (err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return false;
//     }
//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:', result);
//     console.log('-----------------------------------------------------------------\n\n');
// })


app.get('/', function (req, res) {
    res.send(str);
});

app.listen(3000, function () {
    console.log('Server running at 3000 port');
});


