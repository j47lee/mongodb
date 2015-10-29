// //UPDATES (in place, replace) ONE OR IF DOES NOT EXIST WILL CREATE DOCUMENT
// var MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
//   //query documents
//   var query = { 'student':'Frank', 'assignment':'hw1'};
//   //unset date returned to empty
//   var updatedDoc = { 'student':'Frank', 'assignment':'hw1', 'grade': 100 }
//   //applying to multiple documents
//   var options = { 'upsert' : true }
//
//     db.collection('grade').update(query, updatedDoc, options, function(err,updated){
//       if (err) throw err;
//       console.dir('Updated ' + updated + ' document.')
//       return db.close()
//     })
//
// })

// //UPDATES (adds to, updates) ONE OR IF DOES NOT EXIST WILL CREATE DOCUMENT
// var MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/course', function(err,db){
//   //query documents
//   var query = { 'student':'Frank', 'assignment':'hw1'};
//   //unset date returned to empty
//   var operator = { $set: { 'grade':100, 'date_returned': new Date() } }
//   //applying to multiple documents
//   var options = { 'upsert' : true }
//
//     db.collection('grade').update(query, operator, options, function(err,updated){
//       if (err) throw err;
//       console.dir('Updated ' + updated + ' document.')
//       return db.close()
//     })
//
// })


//SAVE ONE OR IF DOES NOT EXIST WILL CREATE DOCUMENT
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/course', function(err,db){

  var query = { 'assignment' : 'hw2' }

  db.collection('grade').findOne(query, function(err,doc){
    if (err) throw err;

    doc['date_returned'] = new Date()

    db.collection('grade').save(doc, function(err,saved){
      if (err) throw err;
      console.dir('Updated ' + saved + ' document.')
      return db.close()
    })

  })

})
