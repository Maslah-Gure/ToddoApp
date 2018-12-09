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
    // db.collection("Users")
    //   .deleteMany({ name: "Abdi" })
    //   .then(results => {
    //     console.log(results.result.n);
    //   });
    db.collection("Users")
      .deleteOne({ _id: new ObjectID("5c0d95762e0086b3d815eed5") })
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
