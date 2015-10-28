var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){

  // var doc = { 'name' : 'Jonathan' , 'age' : 30 };
  // var doc = { '_id' : 'Jonathan', 'age' : 30 };
  var docs = [
    { 'name' : 'Jonathan' , 'age' : 30 },
    { 'name' : 'Melissa' , 'age' : 35 }
  ]

  db.collection('students').insert(docs, function(err,inserted){
    if (err) throw err;
    console.dir('Successfully inserted ' + JSON.stringify(inserted))
    return db.close()
  })

})
