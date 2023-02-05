const { MongoClient } = require("mongodb");

let dbConnection;
let uri = "mongodb://localhost:27017/ICLack";

module.exports = {
  connectToDb: (callback) => {
    console.log("trying to connect");
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        console.log("connected");
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDb: () => dbConnection,
};
