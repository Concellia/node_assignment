var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/UmuziProspects";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("UmuziProspects");
  dbo.createCollection("visitors", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
class Visitor{
    constructor(fullname,age,date,time,comment,helper){
        this.fullname = fullname;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comment = comment;
        this.helper = helper;
    }      
}

function addNewVisitor(visitor){
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").insertOne(visitor, function(err, res) {
        if (err) throw err;
        console.log("one visitor has just been added to the database");
        db.close();
      });
    });
  return `${visitor.fullname} has been added to the database`
}

function listVisitor(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("UmuziProspects");
        dbo.collection("visitors").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
      return "List of all the visitors"
}
function deleteVisitor(name){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("UmuziProspects");
        var visitor = { fullname: name};
        dbo.collection("visitors").deleteOne(visitor, function(err, obj) {
          if (err) throw err;
          console.log(`${name} has been removed on the database`);
          db.close();
        });
      });
}
function deleteAll(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("UmuziProspects");
        dbo.collection("visitors").deleteMany({});
      });
}

class Updates{
  updateName(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({fullname: querry}, {$set:{fullname:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
  updateAge(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({age: querry}, {$set:{age:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
  updateDate(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({date: querry}, {$set:{date:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
  updateTime(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({time: querry}, {$set:{time:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
  updateComment(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({comment: querry}, {$set:{comment:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
  updateHelper(querry,newValue){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("UmuziProspects");
      dbo.collection("visitors").updateOne({helper: querry}, {$set:{helper:newValue}}, function(err, res) {
        if (err) throw err;
        console.log(` information has been updated`);
        db.close();
      });
    });
    return `${querry} has been updated to ${newValue}`
  }
}


