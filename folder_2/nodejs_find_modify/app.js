var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){

  var query = { 'name' : 'comments' };
  var sort = [];
  var operator = { '$inc' : { 'counter' : 1 } }
  var options = { 'new' : true };

  db.collection('counters').findAndModify(query, sort, operator, options, function(err,doc){
    if (err) throw err;
    if (!doc){
      console.log('No document found');
    } else {
      console.log('Number of comments: ' + doc )
    }

    return db.close()

  })

})
