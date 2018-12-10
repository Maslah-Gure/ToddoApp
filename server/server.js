const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.Port || 5000;
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

//Midle
app.use(bodyParser.json());
//routes
app.post("/todos", (req, res) => {
  let newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Listing on ${port}`);
});
