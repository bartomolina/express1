var app = require('express').Router();
// var db = require('../db.js');

module.exports = app;

app.get('/', function(req, res, next){
    // res.render('index', { count: db.GetModules().length })
    res.send("modules");
});