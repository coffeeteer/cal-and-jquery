var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http');
var path           = require('path');
var mysql          = require('mysql');
var db             = require('node-mysql');
var DB             = db.DB;
var BaseRow        = db.Row;
var BaseTable      = db.Table;

var app = express();

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;
 
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

/***---MySQL Database Start---***/
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'cogen',
  port     : 3306
});

connection.connect();

var firstName = 'first_name';
var lastName = 'last_name';

connection.query('SELECT * from staff', function(err, rows, fields) {
	if (!err) {
    	console.log('The solution is: ', rows);
  }
 	else {
    	console.log('Error while performing Query.');
 	}
});

connection.end();
/***---MySQL Database End---***/


//***********Routes to homepage **********//

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname + '/public/views/index.html'));
});

app.listen(port, function() {
    console.log('connected to port ', port);
});
