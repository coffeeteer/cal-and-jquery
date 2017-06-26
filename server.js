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

// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./public')));

app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));

/*-----------------Event Handlers---------------------*/

//Adds records to the database
app.get('/init', function(req, res){

    db.event.insert({ 
        text:"My test event A", 
        start_date: new Date(2017,5,25),
        end_date:   new Date(2017,5,26)
    });
    db.event.insert({ 
        text:"One more test event", 
        start_date: new Date(2017,5,5),
        end_date:   new Date(2017,5,6),
        color: "#BADA55"
    });

    /*... skipping similar code for other test events...*/

    res.send("Test events were added to the database")
});

//Loads data from the database
app.get('/data', function(req, res){
    db.event.find().toArray(function(err, data){
        //set id property for all records
        for (var i = 0; i < data.length; i++)
            data[i].id = data[i]._id;

        //output response
        res.send(data);
    });
});

app.post('/data', function(req, res){
    var data = req.body;

    //get operation type
    var mode = data["!nativeeditor_status"];
    //get id of record
    var sid = data.id;
    var tid = sid;

    //remove properties which we do not want to save in DB
    delete data.id;
    delete data.gr_id;
    delete data["!nativeeditor_status"];


    //output confirmation response
    function update_response(err, result){
        if (err)
            mode = "error";
        else if (mode == "inserted")
            tid = data._id;

        res.setHeader("Content-Type","text/xml");
        res.send("<data><action type='"+mode+"' sid='"+sid+"' tid='"+tid+"'/></data>");
    }

    //run db operation
    if (mode == "updated")
        db.event.updateById( sid, data, update_response);
    else if (mode == "inserted")
        db.event.insert(data, update_response);
    else if (mode == "deleted")
        db.event.removeById( sid, update_response);
    else
        res.send("Not supported operation");
});
/*-----------------Event Handlers---------------------*/
app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
});

//DHX Calendar **********************


//DHX Calendar ****************************************

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
});