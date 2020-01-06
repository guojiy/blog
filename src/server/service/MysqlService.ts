var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12341234'
});
export default class Mysql {
    connect() {
        connection.connect(function(err) {
            if (err) {
            console.error('error connecting: ' + err.stack);
            return;
            }
            console.log('connected as id ' + connection.threadId);
        });
    }
}

