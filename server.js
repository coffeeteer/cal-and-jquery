var http = require('http');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var Promise = require('es6-promise').Promise;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('mongoskin').db("mongodb://localhost:27017/cogen", { w: 0});
    db.bind('event');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./public')));

app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));
//DHX Calendar ****************************************START
/*-----------------Event Handlers---------------------*/

//Adds records to the database
app.get('/init', function(req, res){
    scheduler.config.xml_date='%Y-%m-%d %H:%i';
    console.log('anything?')
    db.createCollection(event, console.log('createCollection fired'));

    db.event.insert({ 
        text:'Person 1', 
        start_date: new Date(2017,5,25, 0800),
        end_date:   new Date(2017,5,26, 1600),
        color: '#eee'
    });
    db.event.insert({ 
        text:'Person 2', 
        start_date: new Date(2017,5,5, 1600),
        end_date:   new Date(2017,5,6, 2359),
        color: "#BADA55"
    });

    /*... skipping similar code for other test events...*/

    res.send("Test events were added to the database")
});

//Loads data from the database
app.get('/data', function(req, res){
    db.event.find().toArray(function(err, data){
        for (var i = 0; i < data.length; i++)
            data[i].id = data[i]._id;

        //output response
        res.send(data);
    });
});
/*-----------------Event Handlers---------------------*/
//DHX Calendar ****************************************END

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
});

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
});