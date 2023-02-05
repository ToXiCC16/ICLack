const mongoose = require("mongoose");
const { ObjectID, ObjectId } = require("bson");
const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");

// init app and middleware
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
    db = getDb();
  } else {
    console.log(err);
  }
});

// Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017", { useNewUrlParser: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(port, () => console.log(`Server running on port ${port}`));
//   })
//   .catch((err) => console.error("Could not connect to MongoDB", err));

// CREATE
app.post("/users", (req, res) => {
  const user = req.body;
  db.collection("users")
    .insertOne(user)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "could not create new doc" });
    });
});

// READ
app.get("/users", (req, res) => {
  let users = [];
  db.collection("books")
    .find()
    .forEach((user) => users.push(user))
    .then(() => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

// UPDATE
app.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => res.json("User updated successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE
app.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});
