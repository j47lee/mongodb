var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('<h1 style="color:blue">You got this response by going to the root route.</h1>')
});

app.get('*', function(req,res){
  res.send('<h1 style="color:red">There is no content for this route. Go to root route.</h1>')
});

app.listen(8080);
console.log('Listening to PORT:8080');
