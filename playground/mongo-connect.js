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
    // db.collection("Todos").insertOne(
    //   {
    //     text: "talk to elit",
    //     completed: false
    //   },
    //   (error, res) => {
    //     if (err) return console.log("add data ", error);
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //   }
    // );
    // db.collection("Users").insertOne(
    //   {
    //     name: "Maslah Gure Abdikarim",
    //     age: 24,
    //     location: "kuala lumpur"
    //   },
    //   (error, res) => {
    //     if (error) return console.log("Couldnt create Data", error);
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //   }
    // );
    client.close();
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
