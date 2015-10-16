var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var cons = require('consolidate');


//mongodb connection ================================
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,db){
  if (err) throw err;
  db.collection('coll').findOne({}, function(err,doc){
    if (err) throw err;
    console.dir(doc);
    db.close();
  });
});

//express app basic routing ================================
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.get('/', function(req,res){
  // res.send('You visited the root route')
  res.render('hello', { 'name' : 'Jonathan'})
});

//catch all route
app.get('*', function(req,res){
  res.send('This page does not exist.')
});

app.listen(8080);
console.log('Listening to PORT 8080');
