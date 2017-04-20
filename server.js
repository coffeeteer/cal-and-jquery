var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cookieParser   = require('cookie-parser');
var http           = require('http');
var path           = require('path');
var moment         = require('moment');
var requirejs      = require('requirejs');
var fullCalendar   = require('fullcalendar');

moment().format();
var app = express();


console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(process.cwd() ));

// app.set('view engine', 'http');


/*---------- Routes ------------*/
app.get('/', function (req, res) {
  res.render('views/index.html')
})

/*----- Listen -----*/
app.listen(port, function() {
    console.log('connected to port ', port);
});