// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
const obj = new ObjectID();
console.log(obj.getTimestamp());
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    const db = client.db("TodoApp");
    if (err) {
      return console.log("Un able to connect to the servers");
    }
    console.log("connected to the server");
    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5c09a4f5a6b93b072f84c81a") },
        {
          $set: {
            name: "Farax Abdi"
          },
          $inc: {
            age: +6
          }
        },
        { returnOriginal: false }
      )
      .then(res => {
        console.log(res);
      });

    // client.close();
  }
);
