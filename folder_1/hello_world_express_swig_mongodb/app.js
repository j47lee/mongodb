var express = require('express');
var app = express();
var cons = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

//using swig as templating engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var mongoclient = new MongoClient(new Server("localhost", 27017));
var db = mongoclient.db('test');

//basic express routes
app.get('/', function(req,res){
  db.collection('coll').findOne({},function(err,doc){
    if (err) throw err;
    res.render('hello', doc)
  })
});

app.get('*', function(req,res,status){
  res.send('Page not found.');
});

//open mongodb connection before listening to server
mongoclient.open(function(err,mongoclient){
  app.listen(8080);
  console.log('Listening to PORT:8080');
});
