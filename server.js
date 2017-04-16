var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();


console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

/*---------- Routes ------------*/
app.get('/', function(req, res) {
    res.render('index.html');
});