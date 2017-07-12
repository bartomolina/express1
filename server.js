var express = require('express');
var swig = require('swig');
var path = require('path');
// var db = require('./db.js');
swig.setDefaults({cache: false});

var app = express();
// app.use

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(function(req, res, next){
    console.log(req.url);
    next();
});

app.use('/modules', require('./routes/modules'));

app.get('/', function(req, res, next){
    // res.render('index', { count: db.GetModules().length })
    res.send("hello");
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`listening on port ${ port }`);
});