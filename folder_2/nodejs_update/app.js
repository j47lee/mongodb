// //REPLACE -- THIS METHOD REPLACES EXISTING DOCUMENT WITH A NEW DOCUMENT
// var MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
//
//   var query = { 'assignment' : 'hw1' }
//
//   db.collection('grade').findOne(query, function(err,doc){
//     if (err) throw err;
//     if (!doc === null){
//       console.dir('No documents found')
//       return db.close()
//     }
//
//     query['_id'] = doc['_id'];
//     doc['date_returned'] = new Date();
//
//     db.collection('grade').update(query, doc, function(err,updated){
//       if (err) throw err;
//       console.dir('Updated ' + updated + ' document.')
//       return db.close()
//     })
//   })
// })

// //IN-PLACE -- THIS METHOD UPDATES AN EXISTING DOCUMENT WITHOUT REPLACING THE ENTIRE DOCUMENT
// var MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
//
//   var query = { 'assignment' : 'hw1' };
//   var operator = { '$set' : { 'date_returned' : new Date() }}
//
//     db.collection('grade').update(query, operator, function(err,updated){
//       if (err) throw err;
//       console.dir('Updated ' + updated + ' document.')
//       return db.close()
//     })
//
// })

//MULTI-UPDATES
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
  //query documents
  var query = { };
  //unset date returned to empty
  var operator = { '$unset' : { 'date_returned' : '' }}
  //applying to multiple documents
  var options = { 'multi' : true }

    db.collection('grade').update(query, operator, options, function(err,updated){
      if (err) throw err;
      console.dir('Updated ' + updated + ' document.')
      return db.close()
    })

})
