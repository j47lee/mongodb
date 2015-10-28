var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
  if (err) throw err;

  //requires student to be Joe, grade is a range)
  var query = { student:'Joe', grade:{ $gt:80, $lt:95 } }
  var cursor = db.collection('grade').find( query )
  cursor.each(function(err,doc){
    if (err) throw err;
    if (doc === null) {
      return db.close()
    }
    console.log(doc);
  })

})
