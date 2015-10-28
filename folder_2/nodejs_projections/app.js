var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
  if (err) throw err;

  var query = { 'grade' : 100 }
  //return student value, do not return _id value)
  var projection = { 'student' : 1, '_id' : 0 }
  var cursor = db.collection('grade').find(query, projection)

  cursor.toArray(function(err,docs){
    if (err) throw err;

    docs.forEach(function(doc){
        console.log(doc);
        console.log(doc.student + ' got a good grade.');
    })

    db.close()

  })

})
