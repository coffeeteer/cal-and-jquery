var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var db = require('mongoskin').db("mongodb://localhost:27017/testdb", { w: 0});
    db.bind('event');
    // db.event.find().toArray(function(err, items) {
    //     db.close();
    // });  


var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(express.cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/init', function(req, res){
    if (err) throw err;
    console.log('before object');
    db.event.insert({ 
        text:"My test event A", 
        start_date: new Date(2017,6,1),
        end_date:   new Date(2017,6,5)
    }, console.log('first object run'));
    db.event.insert({ 
        text:"My test event B", 
        start_date: new Date(2017,6,19),
        end_date:   new Date(2017,6,24)
    });
    db.event.insert({ 
        text:"Morning event", 
        start_date: new Date(2017,6,4),
        end_date:   new Date(2017,6,4)
    });
    db.event.insert({ 
        text:"One more test event", 
        start_date: new Date(2017,6,3),
        end_date:   new Date(2017,6,8),
        color: "#DD8616"
    });
    res.send("Test events were added to the database");
    console.log('events inserted?')
});

app.get('/data', function(req, res){
    db.event.find().toArray(function(err, data){
        //set id property for all records
        for (var i = 0; i < data.length; i++)
            // console.log('in for loop');
            data[i].id = data[i]._id;

        //output response
        res.send(data);
        console.log('data sent');
    });
});

app.post('/data', function(req, res){
    var data = req.body;
    var mode = data["!nativeeditor_status"];
    var sid = data.id;
    var tid = sid;

    delete data.id;
    delete data.gr_id;
    delete data["!nativeeditor_status"];


    function update_response(err, result){
        if (err)
            mode = "error";
        else if (mode == "inserted")
            tid = data._id;

        res.setHeader("Content-Type","text/xml");
        res.send("<data><action type='"+mode+"' sid='"+sid+"' tid='"+tid+"'/></data>");
    }

    if (mode == "updated")
        db.event.updateById( sid, data, update_response);
    else if (mode == "inserted")
        db.event.insert(data, update_response);
    else if (mode == "deleted")
        db.event.removeById( sid, update_response);
    else
        res.send("Not supported operation");
});

EDITOR="C\\PROGRA~1\\SUBLIM~1\\sublime-text.exe"

const port = process.env.port || 3000;
app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});
// console.log('listening on port 3000');