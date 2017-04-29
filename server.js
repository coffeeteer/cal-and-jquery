var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http');
var path           = require('path');
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


//***********Routes to homepage **********//

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname + '/public/views/index.html'));
});

app.listen(port, function() {
    console.log('connected to port ', port);
});
