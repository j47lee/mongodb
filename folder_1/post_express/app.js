var express = require('express');
var app = express();
var cons = require('consolidate');
var bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//middleware
app.use(bodyParser);

app.get('/', function(req,res){
  res.render('fruitPicker', {'fruits':[ 'apple', 'orange', 'banana', 'peach' ]})
});

app.listen(8080);
console.log('Listening to PORT 8080');
