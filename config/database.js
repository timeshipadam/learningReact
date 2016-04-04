/**
 * Created by Adam on 2016-04-03.
 */
var mysql = require('mysql');


module.exports = {


    startdb: mysql.createConnection({
        host: 'localhost',
        user: 'adam',
        password: '1234',
        database: 'map'
    })


};