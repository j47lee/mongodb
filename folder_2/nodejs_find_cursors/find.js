var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){

  if (err) throw err;
  var query = { 'grade' : 100 }

  // //one way to do it
  // db.collection('grade').find(query).toArray(function(err,docs){
  //   if (err) throw err;
  //   console.dir(docs)
  //   db.close()
  // })

  //second way to do it
  //create cursor (synchronous, doesn't take a callback)
  var cursor = db.collection('grade').find(query)
  cursor.each(function(err,doc){
    if (err) throw err;
    if (doc === null){
      return db.close();
    }
    console.dir(doc.student + ' got a good grade of ' + doc.grade + ' on assignment ' + doc.assignment);
  })

})
