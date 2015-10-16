var express = require('express');
var app = express();
var cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')

app.get('/', function(req,res){
  res.send('This is the Root Route')
});

app.get('/:name', function(req,res){
  var name = req.params.name;
  var getvar1 = req.query.getvar1;
  var getvar2 = req.query.getvar2;
  res.render('hello', {name: name, var1: getvar1, var2: getvar2})
});

app.listen(8080);
console.log('Listening to PORT 8080');
