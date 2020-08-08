const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

var getAllProductAndSellerInfo = (callback) => {
  mongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if (err) {
      throw err;
    } else {
      //try to access the db and get some data
      var db = client.db('reburke');
      db.collection('reburke').find({}).toArray((err, result) => {
        if (err) {
          throw err;
        } else {
          callback(err, result[0]);
          client.close();
        }
      })
    }
  });
};

var database = {
  getAllProductAndSellerInfo: getAllProductAndSellerInfo
};

module.exports = database;