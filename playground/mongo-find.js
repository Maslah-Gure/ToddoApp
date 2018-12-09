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

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5c09a2d51c69ed0718c0f537") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("cound not find the data requested", err);
    //     }
    //   );
    db.collection("Users")
      .find({ name: "Maslah Gure Abdikarim" })
      .count()
      .then(
        count => {
          console.log(`todos count: ${count}`);
        },
        err => {
          console.log("error happen", err);
        }
      );
    // client.close();
  }
);

//collection mean like the json string of users []
//docment will be the indiviual data{}
//file's name: or properties

//db.collection creates new collection
//inserOne add new document
//MongoClient.connect has first areguemt as mongodb://localhost:27017/TodoApp
//Todo app is that data base name
//ops is for the commands (insertOne )that were called
