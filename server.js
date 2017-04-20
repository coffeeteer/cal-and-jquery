var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http           = require('http');
var path           = require('path');

var app = express();

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;
 
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(methodOverride('_method'));

// app.set('view engine', 'http');

//***********Routes to homepage **********//

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html'); 
});

app.listen(port, function() {
    console.log('connected to port ', port);
});
